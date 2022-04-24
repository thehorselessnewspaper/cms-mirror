using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using HorselessNewspaper.Web.Core.Extensions.ClaimExtensions;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using HorselessNewspaper.Web.Core.Interfaces.Security.Resolver;
using HorselessNewspaper.Web.Core.Auth.Keycloak.Model;
using Microsoft.Extensions.Logging;
using System.Text.Json;
using HorselessNewspaper.Web.Core.Model.Security;
using Finbuckle.MultiTenant;
using TheHorselessNewspaper.HostingModel.MultiTenant;

namespace HorselessNewspaper.Web.Core.Auth.Keycloak.Services.SecurityPrincipalResolver
{
    /// <summary>
    /// render a Principal entity
    /// from available claims
    /// </summary>
    public class KeycloakSecurityPrincipalResolver : ISecurityPrincipalResolver
    {
        IHttpContextAccessor _httpContextAccessor;
        private IQueryableContentModelOperator<Tenant> _tenantOperator;
        private IQueryableContentModelOperator<Principal> _principalOperator;
        private IKeycloakAuthOptions _keycloakAuthOptions;
        private HttpClient _httpClient;
        ILogger<KeycloakSecurityPrincipalResolver> _logger;
        private ITenantInfo _iTenantInfo;

        public KeycloakSecurityPrincipalResolver(
            IHttpContextAccessor httpContextAccessor,
            IKeycloakAuthOptions keycloakOptions,
            IQueryableContentModelOperator<Tenant> tenantOperator,
               IQueryableContentModelOperator<Principal> principalOperator,
               HttpClient httpClient,
               ILogger<KeycloakSecurityPrincipalResolver> logger,
               ITenantInfo tenantInfo)
        {
            this._httpContextAccessor = httpContextAccessor;
            this._tenantOperator = tenantOperator;
            this._principalOperator = principalOperator;
            this._keycloakAuthOptions = keycloakOptions;
            this._httpClient = httpClient;
            this._logger = logger;
            this._iTenantInfo = tenantInfo;
        }

        /// <summary>
        /// as per https://dzone.com/articles/get-access-token-from-keycloak-using-postman
        /// </summary>
        /// <returns></returns>
        public async Task<string> GetClientCredentialsGrantToken()
        {
            var ret = string.Empty;
            try
            {

                var formParams = new Dictionary<string, string>();
                //formParams.Add("application/x-www-form-urlencoded",
                //     $"grant_type=client_credentials&client_id={_keycloakAuthOptions.Client_Id}&client_secret={_keycloakAuthOptions.Client_Secret}&audience={_keycloakAuthOptions.Client_Id}"
                //    );
                formParams.Add("grant_type", "client_credentials");
                formParams.Add("client_id", _keycloakAuthOptions.Client_Id);
                formParams.Add("client_secret", _keycloakAuthOptions.Client_Secret);
                var msg = new HttpRequestMessage()
                {
                    Method = HttpMethod.Post,
                    Content = new FormUrlEncodedContent(formParams),
                    RequestUri = _keycloakAuthOptions.TokenEndpoint
                };


                // msg.Content.Headers.Add("content-type", "application/x-www-form-urlencoded");
                msg.Content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("application/x-www-form-urlencoded");
                // var tokenResult = await this._httpClient.PostAsync(this._keycloakAuthOptions.TokenEndpoint, new FormUrlEncodedContent(formParams));

                var tokenResult = await this._httpClient.SendAsync(msg);
                var token = await tokenResult.Content.ReadAsStringAsync();
                var instance = JsonSerializer.Deserialize<ClientCredentialsGrantResult>(token);

                ret = instance.AccessToken;
            }
            catch (Exception e)
            {
                this._logger.LogError($"problem getting client credentials {e.Message}");
            }
            return ret;
        }

        public async Task<Tenant> EnsureTenant()
        {
            var tenant = new Tenant();

            var tenantQuery = await _tenantOperator.ReadAsEnumerable(w =>
                    w.TenantIdentifier.Equals(_iTenantInfo.Identifier));
            var tenantQueryResult = tenantQuery == null ? null : tenantQuery.ToList().FirstOrDefault();

            if (tenantQueryResult != null)
            {

                _logger.LogInformation($"{this._iTenantInfo.Identifier} exists in db");
            }
            else
            {
                try
                {
                    // must create new tenant for this tenantidentifier
                    // very likely a phantom tenant
                    Guid newId = Guid.NewGuid();
                    var idIsGuid = Guid.TryParse(this._iTenantInfo.Id, out newId);

                    if (idIsGuid)
                    {
                        tenant.Id = newId;
                    }

                    else
                    {
                        tenant.Id = Guid.NewGuid();
                    }

                    HorselessTenantInfo tenantInfo = this._iTenantInfo as HorselessTenantInfo;
                    tenant.ObjectId = tenantInfo.Payload.ObjectId;
                    tenant.DisplayName = this._iTenantInfo.Name;
                    tenant.BaseUrl = tenantInfo.Payload.TenantBaseUrl;
                    tenant.Timestamp = tenantInfo.Payload.Timestamp;
                    tenant.TenantIdentifierStrategy = new TenantIdentifierStrategy()
                    {
                        Id = Guid.NewGuid(),
                        ObjectId = Guid.NewGuid().ToString(),
                        DisplayName = tenant.DisplayName,
                        CreatedAt = DateTime.UtcNow,
                        IsSoftDeleted = false,
                        StrategyContainers = new List<TenantIdentifierStrategyContainer>()
                        {
                            new TenantIdentifierStrategyContainer()
                            {
                                Id = Guid.NewGuid(),
                                ObjectId = Guid.NewGuid().ToString(),
                                DisplayName = this._iTenantInfo.Name,
                                CreatedAt = DateTime.UtcNow,
                                IsSoftDeleted = false,
                                TenantIdentifier = this._iTenantInfo.Identifier,
                                TenantIdentifierStrategyName = new TenantIdentifierStrategyName()
                                {
                                    
                                }
                            }
                        }
                    };

                    var tenantInsertResult = await this._tenantOperator.Create(tenant);
                    if (tenantInsertResult != null)
                    {
                        tenant = tenantInsertResult;
                    }
                }
                catch (Exception e)
                {
                    _logger.LogWarning($"problem ensuring tenant");
                    throw;
                }
            }

            return tenant;
        }

