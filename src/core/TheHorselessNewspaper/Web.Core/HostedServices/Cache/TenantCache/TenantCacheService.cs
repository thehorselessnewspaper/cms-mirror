﻿using AutoMapper;
using Finbuckle.MultiTenant;
using Finbuckle.MultiTenant.Stores;
using HorselessNewspaper.Core.Interfaces.Constants.ControllerRouteStrings;
using HorselessNewspaper.Web.Core.Interfaces.Cache;
using HorselessNewspaper.Web.Core.Model.Query;
using HorselessNewspaper.Web.Core.ScopedServices.RestClients;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.Net.Http.Headers;
using Newtonsoft.Json;
using System.Net.Http.Json;
using System.Text;
using System.Text.Encodings.Web;
using System.Text.Json;
using HorselessNewspaper.Web.Core.Services.Query.Controller.Content;
using TheHorselessNewspaper.HostingModel.Context;

using TheHorselessNewspaper.HostingModel.MultiTenant;

using static System.Formats.Asn1.AsnWriter;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using HostingModel = TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
using HorselessNewspaper.Web.Core.Interfaces.Security.Resolver;
using TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
using HorselessNewspaper.Core.Interfaces.Security.Resolver;
using HorselessNewspaper.Web.Core.Services.Model.SeedEntities;

namespace HorselessNewspaper.Web.Core.HostedServices.Cache.TenantCache
{
    /// <summary>
    /// use this as the public face of timed updates
    /// </summary>
    public interface ITenantCacheService
    {
        public ICollection<ContentModel.Tenant> CurrentContentModelTenants { get; set; }
        public ICollection<HostingModel.Tenant> CurrentHostingModelTenants { get; set; }
    }

    /// <summary>
    /// maintain a cache of tenants 
    /// and their web api endpoints
    /// </summary>
    public class TenantCacheService : ITenantCacheService, IHostedService, IDisposable
    {
        // as per https://stackoverflow.com/questions/63468682/how-to-stop-a-timer-created-in-a-net-core-controller
        private static readonly object _timerLock = new object();
        private static int logicLock;

        private long _defaultTimerDelayInSeconds = 30;

        public long TimerDelayInSeconds { get; set; }

        private readonly ILogger<TenantCacheService> _logger;
        private Timer _timer = null!;

        public ICollection<ContentModel.Tenant> CurrentContentModelTenants { get; set; } = new List<ContentModel.Tenant>();
        public ICollection<HostingModel.Tenant> CurrentHostingModelTenants { get; set; } = new List<HostingModel.Tenant>();

        IServiceProvider _services;
        IServiceScopeFactory _scopeFactory;

        public TenantCacheService(ILogger<TenantCacheService> logger, IServiceProvider services, IServiceScopeFactory scopeFactory)
        {
            _logger = logger;

            _services = services;
            _scopeFactory = scopeFactory;
            TimerDelayInSeconds = _defaultTimerDelayInSeconds;
            this.CurrentContentModelTenants = new List<ContentModel.Tenant>();


        }

        private TimeSpan GetTimespanForSeconds(long seconds)
        {

            TimeSpan period = TimeSpan.FromSeconds(30);
            return period;
        }

        /// <summary>
        /// materialize service instance 
        /// using supplied scope
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="scope"></param>
        /// <param name="entity"></param>
        /// <returns></returns>
        public IQueryableHostingModelOperator<T> GetQueryForHostingEntity<T>(IServiceScope scope)
           where T : class, IHostingRowLevelSecured
        {

            return scope.ServiceProvider.GetRequiredService<IQueryableHostingModelOperator<T>>();

        }

        public IQueryableContentModelOperator<T> GetQueryForContentEntity<T>(IServiceScope scope)
        where T : class, IContentRowLevelSecured
        {


            return scope.ServiceProvider.GetRequiredService<IQueryableContentModelOperator<T>>();

        }

        public async Task StartAsync(CancellationToken cancellationToken)
        {
            // start the timer
            _logger.LogInformation("Timed Hosted Service running.");
            _timer = new Timer(HandleTimerElapsed, null, GetTimespanForSeconds(TimerDelayInSeconds), GetTimespanForSeconds(TimerDelayInSeconds));
            // ensure databases exist
            // TODO surface as a feature toggle
            // hardcodes content and hosting physical db 
            // as dependencies of tenantcache
            try
            {
                _logger.LogInformation("tenant cache service is running");
            }
            catch (Exception e)
            {
                //_logger.LogInformation("exception ensuring databases.");

            }

            return;
        }

        private async Task EnsurePhysicalDatabases()
        {
            using (var scope = _services.CreateScope())
            {

                var contentModelOperator = GetQueryForContentEntity<ContentModel.Tenant>(scope);
                try
                {


                    // var tenantInfo = scope.ServiceProvider.GetRequiredService<HorselessTenantInfo>();
                    _logger.LogInformation("getting db query");
                    _logger.LogInformation("ensuring content db");
                    // await contentModelOperator.EnsureDbExists();

                    var probeQuery = await contentModelOperator.ReadAsEnumerable(r => r.ObjectId != null && r.ObjectId.Equals("EnsureQueryWorks"));
                    var probeResult = probeQuery?.ToList<ContentModel.Tenant>();


                    var hostingModelOperator = GetQueryForHostingEntity<HostingModel.Tenant>(scope);
                    // await hostingModelOperator.EnsureDbExists();

                    var hostingProbeQuery = await hostingModelOperator.ReadAsEnumerable(r => r.ObjectId != null && r.ObjectId.Equals("EnsureQueryWorks"));
                    var hostingProbeResult = hostingProbeQuery?.ToList<HostingModel.Tenant>();

                    // should fail by here if the db schema is different
                    _logger.LogInformation("content db ensured");

                    _logger.LogInformation("hosting db ensured");

                }
                catch (Exception e)
                {
                    _logger.LogError($"auto healing problem initializing databases {e.Message}");
                    var hostingModelOperator = GetQueryForHostingEntity<HostingModel.Tenant>(scope);

                    // self healing databae feature
                    // TODO - enable this some safe way
                    await contentModelOperator.ResetDb();
                    await hostingModelOperator.ResetDb();
                }
            }

            using (var scope = _services.CreateScope())
            {

                var hostingModelOperator = GetQueryForHostingEntity<HostingModel.Tenant>(scope);
                try
                {
                    await hostingModelOperator.EnsureDbExists();

                    var probeQuery = await hostingModelOperator.ReadAsEnumerable(r => r.DisplayName.Equals("probetext"));
                    if (probeQuery != null)
                    {
                        // todo implement a more robust probe
                        var probeQueryResult = probeQuery.ToList();
                    }
                }
                catch (Exception e)
                {
                    _logger.LogWarning($"problem initializing databases {e.Message}");

                    // self healing databae feature
                    // TODO - enable this some safe way
                    await hostingModelOperator.ResetDb();
                }
            }
        }

