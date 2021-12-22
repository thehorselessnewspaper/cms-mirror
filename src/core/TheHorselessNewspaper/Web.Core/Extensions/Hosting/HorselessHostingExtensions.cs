using HorselessNewspaper.Web.Core.Middleware.HorselessRouter;
using Microsoft.AspNetCore.Builder;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.Extensions.Hosting
{
    /// <summary>
    /// asp.net core extensibility hook to enable cms functionality
    /// </summary>
    public static class HorselessHostingExtensions
    {
        /// <summary>
        /// suggestion is to apply extension method parameter constraints
        /// such that the program.cs implementer is forced to consider and configure
        /// which routes will be controlled by the cms
        /// and what authentication schemes
        /// </summary>
        /// <param name="builder"></param>
        /// <param name="options"></param>
        /// <returns></returns>
        public static IApplicationBuilder UseHorselessNewspaper(this IApplicationBuilder builder,
            Action<HorselessApplicationBuilder> options)
        {
            var applicationBuilder = new HorselessApplicationBuilder(builder);

            // avoid doing this such that the implementer has full flexibility
            //applicationBuilder.Builder
            //    .UseEndpoints(endpoints =>
            //    {
            //        // test of library controlled routing scenario
            //        // endpoints.MapDynamicControllerRoute<HorselessRouteTransformer>(""); // enabling this here prevents the implementer from configuring it in program.cs
            //    });


            options?.Invoke(applicationBuilder);

            return applicationBuilder.Builder;
        }
    }
}
