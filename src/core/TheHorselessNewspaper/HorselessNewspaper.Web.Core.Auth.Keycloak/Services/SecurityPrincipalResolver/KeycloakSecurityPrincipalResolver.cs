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
using System.IdentityModel.Tokens.Jwt;
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
        // private ConcurrentDictionary<string, HorselessSession> LocallyCachedSessions { get; set; } = new ConcurrentDictionary<string, HorselessSession>();
        IEnumerable<IMultiTenantStore<HorselessTenantInfo>> tenantStores;
        IHttpContextAccessor _httpContextAccessor;
        private IQueryableContentModelOperator<ContentModel.Tenant> _tenantOperator;
        private IQueryableContentModelOperator<ContentModel.Principal> _principalOperator;
        private IQueryableContentModelOperator<ContentModel.HorselessSession> _horselessSessionOperator;
        private IKeycloakAuthOptions _keycloakAuthOptions;
        private HttpClient _httpClient;

        IDistributedCache redisDb;

        ILogger<KeycloakSecurityPrincipalResolver> _logger;
        private ITenantInfo _iTenantInfo;
        IMapper mapper;

        JsonSerializerOptions serializerOptions = new JsonSerializerOptions
        {
            IgnoreReadOnlyProperties = true,
            ReferenceHandler = ReferenceHandler.Preserve,
            WriteIndented = true,
            Converters ={
                        new JsonStringEnumConverter()
                    }

        };

        public KeycloakSecurityPrincipalResolver(
            IEnumerable<IMultiTenantStore<HorselessTenantInfo>> stores,
            IHttpContextAccessor httpContextAccessor,
            IKeycloakAuthOptions keycloakOptions,
            IQueryableContentModelOperator<ContentModel.Tenant> tenantOperator,
               IQueryableContentModelOperator<ContentModel.Principal> principalOperator,
               IQueryableContentModelOperator<ContentModel.HorselessSession> horselessSessionOperator,
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
                var instance = JsonSerializer.Deserialize<ClientCredentialsGrantResult>(token, serializerOptions);

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
        public async Task<ContentModel.Tenant> EnsureTenant()
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



        public async Task<ContentModel.Principal> GetCurrentPrincipal()
        {
            var principal = new ContentModel.Principal();


            var user = _httpContextAccessor.HttpContext.User;
            var sessionId = _httpContextAccessor.HttpContext.Session.IsAvailable ? _httpContextAccessor.HttpContext.Session.Id : "";



            if (user.Claims.Count() > 0 && _iTenantInfo != null)
            {

                var tenantQuery = await _tenantOperator
                    .ReadAsEnumerable(w => w.IsSoftDeleted != true && w.TenantIdentifier.Equals(_iTenantInfo.Identifier),
                        new List<string> { nameof(ContentModel.Tenant.Accounts), nameof(ContentModel.Tenant.Owners), nameof(ContentModel.Tenant.AccessControlEntries) });

                var allTenantsList = new List<ContentModel.Tenant>();

                if (tenantQuery != null && tenantQuery.Any())
                {
                    allTenantsList.AddRange(tenantQuery.ToList());
                }
                else
                {
                    throw new Exception("unable to resolve principal. tenant is null");
                }

                var isAnOwner = allTenantsList.Where(w => w.Owners
                                                    .Where(w => w.PreferredUserName.Equals(user.Claims.PreferredUsername()))
                                                    .Any()).Any();
                var isAnAccount = allTenantsList.Where(w => w.Accounts
                    .Where(w => w.PreferredUserName.Equals(user.Claims.PreferredUsername())).Any()).Any();
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

                    var redisQueryResult = await this.redisDb.GetStringAsync($"{_iTenantInfo.Identifier}.{principal.PreferredUserName}");
                    if (redisQueryResult != null && isAnAccount)
                    {
                        var cachedPrincipal = JsonSerializer.Deserialize<ContentModel.Principal>(redisQueryResult, serializerOptions) as ContentModel.Principal;
                        if (cachedPrincipal != null
                            && cachedPrincipal.PreferredUserName != null
                            && cachedPrincipal.PreferredUserName.Equals(principal.PreferredUserName))
                        {
                            _logger.LogTrace($"current principal is cached");
                            return cachedPrincipal;
                        }
                    }

                }
                catch (Exception e)
                {
                    // tolerate this 
                    _logger.LogError($"current principal is uncached");
                }



                var principalQuery = await this._principalOperator.ReadAsEnumerable(r => r.IsAnonymous == false
                            && r.PreferredUserName.Equals(user.Claims.PreferredUsername()),
                    new List<string>() { nameof(ContentModel.Principal.AccessControlEntries) });

                var principalCollection = principalQuery != null && principalQuery.Any() ? principalQuery.ToList() : new List<ContentModel.Principal>();

                var principalQueryResult = principalQuery == null || principalCollection.Count() == 0 ? null : principalQuery.ToList().First();


                if (isAnAccount)
                {
                    // the authenticated scenario has already recorded this principal
                    _logger.LogInformation($"found authenticated user in database with upn={user.Claims.Upn()}");
                    var homeTenant = allTenantsList.First();
                    var resolvedPrincipal = homeTenant.Accounts.Where(w => w.PreferredUserName.Equals(user.Claims.PreferredUsername())).First();

                    var principalJson = JsonSerializer.Serialize(principalQueryResult, serializerOptions);
                    await this.redisDb.SetStringAsync($"{_iTenantInfo.Identifier}.{principal.PreferredUserName}", principalJson);
                    return resolvedPrincipal;
                }

                if (isAnOwner)
                {
                    // the authenticated scenario has already recorded this principal
                    _logger.LogInformation($"found authenticated user in database with upn={user.Claims.Upn()}");
                    var homeTenant = allTenantsList.Where(w => w.Accounts
                    .Where(w => w.PreferredUserName.Equals(user.Claims.PreferredUsername())).Any()).FirstOrDefault();
                    var resolvedPrincipal = homeTenant.Owners.Where(w => w.PreferredUserName.Equals(user.Claims.PreferredUsername())).FirstOrDefault();


                    var principalJson = JsonSerializer.Serialize(resolvedPrincipal, serializerOptions);
                    await this.redisDb.SetStringAsync($"{_iTenantInfo.Identifier}.{principal.PreferredUserName}", principalJson);
                    return resolvedPrincipal;
                }


                if (!isAnAccount && !isAnOwner)
                {
                    // the authenticated scenario must record this principal
                    _logger.LogWarning($"did not find authenticated user in database with upn={user.Claims.Upn()}");
                    principal.Id = Guid.NewGuid();
                    principal.DisplayName = user.Claims.PreferredUsername();
                    principal.CreatedAt = DateTime.UtcNow;
                    principal.IsAnonymous = false;
                    principal.IsSoftDeleted = false;
                    principal.ObjectId = Guid.NewGuid().ToString();

                    principal.PrincipalClaimContainer = new ContentModel.PrincipalClaimContainer()
                    {
                        Id = Guid.NewGuid(),
                        DisplayName = user.Claims.PreferredUsername()

                    };

                    foreach (var claim in user.Claims)
                    {
                        principal.PrincipalClaimContainer.PrincipalClaim.Add(
                            new ContentModel.PrincipalClaim()
                            {
                                ClaimType = claim.Type,
                                ClaimValue = claim.Value,
                                ClaimIssuer = claim.Issuer,
                                Id = Guid.NewGuid(),
                                ClaimValueType = claim.ValueType
                            });
                    }

                    principal.HorselessSessions.Add(new ContentModel.HorselessSession()
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
                    var tenantQueryResult = tenantQuery == null || tenantQuery.Count() == 0 ? null : tenantQuery.ToList().First();

                    if (tenantQueryResult != null)
                    {
                        try
                        {
                            var idempotency = await this._principalOperator.ReadAsEnumerable(w => w.PreferredUserName.Equals(principal.PreferredUserName),
                                includeClauses: new List<string>() { nameof(ContentModel.Principal.HorselessSessions) });
                            if (idempotency == null || idempotency.Count() == 0)
                            {


                                // must create principal
                                var createdPrincipalResult = await this._principalOperator.Create(principal);

                                // tenantQueryResult.Accounts.Add(createdPrincipalResult);

                                var tenantUpdateResult = await this._tenantOperator.InsertRelatedEntity(tenantQueryResult.Id,
                                     nameof(ContentModel.Tenant.Accounts), new List<ContentModel.Principal>() { createdPrincipalResult });

                                _logger.LogTrace("created principal, added account");

                                if (createdPrincipalResult != null)
                                {
                                    // cache the principal
                                    var principalJson = JsonSerializer.Serialize(createdPrincipalResult, serializerOptions);
                                    await this.redisDb.SetStringAsync($"{_iTenantInfo.Identifier}.{createdPrincipalResult.PreferredUserName}", principalJson);
                                    return createdPrincipalResult;
                                }
                            }


                            if (idempotency.Count() == 1 && !isAnAccount)
                            {
                                principal = idempotency.First();

                                var accountExists = tenantQueryResult.Accounts.Where(w => w.PreferredUserName.Equals(principal.PreferredUserName)).Any();
                                if (!accountExists)
                                {
                                    // tenantQueryResult.Accounts.Add(principal);
                                    var tenantUpdateResult = await this._tenantOperator.InsertRelatedEntity(tenantQueryResult.Id,
                                    nameof(ContentModel.Tenant.Accounts), new List<ContentModel.Principal>() { principal });

                                    if (tenantUpdateResult != null)
                                    {
                                        // cache the principal
                                        var principalJson = JsonSerializer.Serialize(principal, serializerOptions);
                                        await this.redisDb.SetStringAsync($"{_iTenantInfo.Identifier}.{principal.PreferredUserName}", principalJson);
                                        return principal;
                                    }
                                }

                                //var tenantUpdateResult = await this._tenantOperator.InsertRelatedEntity(tenantQueryResult.Id,
                                //     nameof(ContentModel.Tenant.Accounts), new List<ContentModel.Principal>() { principal });

                            }

                        }
                        catch (Exception e)
                        {
                            _logger.LogError($"problem creating anonymous session: {e.Message}");
                        }

                    }


                }
            }

            if (user.Claims.Count() == 0 && _iTenantInfo != null)
            {
                // the anonymous scenario
                _logger.LogInformation($"handling anonymous request");
                var anonymousPrefferedUsername = "anonymous";
                var currentTenant = await this._tenantOperator.ReadAsEnumerable(w => w.TenantIdentifier.Equals(_iTenantInfo.Identifier));
                var isAnOwner = currentTenant.Where(w => w.Owners
                                    .Where(w => w.PreferredUserName.Equals(user.Claims.PreferredUsername()))
                                    .Any()).Any();
                var isAnAccount = currentTenant.Where(w => w.Accounts
                    .Where(w => w.PreferredUserName.Equals(anonymousPrefferedUsername)).Any()).Any();

                var anonymousPrincipalQuery = await _principalOperator.ReadAsEnumerable(r => r.IsAnonymous == true);

                var cachedAnonymousPrincipal = await this.redisDb.GetStringAsync($"{_iTenantInfo.Identifier}.{anonymousPrefferedUsername}");
                if (anonymousPrincipalQuery != null && anonymousPrincipalQuery.Count() > 0 && cachedAnonymousPrincipal != null && isAnAccount)
                {

                    var cachedPrincipal = JsonSerializer.Deserialize<ContentModel.Principal>(cachedAnonymousPrincipal, serializerOptions);

                    if (cachedPrincipal != null && cachedPrincipal.Id.Equals(anonymousPrincipalQuery.First().Id))
                    {
                        // the cached principal id is the same as the persisted item

                        return cachedPrincipal;
                    }
                }


                var httpCtx = _httpContextAccessor.HttpContext;
                // tenant exists

                // search for tne anononymous principal 
                var principalQuery = await _principalOperator.ReadAsEnumerable(w =>
                            w.IsSoftDeleted == false && w.IsAnonymous == true, new List<string> { nameof(ContentModel.Tenant.Owners), nameof(ContentModel.Tenant.Accounts) });


                var principalQueryResult = principalQuery == null
                                                    || principalQuery.Count() == 0
                                                    ? null :
                                                    principalQuery.ToList().First();

                if (!isAnAccount)
                {
                    // insert an anonymous principal and session
                    _logger.LogWarning($"anonymous tenant principal does not exist");
                    var newPrincipal = new ContentModel.Principal()
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
                        HorselessSessions = new List<ContentModel.HorselessSession>()
                                       {
                                           new ContentModel.HorselessSession()
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
                        var distributedCacheStore = tenantStores
                            .Where(s => s.GetType() == typeof(DistributedCacheStore<HorselessTenantInfo>))
                            .SingleOrDefault();
                        var tenant = await distributedCacheStore.TryGetByIdentifierAsync($"{_iTenantInfo.Identifier}");
                        if (tenant != null && tenant.Payload != null && tenant.Payload.ParentTenant != null)
                        {
                            var existingPrincipal = await this._principalOperator.Read(r => r.PreferredUserName.Equals(newPrincipal.PreferredUserName));
                            if (existingPrincipal != null && existingPrincipal.Any())
                            {
                                newPrincipal = existingPrincipal.First();
                            }
                            else
                            {
                                try
                                {
                                    var createResult = await this._principalOperator.Create(newPrincipal);
                                    newPrincipal = createResult;
                                }
                                catch (Exception ex)
                                {
                                    _logger.LogError($"anonymous principal creation failure {ex.Message}");
                                }
                            }



                            var tenantQuery = await this._tenantOperator.ReadAsEnumerable(w => w.TenantIdentifier.ToLower().Equals(_iTenantInfo.Identifier.ToLower()));
                            if (tenantQuery != null && tenantQuery.Any())
                            {
                                var targetTenant = tenantQuery.First();
                                if (!targetTenant.Accounts.Where(w => w.PreferredUserName.Equals(newPrincipal.PreferredUserName)).Any())
                                {

                                    var insertResult = await this._tenantOperator.InsertRelatedEntity(targetTenant.Id, nameof(ContentModel.Tenant.Accounts),
                                        new List<ContentModel.Principal>() { newPrincipal });
                                }

                                var principalJson = JsonSerializer.Serialize(newPrincipal, serializerOptions);


                                await this.redisDb.SetStringAsync($"{_iTenantInfo.Identifier}.{newPrincipal.PreferredUserName}", principalJson);
                                return newPrincipal;
                            }

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

            else
            {
                // the catch all scenario
                // probaby because the tenant resolution
                // subsystem is leaky
                _logger.LogWarning("unable to get current principal in current context ");
            }

            throw new Exception("could not complee principal resolution workflow");
        }

        public async Task<IHorselessHttpSessionFeature<ContentModel.HorselessSession>> GetCurrentSessionForPrincipal(ContentModel.Principal principal)
        {

            IHorselessHttpSessionFeature<ContentModel.HorselessSession> ret = await GetSessionFeature(principal);
            return ret;

        }

        private async Task<IHorselessHttpSessionFeature<ContentModel.HorselessSession>> GetSessionFeature(ContentModel.Principal currentPrincipal)
        {
            try
            {
                var httpContext = this._httpContextAccessor.HttpContext;

                var principalQuery = await this._principalOperator.ReadAsEnumerable(w => w.PreferredUserName.Equals(currentPrincipal.PreferredUserName));

                var hasInsertedSessionQuery = await this._horselessSessionOperator.ReadAsEnumerable(w => w.SessionId.Equals(httpContext.Session.Id));

                var cacheQuery = await this.redisDb.GetStringAsync($"{_iTenantInfo.Identifier}.{typeof(ContentModel.HorselessSession).FullName}.{httpContext.Session.Id}");
                if (cacheQuery != null && cacheQuery != String.Empty && principalQuery.Any() && hasInsertedSessionQuery.Any())
                {
                    // cached session 
                    var payload = JsonSerializer.Deserialize<ContentModel.HorselessSession>(cacheQuery, serializerOptions);

                    if (payload.Id.Equals(hasInsertedSessionQuery.First().Id))
                    {
                        // cached id == persisted id
                        IHorselessHttpSessionFeature<ContentModel.HorselessSession> ret = new HorselessHttpSessionFeature();
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

                }

                if (hasInsertedSessionQuery != null && hasInsertedSessionQuery.Any())
                {
                    // session already created for this principal scenario
                    var payload = hasInsertedSessionQuery.First();

                    var hasCachedPayload = await this.redisDb.GetStringAsync($"{_iTenantInfo.Identifier}.{typeof(ContentModel.HorselessSession).FullName}.{httpContext.Session.Id}");

                    // var hasCachedPayload = await redisDb.GetStringAsync($"{typeof(HorselessSession).GetType().FullName}.{httpContext.Session.Id.ToString()}");
                    if (hasCachedPayload != null && hasCachedPayload != String.Empty)
                    {
                        _logger.LogWarning($"{this.GetType().FullName} has retrieved HorselessSession entity from local cache");
                        var deserialized = JsonSerializer.Deserialize<ContentModel.HorselessSession>(hasCachedPayload, serializerOptions);
                        payload = deserialized;
                    }

                    IHorselessHttpSessionFeature<ContentModel.HorselessSession> ret = new HorselessHttpSessionFeature();
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


                    var sessionJson = JsonSerializer.Serialize(payload, serializerOptions);
                    await this.redisDb.SetStringAsync($"{_iTenantInfo.Identifier}.{typeof(ContentModel.HorselessSession).FullName}.{httpContext.Session.Id}", sessionJson);

                    return ret;
                }

                if (principalQuery != null && principalQuery.Any()
                    && !principalQuery.First().HorselessSessions.Where(w => w.SessionId.Equals(httpContext.Session.Id)).Any())
                {
                    // create a new session
                    var newSession = new ContentModel.HorselessSession()
                    {
                        Id = Guid.NewGuid(),
                        DisplayName = currentPrincipal.DisplayName,
                        IsAnonymous = currentPrincipal.IsAnonymous,
                        Aud = currentPrincipal.Aud,
                        CreatedAt = DateTime.UtcNow,
                        Iss = currentPrincipal.Iss,
                        IsSoftDeleted = false,
                        ObjectId = Guid.NewGuid().ToString(),
                        SessionId = httpContext.Session.Id,
                        Sub = currentPrincipal.Sub,
                        UpdatedAt = DateTime.UtcNow,
                        HorselessSessionPrincipal = principalQuery.First()
                    };

                    var relatedItems = new List<ContentModel.HorselessSession>() { newSession };

                    currentPrincipal.HorselessSessions.Add(newSession);

                    var insertResult = await this._principalOperator.Update(currentPrincipal, new List<string>() { nameof(ContentModel.Principal.HorselessSessions) });

                    IHorselessHttpSessionFeature<ContentModel.HorselessSession> ret = new HorselessHttpSessionFeature();
                    ret.FeaturePayload = newSession; // todo this is overly optimistic
                    ret.HttpUrl = new Uri(httpContext.Request.GetFullHttpUrl());
                    ret.HttpSessionId = httpContext.Session.Id;

                    ret.SessionStartedAt = DateTime.UtcNow;
                    ret.SessionLastUpdatedAt = DateTime.UtcNow;

                    if (currentPrincipal.IsAnonymous == true)
                    {
                        ret.IsAnonymous = true;
                    }
                    else
                    {
                        ret.IsAnonymous = false;
                    }



                    var sessionJson = JsonSerializer.Serialize(newSession, serializerOptions);
                    await this.redisDb.SetStringAsync($"{_iTenantInfo.Identifier}.{typeof(ContentModel.HorselessSession).FullName}.{httpContext.Session.Id}", sessionJson);
                    return ret;
                }

                throw new Exception($"{this.GetType().Name} problem initializing session feature - principal and session not persisted");
            }
            catch (Exception ex)
            {
                this._logger.LogError($"{this.GetType().Name} problem initializing session feature {ex.Message}");
                throw new Exception($"{this.GetType().Name} problem initializing session feature {ex.Message}", ex);
            }
        }
    }
}