        private async void HandleTimerElapsed(object? state)
        {
            _timer.Change(Timeout.Infinite, Timeout.Infinite);

            // ensure the db exists
            // this should actually be handled by polly
            // due to db container startup lag in 
            // dockerized environments


            try
            {
                await EnsurePhysicalDatabases();
                await SetCurrentContentModelTenants();

                _logger.LogInformation("got current content model tenants");

                //using (var scope = _services.CreateScope())
                //{

                await HandleTenantCacheWorkflow();
                //}


                _timer.Change(GetTimespanForSeconds(TimerDelayInSeconds), GetTimespanForSeconds(TimerDelayInSeconds));

            }
            catch (Exception e)
            {
                _logger.LogWarning($"exception in tenant cache service {e.Message}");


                // give the db time to reset
                _timer.Change(GetTimespanForSeconds(360), GetTimespanForSeconds(360));
            }

        }

        private async Task HandleTenantCacheWorkflow()
        {
            // retrieve tenants from the hosting collection

            try
            {

                await HandleScopedLogic();

            }
            catch (Exception e)
            {
                _logger.LogError($"problem updating tenant cache {e.Message}");
                _timer.Change(GetTimespanForSeconds(TimerDelayInSeconds), GetTimespanForSeconds(TimerDelayInSeconds));
            }

        }

        private async Task SetCurrentContentModelTenants()
        {

            try
            {

                using (var innerScope = _services.CreateScope())
                {

                    // var autoMapper = scope.ServiceProvider.GetRequiredService<IMapper>();
                    string configuredRestBaseUrl = GetRestBaseUrl();

                    var apiClient = innerScope.ServiceProvider.GetRequiredService<IHorselessRestApiClient>();

                    apiClient.BaseUrl = configuredRestBaseUrl;

                    // apiClient.
                }


                using (var innerScope = _services.CreateScope())
                {

                    // var clientTenantlist = await apiClient.getbypa);

                    // var mappedTenantList = autoMapper.Map<ICollection<ContentEntitiesTenant>, IEnumerable<ContentModel.Tenant>>(clientTenantlist);

                    // collect the content model tenants

                    //var contentModelTenantQuery = innerScope.ServiceProvider.GetRequiredService<IQueryableContentModelOperator<ContentModel.Tenant>>();  // this.GetQueryForContentEntity<ContentModel.Tenant>(innerScope);
                    //var tenantList = await contentModelTenantQuery.Read(r => r.IsSoftDeleted == false);
                    //var tenants = tenantList == null || tenantList.Count() == 0 ? new List<ContentModel.Tenant>() : tenantList.ToList();

                    var tenants = await GetCurrentContentModelTenants();
                    foreach (var contentModelTenant in tenants)
                    {
                        if (!this.CurrentContentModelTenants.Where(w => w.TenantIdentifier != null && w.TenantIdentifier.Equals(contentModelTenant.TenantIdentifier)).Any())
                        {
                            // here because we need to cache this tenant in the singleton
                            _logger.LogWarning($"{this.GetType().FullName} has cached a content model tenant locally");
                            this.CurrentContentModelTenants.Add(contentModelTenant);
                        }
                    }
                }
            }
            catch (Exception e)
            {
                _logger.LogError($"problem getting tenants {e.Message}");
                _timer.Change(GetTimespanForSeconds(TimerDelayInSeconds), GetTimespanForSeconds(TimerDelayInSeconds));
            }


        }

        private string GetRestBaseUrl()
        {
            using (var innerScope = this._services.CreateScope())
            {

                var configuration = innerScope.ServiceProvider.GetRequiredService<IConfiguration>();
                var configuredRestBaseUrl = configuration["RestApiBaseUrl"];
                return configuredRestBaseUrl;
            }
        }

        private string GetOdataBaseUrl(IServiceScope ascope = null)
        {
            using (var innerScope = this._services.CreateScope())
            {

                var configuration = innerScope.ServiceProvider.GetRequiredService<IConfiguration>();
                var configuredRestBaseUrl = configuration["OdataApiBaseUrl"];
                return configuredRestBaseUrl;
            }
        }

        private JsonContent GetJsonContent<T>(T content)
        {
            return JsonContent.Create(content);
        }

        private async Task HandleScopedLogic()
        {
            using (var scope = _services.CreateScope())
            {
                List<HostingModel.Tenant> hostingModelTenants = await UpdateLocalHostingTenantCache();
                var contentModelTenants = await this.GetCurrentContentModelTenants("$expand=Owners, AccessControlEntries");
                IMultiTenantStore<HorselessTenantInfo>? inMemoryStores = GetInMemoryTenantStores();

                await EnsureTenantEntityWorkflow(hostingModelTenants, contentModelTenants, inMemoryStores);

                var currentContentModelTenants = await this.GetCurrentContentModelTenants("$expand=Owners, AccessControlEntries");
                foreach (var currentTenant in currentContentModelTenants)
                {

                }
            }

        }

