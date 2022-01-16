using HorselessNewspaper.Web.Core.HostedServices.ApplicationParts.ApplicationPartsLogger;
using HorselessNewspaper.Web.Core.Interfaces.Content;
using HorselessNewspaper.Web.Core.Interfaces.Hosting;
using Microsoft.AspNetCore.Mvc.ApplicationParts;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.HostingModel.Entities.Query;
using HostingModel = TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;

namespace HorselessNewspaper.Web.Core.HostedServices.Cache.TenantCache
{
    /// <summary>
    /// maintain a cache of tenants 
    /// and their web api endpoints
    /// </summary>
    internal class TenantCacheService : IHostedService
    {
        private readonly ILogger<TenantCacheService> _logger;
        private Timer _timer = null!;
        IHostingCollectionService<IQueryableHostingModelOperator<HostingModel.TenantInfo>, HostingModel.TenantInfo> _tenantService;

        public TenantCacheService(ILogger<TenantCacheService> logger,
            IHostingCollectionService<IQueryableHostingModelOperator<HostingModel.TenantInfo>, HostingModel.TenantInfo> tenantService)
        {
            _logger = logger;
            _tenantService = tenantService;
        }

        public Task StartAsync(CancellationToken cancellationToken)
        {
            // start the timer
            _logger.LogInformation("Timed Hosted Service running.");
            _timer = new Timer(DoWork, null, TimeSpan.Zero,
                TimeSpan.FromSeconds(30));


            return Task.CompletedTask;
        }

        private void DoWork(object? state)
        {
            throw new NotImplementedException();
        }

        public Task StopAsync(CancellationToken cancellationToken)
        {
            _logger.LogInformation("Timed Hosted Service is stopping.");
            _timer?.Change(Timeout.Infinite, 0);
            return Task.CompletedTask;
        }
    }
}
