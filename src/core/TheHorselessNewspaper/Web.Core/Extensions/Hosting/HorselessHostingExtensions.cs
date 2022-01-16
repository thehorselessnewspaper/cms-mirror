using HorselessNewspaper.Web.Core.Middleware.HorselessRouter;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using System.Runtime.Loader;

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
        public static IApplicationBuilder UseHorselessNewspaper(this IApplicationBuilder builder, WebApplication app, IWebHostEnvironment env, IConfiguration configuration,
            Action<HorselessApplicationBuilder> options)
        {
            var applicationBuilder = new HorselessApplicationBuilder(app, builder);

            // avoid doing this such that the implementer has full flexibility
            //applicationBuilder.Builder
            //    .UseEndpoints(endpoints =>
            //    {
            //        // test of library controlled routing scenario
            //        // endpoints.MapDynamicControllerRoute<HorselessRouteTransformer>(""); // enabling this here prevents the implementer from configuring it in program.cs
            //    });

            // as per https://stackoverflow.com/questions/40908568/assembly-loading-in-net-core
            // todo - come up with a central way of storing configuration string keys
            var directoryInfo = new DirectoryInfo(env.WebRootPath);
            var pluginPath = Path.Combine(directoryInfo.Parent.FullName, configuration[HorselessApplicationBuilder.TenantFilesystemPathConfigurationKey]);
            
            AssemblyLoadContext.Default.Resolving += (context, name) => {
                var resolver = new AssemblyDependencyResolver(pluginPath);
                string assemblyPath = resolver.ResolveAssemblyToPath(name);
                if (assemblyPath != null)
                    return context.LoadFromAssemblyPath(assemblyPath);
                return null;
            };

            builder.UseMultiTenant();

            builder.UseEndpoints(options =>
            {
                   
                // test of user defined routing scenario
                options.MapDynamicControllerRoute<HorselessRouteTransformer>("");
                options.MapControllerRoute(
                name: "Authentication",
                pattern: "{area:exists}/{controller=KeycloakController}/{action=Signin}/{id?}");


                options.MapControllerRoute(
                name: "HorselessCMS",
                pattern: "{controller=HorselessCMS}/{action=ViewTemplate}/{id?}");
            });

            options?.Invoke(applicationBuilder);

            return applicationBuilder.Builder;
        }
    }
}
