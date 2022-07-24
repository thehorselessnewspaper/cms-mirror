using AutoMapper;
using Finbuckle.MultiTenant;
using Finbuckle.MultiTenant.Stores;
using HorselessNewspaper.Core.Interfaces.Constants.ControllerRouteStrings;
using HorselessNewspaper.Web.Core.Interfaces.Cache;
using HorselessNewspaper.Web.Core.Model.Query;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.Net.Http.Headers;
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
using HorselessNewspaper.Web.Core.Services.Query.HorselessRESTAPIClient;
using System.Net.Http.Json;
using Newtonsoft.Json;
using System;

namespace HorselessNewspaper.Web.Core.HostedServices.Cache.TenantCache
{
    /// <summary>
    /// use this as the public face of timed updates
    /// </summary>
    public interface ITenantCacheService
    {
        //public ICollection<ContentModel.Tenant> CurrentContentModelTenants { get; set; }
        //public ICollection<HostingModel.Tenant> CurrentHostingModelTenants { get; set; }
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
                    var hostingModelOperator = GetQueryForHostingEntity<HostingModel.Tenant>(scope);
                    _logger.LogError($"auto healing problem initializing databases {e.Message}");
                    // var hostingModelOperator = GetQueryForHostingEntity<HostingModel.Tenant>(scope);

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

                var hasHydratedStaticallyDefinedTenants = await HydrateCaches();
                if (hasHydratedStaticallyDefinedTenants)
                {
                    // no need
                    // await SetCurrentContentModelTenants();

                    _logger.LogInformation("got current content model tenants");


                    await HandleDeploymentWorkflow();

                }