        private async Task<bool> EnsureTenantEntityWorkflow(List<HostingModel.Tenant> hostingModelTenants, List<ContentModel.Tenant> contentModelTenants, IMultiTenantStore<HorselessTenantInfo>? inMemoryStores)
        {
            var ret = false;
            using (var scope = this._services.CreateScope())
            {

                // merge content model tenants with published hosting model tenants
                // meaning, migrate published tenant entities from the hosting model db
                // to the content model db
                // the migrated entity should == original entity
                // where == is based on uniquely constrained columns
                var restClient = scope.ServiceProvider.GetRequiredService<IHorselessRestApiClient>();

                var iAutoMapper = scope.ServiceProvider.GetRequiredService<IMapper>();
                var defaultTenantQuery = await inMemoryStores.GetAllAsync();
                HorselessTenantInfo defaultTenant = defaultTenantQuery.FirstOrDefault();
                hostingModelTenants.Add(defaultTenant.Payload.ParentTenant);

                foreach (var publishedTenant in hostingModelTenants.Where(w => w.IsPublished != null && w.IsPublished == true && w.TenantIdentifier != null))
                {
                    try
                    {
                        // filter existing merge targets
                        // evaluate wether final tenant deployment
                        // workflow step completed

                        var mirrorTenantExists = contentModelTenants.Where(r => r.TenantIdentifier != null &&
                                                                            r.TenantIdentifier == publishedTenant.TenantIdentifier).Any();
                        // var mirrorTenantHasOwners = contentModelTenants.Where(r => r.TenantIdentifier == publishedTenant.TenantIdentifier && r.Owners.Count() > 0).Any();
                        var mirrorTenantHasAccessControlEntries = contentModelTenants.Where(r => r.TenantIdentifier != null && r.TenantIdentifier == publishedTenant.TenantIdentifier && r.AccessControlEntries.Count() > 0).Any();

                        var isTenantDeploymentWorkflowComplete = contentModelTenants.Where(r => r.TenantIdentifier != null && r.TenantIdentifier == publishedTenant.TenantIdentifier && r.IsPublished == true).Any();

                        if (mirrorTenantExists == false)
                        {
                            // validate the multitenant routing is working for this tenant
                            // database inserts specific to the tenant can only occur
                            // after tenant routing is available for a tenant
                            var probeResult = await this.ProbeTenantRouting(publishedTenant);
                            if (probeResult == true)
                            {
                                await DeployPublishedTenant(publishedTenant);
                            }
                        }
                        else if (mirrorTenantExists && mirrorTenantHasAccessControlEntries && isTenantDeploymentWorkflowComplete == false)
                        {
                            try
                            {

                                // detect final step, setting the tenant to published in the content model database
                                var mirrorTenant = contentModelTenants.Where(r => r.TenantIdentifier != null && r.TenantIdentifier == publishedTenant.TenantIdentifier).FirstOrDefault();
                                mirrorTenant.IsPublished = true; // set the workflow complete flag
                                var options = new JsonSerializerOptions
                                {
                                    PropertyNameCaseInsensitive = true
                                };

                                mirrorTenant.Owners.Clear();
                                mirrorTenant.AccessControlEntries.Clear();

                                /// TODO don't do this
                                mirrorTenant.TenantIdentifierStrategy = null;

                                var tenantJson = System.Text.Json.JsonSerializer.Serialize(mirrorTenant, options);
                                var restClientEntity = System.Text.Json.JsonSerializer.Deserialize<ContentEntitiesTenant>(tenantJson, options); // RestClientAlso.ContentEntitiesTenant.FromJson(tenantJson); // iAutoMapper.Map<ContentEntitiesTenant>(mirrorTenant); 
                                var updatedProperties = new List<string>() { nameof(ContentModel.Tenant.IsPublished) };

                                var updateResponse = await restClient.ApiHorselessContentModelTenantUpdatePropertiesAsync(mirrorTenant.Id.ToString(), defaultTenant.Identifier, updatedProperties, restClientEntity);
                                var currentContentModelTenants = this.GetCurrentContentModelTenants("$expand=Owners, AccessControlEntries");
                                int i = 0;
                            }
                            catch (Exception e)
                            {
                                _logger.LogError($"problem marking workflow complete {e.Message}");
                            }
                        }
                        else
                        {
                            await ValidateCaches(scope, inMemoryStores, contentModelTenants, publishedTenant);
                        }






                    }
                    catch (Exception ex)
                    {
                        // we don't want errors to stop the entire loop here
                        _logger.LogWarning($"problem publishing tenants for tenantIdentifier={publishedTenant.TenantIdentifier}: exception {ex.Message}");
                    }

                }

                ret = true;

            }
            return ret;
        }

        private async Task<bool> ProbeTenantRouting(HostingModel.Tenant tenant)
        {
            using (IServiceScope scope = this._services.CreateScope())
            {
                // todo - fix conflation of
                // rest base url with html base url
                var baseUrl = this.GetRestBaseUrl();

                var ret = false;
                var basePath = tenant.BaseUrl == null ?
                    baseUrl :
                    tenant.BaseUrl.ToString();
                basePath = basePath.TrimEnd('/');


                try
                {
                    string identifier = tenant.TenantIdentifier;

                    // get the home page for the tenant
                    var route = $"{basePath}/{identifier}"; // + RESTContentModelControllerStrings.API_HORSELESSCONTENTMODEL_TENANT + $"/GetByObjectId/{tenant.ObjectId}";
                    IHttpClientFactory clientFactory = scope.ServiceProvider.GetRequiredService<IHttpClientFactory>();
                    var httpClient = clientFactory.CreateClient();

                    var httpRequestMessage = new HttpRequestMessage(
                        HttpMethod.Get,
                        route)
                    {
                        Headers =
                            {
                                { HeaderNames.Accept, "text/html" },
                                { HeaderNames.UserAgent, "HorselessNewspaper" }
                            }
                    };

                    var response = await httpClient.SendAsync(httpRequestMessage);
                    var responseContent = response.Content;
                    response.EnsureSuccessStatusCode();

                    /// TODO validate the home page of the tenant in additional ways
                    ret = true;
                }
                catch (Exception e)
                {
                    _logger.LogInformation($"exception probing routing tenant {e.Message}");
                    ret = false;
                }


                return await Task.FromResult(ret);
            }

        }

