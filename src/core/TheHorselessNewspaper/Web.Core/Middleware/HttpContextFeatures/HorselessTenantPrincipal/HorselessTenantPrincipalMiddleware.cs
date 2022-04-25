﻿using Finbuckle.MultiTenant;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using Microsoft.Extensions.DependencyInjection;
using HorselessNewspaper.Web.Core.UnitOfWork.ContentModelTasks.PrincipalTasks;
using Microsoft.Extensions.Logging;
using HorselessNewspaper.Web.Core.Interfaces.Security.Resolver;

namespace HorselessNewspaper.Web.Core.Middleware.HttpContextFeatures.HorselessTenantPrincipal
{
    /// <summary>
    /// 
    /// populate the HttpRequest.Features collection
    /// with a tenant principal object
    /// 
    /// probably want to register this early in the pipeline
    /// </summary>
    public class HorselessTenantPrincipalMiddleware 
    {

        private readonly RequestDelegate _next;
        ISecurityPrincipalResolver _securityPrincipalResolver;
        ILogger<HorselessTenantPrincipalMiddleware> _logger;
        /// <summary>
        /// should probably accept an IEnumerable<ISecurityPrincipalResolver>
        /// as per https://stackoverflow.com/questions/39174989/how-to-register-multiple-implementations-of-the-same-interface-in-asp-net-core
        /// </summary>
        /// <param name="next"></param>
        /// <param name="securityPrincipalResolver"></param>
        public HorselessTenantPrincipalMiddleware(RequestDelegate next, ILogger<HorselessTenantPrincipalMiddleware> logger )
        {
            _next = next;
            // this._securityPrincipalResolver = securityPrincipalResolver;
            this._logger = logger;
        }

        public async Task InvokeAsync(HttpContext context, IServiceProvider serviceProvider, ISecurityPrincipalResolver securityPrincipalResolver)
        {
            try
            {
                var ensuredTenant = await securityPrincipalResolver.EnsureTenant();

                var currentPrincipal = await securityPrincipalResolver.GetCurrentPrincipal();

                int i = 0;
            }
            catch (Exception e)
            {
                _logger.LogError($"problem initializing horseless tenant principal {e.Message}");
            }

            await _next(context);

        }
    }

    public static class HorselessTenantPrincipalMiddlewareExtensions
    {
        /// <summary>
        /// registers middleware that populates a tenant principal entity
        /// and adds it to the httprequest.features collection
        /// </summary>
        /// <param name="builder"></param>
        /// <returns></returns>
        public static IApplicationBuilder UseHorselessTenantPrincipalMiddleware(
            this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<HorselessTenantPrincipalMiddleware>();
        }
    }
}
