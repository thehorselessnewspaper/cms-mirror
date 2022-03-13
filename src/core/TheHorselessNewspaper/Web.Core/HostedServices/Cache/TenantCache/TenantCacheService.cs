using Finbuckle.MultiTenant;
using Finbuckle.MultiTenant.Stores;
using HorselessNewspaper.Web.Core.Interfaces.Cache;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
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
    internal class TenantCacheService : ITenantCacheService, IHostedService
    {
        // as per https://stackoverflow.com/questions/63468682/how-to-stop-a-timer-created-in-a-net-core-controller
        private static readonly object _timerLock = new object();
        private static int logicLock;

        private long _defaultTimerDelayInSeconds = 30;

        public long TimerDelayInSeconds { get; set; }

        private readonly ILogger<TenantCacheService> _logger;
        private Timer _timer = null!;

        IServiceProvider _services;

        public ICollection<ContentModel.Tenant> CurrentContentModelTenants { get; set; } = new List<ContentModel.Tenant>();
        public ICollection<HostingModel.Tenant> CurrentHostingModelTenants { get; set; } = new List<HostingModel.Tenant>();


        public TenantCacheService(ILogger<TenantCacheService> logger,
            IServiceProvider services)
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

        public Task StartAsync(CancellationToken cancellationToken)
        {
            // start the timer
            _logger.LogInformation("Timed Hosted Service running.");

            return Task.CompletedTask;
        }

        private async void HandleTimerElapsed(object? state)
        {
            _timer.Change(Timeout.Infinite, Timeout.Infinite);
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

            _timer.Change(GetTimespanForSeconds(TimerDelayInSeconds), GetTimespanForSeconds(TimerDelayInSeconds));
        }

        /// <summary>
        /// thread sync failure if Task.Delay called in debugger test 
        /// </summary>
        /// <param name="state"></param>
        [Obsolete]
        private async void HandleTimerElapsedObsolete(object? state)
        {
            // singleton timer overlap issues dealt with as per
            // https://gunnarpeipman.com/avoid-overlapping-timer-calls/
            var hasLock = false;
            try
            {
                Monitor.TryEnter(_timerLock, ref hasLock);
                if (!hasLock)
                {
                    return;
                }

                _timer.Change(Timeout.Infinite, Timeout.Infinite);

                using (var innerScope = _services.CreateScope())
                {
                    try
                    {
                        // collect the content model tenants
                        var contentModelTenantQuery = this.GetQueryForContentEntity<ContentModel.Tenant>(innerScope);

                        IEnumerable<ContentModel.Tenant> tenantList = await contentModelTenantQuery.Read(r => r.IsSoftDeleted == false);

                        List<ContentModel.Tenant> contentModelTenants = tenantList.ToList();

                        _logger.LogInformation($"read {contentModelTenants.Count()} content model tenant records");
                    }
                    catch (Exception e)
                    {
                        _logger.LogError($"problem getting tenants {e.Message}");
                    }

                }


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
                    }
                }
            }
            finally
            {
                if (hasLock)
                {
                    Monitor.Exit(_timerLock);
                    _timer.Change(GetTimespanForSeconds(TimerDelayInSeconds), GetTimespanForSeconds(TimerDelayInSeconds));
                }
            }


        }

        private async Task HandleScopedLogic(IServiceScope scope)
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

            var currentTenantInfoList = await this.GetCurrentContentModelTenantInfo(scope);
            foreach (var tenantInfo in currentTenantInfoList)
            {
                _logger.LogDebug($"tenant cache service found tenantinfo: ${tenantInfo.DisplayName}");
            }

            // inject the finbuckle in-memory store
            var stores = _services.GetService<IEnumerable<IMultiTenantStore<HorselessTenantInfo>>>().ToList();

            var inMemoryStores = stores.Where(s => s.GetType() == typeof(InMemoryStore<HorselessTenantInfo>))
                   .SingleOrDefault();

            var contentModelTenants = await this.GetCurrentContentModelTenants(scope);

            // merge content model tenants with published hosting model tenants
            // meaning, migrate published tenant entities from the hosting model db
            // to the content model db
            // the migrated entity should == original entity
            // where == is based on uniquely constrained columns
            foreach (var originEntity in hostingModelTenants.Where(w => w.IsPublished == true))
            {
                // filter existing merge targets
                var existingMergeTarget = contentModelTenants.Where(r => r.Id == originEntity.Id).Any();
                if (existingMergeTarget == false)
                {
                    _logger.LogInformation($"found new undeployed tenant {originEntity.DisplayName}");


                    var hostingModelTenantInfoQuery = this.GetQueryForHostingEntity<HostingModel.TenantInfo>(scope);
                    var hostingModelTenantInfoQueryResult = await hostingModelTenantInfoQuery.Read(w => w.ParentTenantId == originEntity.Id);
                    var hostingModelTenantInfo = hostingModelTenantInfoQueryResult.ToList().First();
                    _logger.LogInformation($"found new undeployed tenantInfo {hostingModelTenantInfo.DisplayName}");


                    var mergeEntity = new TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Tenant()
                    {
                        Id = originEntity.Id,
                        CreatedAt = originEntity.CreatedAt,
                        DisplayName = originEntity.DisplayName,
                        IsSoftDeleted = originEntity.IsSoftDeleted,
                        ObjectId = originEntity.ObjectId,
                        Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
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

                                // collect the content model tenants

                                try
                                {
                                    var contentModelTenantQuery = this.GetQueryForContentEntity<ContentModel.Tenant>(tenantUpdateScope);
                                    var insertResult = await contentModelTenantQuery.Create(mergeEntity);
                                }
                                catch (Exception e)
                                {
                                    _logger.LogError($"problem inserting new content model tenant record {e.Message}");

                                }

                                _logger.LogInformation($"inserted new undeployed tenant {originEntity.DisplayName}");


                            }
                            var updatedTenants = await this.GetCurrentContentModelTenants(scope);

                            _logger.LogInformation($"read {updatedTenants.Count()} content model tenant records");


                            // TODO 
                            // handle multiplicity of TenantInfo per Tenant
                            // enables tenants of tenants
                            var inMemoryStoreEntity = new HorselessTenantInfo(hostingModelTenantInfo);
                            var inMemoryStoreUpdated = await inMemoryStores.TryAddAsync(inMemoryStoreEntity);
                            _logger.LogInformation($"in memory tenant store updated with tenant: {inMemoryStoreEntity.Payload.DisplayName}");


                        }
                        catch (Exception e)
                        {
                            _logger.LogError($"problem getting tenants {e.Message}");
                            throw new Exception("problem merging tenants ", e);
                        }

                    }


                }
                else
                {
                    _logger.LogInformation($"found existing deployed tenant {originEntity.DisplayName}");

                    // validate tenant cache updated
                    // get the tenant cache
                    var tenantCache = _services.GetRequiredService<IHorselessCacheProvider<Guid, ContentModel.Tenant>>();
                    _logger.LogInformation($"loaded tenant cache service");

                    foreach (var contentModelTenant in contentModelTenants.Where(r => r.Id == originEntity.Id))
                    {
                        _logger.LogInformation($"updating tenant cache");
                        tenantCache.Set(contentModelTenant.Id, contentModelTenant);
                        _logger.LogInformation($"tenant cache updated with tenant={contentModelTenant.DisplayName}");
                    }
                }


            }

            var currentContentModelTenants = await this.GetCurrentContentModelTenants(scope);
            foreach (var currentTenant in currentContentModelTenants)
            {

            }
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

    }
}
