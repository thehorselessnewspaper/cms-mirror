﻿using HorselessNewspaper.Web.Core.Interfaces.Content;
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
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using TheHorselessNewspaper.Schemas.HostingModel.Context;

namespace HorselessNewspaper.Web.Core.HostedServices.ApplicationParts.ApplicationPartsLogger
{
    /// <summary>
    /// hosted service that logs asp.net core application parts
    /// as per https://andrewlock.net/when-asp-net-core-cant-find-your-controller-debugging-application-parts/
    /// as per https://docs.microsoft.com/en-us/aspnet/core/mvc/advanced/app-parts?view=aspnetcore-6.0
    /// </summary>
    internal class ApplicationPartsLogger : IHostedService, IDisposable
    {
        private readonly ILogger<ApplicationPartsLogger> _logger;
        private readonly ApplicationPartManager _partManager;
        private Timer _timer;
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
            _timer = new Timer(DoWork, null, TimeSpan.FromSeconds(60),
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

        internal async void DoWork(object? state)
        {
            try
            {

                _timer.Change(Timeout.Infinite, Timeout.Infinite);


                // Get the names of all the application parts. This is the short assembly name for AssemblyParts
                var applicationParts = _partManager.ApplicationParts.Select(x => x.Name);

                // Create a controller feature, and populate it from the application parts
                var controllerFeature = new ControllerFeature();
                _partManager.PopulateFeature(controllerFeature);


                var tagHelperFeature = new TagHelperFeature();
                _partManager.PopulateFeature(tagHelperFeature);


                var viewsFeature = new ViewsFeature();
                _partManager.PopulateFeature(viewsFeature);
 
                // update database
                using (var scope = this._services.CreateScope())
                {


                    var viewOperator = scope.ServiceProvider
                        .GetRequiredService<IContentCollectionService<IQueryableContentModelOperator<HorselessView>, HorselessView>>();

                    foreach (var view in viewsFeature.ViewDescriptors)
                    {
                        var query = await viewOperator.Query(r => r.PhysicalPath.Equals(view.RelativePath));
                        var queryResult = query.ToList();
                        var isPreviouslyRegistered = queryResult.Any();

                        if (!isPreviouslyRegistered)
                        {
                            // handle the case of a view that must
                            // be added to the database
                            var newView = new HorselessView()
                            {
                                Id = Guid.NewGuid(),
                                ObjectId = Guid.NewGuid().ToString(),
                                Name = view.GetType().Name,
                                DisplayName = view.GetType().FullName,
                                CreatedAt = DateTime.UtcNow,
                                PhysicalPath = view.RelativePath,
                                IsActive = true,
                                Exists = true,
                                IsDirectory = false,
                                Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks)
                            };

                            try
                            {
                                // insert this view
                                var insertResult = await viewOperator.Create(newView);
                                this._logger.LogTrace($"{this.GetType().Name} is registering a new view named {newView.Name}");
                            }
                            catch(Exception e)
                            {
                                // permit continue on exception 
                                // prbably want to emit a failed event here
                                this._logger.LogError($"problem registering view {e.Message}");
                            }
                        }
                    }

                }


            }
            catch (Exception e)
            {
                this._logger.LogError($"{this.GetType().FullName} threw an exception {e.Message}");
                _timer.Change(GetTimespanForSeconds(TimerDelayInSeconds), GetTimespanForSeconds(TimerDelayInSeconds));
            }
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

        public void Dispose()
        {
            _timer.Dispose();
        }
    }
}