        private async Task ValidateCaches(IServiceScope scope, IMultiTenantStore<HorselessTenantInfo>? inMemoryStores, List<ContentModel.Tenant> contentModelTenants, HostingModel.Tenant publishedTenant)
        {

            try
            {
                // here because we are updating the in memory tenant cache
                _logger.LogTrace($"found existing deployed tenant {publishedTenant.DisplayName}");

                await UpdateMultiTenantInMemoryStore(inMemoryStores, publishedTenant);


                // validate tenant cache updated
                // get the tenant cache
                var tenantCache = scope.ServiceProvider.GetRequiredService<IHorselessCacheProvider<Guid, ContentModel.Tenant>>();
                _logger.LogInformation($"loaded tenant cache service");

                var currentTenants = await GetCurrentContentModelTenants();
                var liveTenant = currentTenants.Where(w => w.TenantIdentifier != null
                                                                        && publishedTenant.TenantIdentifier != null &&
                                                                        w.TenantIdentifier.Equals(publishedTenant.TenantIdentifier)).FirstOrDefault();
                await tenantCache.Set(publishedTenant.Id, liveTenant);
            }
            catch (Exception e)
            {

                _logger.LogError($"problem validating caches: {e.Message}");
                throw new Exception("problem validating caches", e);
            }


        }

        private async Task DeployPublishedTenant(HostingModel.Tenant originEntity)
        {
            using (var scope = this._services.CreateScope())
            {
                _logger.LogTrace($"found new undeployed tenant {originEntity.DisplayName}");

                var inMemoryStores = GetInMemoryTenantStores();
                var defaultTenantQuery = await inMemoryStores.GetAllAsync();
                HorselessTenantInfo defaultTenant = defaultTenantQuery.FirstOrDefault();

                if (defaultTenant.Identifier.Equals(originEntity.TenantIdentifier))
                {
                    originEntity = defaultTenant.Payload.ParentTenant;
                }

                if (originEntity.BaseUrl == null)
                {
                    originEntity.BaseUrl = this.GetRestBaseUrl();
                }

                var mergeEntity = new TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Tenant()
                {
                    Id = originEntity.Id,
                    IsPublished = false,
                    CreatedAt = originEntity.CreatedAt,
                    DisplayName = originEntity.DisplayName,
                    IsSoftDeleted = originEntity.IsSoftDeleted,
                    ObjectId = originEntity.ObjectId,
                    Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                    TenantIdentifier = originEntity.TenantIdentifier,
                    BaseUrl = originEntity.BaseUrl.TrimEnd('/'),
                    Owners = new List<ContentModel.Principal>(),
                    ContentCollections = DefaultEntitySets.GetDefaultContentCollections(),
                    AccessControlEntries = new List<ContentModel.AccessControlEntry>()
                    {
                      new ContentModel.AccessControlEntry()
                        {
                            Id = Guid.NewGuid(),
                            CreatedAt = DateTime.UtcNow,
                            DisplayName = originEntity.DisplayName,
                            IsSoftDeleted = false,
                            ObjectId = Guid.NewGuid().ToString(),
                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                            Permission =  ContentModel.ACEPermission.READ,
                            PermissionType =  ContentModel.ACEPermissionType.PERMIT,
                            Scope =  ContentModel.ACEPermissionScope.OWNER
                        },
                        new ContentModel.AccessControlEntry()
                        {
                            Id = Guid.NewGuid(),
                            CreatedAt = DateTime.UtcNow,
                            DisplayName = originEntity.DisplayName,
                            IsSoftDeleted = false,
                            ObjectId = Guid.NewGuid().ToString(),
                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                             Permission =  ContentModel.ACEPermission.CREATE,
                            PermissionType =  ContentModel.ACEPermissionType.PERMIT,
                            Scope =  ContentModel.ACEPermissionScope.OWNER
                        },
                        new ContentModel.AccessControlEntry()
                        {
                            Id = Guid.NewGuid(),
                            CreatedAt = DateTime.UtcNow,
                            DisplayName = originEntity.DisplayName,
                            IsSoftDeleted = false,
                            ObjectId = Guid.NewGuid().ToString(),
                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                            Permission =  ContentModel.ACEPermission.DELETE,
                            PermissionType =  ContentModel.ACEPermissionType.PERMIT,
                            Scope =  ContentModel.ACEPermissionScope.OWNER
                        },
                        new ContentModel.AccessControlEntry()
                        {
                            Id = Guid.NewGuid(),
                            CreatedAt = DateTime.UtcNow,
                            DisplayName = originEntity.DisplayName,
                            IsSoftDeleted = false,
                            ObjectId = Guid.NewGuid().ToString(),
                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                            Permission =  ContentModel.ACEPermission.EXECUTE,
                            PermissionType =  ContentModel.ACEPermissionType.PERMIT,
                            Scope =  ContentModel.ACEPermissionScope.OWNER
                        },
                        new ContentModel.AccessControlEntry()
                        {
                            Id = Guid.NewGuid(),
                            CreatedAt = DateTime.UtcNow,
                            DisplayName = originEntity.DisplayName,
                            IsSoftDeleted = false,
                            ObjectId = Guid.NewGuid().ToString(),
                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                            Permission =  ContentModel.ACEPermission.PUBLISH,
                            PermissionType =  ContentModel.ACEPermissionType.PERMIT,
                            Scope =  ContentModel.ACEPermissionScope.OWNER
                        },
                        new ContentModel.AccessControlEntry()
                        {
                            Id = Guid.NewGuid(),
                            CreatedAt = DateTime.UtcNow,
                            DisplayName = originEntity.DisplayName,
                            IsSoftDeleted = false,
                            ObjectId = Guid.NewGuid().ToString(),
                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                            Permission =  ContentModel.ACEPermission.UNPUBLISH,
                            PermissionType =  ContentModel.ACEPermissionType.PERMIT,
                            Scope =  ContentModel.ACEPermissionScope.OWNER
                        },
                        new ContentModel.AccessControlEntry()
                        {
                            Id = Guid.NewGuid(),
                            CreatedAt = DateTime.UtcNow,
                            DisplayName = originEntity.DisplayName,
                            IsSoftDeleted = false,
                            ObjectId = Guid.NewGuid().ToString(),
                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                            Permission =  ContentModel.ACEPermission.SEARCH,
                            PermissionType =  ContentModel.ACEPermissionType.PERMIT,
                            Scope =  ContentModel.ACEPermissionScope.OWNER
                        }
                }
                };

                mergeEntity.TenantIdentifierStrategy = new ContentModel.TenantIdentifierStrategy()
                {
                    Id = Guid.NewGuid(),
                    CreatedAt = DateTime.UtcNow,
                    DisplayName = originEntity.DisplayName,
                    IsSoftDeleted = originEntity.IsSoftDeleted,
                    ObjectId = Guid.NewGuid().ToString(),
                    Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),

                    StrategyContainers = new List<ContentModel.TenantIdentifierStrategyContainer>()
                          {
                              new ContentModel.TenantIdentifierStrategyContainer()
                              {
                                Id = Guid.NewGuid(),
                                CreatedAt = DateTime.UtcNow,
                                DisplayName = originEntity.DisplayName,
                                IsSoftDeleted = originEntity.IsSoftDeleted,
                                ObjectId = Guid.NewGuid().ToString(),
                                Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                                TenantIdentifier = originEntity.TenantIdentifier,
                                TenantIdentifierStrategyName = ContentModel.TenantIdentifierStrategyName.ASPNETCORE_ROUTE
                              }
                          }
                };


                try
                {

                    string identifier = originEntity.TenantIdentifier;
                    var baseUri = originEntity.BaseUrl.ToString();
                    baseUri = baseUri.TrimEnd('/');
                    IHttpClientFactory clientFactory = scope.ServiceProvider.GetRequiredService<IHttpClientFactory>();
                    var httpClient = clientFactory.CreateClient();

                    _logger.LogTrace($"merging new undeployed tenant {originEntity.DisplayName}");


                    HttpResponseMessage newTenantPostResponse;
                    var responseContent = String.Empty;

                    // collect the content model tenants


                    try
                    {
                        // this has to be posted to the tenant enabled endpoint
                        // once routing for the tenant is active
                        // otherwise these entities are inserted in the context
                        // of the management tenant
                        // var insertResult = await contentModelTenantQuery.Create(mergeEntity);


                        // var route = baseUri +  $"/{identifier}/" + RESTContentModelControllerStrings.API_HORSELESSCONTENTMODEL_TENANT + $"/Create";

                        ContentModel.Tenant createdTenant = await EnsureContentModelTenant(originEntity, mergeEntity);

                        _logger.LogTrace($"inserted access control entries for new undeployed tenant {createdTenant.DisplayName}");
                    }
                    catch (Exception e)
                    {
                        _logger.LogError($"problem inserting new content model tenant record {e.Message}");


                        if (e.InnerException != null)
                        {
                            _logger.LogError($"problem inserting new content model tenant record {e.InnerException.Message}");
                        }

                        if (String.IsNullOrEmpty(responseContent))
                        {
                            var details = JsonConvert.DeserializeObject<ProblemDetails>(responseContent);
                            if (details != null)
                            {
                                _logger.LogError($"problem details supplied: {details.Title} - {details.Detail}");
                            }
                        }
                    }


                    var updatedTenants = await this.GetCurrentContentModelTenants();

                    _logger.LogTrace($"read {updatedTenants.Count()} content model tenant records");

                }
                catch (Exception e)
                {
                    _logger.LogError($"problem getting tenants {e.Message}");
                    throw new Exception("problem merging tenants ", e);
                }

            }


        }

