using HorselessNewspaper.Web.Core.Middleware.HorselessRouter;
using Microsoft.AspNetCore.Builder;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.Extensions.Hosting
{
    public static class HorselessHostingExtensions
    {
        public static IApplicationBuilder UseHorselessNewspaper(this IApplicationBuilder builder, Action<HorselessApplicationBuilder> options)
        {
            var applicationBuilder = new HorselessApplicationBuilder(builder);

            applicationBuilder.Builder
                .UseRouting()
                .UseEndpoints(endpoints =>
                {
                    endpoints.MapDynamicControllerRoute<HorselessRouteTransformer>("{controller}/{action}");
                });
                //.UseAuthentication()
                //.UseAuthorization();

            options?.Invoke(applicationBuilder);

            return applicationBuilder.Builder;
        }
    }
}
