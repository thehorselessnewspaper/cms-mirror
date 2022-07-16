using HorselessNewspaper.Web.Core.Middleware.HorselessRouter;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using System.Runtime.Loader;
using HorselessNewspaper.Web.Core.Middleware;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.OData.Extensions;
using Microsoft.AspNetCore.OData;
using HorselessNewspaper.Web.Core.Middleware.HttpContextFeatures.HorselessTenantPrincipal;
using HorselessNewspaper.Web.Core.Middleware.ClientConfigurationMiddleware;

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
            try
            {
                // harden against nulls during executions by
                // dotnet tool run invocations 
                var directoryInfo = new DirectoryInfo(env.WebRootPath);
                if (directoryInfo != null
                    && directoryInfo.Exists
                    && configuration[HorselessApplicationBuilder.TenantFilesystemPathConfigurationKey] != null)
                {
                    string path2 = configuration[HorselessApplicationBuilder.TenantFilesystemPathConfigurationKey];
                    string fullName = directoryInfo.Parent.FullName;
                    var pluginPath = Path.Combine(fullName, path2);

                    AssemblyLoadContext.Default.Resolving += (context, name) =>
                    {
                        var resolver = new AssemblyDependencyResolver(pluginPath);
                        string assemblyPath = resolver.ResolveAssemblyToPath(name);
                        if (assemblyPath != null)
                            return context.LoadFromAssemblyPath(assemblyPath);
                        return null;
                    };
                }
            }
            catch (Exception e)
            {

            }

            builder.UseCookiePolicy();

            // ordered prior to .UseRouting() 
            // due to HorselessRouteTransformer requirement for 
            // populated ClaimsPrincipal
            builder.UseAuthentication();

            // builder.UseHorselessTenantPrincipalMiddleware();

            // as per https://github.com/OData/AspNetCoreOData/blob/main/sample/ODataRoutingSample/Startup.cs
            builder.UseODataQueryRequest();

            // as per https://docs.microsoft.com/en-us/aspnet/core/fundamentals/static-files?view=aspnetcore-6.0
            builder.UseStaticFiles();

            builder.UseHttpLogging();
            builder.UseRouting();
            builder.UseCors();
            builder.UseMultiTenant();

            builder.UseAuthorization();
            builder.UseSession();

            builder.UseMiddleware<HorselessTenantPrincipalMiddleware>();


            // answers POST requests with hader key = RestClientConfigurationEndpoint
            // returns RestclientConfiguration - appsettings by ajax 
            builder.UseMiddleware<RestClientConfigurationEndpoint>();

            //obsolete
            //  builder.UseHorselessTenantSetupMiddleware();

            builder.UseEndpoints(options =>
            {

                // options.MapDynamicControllerRoute<HorselessRouteTransformer>("{__tenant__}/{**slug}");



                options.MapAreaControllerRoute(
                    name: "SiteAdmin",
                    areaName: "SiteAdmin",
                    pattern: "{__tenant__}/{area:exists}/{controller=OperatorSurface}/{action=Index}");

                options.MapAreaControllerRoute(
                    name: "TenantAdmin",
                    areaName: "TenantAdmin",
                    pattern: "{__tenant__}/{area:exists}/{controller=OperatorSurface}/{action=Index}");

                options.MapAreaControllerRoute(
                    name: "ContentAdmin",
                    areaName: "ContentAdmin",
                    pattern: "{__tenant__}/{area:exists}/{controller=OperatorSurface}/{action=Index}");


                options.MapControllerRoute(
                  name: "multitenantdefault",
                  pattern: "{__tenant__}/{controller}/{action}");

                options.MapControllerRoute(
                   name: "Authentication",
                   pattern: "{area:exists}/{controller=KeycloakController}/{action=Signin}/{id?}");

                options.MapControllerRoute(
                  name: "default",
                  pattern: "{controller=Home}/{action=Index}/{id?}");

                options.MapAreaControllerRoute(
                    name: "Installer",
                    areaName: "Installer",
                    pattern: "Installer/{controller=TenantSetup}/{action=Index}/{id?}");

                // options.MapControllers();

                options.MapDynamicControllerRoute<HorselessRouteTransformer>("{__tenant__}/{area:exists}/{controller=Home}/{action=Index}");

                options.MapDynamicControllerRoute<HorselessRouteTransformer>("{__tenant__}/{controller=Home}/{action=Index}");

                options.MapDynamicControllerRoute<HorselessRouteTransformer>("{__tenant__}/{**slug}");

                //options.MapControllerRoute(
                //name: "HorselessCMS",
                //pattern: "{controller=HorselessCMS}/{action=ViewTemplate}/{id?}");


            });

            options?.Invoke(applicationBuilder);

            return applicationBuilder.Builder;
        }
    }
}
