using HorselessNewspaper.Web.Core.HostedServices.ApplicationParts.ApplicationPartsLogger;
using HorselessNewspaper.Web.Core.Interfaces.Cache;
using HorselessNewspaper.Web.Core.Middleware.HorselessRouter;
using HorselessNewspaper.Web.Core.Middleware.HorselessRouter.Strategy;
using HorselessNewspaper.Web.Core.ScopedServices.RoutingStrategy;
using HorselessNewspaper.Web.Core.SingletonServices.Cache.Tenant;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.AspNetCore.Mvc.Razor.RuntimeCompilation;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using TheHorselessNewspaper.Schemas.HostingModel.DTO;

namespace HorselessNewspaper.Web.Core.Extensions
{
    /// <summary>
    /// support headless cms asp.net core startup semantics
    /// </summary>
    public static class HorselessAspNetCoreStartupExtensions
    {
        public static IServiceCollection AddHorselessNewspaper(this IServiceCollection services,
        Action<HorselessServiceBuilder> options = null, ServiceLifetime scope = ServiceLifetime.Scoped)
        {
            var serviceBuilder = new HorselessServiceBuilder(services);
            serviceBuilder.AddRazorRuntimeCompilation = true;
            services.Configure<RazorViewEngineOptions>(o =>
            {
                // o.ViewLocationFormats.Clear();
                //o.ViewLocationFormats.Add
                //("~/../HorselessNewspaper.RazorClassLibrary.CMS.Default/Views/{1}/{0}" + RazorViewEngine.ViewExtension);
                //        o.ViewLocationFormats.Add
                //("~/../HorselessNewspaper.RazorClassLibrary.CMS.Default/Views/Shared/{0}" + RazorViewEngine.ViewExtension);
            }
            
            );
            
            serviceBuilder.Services.AddSingleton<IHorselessCacheProvider<Guid, TenantDTO>, DefaultTenantCache>();


            #region cms routing pattern services
            serviceBuilder.Services.AddScoped<IHorselessRoutingStrategy, UrlSegmentRoutingStrategy>();
            serviceBuilder.Services.AddHostedService<ApplicationPartsLogger>();
            // validate that this needs to be a singleton
            // as it's gating every request
            serviceBuilder.Services.AddSingleton<HorselessRouteTransformer>();

            #endregion  cms routing pattern services
            options?.Invoke(serviceBuilder);

            return services;
        }
    }
}
