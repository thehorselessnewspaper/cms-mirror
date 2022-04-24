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
        public KeycloakSecurityPrincipalResolver(
            IHttpContextAccessor httpContextAccessor,
            IKeycloakAuthOptions keycloakOptions,
            IQueryableContentModelOperator<Tenant> tenantOperator,
               IQueryableContentModelOperator<Principal> principalOperator,
               HttpClient httpClient, 
               ILogger<KeycloakSecurityPrincipalResolver> logger)
        {
            this._httpContextAccessor = httpContextAccessor;
            this._tenantOperator = tenantOperator;
            this._principalOperator = principalOperator;
            this._keycloakAuthOptions = keycloakOptions;
            this._httpClient = httpClient;
            this._logger = logger;
        }

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
                    RequestUri =_keycloakAuthOptions.TokenEndpoint
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

        public async Task<Principal> GetCurrentPrincipal()
        {
            var principal = new Principal();
            try
            {

                if (_httpContextAccessor.HttpContext != null)
                {
                    var user = _httpContextAccessor.HttpContext.User;

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

            }
            catch (Exception e)
            {

                this._logger.LogError($"problem resolving current principal{e.Message}");
            }

            return principal;
        }
    }
}