        private async Task<ContentModel.Tenant> EnsureContentModelTenant(HostingModel.Tenant originEntity, ContentModel.Tenant mergeEntity)
        {
            using (var scope = this._services.CreateScope())
            {

                var ret = mergeEntity;
                _logger.LogTrace($"ensuring content model tenant post approvat database state for tenant={originEntity.TenantIdentifier}");
                try
                {
                    // ensure tenantidentifier

                    IHttpClientFactory clientFactory = scope.ServiceProvider.GetRequiredService<IHttpClientFactory>();
                    var httpClient = clientFactory.CreateClient();

                    string identifier = originEntity.TenantIdentifier;
                    mergeEntity.TenantIdentifier = identifier;

                    var baseUri = originEntity.BaseUrl.ToString();
                    baseUri = baseUri.TrimEnd('/');


                    if (await IsMustCreateContentModelTenant(originEntity))
                    {
                        try
                        {
                            await EnsureContentModelTenantCreated(mergeEntity, identifier, baseUri);
                        }
                        catch (Exception ex)
                        {
                            _logger.LogError($"problem ensuring content model tenant db updates {ex.Message}");
                            throw new Exception($"problem ensuring content model tenant db updates {ex.Message}", ex);
                        }
                    }
                    else if (await IsMustApplyAccessControlEntries(originEntity))
                    {
                        var createdTenantJson = await this.GetContentModelTenantJSONByObjectId(originEntity);
                        ret = await EnsureAccessControlEntriesApplied(identifier, baseUri, createdTenantJson);
                    }

                }
                catch (Exception ex)
                {
                    _logger.LogError($"problem ensuring content model tenant db updates {ex.Message}");
                    throw new Exception($"problem ensuring content model tenant db updates {ex.Message}", ex);
                }

                return ret;

            }
        }

