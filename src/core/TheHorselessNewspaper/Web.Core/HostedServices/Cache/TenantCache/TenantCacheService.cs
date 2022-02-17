using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using TheHorselessNewspaper.HostingModel.Context;
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
        // as per https://stackoverflow.com/questions/63468682/how-to-stop-a-timer-created-in-a-net-core-controller
        private static readonly object _timerLock = new object();
        private long _defaultTimerDelayInSeconds = 30;

        public long TimerDelayInSeconds { get; set; }

        private readonly ILogger<TenantCacheService> _logger;
        private Timer _timer = null!;
        IQueryableHostingModelOperator<HostingModel.TenantInfo> _tenantInfoQuery;
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

                // retrieve tenants from the hosting collection
                using (var scope = _services.CreateScope())
                {
                    var tenantQuery = this.GetQueryForHostingEntity<HostingModel.Tenant>(scope);
                    var result = await tenantQuery.Read();
                    _logger.LogInformation($"read {result.Count()} records");
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

        public Task StopAsync(CancellationToken cancellationToken)
        {
            _logger.LogInformation("Timed Hosted Service is stopping.");
            _timer?.Change(Timeout.Infinite, 0);
            return Task.CompletedTask;
        }

    }
}
