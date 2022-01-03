using Finbuckle.MultiTenant;
using HorselessNewspaper.Core.Interfaces.Query;
using HorselessNewspaper.Web.Core.HostedServices.ApplicationParts.ApplicationPartsLogger;
using HorselessNewspaper.Web.Core.Interfaces.Cache;
using HorselessNewspaper.Web.Core.Middleware.HorselessRouter;
using HorselessNewspaper.Web.Core.Middleware.HorselessRouter.Strategy;
using HorselessNewspaper.Web.Core.ScopedServices.Content;
using HorselessNewspaper.Web.Core.ScopedServices.RoutingStrategy;
using HorselessNewspaper.Web.Core.SingletonServices.Cache.Tenant;
using HorselessNewspaper.Web.Core.SingletonServices.ViewCompiler;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.AspNetCore.Mvc.Razor.Compilation;
using Microsoft.AspNetCore.OData.Edm;
using Microsoft.AspNetCore.OData.Extensions;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.Runtime.Loader;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using TheHorselessNewspaper.Schemas.HostingModel.DTO;
using Microsoft.FeatureManagement;
using Microsoft.Extensions.FileSystemGlobbing;
using Microsoft.Extensions.FileSystemGlobbing.Internal;
using System.Text.RegularExpressions;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query.ContentCollections;

namespace HorselessNewspaper.Web.Core.Extensions
{
    /// <summary>
    /// support headless cms asp.net core startup semantics
    /// </summary>
    public static class HorselessAspNetCoreStartupExtensions
    {
        public static IServiceCollection AddHorselessNewspaper(this IServiceCollection services, IConfiguration configuration,
        Action<HorselessServiceBuilder> options = null, ServiceLifetime scope = ServiceLifetime.Scoped)
        {
            var serviceBuilder = new HorselessServiceBuilder(configuration, services);


            serviceBuilder.Services.AddFeatureManagement();

            // todo - why is this here
            serviceBuilder.AddRazorRuntimeCompilation = true;


            // as per https://docs.microsoft.com/en-us/archive/msdn-magazine/2016/september/asp-net-core-feature-slices-for-asp-net-core-mvc
            // as per https://docs.microsoft.com/en-us/aspnet/core/mvc/controllers/areas?view=aspnetcore-6.0
            services.Configure<RazorViewEngineOptions>(o =>
            {

                // o.ViewLocationFormats.Clear();

                // configure loading HorselessViews
                // TODO bugfix required
                // can only discover HorselessViews folder if it already has views
                Matcher matcher = new();
                matcher.AddInclude("**/HorselessViews/**/*.cshtml");
                foreach (var result in matcher.GetResultsInFullPath("../"))
                {
                    var split = result.Split('\\', 255);
                    var path = string.Empty;
                    foreach(var trimmed in split.Take(split.Count() - 1))
                    {
                        path = path + trimmed + "\\";
                    }
                    o.ViewLocationFormats.Add($"{path}{1}\\{0}" + RazorViewEngine.ViewExtension);
                    o.ViewLocationFormats.Add ($"{path}Shared\\{0}" + RazorViewEngine.ViewExtension);
                }

                o.ViewLocationFormats.Add
                    ("~/../HorselessNewspaper.RazorClassLibrary.CMS.Default/Views/{1}/{0}" + RazorViewEngine.ViewExtension);
                o.ViewLocationFormats.Add
                    ("~/../HorselessNewspaper.RazorClassLibrary.CMS.Default/Views/Shared/{0}" + RazorViewEngine.ViewExtension);

                o.PageViewLocationFormats.Add
                    ("~/../HorselessNewspaper.RazorClassLibrary.CMS.Default/Views/{1}/{0}" + RazorViewEngine.ViewExtension);
                o.PageViewLocationFormats.Add
                    ("~/../HorselessNewspaper.RazorClassLibrary.CMS.Default/Views/Shared/{0}" + RazorViewEngine.ViewExtension);

                o.ViewLocationFormats.Add
                    ("~/../HorselessNewspaper.Web.Core.Auth.Keycloak/Views/{1}/{0}" + RazorViewEngine.ViewExtension);
                o.ViewLocationFormats.Add
                    ("~/../HorselessNewspaper.Web.Core.Auth.Keycloak/Views/Shared/{0}" + RazorViewEngine.ViewExtension);
            }

            );

            #region multitenancy as per https://www.finbuckle.com/MultiTenant/
            serviceBuilder.Services.AddMultiTenant<Finbuckle.MultiTenant.TenantInfo>()
                .WithInMemoryStore()
                .WithHostStrategy()
                .WithBasePathStrategy()
                .WithRouteStrategy();

            #endregion multitenancy as per https://www.finbuckle.com/MultiTenant/

           

            serviceBuilder.Services.AddSingleton<IHorselessCacheProvider<Guid, TenantDTO>, DefaultTenantCache>();

            // support dynamic view loading and unloading
            // wholly based on https://stackoverflow.com/questions/48206993/how-to-load-asp-net-core-razor-view-dynamically-at-runtime
            ServiceDescriptor descriptor = services.FirstOrDefault(s => s.ServiceType == typeof(IViewCompilerProvider));
            serviceBuilder.Services.Remove(descriptor);
            services.AddSingleton<IViewCompilerProvider, HorselessViewCompilerProvider>();

            #region cms routing pattern services
            serviceBuilder.Services.AddScoped<IHorselessRoutingStrategy, UrlSegmentRoutingStrategy>();
            serviceBuilder.Services.AddHostedService<ApplicationPartsLogger>();

            // as per https://stackoverflow.com/questions/33566075/generic-repository-in-asp-net-core-without-having-a-separate-addscoped-line-per
            // support injecting a provider for a generic entity type determined by consumers of the injected service
            //serviceBuilder.Services.AddScoped(typeof(IHorselessQueryResultProvider<>), typeof(HorselessEntityFrameworkQueryProvider<>));
            // don't do this unless you mean to be specific about the Entity collection
            // serviceBuilder.Services.AddScoped<HorselessEntityFrameworkQueryProvider<ContentCollection>>();

            // serviceBuilder.Services.AddScoped< HorselessEntityFrameworkQueryProvider<ContentCollection>>();
            // validate that this needs to be a singleton
            // as it's gating every request
            serviceBuilder.Services.AddSingleton<HorselessRouteTransformer>();

            #endregion  cms routing pattern services
            options?.Invoke(serviceBuilder);

            return services;
        }
    }
}