        private async Task<ContentModel.Tenant> EnsureAccessControlEntriesApplied(string identifier, string baseUri, string createdTenantJson)
        {
            using (var scope = this._services.CreateScope())
            {

                ContentModel.Tenant ret;

                try
                {
                    IHttpClientFactory clientFactory = scope.ServiceProvider.GetRequiredService<IHttpClientFactory>();
                    ISecurityPrincipalResolver tokenService = scope.ServiceProvider.GetRequiredService<ISecurityPrincipalResolver>();
                    var token = await tokenService.GetClientCredentialsGrantToken();

                    var httpClient = clientFactory.CreateClient();

                    var createdTenant = JsonConvert.DeserializeObject<ContentModel.Tenant>(createdTenantJson);

                    createdTenant.IsPublished = true; //mark workflow complete
                    _logger.LogTrace($"will change state of tenant {createdTenant.IsPublished} to true");

                    var updatedRoute = $"{baseUri}/{identifier}/api/HorselessContentModel/Tenant/Update/{createdTenant.Id}";

                    // update the acess control entries
                    // populate the access control entries for the new tenant

                    foreach (var user in createdTenant.Owners)
                    {
                        foreach (var ace in createdTenant.AccessControlEntries)
                        {
                            ace.SubjectPrincipals.Add(user);
                        }
                    }



                    var updateRequest = new HttpRequestMessage(HttpMethod.Post, updatedRoute)
                    {
                        Content = GetJsonContent(createdTenant),
                        Headers =
                            {
                                { HeaderNames.Accept, "application/json" },
                                { HeaderNames.UserAgent, "HorselessNewspaper" }
                            }
                    };

                    var updatedPostResponse = await httpClient.SendAsync(updateRequest);


                    string updatepostResponseJson = await updatedPostResponse.Content.ReadAsStringAsync();
                    var updatedTenant = JsonConvert.DeserializeObject<ContentModel.Tenant>(updatepostResponseJson);
                    _logger.LogTrace($"tenant deployment: access control entries applied for {updatedTenant.TenantIdentifier}");
                    ret = updatedTenant;
                }
                catch (Exception ex)
                {
                    _logger.LogError($"problem applying access control entries for tenantidentifier={identifier}: exception {ex.Message}");
                    throw new Exception($"problem applying access control entries for tenantidentifier={identifier}: exception {ex.Message}", ex);
                }

                return ret;

            }
        }

        private async Task EnsureContentModelTenantCreated(ContentModel.Tenant mergeEntity, string identifier, string baseUri)
        {
            using (var scope = this._services.CreateScope())
            {

                IHttpClientFactory clientFactory = scope.ServiceProvider.GetRequiredService<IHttpClientFactory>();
                var httpClient = clientFactory.CreateClient();
                try
                {
                    // ensure populated tenantidentifier
                    mergeEntity.TenantIdentifier = identifier;
                    var route = $"{baseUri}/{identifier}/api/HorselessContentModel/Tenant/Create";
                    var postRequest = new HttpRequestMessage(HttpMethod.Post, route)
                    {
                        Content = GetJsonContent(mergeEntity),
                        Headers =
                                    {
                                        { HeaderNames.Accept, "application/json" },
                                        { HeaderNames.UserAgent, "HorselessNewspaper" }
                                    }
                    };

                    var postResponse = await httpClient.SendAsync(postRequest);


                    string postResponseJson = await postResponse.Content.ReadAsStringAsync();
                    var createdTenant = JsonConvert.DeserializeObject<ContentModel.Tenant>(postResponseJson); // doesn't work JsonSerializer.Deserialize<ContentModel.Tenant>(postResponseJson);
                    _logger.LogTrace($"content model tenant record created for {createdTenant.TenantIdentifier}");
                }
                catch (Exception ex)
                {
                    _logger.LogError($"problem ensuring content model tenant created for tenantidentifier={identifier}: exception  {ex.Message}");
                    throw;
                }
            }


        }

        private async Task<bool> IsMustApplyAccessControlEntries(HostingModel.Tenant originEntity)
        {
            var ret = true;

            try
            {
                string probeResponseContent = await GetContentModelTenantJSONByObjectId(originEntity);
                var createdTenant = JsonConvert.DeserializeObject<ContentModel.Tenant>(probeResponseContent); // doesn't work JsonSerializer.Deserialize<ContentModel.Tenant>(postResponseJson);


                //Parallel.ForEach(createdTenant.AccessControlEntries, (ace, state) =>
                //{
                //    if (ace.SubjectPrincipals.Count() > 0)
                //    {
                //        _logger.LogInformation($"content model tenant access control entries already exists for tenant identifier = {originEntity.TenantIdentifier}");

                //        ret = false;

                //        state.Break();
                //    }
                //});

                foreach (var ace in createdTenant.AccessControlEntries)
                {
                    if (ace.SubjectPrincipals.Count() > 0)
                    {
                        _logger.LogTrace($"content model tenant access control entries already exists for tenant identifier = {originEntity.TenantIdentifier}");

                        ret = false;
                        break;
                    }
                }



                ret = false;
            }
            catch (Exception ex)
            {
                _logger.LogError($"problem validating tenant deployment {ex.Message}");
                ret = true;
            }

            return ret;
        }

        private async Task<bool> IsMustCreateContentModelTenant(HostingModel.Tenant originEntity)
        {
            using (var scope = this._services.CreateScope())
            {

                var ret = false;


                try
                {
                    string probeResponseContent = await GetContentModelTenantJSONByObjectId(originEntity);
                    var createdTenant = JsonConvert.DeserializeObject<ContentModel.Tenant>(probeResponseContent); // doesn't work JsonSerializer.Deserialize<ContentModel.Tenant>(postResponseJson);
                    if (createdTenant != null)
                    {
                        _logger.LogTrace($"content model tenant record already exists for tenant identifier = {originEntity.TenantIdentifier}");

                        ret = false;
                    }
                    else
                    {
                        _logger.LogTrace($"content model tenant record does not already exists for tenant identifier = {originEntity.TenantIdentifier}");
                        ret = true;
                    }
                }
                catch (Exception ex)
                {
                    _logger.LogWarning($"problem validating tenant deployment {ex.Message}");
                    ret = true;
                }

                return ret;

            }
        }

