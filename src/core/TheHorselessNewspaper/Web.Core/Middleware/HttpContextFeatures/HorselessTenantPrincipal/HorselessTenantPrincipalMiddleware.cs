using Finbuckle.MultiTenant;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HorselessNewspaper.Web.Core.Services.Query.Controller.Content;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using Microsoft.Extensions.DependencyInjection;
using HorselessNewspaper.Web.Core.UnitOfWork.ContentModelTasks.PrincipalTasks;
using Microsoft.Extensions.Logging;
using HorselessNewspaper.Core.Interfaces.Security.Resolver;

using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

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
            this._logger = logger;
        }

        public async Task InvokeAsync(HttpContext context, IServiceProvider serviceProvider, ISecurityPrincipalResolver securityPrincipalResolver)
        {
            bool hasEnsuredTenant = false;
            bool hasEnsuredPrincipal = false;
            bool hasEnsuredSession = false;

            try
            {
                // ensure current tenant
                try
                {
                    _logger.LogInformation("preparing HttpRequest.Feature.Tenant");
                    var isFunctionalTenantResolver = await securityPrincipalResolver.EnsureCanResoleCurrentTenant();

                    // set a variable in session otherwise the id always changes
                    context.Session.SetString("INITIAL_SESSIONID", context.Session.Id);
                    if (isFunctionalTenantResolver)
                    {
                        var ensuredTenant = await securityPrincipalResolver.EnsureTenant();
                        if (ensuredTenant != null)
                        {
                            _logger.LogInformation($"tenant ensured");
                            context.Features.Set<Tenant>((ensuredTenant));
                            _logger.LogInformation($"httpcontext tenant feature initialized");
                            hasEnsuredTenant = true;
                        }
                    }
                    else
                    {
                        _logger.LogWarning("tenant resolver not ready");

                        try
                        {
                            isFunctionalTenantResolver = await securityPrincipalResolver.EnsureCanResoleCurrentTenant();
                            if (isFunctionalTenantResolver)
                            {
                                var ensuredTenant = await securityPrincipalResolver.EnsureTenant();
                                if (ensuredTenant != null)
                                {
                                    _logger.LogInformation($"tenant ensured for tenant identifier {ensuredTenant.TenantIdentifier}");

                                    // try to initialize the feature again
                                    context.Features.Set<Tenant>((ensuredTenant));
                                    _logger.LogInformation($"httpcontext tenant feature initialized");
                                }
                            }
                            else
                            {
                                _logger.LogError($"error!! nonfunctional tenant resolver");
                            }
                        }
                        catch(Exception e)
                        {
                            // tolerate this exception
                            _logger.LogWarning($"tolerating exception initializing tenant feature: {e.Message}");
                        }
                    }
                }
                catch (Exception e)
                {
                    _logger.LogWarning($"exception initializing tenant feature: {e.Message}");
                    throw new Exception($"exception initializing tenant feature {e.Message}");
                }

                // ensure current principal
                try
                {
                    var isFunctionalTenantResolver = await securityPrincipalResolver.EnsureCanResoleCurrentTenant();
                    if (isFunctionalTenantResolver && hasEnsuredTenant)
                    {
                        _logger.LogInformation("preparing HttpRequest.Feature.Principal");
                        var currentPrincipal = await securityPrincipalResolver.GetCurrentPrincipal();
                        if (currentPrincipal != null)
                        {
                            context.Features.Set<Principal>((currentPrincipal));
                            _logger.LogInformation($"principal feature set for UPN: {currentPrincipal.UPN}");
                            hasEnsuredPrincipal = true;
                        }
                    }
                    else
                    {
                        _logger.LogWarning("tenant resolver not ready");
                    }

                }
                catch (Exception e)
                {
                    _logger.LogWarning($"exception initializing current principal feature: {e.Message}");
                    throw new Exception($"exception initializing principal feature {e.Message}");
                }

                // ensure principal session
                try
                {
                    var isFunctionalTenantResolver = await securityPrincipalResolver.EnsureCanResoleCurrentTenant();
                    if (isFunctionalTenantResolver && hasEnsuredPrincipal && hasEnsuredTenant)
                    {
                        _logger.LogInformation("preparing HttpRequest.Feature.Session");
                        var currentPrincipal = await securityPrincipalResolver.GetCurrentPrincipal();

                        var sessionFeature = await securityPrincipalResolver.GetCurrentSessionForPrincipal(currentPrincipal.Id);
                        _logger.LogInformation($"session feature set for UPN: {currentPrincipal.UPN}");
                    }
                    else
                    {
                        _logger.LogWarning("tenant resolver not ready");
                    }

                }
                catch (Exception e)
                {
                    _logger.LogWarning($"exception initializing current principal feature: {e.Message}");
                    throw new Exception($"exception initializing principal feature {e.Message}");
                }
            }
            catch (Exception e)
            {
                _logger.LogError($"problem initializing horseless tenant principal {e.Message}");
            }

            try
            {
                await _next(context);
            }
            catch (Exception e)
            {
                _logger.LogError($"{this.GetType().FullName} middleware pipeline exception: {e.Message}");
            }
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
