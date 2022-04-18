using Finbuckle.MultiTenant;
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

        public HorselessTenantPrincipalMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext context, IServiceProvider serviceProvider)
        {
            try
            {
                //using (var scope = serviceProvider.CreateAsyncScope())
                //{

                //    IQueryableContentModelOperator<ContentModel.Principal> principalOperator = serviceProvider.GetRequiredService<IQueryableContentModelOperator<ContentModel.Principal>>();

                //    IQueryableContentModelOperator<ContentModel.Tenant> tenantOperator = serviceProvider.GetRequiredService<IQueryableContentModelOperator<ContentModel.Tenant>>();

                //    IContentPrincipalTasksRepository principalTasksRepository = serviceProvider.GetRequiredService<IContentPrincipalTasksRepository>();

                //    if (context.User.Identity.IsAuthenticated)
                //    {
                //        // handle the authenticated scenario
                //        var blah = new ContentModel.Principal()
                //        {
                //            Iss = "",
                //            Aud = "",
                //            Sub = "",
                //            Email = "",
                //            UPN = "",


                //        };

                //        var tenantsQuery = await tenantOperator.Read();
                //        var principalsQuery = await principalOperator.Read();

                //        var tenants = tenantsQuery.ToList();
                //        var principals = principalsQuery.ToList();

                //        var matchResult = await principalTasksRepository.GetPrincipal(context.User.Claims);

                //        int i = 0;
                //    }

                //}

            }
            catch (Exception e)
            {
                // logger.LogError($"problem initializing horseless tenant principal {e.Message}");
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
