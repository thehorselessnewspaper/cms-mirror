using AutoMapper;
using Finbuckle.MultiTenant;
using Finbuckle.MultiTenant.Stores;
using HorselessNewspaper.Core.Interfaces.Model.HttpContextFeatureModels;
using HorselessNewspaper.Core.Interfaces.Security.Resolver;
using HorselessNewspaper.Web.Core.Auth.Keycloak.Model;
using HorselessNewspaper.Web.Core.Services.Model.Extensions.Claim;
using HorselessNewspaper.Web.Core.Services.Model.Extensions.HttpRequestExtensions;
using HorselessNewspaper.Web.Core.Services.Model.HttpContextFeatures;
using HorselessNewspaper.Web.Core.Services.Model.REST.Security;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Logging;
using StackExchange.Redis;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using TheHorselessNewspaper.HostingModel.MultiTenant;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using HostingModel = TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
namespace HorselessNewspaper.Web.Core.Auth.Keycloak.Services.SecurityPrincipalResolver
{
    /// <summary>
    /// render a Principal entity
    /// from available claims
    /// </summary>
    public class KeycloakSecurityPrincipalResolver : ISecurityPrincipalResolver
    {
        /// <summary>
        /// TODO - clear this on a timer
        /// warning - this used to be static
        /// instead these should be dematerializd
        /// so the scopes that retrieved them can be disposed
        /// </summary>
        private ConcurrentDictionary<string, HorselessSession> LocallyCachedSessions { get; set; } = new ConcurrentDictionary<string, HorselessSession>();
        IEnumerable<IMultiTenantStore<HorselessTenantInfo>> tenantStores;
        IHttpContextAccessor _httpContextAccessor;
        private IQueryableContentModelOperator<Tenant> _tenantOperator;
        private IQueryableContentModelOperator<Principal> _principalOperator;
        private IQueryableContentModelOperator<HorselessSession> _horselessSessionOperator;
        private IKeycloakAuthOptions _keycloakAuthOptions;
        private HttpClient _httpClient;

        IDistributedCache redisDb;

        ILogger<KeycloakSecurityPrincipalResolver> _logger;
        private ITenantInfo _iTenantInfo;
        IMapper mapper;

        public KeycloakSecurityPrincipalResolver(
            IEnumerable<IMultiTenantStore<HorselessTenantInfo>> stores,
            IHttpContextAccessor httpContextAccessor,
            IKeycloakAuthOptions keycloakOptions,
            IQueryableContentModelOperator<Tenant> tenantOperator,
               IQueryableContentModelOperator<Principal> principalOperator,
               IQueryableContentModelOperator<HorselessSession> horselessSessionOperator,
               HttpClient httpClient,
               ILogger<KeycloakSecurityPrincipalResolver> logger,
               IDistributedCache redisDb,
               IMapper mapper,
               ITenantInfo tenantInfo)
        {
            this.tenantStores = stores;
            this._httpContextAccessor = httpContextAccessor;
            this._tenantOperator = tenantOperator;
            this._principalOperator = principalOperator;
            this._keycloakAuthOptions = keycloakOptions;
            this._httpClient = httpClient;
            this._logger = logger;
            this._iTenantInfo = tenantInfo;
            this._horselessSessionOperator = horselessSessionOperator;
            this.mapper = mapper;
            this.redisDb = redisDb;

        }

        /// <summary>
        /// convenience method for obtaining a keycloak 
        /// issued access token
        /// 
        /// TODO remove this from the public api
        /// in favor of protected internal to discourage its use
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