        private async Task<string> GetContentModelTenantJSONByObjectId(HostingModel.Tenant originEntity)
        {

            using (var scope = this._services.CreateScope())
            {

                var ret = string.Empty;

                try
                {
                    IHttpClientFactory clientFactory = scope.ServiceProvider.GetRequiredService<IHttpClientFactory>();
                    var httpClient = clientFactory.CreateClient();

                    string identifier = originEntity.TenantIdentifier;
                    var baseUri = originEntity.BaseUrl.ToString();
                    baseUri = baseUri.TrimEnd('/');

                    var tenantProbeRoute = $"{baseUri}/{identifier}/{RESTContentModelControllerStrings.API_HORSELESSCONTENTMODEL_TENANT}/GetByObjectId/{originEntity.ObjectId}";

                    var tenantProbeRequestmessage = new HttpRequestMessage(
                        HttpMethod.Get,
                        tenantProbeRoute)
                    {
                        Headers =
                            {
                                { HeaderNames.Accept, "text/html" },
                                { HeaderNames.UserAgent, "HorselessNewspaper" }
                            }
                    };


                    var tenantProbeResponse = await httpClient.SendAsync(tenantProbeRequestmessage);
                    var probeResponseContent = await tenantProbeResponse.Content.ReadAsStringAsync();
                    ret = probeResponseContent;
                }
                catch (Exception ex)
                {
                    ret = string.Empty;
                    _logger.LogWarning($"problem getting content model tenant by object id");
                }


                return ret;

            }
        }

        private async Task<string> GetHostingModelTenantJSONByObjectId(HostingModel.Tenant originEntity)
        {
            using (var scope = this._services.CreateScope())
            {

                var ret = string.Empty;

                try
                {
                    IHttpClientFactory clientFactory = scope.ServiceProvider.GetRequiredService<IHttpClientFactory>();
                    var httpClient = clientFactory.CreateClient();

                    string identifier = originEntity.TenantIdentifier;
                    var baseUri = originEntity.BaseUrl.ToString();
                    baseUri = baseUri.TrimEnd('/');

                    var tenantProbeRoute = $"{baseUri}/{identifier}/{RESTHostingModelControllerStrings.API_HORSELESSHOSTINGMODEL_TENANT}/HostingEntitiesGetByObjectId/{originEntity.ObjectId}";

                    var tenantProbeRequestmessage = new HttpRequestMessage(
                        HttpMethod.Get,
                        tenantProbeRoute)
                    {
                        Headers =
                            {
                                { HeaderNames.Accept, "text/html" },
                                { HeaderNames.UserAgent, "HorselessNewspaper" }
                            }
                    };


                    var tenantProbeResponse = await httpClient.SendAsync(tenantProbeRequestmessage);
                    var probeResponseContent = await tenantProbeResponse.Content.ReadAsStringAsync();
                    ret = probeResponseContent;
                }
                catch (Exception ex)
                {
                    ret = string.Empty;
                    _logger.LogWarning($"problem getting hosting model tenant by object id");
                }

                return ret;

            }
        }

        private IMultiTenantStore<HorselessTenantInfo>? GetInMemoryTenantStores()
        {
            using (var scope = this._services.CreateScope())
            {

                // inject the finbuckle in-memory store
                var stores = scope.ServiceProvider.GetRequiredService<IEnumerable<IMultiTenantStore<HorselessTenantInfo>>>().ToList();

                var inMemoryStores = stores.Where(s => s.GetType() == typeof(InMemoryStore<HorselessTenantInfo>))
                       .SingleOrDefault();
                return inMemoryStores;
            }

        }

        private async Task<List<HostingModel.Tenant>> UpdateLocalHostingTenantCache()
        {
            using (var scope = this._services.CreateScope())
            {
                List<HostingModel.Tenant> hostingModelTenants = await GetCurrentHostingModelTenants();
                foreach (var hostModelTenant in hostingModelTenants
                    .Where(t => t.TenantIdentifier != null))
                {
                    if (!this.CurrentHostingModelTenants.Where(w => w.TenantIdentifier.Equals(hostModelTenant.TenantIdentifier)).Any())
                    {
                        // here because we need to cache this tenant in the singleton
                        if (hostModelTenant.TenantIdentifier != null)
                        {
                            this.CurrentHostingModelTenants.Add(hostModelTenant);
                        }
                    }
                }

                return hostingModelTenants;

            }
        }

        private async Task UpdateMultiTenantInMemoryStore(IMultiTenantStore<HorselessTenantInfo>? inMemoryStores, HostingModel.Tenant originEntity)
        {
            using (var scope = this._services.CreateScope())
            {

                var hostingModelTenantInfoQuery = this.GetQueryForHostingEntity<HostingModel.TenantInfo>(scope);
                var hostingModelTenantInfoQueryResult = await hostingModelTenantInfoQuery.ReadAsEnumerable(w => w.ParentTenantId == originEntity.Id);

                if (hostingModelTenantInfoQueryResult != null &&
                    hostingModelTenantInfoQueryResult.Any())
                {

                    var hostingModelTenantInfo = hostingModelTenantInfoQueryResult.ToList().First();
                    _logger.LogTrace($"found new undeployed tenantInfo {hostingModelTenantInfo.DisplayName}");
                    // TODO 
                    // handle multiplicity of TenantInfo per Tenant
                    // enables tenants of tenants
                    var inMemoryStoreEntity = new HorselessTenantInfo(hostingModelTenantInfo);
                    var inMemoryStoreUpdated = await inMemoryStores.TryAddAsync(inMemoryStoreEntity);
                    _logger.LogTrace($"in memory tenant store updated with tenant: {inMemoryStoreEntity.Payload.DisplayName}");

                }

            }
        }

        private async Task<List<HostingModel.Tenant>> GetCurrentHostingModelTenants()
        {
            using (var scope = this._services.CreateScope())
            {

                try
                {


                    // collect the hosting model tenants
                    var hostingModelTenantQuery = this.GetQueryForHostingEntity<HostingModel.Tenant>(scope);
                    var hostingModelTenantQueryResult =
                        await hostingModelTenantQuery.ReadAsEnumerable(w => w.IsSoftDeleted == false
                                        && w.TenantIdentifier != null,
                                        new List<string>()
                                        { nameof(HostingModel.Tenant.TenantInfos), nameof(HostingModel.Tenant.Owners) });
                    var hostingModelTenants = hostingModelTenantQueryResult == null ? new List<HostingModel.Tenant>() : hostingModelTenantQueryResult.ToList();

                    _logger.LogTrace($"read {hostingModelTenantQueryResult.Where(w => w.IsPublished == true).ToList().Count()} published hosting model tenant records");
                    _logger.LogTrace($"read {hostingModelTenantQueryResult.Where(w => w.IsPublished == false).ToList().Count()} unpublished hosting model tenant records");

                    foreach (var t in hostingModelTenantQueryResult)
                    {
                        if (t.TenantInfos != null) _logger.LogTrace($"tenant {t.DisplayName} has {t.TenantInfos.Count()} tenantinfo records");
                    }

                    return hostingModelTenants;

                }
                catch (Exception e)
                {
                    this._logger.LogError($"{this.GetType().FullName} had problems getting hosting model tenants: exception {e.Message}");
                    return new List<HostingModel.Tenant>();
                }

            }
        }

