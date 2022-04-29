using Microsoft.AspNetCore.Mvc.ApplicationParts;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Mvc.Razor.Compilation;
using Microsoft.AspNetCore.Mvc.Razor.TagHelpers;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Json;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.HostingModel.Context;
using TheHorselessNewspaper.HostingModel.Entities.Query;
using TheHorselessNewspaper.Schemas.HostingModel.Context;

namespace HorselessNewspaper.Web.Core.HostedServices.ApplicationParts.ApplicationPartsLogger
{
    /// <summary>
    /// hosted service that logs asp.net core application parts
    /// as per https://andrewlock.net/when-asp-net-core-cant-find-your-controller-debugging-application-parts/
    /// as per https://docs.microsoft.com/en-us/aspnet/core/mvc/advanced/app-parts?view=aspnetcore-6.0
    /// </summary>
    internal class ApplicationPartsLogger : IHostedService
    {
        private readonly ILogger<ApplicationPartsLogger> _logger;
        private readonly ApplicationPartManager _partManager;
        private Timer _timer = null!;
        private long _defaultTimerDelayInSeconds = 30;

        IServiceProvider _services;
        public long TimerDelayInSeconds { get; set; }
        public ApplicationPartsLogger(ILogger<ApplicationPartsLogger> logger, ApplicationPartManager partManager, IServiceProvider services)
        {
            _logger = logger;
            _partManager = partManager;
            TimerDelayInSeconds = _defaultTimerDelayInSeconds;
            this._services = services;
        }

        public Task StartAsync(CancellationToken cancellationToken)
        {

            // start the timer
            _logger.LogInformation("Timed Hosted Service running.");
            _timer = new Timer(DoWork, null, TimeSpan.Zero,
                TimeSpan.FromSeconds(TimerDelayInSeconds));


            return Task.CompletedTask;
        }

        private string GetRestBaseUrl(IServiceScope innerScope)
        {
            var configuration = innerScope.ServiceProvider.GetRequiredService<IConfiguration>();
            var configuredRestBaseUrl = configuration["RestApiBaseUrl"];
            return configuredRestBaseUrl;
        }
        private JsonContent GetJsonContent<T>(T content)
        {
            return JsonContent.Create(content);
        }

        private string GetOdataBaseUrl(IServiceScope innerScope)
        {
            var configuration = innerScope.ServiceProvider.GetRequiredService<IConfiguration>();
            var configuredRestBaseUrl = configuration["OdataApiBaseUrl"];
            return configuredRestBaseUrl;
        }

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

        internal void DoWork(object? state)
        {

            _timer.Change(Timeout.Infinite, Timeout.Infinite);


            // Get the names of all the application parts. This is the short assembly name for AssemblyParts
            var applicationParts = _partManager.ApplicationParts.Select(x => x.Name);

            // Create a controller feature, and populate it from the application parts
            var controllerFeature = new ControllerFeature();
            _partManager.PopulateFeature(controllerFeature);

            // Get the names of all of the controllers
            var controllers = controllerFeature.Controllers.Select(x => x.FullName);

            // Log the application parts and controllers
            _logger.LogTrace("Found controllers in the following application parts: '{ApplicationParts}' with the following controllers: '{Controllers}'",
                string.Join(", ", applicationParts), string.Join(", ", controllers));
            
            
            var tagHelperFeature = new TagHelperFeature();
            _partManager.PopulateFeature(tagHelperFeature);
            var tagHelpers = tagHelperFeature.TagHelpers.Select(x => x.FullName);
            _logger.LogTrace("Found taghellpers in the following application parts: '{ApplicationParts}' with the following tag helpers: '{tagHelpers}'",
            string.Join(", ", applicationParts), string.Join(", ", tagHelpers));

            var viewsFeature = new ViewsFeature();
            _partManager.PopulateFeature(viewsFeature);
            var views = viewsFeature.ViewDescriptors.Select(x => x.RelativePath);
            _logger.LogTrace("Found viwes in the following application parts: '{ApplicationParts}' with the following views: '{views}'",
            string.Join(", ", applicationParts), string.Join(", ", views));


            _timer.Change(GetTimespanForSeconds(TimerDelayInSeconds), GetTimespanForSeconds(TimerDelayInSeconds));
        }


        private TimeSpan GetTimespanForSeconds(long seconds)
        {

            TimeSpan period = TimeSpan.FromSeconds(30);
            return period;
        }

        // Required by the interface
        public Task StopAsync(CancellationToken cancellationToken)
        {
            _logger.LogInformation("Timed Hosted Service is stopping.");
            _timer?.Change(Timeout.Infinite, 0);
            return Task.CompletedTask;
        }
    }
}