        /// <summary>
        /// tenant resolution is functional
        /// when the tenant can be retrieved from the cache
        /// </summary>
        /// <returns></returns>
        public async Task<bool> EnsureCanResoleCurrentTenant()
        {
            try
            {
                var distributedCacheStore = tenantStores
                                    .Where(s => s.GetType() == typeof(DistributedCacheStore<HorselessTenantInfo>))
                                    .SingleOrDefault();


                if (_iTenantInfo == null || _iTenantInfo.Identifier == null)
                {
                    _logger.LogError($"error error error - tenant resolutoin failed due to null injected ITenantInfo");
                    return false;
                }
                else
                {
                    var tenant = await distributedCacheStore.TryGetByIdentifierAsync($"{_iTenantInfo.Identifier}");
                    if (tenant != null && tenant.Identifier.Equals(_iTenantInfo.Identifier))
                    {
                        // resolved tenant from cache
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }

                //// didn't find tenant in cache, check db
                //var tenantQuery = await _tenantOperator.Read(w =>
                //w.TenantIdentifier.Equals(_iTenantInfo.Identifier));

                //var tenantQueryResult = tenantQuery == null ? null : tenantQuery.ToList();

                //if (tenantQueryResult != null && tenantQueryResult.Count() > 0 && this._iTenantInfo != null)
                //{
                //    _logger.LogInformation($"current tenant {this._iTenantInfo.Identifier} exists in db");

                //    return true;
                //}
                //else
                //{
                //    _logger.LogWarning("could not find a current tenant in tne db");
                //    return false;
                //}
            }
            catch (Exception e)
            {
                _logger.LogError($"tenant resolution fails due to {e.Message}");
                return false;
            }
        }

        /// <summary>
        /// get the tenant from the cache
        /// or return null
        /// </summary>
        /// <returns></returns>
        /// <exception cref="Exception"></exception>
        public async Task<Tenant> EnsureTenant()
        {
            var distributedCacheStore = tenantStores
                      .Where(s => s.GetType() == typeof(DistributedCacheStore<HorselessTenantInfo>))
                      .SingleOrDefault();
            var tenant = await distributedCacheStore.TryGetByIdentifierAsync($"{_iTenantInfo.Identifier}");

            if (tenant != null && tenant.Identifier.Equals(_iTenantInfo.Identifier))
            {
                // resolved tenant from cache
                var mappedTenant = mapper.Map<HostingModel.Tenant, ContentModel.Tenant>(tenant.Payload.ParentTenant);
                return mappedTenant;
            }
            else
            {
                return null;
            }

        }



        public async Task<Principal> GetCurrentPrincipal()
        {
            var principal = new Principal();
            var serializerOptions = new JsonSerializerOptions
            {
                IgnoreReadOnlyProperties = true,
                ReferenceHandler = ReferenceHandler.Preserve,
                WriteIndented = true,
                Converters ={
                        new JsonStringEnumConverter()
                    }

            };

            try
            {

                if (_httpContextAccessor.HttpContext != null)
                {


                    var user = _httpContextAccessor.HttpContext.User;
                    var sessionId = _httpContextAccessor.HttpContext.Session.IsAvailable ? _httpContextAccessor.HttpContext.Session.Id : "";

                    if (user.Claims.Count() > 0)
                    {
                        _logger.LogInformation($"handling authenticated request for sessionId={sessionId}");
                        /// the authenticated scenario
                        principal.Aud = user.Claims.Aud();
                        principal.UPN = user.Claims.Upn();
                        principal.Iss = user.Claims.Iss();
                        principal.Email = user.Claims.Email();
                        principal.PreferredUserName = user.Claims.PreferredUsername();

                        try
                        {
                            // try the cache

                            var redisQueryResult = await this.redisDb.GetStringAsync(principal.PreferredUserName);
                            var cachedPrincipal = JsonSerializer.Deserialize<Principal>(redisQueryResult) as Principal;
                            if (cachedPrincipal != null
                                && cachedPrincipal.PreferredUserName != null
                                && cachedPrincipal.PreferredUserName.Equals(principal.PreferredUserName))
                            {
                                _logger.LogTrace($"current principal is cached");
                                return cachedPrincipal;
                            }

                        }
                        catch (Exception e)
                        {
                            // tolerate this 
                            _logger.LogError($"current principal is uncached");
                        }

                        var allTenants = await _tenantOperator
                            .ReadAsEnumerable(w => w.IsSoftDeleted != true,
                                new List<string> { nameof(Tenant.Accounts), nameof(Tenant.Owners), nameof(Tenant.AccessControlEntries) });

                        var allTenantsList = new List<Tenant>();

                        if (allTenants != null)
                        {
                            allTenantsList.AddRange(allTenants.ToList());
                        }

                        var isAnOwner = allTenantsList.Where(w => w.Owners
                                                            .Where(w => w.UPN.Equals(user.Claims.Upn()))
                                                            .Any()).Any();
                        var isAnAccount = allTenantsList.Where(w => w.Accounts
                            .Where(w => w.UPN.Equals(user.Claims.Upn())).Any()).Any();

                        var principalQuery = await this._principalOperator.ReadAsEnumerable(r => r.IsAnonymous == false && r.UPN == user.Claims.Upn(),
                            new List<string>() { nameof(Principal.AccessControlEntries) });
                        var principalCollection = principalQuery.ToList();
                        var principalQueryResult = principalQuery == null || principalCollection.Count() == 0 ? null : principalQuery.ToList().First();
                        if (principalQueryResult != null)
                        {
                            _logger.LogInformation($"found authenticated user in database with upn={user.Claims.Upn()}");

                            // cache the principal
                            var principalJson = JsonSerializer.Serialize(principalQueryResult, serializerOptions);
                            await this.redisDb.SetStringAsync(principal.PreferredUserName, principalJson);

                            return principalQueryResult;
                        }
                        if (isAnAccount)
                        {
                            // the authenticated scenario has already recorded this principal
                            _logger.LogInformation($"found authenticated user in database with upn={user.Claims.Upn()}");
                            var homeTenant = allTenantsList.Where(w => w.Accounts
                            .Where(w => w.UPN.Equals(user.Claims.Upn())).Any()).FirstOrDefault();
                            var resolvedPrincipal = homeTenant.Accounts.Where(w => w.UPN.Equals(user.Claims.Upn())).FirstOrDefault();

                            var principalJson = JsonSerializer.Serialize(principalQueryResult, serializerOptions);
                            await this.redisDb.SetStringAsync(principal.PreferredUserName, principalJson);
                            return resolvedPrincipal;
                        }
                        else if (isAnOwner)
                        {
                            // the authenticated scenario has already recorded this principal
                            _logger.LogInformation($"found authenticated user in database with upn={user.Claims.Upn()}");
                            var homeTenant = allTenantsList.Where(w => w.Accounts
                            .Where(w => w.UPN.Equals(user.Claims.Upn())).Any()).FirstOrDefault();
                            var resolvedPrincipal = homeTenant.Owners.Where(w => w.UPN.Equals(user.Claims.Upn())).FirstOrDefault();


                            var principalJson = JsonSerializer.Serialize(resolvedPrincipal, serializerOptions);
                            await this.redisDb.SetStringAsync(principal.PreferredUserName, principalJson);
                            return resolvedPrincipal;
                        }
                        else
                        {
                            // the authenticated scenario must record this principal
                            _logger.LogWarning($"did not find authenticated user in database with upn={user.Claims.Upn()}");
                            principal.Id = Guid.NewGuid();
                            principal.DisplayName = user.Claims.PreferredUsername();
                            principal.CreatedAt = DateTime.UtcNow;
                            principal.IsAnonymous = false;
                            principal.IsSoftDeleted = false;
                            principal.ObjectId = Guid.NewGuid().ToString();

                            principal.PrincipalClaimContainer = new PrincipalClaimContainer()
                            {
                                Id = Guid.NewGuid(),
                                DisplayName = user.Claims.PreferredUsername()

                            };

                            foreach (var claim in user.Claims)
                            {
                                principal.PrincipalClaimContainer.PrincipalClaim.Add(
                                    new PrincipalClaim()
                                    {
                                        ClaimType = claim.Type,
                                        ClaimValue = claim.Value,
                                        ClaimIssuer = claim.Issuer,
                                        Id = Guid.NewGuid(),
                                        ClaimValueType = claim.ValueType
                                    });
                            }

                            principal.HorselessSessions.Add(new HorselessSession()
                            {
                                Id = Guid.NewGuid(),
                                DisplayName = user.Claims.PreferredUsername(),
                                Aud = user.Claims.Aud(),
                                CreatedAt = DateTime.UtcNow,
                                IsAnonymous = false,
                                Iss = user.Claims.Iss(),
                                ObjectId = Guid.NewGuid().ToString(),
                                SessionId = _httpContextAccessor.HttpContext.Session.Id,
                                IsSoftDeleted = false
                                // Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks)
                            }); ;

                            // resolve the tenant
                            var tenantQuery = await _tenantOperator.ReadAsEnumerable(w =>
                                w.TenantIdentifier.Equals(_iTenantInfo.Identifier));
                            var tenantQueryResult = tenantQuery == null ? null : tenantQuery.ToList().FirstOrDefault();

                            if (tenantQueryResult != null)
                            {
                                try
                                {
                                    tenantQueryResult.Accounts.Add(principal);
                                    var principalInsertResult = await this._principalOperator.Create(principal);


                                    if (principalInsertResult != null)
                                    {
                                        return principalInsertResult;
                                    }
                                }
                                catch (Exception e)
                                {
                                    _logger.LogError($"problem creating anonymous session: {e.Message}");
                                }

                            }

                            // cache the principal
                            var principalJson = JsonSerializer.Serialize(principal, serializerOptions);
                            await this.redisDb.SetStringAsync(principal.PreferredUserName, principalJson);
                        }
                    }
                    else if (user.Claims.Count() == 0)
                    {
                        // the anonymous scenario
                        _logger.LogInformation($"handling anonymous request");
                        // resolve the tenant
                        var tenantQuery = await _tenantOperator.ReadAsEnumerable(w =>
                            w.TenantIdentifier.Equals(_iTenantInfo.Identifier), new List<string> { nameof(Tenant.Owners), nameof(Tenant.Accounts) });
                        var tenantQueryResult = tenantQuery == null ? null : tenantQuery.ToList();

                        var allTenants = await _tenantOperator.ReadAsEnumerable(w => w.IsSoftDeleted != true, new List<string> { nameof(Tenant.Accounts), nameof(Tenant.Owners) });

                        var allTenantsList = allTenants.ToList();
                        var isAnOwner = allTenantsList.Where(w => w.Owners
                                        .Where(w => w.IsAnonymous == true).Any()).Any();
                        var isAnAccount = allTenantsList.Where(w => w.Accounts
                            .Where(w => w.IsAnonymous = true).Any()).Any();

                        var anonymousPrincipalQuery = await _principalOperator.ReadAsEnumerable(r => r.IsAnonymous == true);
                        var anonymousPrincipalQueryResult = anonymousPrincipalQuery == null ? null : anonymousPrincipalQuery.ToList().FirstOrDefault();
                        if (anonymousPrincipalQueryResult != null)
                        {

                            // cache the principal
                            var principalJson = JsonSerializer.Serialize(anonymousPrincipalQueryResult);
                            await this.redisDb.SetStringAsync(principal.PreferredUserName, principalJson);
                            return anonymousPrincipalQueryResult;
                        }
                        if (isAnAccount)
                        {
                            _logger.LogInformation("anonymous user is an account in current tenant");
                        }
                        else if (isAnOwner)
                        {
                            _logger.LogInformation("anonymous user is an owner in current tenant");
                        }
                        else if (tenantQueryResult != null && tenantQueryResult.Any())
                        {
                            var httpCtx = _httpContextAccessor.HttpContext;
                            // tenant exists

                            // search for tne anononymous principal 
                            var principalQuery = await _principalOperator.ReadAsEnumerable(w =>
                                        w.IsSoftDeleted == false && w.IsAnonymous == true, new List<string> { nameof(Tenant.Owners), nameof(Tenant.Accounts) });


                            var principalQueryResult = principalQuery == null
                                                                || principalQuery.Count() == 0
                                                                ? null :
                                                                principalQuery.ToList().First();

                            if (principalQueryResult != null)
                            {
                                _logger.LogInformation($"anonymous tenant principal exists");
                                var principalJson = JsonSerializer.Serialize(principalQueryResult, serializerOptions);
                                await this.redisDb.SetStringAsync(principal.PreferredUserName, principalJson);
                                return principalQueryResult;
                            }
                            else
                            {
                                // insert an anonymous principal and session
                                _logger.LogWarning($"anonymous tenant principal does not exist");
                                var newPrincipal = new Principal()
                                {
                                    IsAnonymous = true,
                                    Id = Guid.NewGuid(),
                                    ObjectId = _httpContextAccessor.HttpContext.Session.Id,
                                    DisplayName = "Anonymous User",
                                    IsSoftDeleted = false,
                                    PreferredUserName = "anonymous",
                                    UPN = "anonymous",
                                    // Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                                    CreatedAt = DateTime.UtcNow,
                                    HorselessSessions = new List<HorselessSession>()
                                       {
                                           new HorselessSession()
                                           {
                                                IsAnonymous = true,
                                                DisplayName = "Anonymous User",
                                                IsSoftDeleted = false,
                                                Id = Guid.NewGuid(),
                                                // Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                                                ObjectId = Guid.NewGuid().ToString(),
                                                CreatedAt = DateTime.UtcNow,
                                                SessionId = httpCtx.Session.Id
                                           }
                                       }
                                };

                                try
                                {
                                    var insertResult = await this._tenantOperator.InsertRelatedEntity<Principal>(tenantQueryResult.First().Id,
                                        nameof(Tenant.Accounts), new List<Principal>() { newPrincipal }, w => w.TenantIdentifier.Equals(tenantQueryResult.First().TenantIdentifier), u => u.PreferredUserName.Equals(newPrincipal.PreferredUserName));


                                    var newAccountQuery = insertResult.Where(w => w.IsAnonymous = true);
                                    if (newAccountQuery != null)
                                    {
                                        var principalJson = JsonSerializer.Serialize(newAccountQuery, serializerOptions);
                                        await this.redisDb.SetStringAsync(principal.PreferredUserName, principalJson);
                                        return newAccountQuery.FirstOrDefault();
                                    }
                                }
                                catch (Exception e)
                                {
                                    _logger.LogError($"problem creating anonymous session: {e.Message}");
                                }

                                _logger.LogWarning($"problem ensuring current principal");
                                return null;
                            }
                        }

                    }
                    else
                    {
                        // the catch all scenario
                        // probaby because the tenant resolution
                        // subsystem is leaky
                        _logger.LogWarning("unable to get current principal in current context ");
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

        public async Task<IHorselessHttpSessionFeature<HorselessSession>> GetCurrentSessionForPrincipal(Guid sessionPrincipalId)
        {


            var httpContext = this._httpContextAccessor.HttpContext;

            var principalQuery = await this._principalOperator.ReadAsEnumerable(w => w.Id == sessionPrincipalId);

       
            var allSessionsQuery = await this._horselessSessionOperator.ReadAsEnumerable(w => w.IsSoftDeleted == false && w.SessionId == httpContext.Session.Id);
            // var allSessions = allSessionsQuery.ToList();
            var hasSesion = allSessionsQuery == null ? false : allSessionsQuery.Any();

            var currentUpdateTime = httpContext.Session.GetString("UTC_UPDATED_TIME");

            HorselessSession cachedSession;

            var hasCachedSession = LocallyCachedSessions.TryGetValue(httpContext.Session.Id, out cachedSession);

            if (hasCachedSession)
            {
                _logger.LogWarning($"{this.GetType().FullName} has cached HorselessSession entity");
                IHorselessHttpSessionFeature<HorselessSession> ret = await GetSessionFeature(sessionPrincipalId);

                return ret;
            }

            else if (allSessionsQuery != null && allSessionsQuery.Any() == true)
            {
                IHorselessHttpSessionFeature<HorselessSession> ret = await GetSessionFeature(sessionPrincipalId);

                return ret;

            }

            else if (principalQuery != null && httpContext != null)
            {
                var principalQueryResult = principalQuery.First();

                var newSession = new HorselessSession()
                {
                    Id = Guid.NewGuid(),
                    DisplayName = principalQueryResult.DisplayName,
                    IsAnonymous = principalQueryResult.IsAnonymous,
                    Aud = principalQueryResult.Aud,
                    CreatedAt = DateTime.UtcNow,
                    Iss = principalQueryResult.Iss,
                    IsSoftDeleted = false,
                    ObjectId = Guid.NewGuid().ToString(),
                    SessionId = httpContext.Session.Id,
                    Sub = principalQueryResult.Sub,
                    UpdatedAt = DateTime.UtcNow,
                    HorselessSessionPrincipalId = principalQueryResult.Id
                };

                principalQueryResult.HorselessSessions.Add(newSession);

                var insertResult = await this._horselessSessionOperator.Create(newSession);
                if (insertResult != null)
                {
                    // cache the inserted session to hedge against
                    // new requests using the resolver before dbcontext is flushed
                    LocallyCachedSessions.TryAdd(newSession.SessionId, newSession);
                    _logger.LogWarning($"{this.GetType().FullName} has added a HorselessSession entity to local cache");
                    IHorselessHttpSessionFeature<HorselessSession> ret = await GetSessionFeature(sessionPrincipalId);

                    return ret;
                }
                else
                {
                    throw new Exception($"{this.GetType().Name} is unable to initialize the current session. failed to insert new session");
                }
            }
            else
            {
                throw new Exception($"{this.GetType().Name} is unable to initialize the current session");
            }

        }

        private async Task<IHorselessHttpSessionFeature<HorselessSession>> GetSessionFeature(Guid sessionPrincipalId)
        {
            try
            {
                var httpContext = this._httpContextAccessor.HttpContext;

                var principalQuery = await this._principalOperator.ReadAsEnumerable(w => w.Id == sessionPrincipalId);

                var hasInsertedSessionQuery = await this._horselessSessionOperator.ReadAsEnumerable(w => w.HorselessSessionPrincipalId.Equals(httpContext.Session.Id));

                // session already created for this principal scenario
                var payload = hasInsertedSessionQuery.FirstOrDefault();

                HorselessSession cachedPayload = null;
                var hasCachedPayload = LocallyCachedSessions.TryGetValue(httpContext.Session.Id, out cachedPayload);
                if (hasCachedPayload)
                {
                    _logger.LogWarning($"{this.GetType().FullName} has retrieved HorselessSession entity from local cache");
                    payload = cachedPayload;
                }

                IHorselessHttpSessionFeature<HorselessSession> ret = new HorselessHttpSessionFeature();
                ret.FeaturePayload = payload;
                ret.HttpUrl = new Uri(httpContext.Request.GetFullHttpUrl());
                ret.HttpSessionId = httpContext.Session.Id;

                ret.SessionStartedAt = DateTime.UtcNow;
                ret.SessionLastUpdatedAt = DateTime.UtcNow;

                if (payload.IsAnonymous == true)
                {
                    ret.IsAnonymous = true;
                }
                else
                {
                    ret.IsAnonymous = false;
                }

                return ret;
            }
            catch (Exception ex)
            {
                this._logger.LogError($"{this.GetType().Name} problem initializing session feature {ex.Message}");
                throw new Exception($"{this.GetType().Name} problem initializing session feature {ex.Message}", ex);
            }
        }
    }
}
