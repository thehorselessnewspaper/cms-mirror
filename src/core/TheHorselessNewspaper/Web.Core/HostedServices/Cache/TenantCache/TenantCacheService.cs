using Finbuckle.MultiTenant.Stores;
using Finbuckle.MultiTenant;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.HostingModel.Context;
using TheHorselessNewspaper.HostingModel.Entities.Query;
using TheHorselessNewspaper.Schemas.HostingModel.Context;
using HostingModel = TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using HorselessNewspaper.Web.Core.Authorization.Model.MultiTenant;
using System.Collections.Generic;

namespace HorselessNewspaper.Web.Core.HostedServices.Cache.TenantCache
{
    /// <summary>
    /// maintain a cache of tenants 
    /// and their web api endpoints
    /// </summary>
    internal class TenantCacheService : IHostedService
    {
        // as per https://stackoverflow.com/questions/63468682/how-to-stop-a-timer-created-in-a-net-core-controller
        private static readonly object _timerLock = new object();
        private long _defaultTimerDelayInSeconds = 30;

        public long TimerDelayInSeconds { get; set; }

        private readonly ILogger<TenantCacheService> _logger;
        private Timer _timer = null!;

        IServiceProvider _services;

        public TenantCacheService(ILogger<TenantCacheService> logger,
            IServiceProvider services)
        {
            _logger = logger;
            _services = services;

            TimerDelayInSeconds = _defaultTimerDelayInSeconds;

            _timer = new Timer(HandleTimerElapsed, null, TimeSpan.Zero,
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
                List<ContentModel.Tenant> contentModelTenants = new List<ContentModel.Tenant>();
                IEnumerable<ContentModel.Tenant> tenantList;

                using (var innerScope = _services.CreateScope())
                {
                    try
                    {
                        // collect the content model tenants
                        var contentModelTenantQuery = this.GetQueryForContentEntity<ContentModel.Tenant>(innerScope);

                        tenantList = await contentModelTenantQuery.Read(r => r.IsSoftDeleted == false);

                        contentModelTenants = tenantList.ToList();

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

                        await HandleScopedLogic(scope, contentModelTenants);

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
                    _timer.Change(GetTimespanForSeconds(0), GetTimespanForSeconds(TimerDelayInSeconds));
                }
            }


        }

        private async Task HandleScopedLogic(IServiceScope scope, List<ContentModel.Tenant> contentModelTenants)
        {
            // collect the hosting model tenants
            var hostingModelTenantQuery = this.GetQueryForHostingEntity<HostingModel.Tenant>(scope);
            var hostingModelTenantQueryResult = await hostingModelTenantQuery.Read();
            var hostingModelTenants = hostingModelTenantQueryResult.ToList();


            _logger.LogInformation($"read {hostingModelTenantQueryResult.ToList().Count()} hosting model tenant records");


            // inject the finbuckle in-memory store
            var stores = _services.GetService<IEnumerable<IMultiTenantStore<HorselessTenantInfo>>>().ToList();

            var inMemoryStores = stores.Where(s => s.GetType() == typeof(InMemoryStore<HorselessTenantInfo>))
                   .SingleOrDefault();

            // merge content model tenants with hosting model tenants
            // meaning, migrate tenant entities from the content model db
            // to the hosting model db
            // the migrated entity should == original entity
            // where == is based on uniquely constrained columns
            foreach (var originEntity in hostingModelTenantQueryResult)
            {
                // filter existing merge targets
                var existingMergeTarget = hostingModelTenants.Where(r => r.Id == originEntity.Id);
                if (existingMergeTarget == null)
                {
                    _logger.LogInformation($"found new undeployed tenant {originEntity.DisplayName}");
                    var mergeEntity = new ContentModel.Tenant()
                    {
                        Id = originEntity.Id,
                        CreatedAt = originEntity.CreatedAt,
                        DisplayName = originEntity.DisplayName,
                        IsSoftDeleted = originEntity.IsSoftDeleted,
                        ObjectId = originEntity.ObjectId
                    };
                }
                else
                {
                    _logger.LogInformation($"found existing deployed tenant {originEntity.DisplayName}");

                }

                // TODO 
                // handle multiplicity of TenantInfo per Tenant
                // enables tenants of tenants
                var inMemoryStoreEntity = new HorselessTenantInfo(originEntity.TenantInfos.FirstOrDefault());


            }
        }

        public Task StopAsync(CancellationToken cancellationToken)
        {
            _logger.LogInformation("Timed Hosted Service is stopping.");
            _timer?.Change(Timeout.Infinite, 0);
            return Task.CompletedTask;
        }

    }
}
