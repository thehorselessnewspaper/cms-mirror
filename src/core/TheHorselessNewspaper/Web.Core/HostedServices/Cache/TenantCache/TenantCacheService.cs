using Finbuckle.MultiTenant;
using Finbuckle.MultiTenant.Stores;
using HorselessNewspaper.Core.Interfaces.Constants.ControllerRouteStrings;
using HorselessNewspaper.Web.Core.Interfaces.Cache;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Net.Http.Headers;
using System.Net.Http.Json;
using System.Text;
using System.Text.Json;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.HostingModel.Context;
using TheHorselessNewspaper.HostingModel.Entities.Query;
using TheHorselessNewspaper.HostingModel.MultiTenant;
using TheHorselessNewspaper.Schemas.HostingModel.Context;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using HostingModel = TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;

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
    internal class TenantCacheService : ITenantCacheService, IHostedService, IDisposable
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
        public TenantCacheService(ILogger<TenantCacheService> logger, IServiceProvider services)
        {
            _logger = logger;

            _services = services;
            TimerDelayInSeconds = _defaultTimerDelayInSeconds;

            _timer = new Timer(HandleTimerElapsed, null, GetTimespanForSeconds(TimerDelayInSeconds),
            GetTimespanForSeconds(TimerDelayInSeconds));

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

            // ensure databases exist
            // TODO surface as a feature toggle
            // hardcodes content and hosting physical db 
            // as dependencies of tenantcache

            await EnsurePhysicalDatabases();

            return;
        }

        private async Task EnsurePhysicalDatabases()
        {
            try
            {
                using (var scope = _services.CreateScope())
                {
                    var contentModelOperator = GetQueryForContentEntity<ContentModel.Tenant>(scope);
                    var hostingModelOperator = GetQueryForHostingEntity<HostingModel.Tenant>(scope);

                    await contentModelOperator.EnsureDbExists();
                    await hostingModelOperator.EnsureDbExists();
                }
            }
            catch (Exception e)
            {
                _logger.LogWarning($"problem initializing databases {e.Message}");
            }
        }

        private async void HandleTimerElapsed(object? state)
        {
            _timer.Change(Timeout.Infinite, Timeout.Infinite);

            // ensure the db exists
            // this should actually be handled by polly
            // due to db container startup lag in 
            // dockerized environments
            if (!this.CurrentHostingModelTenants.Any())
            {
                await EnsurePhysicalDatabases();
            }

            await SetCurrentContentModelTenants();

            await HandleTenantCacheWorkflow();

            _timer.Change(GetTimespanForSeconds(TimerDelayInSeconds), GetTimespanForSeconds(TimerDelayInSeconds));
        }

        private async Task HandleTenantCacheWorkflow()
        {
            // retrieve tenants from the hosting collection
            using (var scope = _services.CreateScope())
            {
                try
                {

                    await HandleScopedLogic(scope);

                }
                catch (Exception e)
                {
                    _logger.LogError($"problem updating tenant cache {e.Message}");
                    _timer.Change(GetTimespanForSeconds(TimerDelayInSeconds), GetTimespanForSeconds(TimerDelayInSeconds));
                }
            }
        }

        private async Task SetCurrentContentModelTenants()
        {
            using (var innerScope = _services.CreateScope())
            {
                try
                {
                    // collect the content model tenants
                    var contentModelTenantQuery = this.GetQueryForContentEntity<ContentModel.Tenant>(innerScope);
                    
                    IEnumerable<ContentModel.Tenant> tenantList = await contentModelTenantQuery.Read(r => r.IsSoftDeleted == false);

                    foreach (var contentModelTenant in tenantList)
                    {
                        if (!this.CurrentContentModelTenants.Where(w => w.Id.Equals(contentModelTenant.Id)).Any())
                        {
                            // here because we need to cache this tenant in the singleton
                            this.CurrentContentModelTenants.Add(contentModelTenant);
                        }
                    }

                    List<ContentModel.Tenant> contentModelTenants = tenantList.ToList();

                    _logger.LogInformation($"read {contentModelTenants.Count()} content model tenant records");
                }
                catch (Exception e)
                {
                    _logger.LogError($"problem getting tenants {e.Message}");
                    _timer.Change(GetTimespanForSeconds(TimerDelayInSeconds), GetTimespanForSeconds(TimerDelayInSeconds));
                }

            }
        }

        private JsonContent GetJsonContent<T>(T content)
        {
            return JsonContent.Create(content);
        }

        private async Task HandleScopedLogic(IServiceScope scope)
        {
            List<HostingModel.Tenant> hostingModelTenants = await GetcurrenthostingModelTenants(scope);

            IMultiTenantStore<HorselessTenantInfo>? inMemoryStores = GetInMemoryTenantStores(scope);

            var contentModelTenants = await this.GetCurrentContentModelTenants(scope);

            // merge content model tenants with published hosting model tenants
            // meaning, migrate published tenant entities from the hosting model db
            // to the content model db
            // the migrated entity should == original entity
            // where == is based on uniquely constrained columns
            foreach (var publishedTenant in hostingModelTenants.Where(w => w.IsPublished == true))
            {
                // filter existing merge targets
                var isLiveTenant = contentModelTenants.Where(r => r.Id == publishedTenant.Id).Any();
                if (isLiveTenant == false)
                {
                    // validate the multitenant routing is working for this tenant
                    // database inserts specific to the tenant can only occur
                    // after tenant routing is available for a tenant
                    var probeResult = await this.ProbeTenantRouting(publishedTenant);
                    if (probeResult == true)
                    {
                        await DeployPublishedTenant(scope, publishedTenant);
                    }
                }
                else
                {
                    await ValidateCaches(scope, inMemoryStores, contentModelTenants, publishedTenant);
                }


            }

            var currentContentModelTenants = await this.GetCurrentContentModelTenants(scope);
            foreach (var currentTenant in currentContentModelTenants)
            {

            }
        }

        private async Task<bool> ProbeTenantRouting(HostingModel.Tenant tenant)
        {
            var ret = false;
            var basePath = tenant.TenantInfos.FirstOrDefault().TenantBaseUrl;

            using (var scope = _services.CreateScope())
            {

                try
                {
                    string identifier = tenant.TenantInfos.FirstOrDefault().Identifier;

                    // get the home page for the tenant
                    var route = basePath + $"/{identifier}"; //  + RESTContentModelControllerStrings.API_HORSELESSCONTENTMODEL_TENANT + $"/GetByObjectId/{tenant.ObjectId}";
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


            }

            return await Task.FromResult(ret);
        }

        private async Task ValidateCaches(IServiceScope scope, IMultiTenantStore<HorselessTenantInfo>? inMemoryStores, List<ContentModel.Tenant> contentModelTenants, HostingModel.Tenant publishedTenant)
        {
            try
            {
                // here because we are updating the in memory tenant cache
                _logger.LogInformation($"found existing deployed tenant {publishedTenant.DisplayName}");

                await UpdateMultiTenantInMemoryStore(scope, inMemoryStores, publishedTenant);


                // validate tenant cache updated
                // get the tenant cache
                var tenantCache = scope.ServiceProvider.GetRequiredService<IHorselessCacheProvider<Guid, ContentModel.Tenant>>();
                _logger.LogInformation($"loaded tenant cache service");

                var currentTenants = await GetCurrentContentModelTenants(scope);
                var liveTenant = currentTenants.Where(w => w.Id.Equals(publishedTenant.Id)).FirstOrDefault();
                tenantCache.Set(publishedTenant.Id, liveTenant);
            }
            catch (Exception e)
            {

                _logger.LogError($"problem validating caches: {e.Message}");
                throw new Exception("problem validating caches", e);
            }


        }

        private async Task DeployPublishedTenant(IServiceScope scope, HostingModel.Tenant originEntity)
        {
            _logger.LogInformation($"found new undeployed tenant {originEntity.DisplayName}");


            var hostingModelTenantInfoQuery = this.GetQueryForHostingEntity<HostingModel.TenantInfo>(scope);
            var hostingModelTenantInfoQueryResult = await hostingModelTenantInfoQuery.Read(w => w.ParentTenantId == originEntity.Id);
            var hostingModelTenantInfo = hostingModelTenantInfoQueryResult.ToList().First();
            var tenantOwner = originEntity.Owners.FirstOrDefault();

            _logger.LogInformation($"found new undeployed tenantInfo {hostingModelTenantInfo.DisplayName}");


            var mergeEntity = new TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Tenant()
            {
                Id = originEntity.Id,
                CreatedAt = originEntity.CreatedAt,
                DisplayName = originEntity.DisplayName,
                IsSoftDeleted = originEntity.IsSoftDeleted,
                ObjectId = originEntity.ObjectId,
                Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                Owners = new List<ContentModel.Principal>()
                {
                    new ContentModel.Principal()
                    {
                        Id = tenantOwner.Id,
                        CreatedAt = tenantOwner.CreatedAt,
                        DisplayName = tenantOwner.DisplayName,
                        IsSoftDeleted = tenantOwner.IsSoftDeleted,
                        ObjectId = tenantOwner.ObjectId,
                        Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                        Aud = tenantOwner.Aud,
                        Sub = tenantOwner.Sub,
                        Iss = tenantOwner.Iss
                    }
                },
                TenantIdentifierStrategy = new ContentModel.TenantIdentifierStrategy()
                {
                    Id = Guid.NewGuid(),
                    CreatedAt = originEntity.CreatedAt,
                    DisplayName = originEntity.DisplayName,
                    IsSoftDeleted = originEntity.IsSoftDeleted,
                    ObjectId = Guid.NewGuid().ToString(),
                    Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),

                    StrategyContainers = new List<ContentModel.TenantIdentifierStrategyContainer>()
                          {
                              new ContentModel.TenantIdentifierStrategyContainer()
                              {
                                Id = Guid.NewGuid(),
                                CreatedAt = originEntity.CreatedAt,
                                DisplayName = originEntity.DisplayName,
                                IsSoftDeleted = originEntity.IsSoftDeleted,
                                ObjectId = Guid.NewGuid().ToString(),
                                Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                                /// TODO this is optimistic and wrong
                                /// this code should not run if no tenantinfos exist
                                TenantIdentifier = originEntity.TenantInfos.FirstOrDefault().Identifier,
                                TenantIdentifierStrategyName = ContentModel.TenantIdentifierStrategyName.ASPNETCORE_ROUTE
                              }
                          }
                }
            };

            using (var innerScope = _services.CreateScope())
            {
                try
                {
                    _logger.LogInformation($"merging new undeployed tenant {originEntity.DisplayName}");

                    using (var tenantUpdateScope = _services.CreateScope())
                    {
                        HttpResponseMessage newTenantPostResponse;
                        var responseContent = String.Empty;
                        // collect the content model tenants

                        try
                        {
                            IHttpClientFactory clientFactory = scope.ServiceProvider.GetRequiredService<IHttpClientFactory>();
                            var httpClient = clientFactory.CreateClient();
                            
                            // this has to be posted to the tenant enabled endpoint
                            // once routing for the tenant is active
                            // otherwise these entities are inserted in the context
                            // of the management tenant
                            // var insertResult = await contentModelTenantQuery.Create(mergeEntity);

                            string identifier = originEntity.TenantInfos.FirstOrDefault().Identifier;
                            var baseUri = originEntity.TenantInfos.FirstOrDefault().TenantBaseUrl;

                            // var route = baseUri +  $"/{identifier}/" + RESTContentModelControllerStrings.API_HORSELESSCONTENTMODEL_TENANT + $"/Create";
                            var route = baseUri + $"/{identifier}/" + $"api/Tenant/Create";
                            //var postRequest = new HttpRequestMessage(HttpMethod.Post, route)
                            //{
                            //    Content = GetJsonContent(mergeEntity),
                            //    Headers =
                            //{
                            //    { HeaderNames.Accept, "application/json" },
                            //    { HeaderNames.UserAgent, "HorselessNewspaper" }
                            //}
                            //};

                            //var postResponse = await httpClient.PostAsync(postRequest);

                            var newTenantJson = JsonSerializer.Serialize(mergeEntity);
                            var requestContent = new StringContent(newTenantJson, Encoding.UTF8, "application/json");
                            newTenantPostResponse = await httpClient.PostAsync(route, requestContent);
                            responseContent = await newTenantPostResponse.Content.ReadAsStringAsync();
                            newTenantPostResponse.EnsureSuccessStatusCode();

                            _logger.LogInformation($"inserted new undeployed tenant {originEntity.DisplayName}");
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
                                var details = JsonSerializer.Deserialize<ProblemDetails>(responseContent);
                                if (details != null)
                                {
                                    _logger.LogError($"problem details supplied: {details.Title} - {details.Detail}");
                                }
                            }
                        }



                    }
                    var updatedTenants = await this.GetCurrentContentModelTenants(scope);

                    _logger.LogInformation($"read {updatedTenants.Count()} content model tenant records");

                }
                catch (Exception e)
                {
                    _logger.LogError($"problem getting tenants {e.Message}");
                    throw new Exception("problem merging tenants ", e);
                }

            }
        }

        private static IMultiTenantStore<HorselessTenantInfo>? GetInMemoryTenantStores(IServiceScope scope)
        {
            // inject the finbuckle in-memory store
            var stores = scope.ServiceProvider.GetRequiredService<IEnumerable<IMultiTenantStore<HorselessTenantInfo>>>().ToList();

            var inMemoryStores = stores.Where(s => s.GetType() == typeof(InMemoryStore<HorselessTenantInfo>))
                   .SingleOrDefault();
            return inMemoryStores;
        }

        private async Task<List<HostingModel.Tenant>> GetcurrenthostingModelTenants(IServiceScope scope)
        {
            List<HostingModel.Tenant> hostingModelTenants = await GetCurrentHostingModelTenants(scope);
            foreach (var hostModelTenant in hostingModelTenants)
            {
                if (!this.CurrentHostingModelTenants.Where(w => w.Id.Equals(hostModelTenant.Id)).Any())
                {
                    // here because we need to cache this tenant in the singleton
                    this.CurrentHostingModelTenants.Add(hostModelTenant);
                }
            }

            return hostingModelTenants;
        }

        private async Task UpdateMultiTenantInMemoryStore(IServiceScope scope, IMultiTenantStore<HorselessTenantInfo>? inMemoryStores, HostingModel.Tenant originEntity)
        {
            var hostingModelTenantInfoQuery = this.GetQueryForHostingEntity<HostingModel.TenantInfo>(scope);
            var hostingModelTenantInfoQueryResult = await hostingModelTenantInfoQuery.Read(w => w.ParentTenantId == originEntity.Id);
            var hostingModelTenantInfo = hostingModelTenantInfoQueryResult.ToList().First();
            _logger.LogInformation($"found new undeployed tenantInfo {hostingModelTenantInfo.DisplayName}");
            // TODO 
            // handle multiplicity of TenantInfo per Tenant
            // enables tenants of tenants
            var inMemoryStoreEntity = new HorselessTenantInfo(hostingModelTenantInfo);
            var inMemoryStoreUpdated = await inMemoryStores.TryAddAsync(inMemoryStoreEntity);
            _logger.LogInformation($"in memory tenant store updated with tenant: {inMemoryStoreEntity.Payload.DisplayName}");
        }

        private async Task<List<HostingModel.Tenant>> GetCurrentHostingModelTenants(IServiceScope scope)
        {
            // collect the hosting model tenants
            var hostingModelTenantQuery = this.GetQueryForHostingEntity<HostingModel.Tenant>(scope);
            var hostingModelTenantQueryResult = await hostingModelTenantQuery.Read(w => w.IsSoftDeleted == false, new List<string>() { nameof(HostingModel.Tenant.TenantInfos), nameof(HostingModel.Tenant.Owners) });
            var hostingModelTenants = hostingModelTenantQueryResult == null ? new List<HostingModel.Tenant>() : hostingModelTenantQueryResult.ToList();

            _logger.LogInformation($"read {hostingModelTenantQueryResult.Where(w => w.IsPublished == true).ToList().Count()} published hosting model tenant records");
            _logger.LogInformation($"read {hostingModelTenantQueryResult.Where(w => w.IsPublished == false).ToList().Count()} unpublished hosting model tenant records");

            foreach (var t in hostingModelTenantQueryResult)
            {
                _logger.LogInformation($"tenant {t.DisplayName} has {t.TenantInfos.Count()} tenantinfo records");
            }

            return hostingModelTenants;
        }

        private async Task<List<ContentModel.Tenant>> GetCurrentContentModelTenants(IServiceScope scope)
        {
            // collect the hosting model tenants
            var contentModelTenantQuery = this.GetQueryForContentEntity<ContentModel.Tenant>(scope);
            var contentModelTenantQueryResult = await contentModelTenantQuery.Read();
            var contentModelTenants = contentModelTenantQueryResult == null ? new List<ContentModel.Tenant>() : contentModelTenantQueryResult.ToList();

            _logger.LogInformation($"read {contentModelTenants.Count()} content model tenant records");

            return contentModelTenants;
        }

        private async Task<List<HostingModel.TenantInfo>> GetCurrentContentModelTenantInfo(IServiceScope scope)
        {
            // collect the hosting model tenants
            var contentModelTenantQuery = this.GetQueryForHostingEntity<HostingModel.TenantInfo>(scope);
            var contentModelTenantQueryResult = await contentModelTenantQuery.Read();
            var contentModelTenants = contentModelTenantQueryResult == null ? new List<HostingModel.TenantInfo>() : contentModelTenantQueryResult.ToList();

            _logger.LogInformation($"read {contentModelTenants.Count()} content model tenantinfo records");
            foreach (var ti in contentModelTenants)
            {
                _logger.LogInformation($"tenantinfo display name : {ti.DisplayName}, tenant id {ti.ParentTenantId}");
            }

            return contentModelTenants;
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
