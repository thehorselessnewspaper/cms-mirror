using HorselessNewspaper.Web.Core.Middleware.HorselessRouter;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using System.Runtime.Loader;
using HorselessNewspaper.Web.Core.Middleware;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.OData.Extensions;
using Microsoft.AspNetCore.OData;

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
        /// 
        /// middleware order of registration guided by
        /// - https://docs.microsoft.com/en-us/aspnet/core/fundamentals/middleware/?view=aspnetcore-6.0#middleware-order
        /// - https://www.finbuckle.com/MultiTenant/Docs/v6.6.0/ConfigurationAndUsage
        /// </summary>
        /// <param name="builder"></param>
        /// <param name="options"></param>
        /// <returns></returns>
        public static IApplicationBuilder UseHorselessNewspaper(this IApplicationBuilder builder, WebApplication app, IWebHostEnvironment env, IConfiguration configuration,
            Action<HorselessApplicationBuilder> options)
        {
            var applicationBuilder = new HorselessApplicationBuilder(app, builder);

            // as per https://stackoverflow.com/questions/40908568/assembly-loading-in-net-core
            // todo - come up with a central way of storing configuration string keys
            var directoryInfo = new DirectoryInfo(env.WebRootPath);
            var pluginPath = Path.Combine(directoryInfo.Parent.FullName, configuration[HorselessApplicationBuilder.TenantFilesystemPathConfigurationKey]);

            AssemblyLoadContext.Default.Resolving += (context, name) =>
            {
                var resolver = new AssemblyDependencyResolver(pluginPath);
                string assemblyPath = resolver.ResolveAssemblyToPath(name);
                if (assemblyPath != null)
                    return context.LoadFromAssemblyPath(assemblyPath);
                return null;
            };

            // ordered prior to .UseRouting() 
            // due to HorselessRouteTransformer requirement for 
            // populated ClaimsPrincipal
            builder.UseAuthentication();

            // as per https://github.com/OData/AspNetCoreOData/blob/main/sample/ODataRoutingSample/Startup.cs
            builder.UseODataQueryRequest();

            builder.UseCookiePolicy();
            builder.UseRouting();
            builder.UseCors();
            builder.UseMultiTenant();

            builder.UseAuthorization();


            builder.UseHorselessTenantSetupMiddleware();

            // as per https://docs.microsoft.com/en-us/aspnet/core/fundamentals/static-files?view=aspnetcore-6.0
            builder.UseStaticFiles();


            builder.UseEndpoints(options =>
            {

                // options.MapDynamicControllerRoute<HorselessRouteTransformer>("{__tenant__}/{**slug}");

                options.MapAreaControllerRoute(
                    name: "Installer",
                    areaName: "Installer",
                    pattern: "Installer/{controller=TenantSetup}/{action=Index}/{id?}");

                options.MapControllerRoute(
                name: "Authentication",
                pattern: "{area:exists}/{controller=KeycloakController}/{action=Signin}/{id?}");




                options.MapDynamicControllerRoute<HorselessRouteTransformer>("{__tenant__}/{area:exists}/{controller=Home}/{action=Index}");

                options.MapDynamicControllerRoute<HorselessRouteTransformer>("{__tenant__}/{controller=Home}/{action=Index}");

                options.MapDynamicControllerRoute<HorselessRouteTransformer>("{__tenant__}/{**slug}");

                options.MapControllerRoute(
                  name: "default",
                  pattern: "{controller=Home}/{action=Index}/{id?}");

                //options.MapControllerRoute(
                //name: "HorselessCMS",
                //pattern: "{controller=HorselessCMS}/{action=ViewTemplate}/{id?}");

                options.MapControllers();

            });

            options?.Invoke(applicationBuilder);

            return applicationBuilder.Builder;
        }
    }
}