        public async Task<Principal> SetCurrentPrincipal()
        {

            var httpCtx = _httpContextAccessor.HttpContext;
            var sessionId = _httpContextAccessor.HttpContext.Session.IsAvailable ? _httpContextAccessor.HttpContext.Session.Id : "";

            if (httpCtx != null &&
                httpCtx.User.Identities.Any() &&
                        httpCtx.User.Identities.Where(w => w.IsAuthenticated).Any())
            {
                // the authenticated scenario
                var user = _httpContextAccessor.HttpContext.User;

                var query = await _principalOperator
                                .ReadAsEnumerable(w =>
                                    w.Iss.Equals(user.Claims.Iss()) &&
                                    w.Aud.Equals(user.Claims.Aud()) &&
                                    w.UPN.Equals(user.Claims.Upn()));
                var result = query.FirstOrDefault();

                if (result != null)
                {
                    _logger.LogInformation($"retrieved existing principal from db {result.PreferredUserName}");
                    return result;
                }
                else
                {
                    _logger.LogInformation($"inserting new principal {user.Claims.PreferredUsername()}");
                    var ensuredPrincipal = await EnsureAuthenticatedPrincipal(sessionId, user);
                    return ensuredPrincipal;
                }
            }
            else if (httpCtx != null &&
                    httpCtx.User.Identities.Any() &&
                    httpCtx.User.Identities.Where(w => w.IsAuthenticated == false).Any())
            {
                // the anonymous scenario
            }
            else if (httpCtx == null)
            {
                // the httpcontext absent scenario
                _logger.LogWarning($"{this.GetType().Name} is running with null http context");
            }

            return null;
        }

        private async Task<Principal> EnsureAuthenticatedPrincipal(string sessionId, System.Security.Claims.ClaimsPrincipal user)
        {
            var principal = new Principal();
            try
            {
                //init new principal db row
                principal.Id = Guid.NewGuid();
                principal.ObjectId = Guid.NewGuid().ToString();
                principal.DisplayName = user.Claims.PreferredUsername();
                principal.Aud = user.Claims.Aud();
                principal.UPN = user.Claims.Upn();
                principal.Iss = user.Claims.Iss();
                principal.Email = user.Claims.Email();
                principal.PreferredUserName = user.Claims.PreferredUsername();

                var tenantQuery = await _tenantOperator.ReadAsEnumerable(w =>
                            w.TenantIdentifier.Equals(this._iTenantInfo.Identifier));
                var tenantQueryResult = tenantQuery.FirstOrDefault();
                if (tenantQueryResult != null)
                {
                    // populate a session object for the principal
                    principal.HorselessSessions.Add(new HorselessSession()
                    {
                        Id = Guid.NewGuid(),
                        ObjectId = Guid.NewGuid().ToString(),
                        Aud = user.Claims.Aud(),
                        CreatedAt = DateTime.UtcNow,
                        DisplayName = user.Claims.PreferredUsername(),
                        IsAnonymous = false,
                        Iss = user.Claims.Iss(),
                        IsSoftDeleted = false,
                        SessionId = sessionId,
                        Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks)

                    });
                    // add the new principal to this tenant
                    tenantQueryResult.Accounts.Add(principal);
                    var insertResult = await this._tenantOperator.Update(tenantQueryResult,
                        new List<string>() { nameof(Tenant.Accounts) });

                    _logger.LogInformation("initialized new authenticated session");

                }
            }
            catch (Exception e)
            {
                _logger.LogError($"problem initializing current tenant principal");
                throw;
            }

            return principal;
        }

        public async Task<Principal> GetCurrentPrincipal()
        {
            var principal = new Principal();

            try
            {

                if (_httpContextAccessor.HttpContext != null)
                {
                    var user = _httpContextAccessor.HttpContext.User;
                    var sessionId = _httpContextAccessor.HttpContext.Session.IsAvailable ? _httpContextAccessor.HttpContext.Session.Id : "";

                    if (user.Identities.Any() &&
                        user.Identities.Where(w => w.IsAuthenticated).Any())
                    {
                        principal.Aud = user.Claims.Aud();
                        principal.UPN = user.Claims.Upn();
                        principal.Iss = user.Claims.Iss();
                        principal.Email = user.Claims.Email();
                        principal.PreferredUserName = user.Claims.PreferredUsername();

                        var query = await _principalOperator
                                        .ReadAsEnumerable(w =>
                                            w.Iss.Equals(principal.Iss) &&
                                            w.Aud.Equals(principal.Aud) &&
                                            w.UPN.Equals(principal.UPN));
                        var result = query.FirstOrDefault();

                        if (result != null)
                        {
                            principal.ObjectId = result.ObjectId;
                            principal.Id = result.Id;
                        }
                        else
                        {

                        }
                    }
                }
                else
                {
                    _logger.LogWarning("KycloakSecurityPrincipalResolver ran with null httpcontext");
                }
            }
            catch (Exception e)
            {
                // TODO create an error-state principal
                this._logger.LogError($"problem resolving current principal{e.Message}");
            }

            return principal;
        }
    }
}