        private async Task<List<ContentModel.Tenant>> GetCurrentContentModelTenants(string expandList = "")
        {

            var ret = new List<ContentModel.Tenant>();
            string token = string.Empty;

            try
            {


                IEnumerable<HorselessTenantInfo> allCachedTenants = new List<HorselessTenantInfo>();

                using (var scope = this._services.CreateScope())
                {

                    var tenantStore = this.GetInMemoryTenantStores();
                    var cachedTenants = await tenantStore.GetAllAsync();
                    ISecurityPrincipalResolver tokenService = scope.ServiceProvider.GetRequiredService<ISecurityPrincipalResolver>();

                    allCachedTenants = cachedTenants.ToList();

                    token = await tokenService.GetClientCredentialsGrantToken();

                }

                using (var innerScope = this._services.CreateScope())
                {
                    IHttpClientFactory clientFactory = innerScope.ServiceProvider.GetRequiredService<IHttpClientFactory>();
                    var httpClient = clientFactory.CreateClient();

                    httpClient.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);

                    var baseUri = this.GetOdataBaseUrl(innerScope);
                    baseUri = baseUri.TrimEnd('/');
                    var expandClause = @"";

                    if (expandList != "")
                    {
                        expandClause = expandClause + expandList;
                    }

                    foreach (var cachedTenant in allCachedTenants)
                    {
                        var odataContentModelTenantQuery = $"{baseUri}/{ODataControllerStrings.ODATA_CONTENTMODEL_TENANT}{expandClause}";

                        var odataContentModelQueryMessage = new HttpRequestMessage(
                            HttpMethod.Get,
                            odataContentModelTenantQuery)
                        {
                            Headers =
                            {
                                { HeaderNames.Accept, "application/json;odata.metadata=full" },
                                { HeaderNames.UserAgent, "HorselessNewspaper" },
                                { ODataControllerStrings.ODATA_TENANTIDENTIFIER_HEADER, $"{cachedTenant.Identifier}" }
                            }
                        };

                        odataContentModelQueryMessage.Headers.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);

                        var odataResponse = await httpClient.SendAsync(odataContentModelQueryMessage);
                        var probeResponseContent = await odataResponse.Content.ReadAsStringAsync();
                        if (probeResponseContent == null || probeResponseContent.Equals(string.Empty))
                        {
                            return ret;
                        }

                        var contentModelTenantList = System.Text.Json.JsonSerializer.Deserialize<ODataResponse<IEnumerable<ContentModel.Tenant>>>(probeResponseContent); // JsonConvert.DeserializeObject<ODataResponse<ContentModel.Tenant>>(probeResponseContent);
                        ret.AddRange(contentModelTenantList.Value);
                        this._logger.LogTrace($"{this.GetType().FullName} has cmpleted retrieving content model tenants");
                    }
                }


                //using (var localScope = _scopeFactory.CreateAsyncScope())
                //{
                //    // collect the hosting model tenants
                //    var contentModelTenantQuery = this.GetQueryForContentEntity<ContentModel.Tenant>(localScope);
                //    var contentModelTenantQueryResult = await contentModelTenantQuery.ReadAsEnumerable(w => w.IsPublished == true && w.IsSoftDeleted == false);
                //    var results = contentModelTenantQueryResult.ToList<ContentModel.Tenant>();

                //    var contentModelTenants = contentModelTenantQueryResult == null ? new List<ContentModel.Tenant>() : contentModelTenantQueryResult.ToList();

                //    _logger.LogInformation($"read {contentModelTenants.Count()} published content model tenant records");

                //    return contentModelTenants;
                //}


            }
            catch (Exception ex)
            {
                // ret = string.Empty;

                if (ex.InnerException != null && (ex.InnerException.Message.Contains("operation") && ex.InnerException.Message.Contains("cancelled")))
                {
                    _logger.LogWarning($"operation cancelled exception {ex.Message}");
                }
                else
                {
                    _logger.LogError($"problem getting content model tenants: {ex.Message}");
                }
            }

            return ret;
        }

        [Obsolete]
        private async Task<List<HostingModel.TenantInfo>> GetCurrentContentModelTenantInfo()
        {
            using (var scope = this._services.CreateScope())
            {

                try
                {
                    // collect the hosting model tenants
                    var contentModelTenantQuery = this.GetQueryForHostingEntity<HostingModel.TenantInfo>(scope);
                    var contentModelTenantQueryResult = await contentModelTenantQuery.ReadAsEnumerable(w => w.IsSoftDeleted == false);
                    var contentModelTenants = contentModelTenantQueryResult == null ? new List<HostingModel.TenantInfo>() : contentModelTenantQueryResult.ToList();

                    _logger.LogInformation($"read {contentModelTenants.Count()} content model tenantinfo records");
                    foreach (var ti in contentModelTenants)
                    {
                        _logger.LogInformation($"tenantinfo display name : {ti.DisplayName}, tenant id {ti.ParentTenantId}");
                    }

                    return contentModelTenants;
                }
                catch (Exception e)
                {
                    _logger.LogError($"{this.GetType().FullName} had problems getting TenantInfo: exception was {e.Message}");
                    return new List<HostingModel.TenantInfo>();
                }

            }

        }

        public Task StopAsync(CancellationToken cancellationToken)
        {
            _logger.LogInformation("Timed Hosted Service is stopping.");
            _timer?.Change(Timeout.Infinite, 0);
            return Task.CompletedTask;
        }

        public void Dispose()
        {
            _timer?.Dispose();
        }
    }
}