                _timer.Change(GetTimespanForSeconds(TimerDelayInSeconds), GetTimespanForSeconds(TimerDelayInSeconds));

            }
            catch (Exception e)
            {
                _logger.LogWarning($"exception in tenant cache service {e.Message}");


                // give the db time to reset
                _timer.Change(GetTimespanForSeconds(360), GetTimespanForSeconds(360));
            }

        }

        /// <summary>
        /// persist hardcoded tenants in hosting db
        /// </summary>
        /// <returns></returns>
        public async Task<bool> HydrateCaches()
        {
            var ret = false;

            using (var scope = _services.CreateScope())
            {
                try
                {

                    var hostingModelOperator = scope.ServiceProvider.GetRequiredService<IQueryableHostingModelOperator<HostingModel.Tenant>>();
                    var stores = scope.ServiceProvider.GetRequiredService<IEnumerable<IMultiTenantStore<HorselessTenantInfo>>>().ToList();

                    var inMemoryStores = stores.Where(s => s.GetType() == typeof(InMemoryStore<HorselessTenantInfo>))
                           .SingleOrDefault();

                    var staticTenants = await inMemoryStores.GetAllAsync();
                    foreach (var staticTenant in staticTenants)
                    {
                        var hostingTenantQuery = await hostingModelOperator.ReadAsEnumerable(w => w.TenantIdentifier.Equals(staticTenant.Identifier));
                        var currentTenant = staticTenant.Payload.ParentTenant;
                        if (currentTenant != null)
                        {
                            await EnsureCachedTenant(currentTenant);


                            // check if already in hosting db
                            var existsQuery = await hostingModelOperator.Read(w => w.TenantIdentifier.Equals(staticTenant.Identifier));
                            var existsQueryResult = existsQuery.Any();

                            if (!existsQueryResult)
                            {
                                _logger.LogTrace($"found static tenant not hydrated in hosting db: tenantIdentifier = {staticTenant.Identifier}");
                                currentTenant.IsPublished = false;
                                currentTenant.DeploymentState = TenantDeploymentWorkflowState.Approved;
                                var createResult = await hostingModelOperator.Create(currentTenant);
                                _logger.LogTrace($"hydrated static tenant not hydrated in hosting db: tenantIdentifier = {staticTenant.Identifier}");
                            }
                            else
                            {
                                _logger.LogTrace($"found static tenant already hydrated in hosting db: tenantIdentifier = {staticTenant.Identifier}");
                            }
                        }
                        else
                        {
                            // todo here because static tenantinfo loses parenttenant link 
                            // after hydration
                        }
                    }


                    // hydrate inprogress deployments
                    // todo ensure a paged iteration through all tenants 
                    // within a bounded period
                    // obviously hydration revisit time < cache expiration time
                    var inproressQuery = await hostingModelOperator.ReadAsEnumerable(r => r.DeploymentState == TenantDeploymentWorkflowState.Approved || r.DeploymentState == TenantDeploymentWorkflowState.DeploymentComplete);
                    if (inproressQuery != null && inproressQuery.Any())
                    {
                        foreach (var item in inproressQuery)
                        {
                            await this.EnsureCachedTenant(item);
                        }
                    }

                    //done hydrating statix tenants
                    ret = true;
                }
                catch (Exception ex)
                {
                    _logger.LogError($"exception deploying static tenants {ex.Message}");
                    ret = false;
                    return ret;
                }


            }

            return ret;
        }

        private async Task EnsureCachedTenant(Tenant? currentTenant)
        {
            using (var cacheScope = _services.CreateScope())
            {
                // cache this tenant in the distributed cache store
                var cacheStores = cacheScope.ServiceProvider.GetRequiredService<IEnumerable<IMultiTenantStore<HorselessTenantInfo>>>().ToList();

                var distributedCacheStore = cacheStores.Where(s => s.GetType() == typeof(DistributedCacheStore<HorselessTenantInfo>))
                       .SingleOrDefault();

                var cachedTenantExists = await distributedCacheStore.TryGetByIdentifierAsync(currentTenant.TenantIdentifier);
                HorselessTenantInfo cacheEntity = cachedTenantExists == null ? new HorselessTenantInfo() : cachedTenantExists;
                if (cachedTenantExists == null)
                {
                    if (currentTenant.TenantInfos != null && currentTenant.TenantInfos.Any())
                    {
                        new HorselessTenantInfo(currentTenant.TenantInfos.First());
                    }
                    else
                    {
                        cacheEntity.Payload = new HostingModel.TenantInfo();
                    }

                    cacheEntity.Id = currentTenant.Id.ToString();
                    cacheEntity.Name = currentTenant.DisplayName;
                    cacheEntity.Payload.ObjectId = currentTenant.ObjectId;

                    cacheEntity.Identifier = currentTenant.TenantIdentifier;
                    cacheEntity.Payload.ParentTenant = currentTenant;


                    await distributedCacheStore.TryAddAsync(cacheEntity);
                }
                else
                {
                    _logger.LogTrace("tenant cached in tenant store");
                }
            }

        }

        private async Task HandleDeploymentWorkflow()
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

        private System.Net.Http.Json.JsonContent GetJsonContent<T>(T content)
        {
            return JsonContent.Create(content);
        }

        private async Task HandleScopedLogic()
        {

            var hostingModelTenants = await EnsureInProgressDeployments();

            //var contentModelTenants = await this.GetCurrentContentModelTenants("$top=200&$expand=Owners, AccessControlEntries");
            //IMultiTenantStore<HorselessTenantInfo>? inMemoryStores = GetInMemoryTenantStores();

            await EnsureTenantEntityWorkflow(hostingModelTenants);

            await ValidateCaches();

        }

        private async Task<bool> EnsureTenantEntityWorkflow(IEnumerable<HostingModel.Tenant> hostingModelTenants)
        {
            var ret = false;
            using (var scope = this._services.CreateScope())
            {

                // merge content model tenants with published hosting model tenants
                // meaning, migrate published tenant entities from the hosting model db
                // to the content model db
                // the migrated entity should == original entity
                // where == is based on uniquely constrained columns
                var restClient = scope.ServiceProvider.GetRequiredService<IHorselessRESTAPIClient>();
                var contentModelOperator = scope.ServiceProvider.GetRequiredService<IQueryableContentModelOperator<ContentModel.Tenant>>();
                var hostingModelOperator = scope.ServiceProvider.GetRequiredService<IQueryableHostingModelOperator<HostingModel.Tenant>>();
                var mapper = scope.ServiceProvider.GetRequiredService<IMapper>();

                foreach (var approvedTenant in hostingModelTenants)
                {
                    try
                    {

                        // do not directly mutate
                        var initialDeploymentState = approvedTenant.DeploymentState;

                        // directly mutate on state changes
                        var currentDeploymentState = ContentModel.TenantDeploymentWorkflowState.Approved;

                        var initialStateQuery = await this.GetCurrentContentModelTenants($"$filter=TenantIdentifier eq '{approvedTenant.TenantIdentifier}'", approvedTenant.TenantIdentifier);
                        if (initialStateQuery != null && initialStateQuery.Any())
                        {
                            var tenantStateQueryResult = initialStateQuery.First();
                            currentDeploymentState = tenantStateQueryResult.DeploymentState;
                        }

                        // filter existing merge targets
                        // evaluate wether final tenant deployment
                        // workflow step completed
                        if (currentDeploymentState == ContentModel.TenantDeploymentWorkflowState.Approved)
                        {
                            var probeResult = await this.ProbeTenantRouting(approvedTenant);
                            if (probeResult)
                            {
                                // tenant deployment approved. deploy tenant to content db
                                approvedTenant.DeploymentState = TenantDeploymentWorkflowState.ExistsInContentDb;
                                var deployedTenant = await DeployPublishedTenant(approvedTenant);

                                var tenantStateQuery = await this.GetCurrentContentModelTenants($"$filter=TenantIdentifier eq '{approvedTenant.TenantIdentifier}'", approvedTenant.TenantIdentifier);

                                // var tenantStateQuery = await contentModelOperator.ReadAsEnumerable(w => w.TenantIdentifier == deployedTenant.TenantIdentifier);
                                if (tenantStateQuery.Any())
                                {
                                    var tenantStateQueryResult = tenantStateQuery.First();
                                    currentDeploymentState = tenantStateQueryResult.DeploymentState;
                                }
                            }


                        }

                        // post the content collection
                        if (currentDeploymentState == ContentModel.TenantDeploymentWorkflowState.ExistsInContentDb)
                        {
                            try
                            {
                                var probeResult = await this.ProbeTenantRouting(approvedTenant);
                                if (probeResult)
                                {
                                    var mutatingEntityQuery = await this.GetCurrentContentModelTenants($"$filter=TenantIdentifier eq '{approvedTenant.TenantIdentifier}'", approvedTenant.TenantIdentifier);

                                    // post tenant specific entities to the new tenant
                                    // var mutatingEntityQuery = await contentModelOperator.ReadAsEnumerable(w => w.TenantIdentifier.Equals(approvedTenant.TenantIdentifier));
                                    if (mutatingEntityQuery.Any())
                                    {
                                        var mutatingTenant = mutatingEntityQuery.First();
                                        mutatingTenant.DeploymentState = ContentModel.TenantDeploymentWorkflowState.HasContentCollection;
                                        mutatingTenant.ContentCollections.Add(DefaultEntitySets.GetDefaultContentCollections().First());
                                        var wireTenant = ContentEntitiesTenant.FromJson(JsonConvert.SerializeObject(mutatingTenant, Formatting.None, new JsonSerializerSettings()
                                        {
                                            ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                                        }));

                                        var wireContentCollection = JsonConvert.SerializeObject(mutatingTenant.ContentCollections.First(), Formatting.None, new JsonSerializerSettings()
                                        {
                                            ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                                        });

                                        // TODO add support for multiple default collections
                                        // var wireContentCollection = mapper.Map<ContentModel.ContentCollection, ContentEntitiesContentCollection>(mutatingTenant.ContentCollections.First());
                                        //var mutateResult = await restClient.
                                        //                                    ApiHorselessContentModelContentCollectionCreateAsync(mutatingTenant.TenantIdentifier.ToString(), 
                                        //                                    ContentEntitiesContentCollection.FromJson(wireContentCollection));

                                        // wireTenant.ContentCollections.Clear();
                                        var mutatedTenant = await restClient.
                                                                                            ApiHorselessContentModelTenantUpdateAsync(mutatingTenant.Id.ToString(),
                                                                                            mutatingTenant.TenantIdentifier,  wireTenant);

                                        var mutateResultJson = mutatedTenant.Result.ToJson();
                                        var deserialzedMutateResult = JsonConvert.DeserializeObject<ContentModel.Tenant>(mutateResultJson);
                                        currentDeploymentState = deserialzedMutateResult.DeploymentState;
                                    }

                                }
                            }
                            catch (Exception ex)
                            {

                                _logger.LogError($"problem marking workflow complete {ex.Message}");
                            }
                        }

                        // post the owners for the tenant
                        if (currentDeploymentState == ContentModel.TenantDeploymentWorkflowState.HasContentCollection)
                        {
                            // apply content owners
                            try
                            {
                                var mirrorTenantQuery = await this.GetCurrentContentModelTenants($"$filter=TenantIdentifier eq '{approvedTenant.TenantIdentifier}'", approvedTenant.TenantIdentifier);

                                // var mirrorTenantQuery = await contentModelOperator.ReadAsEnumerable(w => w.TenantIdentifier.Equals(approvedTenant.TenantIdentifier));
                                if (mirrorTenantQuery.Any())
                                {
                                    var mirrorTenant = mirrorTenantQuery.First();
                                    var contentModelTenant = await this.GetCurrentContentModelTenants($"$filter=TenantIdentifier eq '{mirrorTenant.TenantIdentifier}'", mirrorTenant.TenantIdentifier);
                                    if (contentModelTenant.Any())
                                    {
                                        var currentTenant = contentModelTenant.First();

                                        foreach (var owner in currentTenant.Owners)
                                        {
                                            var ownerJson = JsonConvert.SerializeObject(owner);
                                            var mirrorOwner = JsonConvert.DeserializeObject<ContentModel.Principal>(ownerJson);
                                            mirrorTenant.Owners.Add(mirrorOwner);
                                        }

                                        mirrorTenant.DeploymentState = ContentModel.TenantDeploymentWorkflowState.HasOwners; // set the workflow complete flag
                                        var wireTenant = ContentEntitiesTenant.FromJson(JsonConvert.SerializeObject(mirrorTenant, Formatting.None, new JsonSerializerSettings()
                                        {
                                            ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                                        }));
                                        var updatedProperties = new List<string>() { nameof(ContentModel.Tenant.Owners), nameof(ContentModel.Tenant.DeploymentState) };
                                        var mutateResult = await restClient.ApiHorselessContentModelTenantUpdateAsync(wireTenant.Id.ToString(), wireTenant.TenantIdentifier, wireTenant);

                                        // var mutateResult = await restClient.ApiHorselessContentModelTenantUpdatePropertiesAsync(mirrorTenant.Id.ToString(), mirrorTenant.TenantIdentifier, updatedProperties, wireTenant);
                                        var mutateResultJson = mutateResult.Result.ToJson();
                                        var deserialzedMutateResult = JsonConvert.DeserializeObject<ContentModel.Tenant>(mutateResultJson);
                                        currentDeploymentState = deserialzedMutateResult.DeploymentState;
                                    }
                                }
                            }
                            catch (Exception e)
                            {
                                _logger.LogError($"problem marking workflow complete {e.Message}");
                            }
                        }

                        if (currentDeploymentState == ContentModel.TenantDeploymentWorkflowState.HasOwners)
                        {
                            // apply acl
                            try
                            {
                                var mirrorTenantQuery = await this.GetCurrentContentModelTenants($"$filter=TenantIdentifier eq '{approvedTenant.TenantIdentifier}'", approvedTenant.TenantIdentifier);

                                // var mirrorTenantQuery = await contentModelOperator.ReadAsEnumerable(w => w.TenantIdentifier.Equals(approvedTenant.TenantIdentifier));
                                if (mirrorTenantQuery.Any())
                                {
                                    var mirrorTenant = mirrorTenantQuery.First();
                                    var contentModelTenant = await this.GetCurrentContentModelTenants($"$filter=TenantIdentifier eq '{mirrorTenant.TenantIdentifier}'", mirrorTenant.TenantIdentifier);
                                    if (contentModelTenant.Any())
                                    {
                                        var currentTenant = contentModelTenant.First();

                                        foreach (var owner in currentTenant.AccessControlEntries)
                                        {
                                            var ownerJson = JsonConvert.SerializeObject(owner);
                                            var mirrorAcl = JsonConvert.DeserializeObject<ContentModel.AccessControlEntry>(ownerJson);
                                            mirrorTenant.AccessControlEntries.Add(mirrorAcl);
                                        }

                                        mirrorTenant.DeploymentState = ContentModel.TenantDeploymentWorkflowState.HasACL; // set the workflow complete flag
                                        var wireTenant = ContentEntitiesTenant.FromJson(JsonConvert.SerializeObject(mirrorTenant, Formatting.None, new JsonSerializerSettings()
                                        {
                                            ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                                        }));
                                        var updatedProperties = new List<string>() { nameof(ContentModel.AccessControlEntry), nameof(ContentModel.Tenant.DeploymentState) };
                                        var mutateResult = await restClient.ApiHorselessContentModelTenantUpdateAsync(wireTenant.Id.ToString(), wireTenant.TenantIdentifier, wireTenant);
                                        // var mutateResult = await restClient.ApiHorselessContentModelTenantUpdatePropertiesAsync(mirrorTenant.Id.ToString(), mirrorTenant.TenantIdentifier, updatedProperties, wireTenant);
                                        var mutateResultJson = mutateResult.Result.ToJson();
                                        var deserialzedMutateResult = JsonConvert.DeserializeObject<ContentModel.Tenant>(mutateResultJson);
                                        currentDeploymentState = deserialzedMutateResult.DeploymentState;
                                    }
                                }
                            }
                            catch (Exception e)
                            {
                                _logger.LogError($"problem marking workflow complete {e.Message}");
                            }
                        }

                        if (currentDeploymentState == ContentModel.TenantDeploymentWorkflowState.HasACL)
                        {
                            // workflow complete
                            try
                            {
                                var mirrorTenantQuery = await this.GetCurrentContentModelTenants($"$filter=TenantIdentifier eq '{approvedTenant.TenantIdentifier}'", approvedTenant.TenantIdentifier);

                                // var mirrorTenantQuery = await contentModelOperator.ReadAsEnumerable(w => w.TenantIdentifier.Equals(approvedTenant.TenantIdentifier));
                                if (mirrorTenantQuery.Any())
                                {
                                    var mirrorTenant = mirrorTenantQuery.First();
                                    var contentModelTenant = await this.GetCurrentContentModelTenants($"$filter=TenantIdentifier eq '{mirrorTenant.TenantIdentifier}'", mirrorTenant.TenantIdentifier);
                                    if (contentModelTenant.Any())
                                    {
                                        var currentTenant = contentModelTenant.First();

                                        mirrorTenant.DeploymentState = ContentModel.TenantDeploymentWorkflowState.DeploymentComplete; // set the workflow complete flag
                                        var wireTenant = ContentEntitiesTenant.FromJson(JsonConvert.SerializeObject(mirrorTenant, Formatting.None, new JsonSerializerSettings()
                                        {
                                            ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                                        }));
                                        var updatedProperties = new List<string>() { nameof(ContentModel.Tenant.DeploymentState) };

                                        var mutateResult = await restClient.ApiHorselessContentModelTenantUpdateAsync(mirrorTenant.Id.ToString(), mirrorTenant.TenantIdentifier,wireTenant);

                                        // var mutateResult = await restClient.ApiHorselessContentModelTenantUpdatePropertiesAsync(mirrorTenant.Id.ToString(), mirrorTenant.TenantIdentifier, updatedProperties, wireTenant);
                                        var mutateResultJson = mutateResult.Result.ToJson();
                                        var deserialzedMutateResult = JsonConvert.DeserializeObject<ContentModel.Tenant>(mutateResultJson);

                                        // mark the hosting model deployment state as published
                                        approvedTenant.IsPublished = true;
                                        var updateResult = await hostingModelOperator.Update(approvedTenant, new List<string>() { nameof(HostingModel.Tenant.IsPublished) });

                                        switch (updateResult.DeploymentState)
                                        {
                                            case HostingModel.TenantDeploymentWorkflowState.DeploymentComplete:
                                                {
                                                    currentDeploymentState = ContentModel.TenantDeploymentWorkflowState.DeploymentComplete;
                                                    break;
                                                }
                                            default:
                                                {
                                                    break;
                                                }
                                        }
                                    }
                                }
                            }
                            catch (Exception e)
                            {
                                _logger.LogError($"problem marking workflow complete {e.Message}");
                            }
                        }

                        if (currentDeploymentState == ContentModel.TenantDeploymentWorkflowState.DeploymentComplete)
                        {
                            if (approvedTenant.IsPublished)
                            {
                                _logger.LogTrace("tenant deployment workflow complete for current batch");



                            }
                            else
                            {
                                // unable to update hosting tenant for some reason in previous step
                                // tolerate this update failure 
                                approvedTenant.IsPublished = true;
                                var udateResult = await hostingModelOperator.Update(approvedTenant, new List<string>() { nameof(HostingModel.Tenant.IsPublished) });
                                ret = true;
                            }
                        }
                        else
                        {
                            // await ValidateCaches(scope, inMemoryStores, contentModelTenants, approvedTenant);

                            _logger.LogTrace("tenant cache updated");
                        }

                    }
                    catch (Exception ex)
                    {
                        // we don't want errors to stop the entire loop here
                        _logger.LogWarning($"problem publishing tenants for tenantIdentifier={approvedTenant.TenantIdentifier}: exception {ex.Message}");
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
                    var responseTxt = response.Content.ReadAsStringAsync();
                    if (responseTxt == null || responseTxt.Equals(String.Empty))
                    {
                        ret = false;
                    }
                    else
                    {
                        /// TODO validate the home page of the tenant in additional ways
                        ret = true;
                    }
                }
                catch (Exception e)
                {
                    _logger.LogInformation($"exception probing routing tenant {e.Message}");
                    ret = false;
                }


                return await Task.FromResult(ret);
            }

        }

        private async Task ValidateCaches()
        {
            var inProgressDeployments = await this.EnsureInProgressDeployments();

            var currentPublishedTenants = await this.GetCurrentHostingModelTenants("$filter=IsPublished eq true&$top=200&$expand=Owners, AccessControlEntries, TenantInfos");

            if (inProgressDeployments == null && CurrentContentModelTenants != null)
            {
                currentPublishedTenants.AddRange(inProgressDeployments);
            }

            foreach (var publishedTenant in currentPublishedTenants)
            {
                try
                {
                    // here because we are updating the in memory tenant cache
                    _logger.LogTrace($"found existing deployed tenant {publishedTenant.DisplayName}");

                    await EnsureCachedTenant(publishedTenant);

                }
                catch (Exception e)
                {

                    _logger.LogError($"problem validating caches: {e.Message}");
                    throw new Exception("problem validating caches", e);
                }
            }

        }

        private async Task<ContentModel.Tenant> DeployPublishedTenant(HostingModel.Tenant originEntity)
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
                    IsPublished = true,
                    CreatedAt = DateTime.UtcNow,
                    DisplayName = originEntity.DisplayName,
                    IsSoftDeleted = false,
                    ObjectId = originEntity.ObjectId,
                    Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                    TenantIdentifier = originEntity.TenantIdentifier.ToLower(), // obviously sanitize this
                    BaseUrl = originEntity.BaseUrl.TrimEnd('/'),
                    Owners = new List<ContentModel.Principal>()
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
                                TenantIdentifier = originEntity.TenantIdentifier.ToLower(), // obviously sanitize this,
                                TenantIdentifierStrategyName = ContentModel.TenantIdentifierStrategyName.ASPNETCORE_ROUTE
                              }
                          }
                };

                try
                {
                    // this has to be posted to the tenant enabled endpoint
                    // once routing for the tenant is active
                    // otherwise these entities are inserted in the context
                    // of the management tenant
                    // var insertResult = await contentModelTenantQuery.Create(mergeEntity);


                    // var route = baseUri +  $"/{identifier}/" + RESTContentModelControllerStrings.API_HORSELESSCONTENTMODEL_TENANT + $"/Create";

                    var createdTenant = await EnsureContentModelTenant(originEntity, mergeEntity);
                    switch ((createdTenant.DeploymentState))
                    {
                        case ContentModel.TenantDeploymentWorkflowState.ExistsInContentDb:
                            return createdTenant;
                            break;
                        default:
                            _logger.LogError($"unexpected entity state after insertion for tenantid={originEntity.TenantIdentifier}");
                            break;
                    }

                    _logger.LogTrace($"inserted access control entries for new undeployed tenant {createdTenant.DisplayName}");
                    return createdTenant;

                }
                catch (Exception e)
                {
                    _logger.LogError($"problem inserting new content model tenant record {e.Message}");
                    throw new Exception($"problem inserting new content model tenant record {e.Message}", e);
                }

            }

        }



        private async Task<ContentModel.Tenant> EnsureContentModelTenant(HostingModel.Tenant originEntity, ContentModel.Tenant mergeEntity)
        {
            using (var scope = this._services.CreateScope())
            {
                var contentModelOperator = scope.ServiceProvider.GetRequiredService<IQueryableContentModelOperator<ContentModel.Tenant>>();
                var hostingModelOperator = scope.ServiceProvider.GetRequiredService<IQueryableHostingModelOperator<HostingModel.Tenant>>();
                var restClient = scope.ServiceProvider.GetRequiredService<IHorselessRESTAPIClient>();
                var mapper = scope.ServiceProvider.GetRequiredService<IMapper>();

                var ret = mergeEntity;
                _logger.LogTrace($"ensuring content model tenant post approvat database state for tenant={originEntity.TenantIdentifier}");
                try
                {
                    // ensure tenantidentifier

                    string identifier = originEntity.TenantIdentifier;
                    mergeEntity.TenantIdentifier = identifier;

                    var contentModelExistsQuery = await this.GetCurrentContentModelTenants($"$filter=TenantIdentifier eq '{mergeEntity.TenantIdentifier}'", mergeEntity.TenantIdentifier);

                    // var existsQuery = await contentModelOperator.ReadAsEnumerable(w => w.TenantIdentifier.Equals(mergeEntity.TenantIdentifier));
                    // var exists = existsQuery.Any();

                    var exists = contentModelExistsQuery != null && contentModelExistsQuery.Any();

                    var stateRecordedQuery = await hostingModelOperator.Read(w => w.IsPublished == false && w.DeploymentState == TenantDeploymentWorkflowState.Approved
                                                                && w.TenantIdentifier.Equals(mergeEntity.TenantIdentifier));
                    var hasStateRecorded = stateRecordedQuery.Any(w => w.DeploymentState == TenantDeploymentWorkflowState.ExistsInContentDb);

                    if (!exists)
                    {
                        // insert content model record
                        mergeEntity.DeploymentState = ContentModel.TenantDeploymentWorkflowState.ExistsInContentDb;
                        mergeEntity.TenantIdentifierStrategy = mergeEntity.TenantIdentifierStrategy == null ? new ContentModel.TenantIdentifierStrategy() : mergeEntity.TenantIdentifierStrategy;

                        // var mergeEntityJson = JsonConvert.SerializeObject(mergeEntity);
                        var wireTenant = ContentEntitiesTenant.FromJson(JsonConvert.SerializeObject(mergeEntity)); //mapper.Map<ContentModel.Tenant, ContentEntitiesTenant>(mergeEntity); 
                        var createResult = await restClient.ApiHorselessContentModelTenantCreateAsync(mergeEntity.TenantIdentifier, wireTenant);
                        var mapResult = JsonConvert.DeserializeObject<ContentModel.Tenant>(createResult.Result.ToJson());
                        return mapResult;


                    }

                    return ret;
                }
                catch (Exception ex)
                {
                    _logger.LogError($"problem ensuring content model tenant db updates {ex.Message}");
                    throw new Exception($"problem ensuring content model tenant db updates {ex.Message}", ex);
                }

            }
        }

        private async Task<ContentModel.Tenant> EnsureAccessControlEntriesApplied(string identifier, string baseUri, string createdTenantJson)
        {
            using (var scope = this._services.CreateScope())
            {
                var defaultTenantIdentifier = "lache";
                ContentModel.Tenant ret;

                try
                {
                    IHttpClientFactory clientFactory = scope.ServiceProvider.GetRequiredService<IHttpClientFactory>();
                    ISecurityPrincipalResolver tokenService = scope.ServiceProvider.GetRequiredService<ISecurityPrincipalResolver>();
                    var restClient = scope.ServiceProvider.GetRequiredService<IHorselessRESTAPIClient>();
                    var token = await tokenService.GetClientCredentialsGrantToken();
                    restClient.AuthorizationHeaderToken = token;

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

                    var content = GetJsonContent(createdTenant);
                    ContentEntitiesTenant dtoTenant = ContentEntitiesTenant.FromJson(await content.ReadAsStringAsync());
                    // var updatedPostResponse = await httpClient.SendAsync(updateRequest);

                    var updatedPostResponse = await restClient.ApiHorselessContentModelTenantUpdateAsync(createdTenant.Id.ToString(), dtoTenant.TenantIdentifier, dtoTenant);
                    string updatepostResponseJson = updatedPostResponse.Result.ToJson(); // await updatedPostResponse.Content.ReadAsStringAsync();
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
                var restClient = scope.ServiceProvider.GetRequiredService<IHorselessRESTAPIClient>();
                ISecurityPrincipalResolver tokenService = scope.ServiceProvider.GetRequiredService<ISecurityPrincipalResolver>();
                var token = await tokenService.GetClientCredentialsGrantToken();
                restClient.AuthorizationHeaderToken = token;
                try
                {
                    // ensure populated tenantidentifier

                    // obviously todo - implement applicationwide mechanism for getting default tenant
                    var defaultTenantIdentifier = "lache";
                    mergeEntity.TenantIdentifier = identifier;

                    // in our current info architecture, all tenants are created in the root tenant
                    var route = $"{baseUri}/{defaultTenantIdentifier}/api/HorselessContentModel/Tenant/Create";
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

                    // var content = GetJsonContent(mergeEntity);
                    // ContentEntitiesTenant dtoTenant = ContentEntitiesTenant.FromJson(await content.ReadAsStringAsync());

                    // var postResponse = await restClient.ApiHorselessContentModelTenantCreateAsync(identifier, dtoTenant);

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
                var queryResponse = await this.GetCurrentContentModelTenants($"$filter=TenantIdentifier eq '{originEntity.TenantIdentifier}'&$top=1&$expand=AccessControlEntries", originEntity.TenantIdentifier);

                if (queryResponse != null && queryResponse.Count > 0)
                {
                    var createdTenant = queryResponse.First();
                    foreach (var ace in createdTenant.AccessControlEntries)
                    {
                        if (ace.SubjectPrincipals.Count() > 0)
                        {
                            _logger.LogTrace($"content model tenant access control entries already exists for tenant identifier = {originEntity.TenantIdentifier}");

                            ret = false;
                            break;
                        }
                    }
                }

                //string probeResponseContent = await GetContentModelTenantJSONByObjectId(originEntity);
                //var createdTenant = JsonConvert.DeserializeObject<ContentModel.Tenant>(probeResponseContent); // doesn't work JsonSerializer.Deserialize<ContentModel.Tenant>(postResponseJson);

                //foreach (var ace in createdTenant.AccessControlEntries)
                //{
                //    if (ace.SubjectPrincipals.Count() > 0)
                //    {
                //        _logger.LogTrace($"content model tenant access control entries already exists for tenant identifier = {originEntity.TenantIdentifier}");

                //        ret = false;
                //        break;
                //    }
                //}



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
                    var createdTenant = JsonConvert.DeserializeObject<IEnumerable<ContentModel.Tenant>>(probeResponseContent); // doesn't work JsonSerializer.Deserialize<ContentModel.Tenant>(postResponseJson);
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
                    var restClient = scope.ServiceProvider.GetRequiredService<IHorselessRESTAPIClient>();
                    var httpClient = clientFactory.CreateClient();
                    ISecurityPrincipalResolver tokenService = scope.ServiceProvider.GetRequiredService<ISecurityPrincipalResolver>();
                    var token = await tokenService.GetClientCredentialsGrantToken();
                    restClient.AuthorizationHeaderToken = token;
                    var defaultTenantIdentifier = "lache";
                    string identifier = originEntity.TenantIdentifier;
                    var baseUri = originEntity.BaseUrl.ToString();
                    baseUri = baseUri.TrimEnd('/');

                    var tenantProbeRoute = $"{baseUri}/{defaultTenantIdentifier}/{RESTContentModelControllerStrings.API_HORSELESSCONTENTMODEL_TENANT}/GetByObjectId/{originEntity.ObjectId}";

                    var tenantProbeRequestmessage = new HttpRequestMessage(
                        HttpMethod.Get,
                        tenantProbeRoute)
                    {
                        Headers =
                            {
                                { HeaderNames.Accept, "application/json" },
                                { HeaderNames.UserAgent, "HorselessNewspaper" }
                            }
                    };

                    // tolerate varying objectid,id for dynamically created entities
                    var queryResult = await this.GetCurrentContentModelTenants($"$filter=TenantIdentifier eq '{identifier}'", identifier);
                    if (queryResult != null && queryResult.Count > 0)
                    {
                        ret = JsonConvert.SerializeObject(queryResult);
                        return ret;
                    }

                    //var result = await restClient.ApiHorselessContentModelTenantGetByObjectIdAsync(originEntity.ObjectId, originEntity.TenantIdentifier);
                    //ret = result.Result.ToJson();
                    //var tenantProbeResponse = await httpClient.SendAsync(tenantProbeRequestmessage);
                    //var probeResponseContent = await tenantProbeResponse.Content.ReadAsStringAsync();
                    //ret = probeResponseContent;
                }
                catch (Exception ex)
                {
                    ret = string.Empty;
                    _logger.LogWarning($"problem getting content model tenant by object id");
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

        private async Task<IEnumerable<HostingModel.Tenant>> EnsureInProgressDeployments()
        {
            using (var scope = this._services.CreateScope())
            {

                try
                {
                    var currentPublishedTenants = await this.GetCurrentHostingModelTenants("$top=200&$expand=Owners, AccessControlEntries, TenantInfos");

                    // collect the hosting model tenants
                    var hostingModelTenantQuery = scope.ServiceProvider.GetRequiredService<IQueryableHostingModelOperator<HostingModel.Tenant>>();

                    //var hostingModelTenantQueryResult =
                    //    await hostingModelTenantQuery.ReadAsEnumerable(w => w.IsSoftDeleted == false
                    //                                                        && w.IsPublished == false
                    //                                                        && w.DeploymentState != TenantDeploymentWorkflowState.DeploymentComplete
                    //                                                        && w.DeploymentState == TenantDeploymentWorkflowState.Approved
                    //                                                        && w.TenantIdentifier != null,
                    //                                                        new List<string>()
                    //                                                        { nameof(HostingModel.Tenant.TenantInfos), nameof(HostingModel.Tenant.Owners) });

                    //var hostingModelTenants = hostingModelTenantQueryResult == null ? new List<HostingModel.Tenant>() : currentPublishedTenants.ToList();

                    //_logger.LogTrace($"read {hostingModelTenantQueryResult.Where(w => w.IsPublished == true).ToList().Count()} published hosting model tenant records");
                    //_logger.LogTrace($"read {hostingModelTenantQueryResult.Where(w => w.IsPublished == false).ToList().Count()} unpublished hosting model tenant records");

                    var filteredTenants = new List<HostingModel.Tenant>();
                    if (currentPublishedTenants != null && currentPublishedTenants.Any())
                    {
                        filteredTenants.AddRange(
                            currentPublishedTenants.Where(w => w.DeploymentState == TenantDeploymentWorkflowState.Approved ||
                                                        w.DeploymentState == TenantDeploymentWorkflowState.DeploymentComplete).ToList()
                            );

                        foreach (var filteredTenant in filteredTenants)
                        {
                            // tenant resolution is necessary for all these tenants
                            // via the tenant cache
                            await this.EnsureCachedTenant(filteredTenant);
                        }
                    }

                    // take amount * service execution frequency = deploymentRate
                    // hosting model tenant IsPublished when contentmodel tenant deploymentstate is complete
                    var filterlist = filteredTenants.Where(w => w.IsPublished == false).Take(100).ToList();
                    return filterlist;
                }
                catch (Exception e)
                {
                    this._logger.LogError($"{this.GetType().FullName} had problems getting hosting model tenants: exception {e.Message}");
                    return new List<HostingModel.Tenant>();
                }

            }
        }


        private async Task<List<HostingModel.Tenant>> GetCurrentHostingModelTenants(string odataQuery = "")
        {

            var ret = new List<HostingModel.Tenant>();
            string token = string.Empty;

            try
            {


                IEnumerable<HorselessTenantInfo> allCachedTenants = new List<HorselessTenantInfo>();

                // get auth token
                token = await GetAuthToken(token);

                using (var innerScope = this._services.CreateScope())
                {
                    var defaultTenantIdentifier = "lache";
                    IHttpClientFactory clientFactory = innerScope.ServiceProvider.GetRequiredService<IHttpClientFactory>();
                    var httpClient = clientFactory.CreateClient();

                    httpClient.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);

                    var baseUri = this.GetOdataBaseUrl(innerScope);
                    baseUri = baseUri.TrimEnd('/');
                    var expandClause = @"";

                    if (odataQuery != "")
                    {
                        expandClause = expandClause + odataQuery;
                    }

                    var odataContentModelTenantQuery = $"{baseUri}/{defaultTenantIdentifier}/{ODataControllerStrings.ODATA_HOSTINGMODEL_TENANT}{expandClause}";

                    var odataContentModelQueryMessage = new HttpRequestMessage(
                        HttpMethod.Get,
                        odataContentModelTenantQuery)
                    {
                        Headers =
                            {
                                { HeaderNames.Accept, "application/json;odata.metadata=full" },
                                { HeaderNames.UserAgent, "HorselessNewspaper" },
                                { ODataControllerStrings.ODATA_TENANTIDENTIFIER_HEADER, $"{defaultTenantIdentifier}" }
                            }
                    };

                    odataContentModelQueryMessage.Headers.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);

                    var odataResponse = await httpClient.SendAsync(odataContentModelQueryMessage);
                    var probeResponseContent = await odataResponse.Content.ReadAsStringAsync();
                    if (probeResponseContent == null || probeResponseContent.Equals(string.Empty))
                    {
                        return ret;
                    }

                    var contentModelTenantList = System.Text.Json.JsonSerializer.Deserialize<ODataResponse<IEnumerable<HostingModel.Tenant>>>(probeResponseContent); // JsonConvert.DeserializeObject<ODataResponse<ContentModel.Tenant>>(probeResponseContent);
                    ret.AddRange(contentModelTenantList.Value);
                    this._logger.LogTrace($"{this.GetType().FullName} has cmpleted retrieving content model tenants");


                }
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

        private async Task<List<ContentModel.Tenant>> GetCurrentContentModelTenants(string expandList, string tenantIdentifier)
        {

            var ret = new List<ContentModel.Tenant>();
            string token = string.Empty;

            try
            {


                IEnumerable<HorselessTenantInfo> allCachedTenants = new List<HorselessTenantInfo>();

                // get auth token
                token = await GetAuthToken(token);

                using (var innerScope = this._services.CreateScope())
                {
                    var defaultTenantIdentifier = tenantIdentifier == "" ? "lache" : tenantIdentifier;
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

                    var odataContentModelTenantQuery = $"{baseUri}/{defaultTenantIdentifier}/{ODataControllerStrings.ODATA_CONTENTMODEL_TENANT}{expandClause}";

                    var odataContentModelQueryMessage = new HttpRequestMessage(
                        HttpMethod.Get,
                        odataContentModelTenantQuery)
                    {
                        Headers =
                            {
                                { HeaderNames.Accept, "application/json;odata.metadata=full" },
                                { HeaderNames.UserAgent, "HorselessNewspaper" },
                                { ODataControllerStrings.ODATA_TENANTIDENTIFIER_HEADER, $"{defaultTenantIdentifier}" }
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

        private async Task<string> GetAuthToken(string token)
        {
            using (var scope = this._services.CreateScope())
            {

                // var tenantStore = this.GetInMemoryTenantStores();
                // var cachedTenants = await tenantStore.GetAllAsync();
                ISecurityPrincipalResolver tokenService = scope.ServiceProvider.GetRequiredService<ISecurityPrincipalResolver>();

                // allCachedTenants = cachedTenants.ToList();

                token = await tokenService.GetClientCredentialsGrantToken();

            }

            return token;
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
