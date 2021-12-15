using HorselessNewspaper.Web.Core.Interfaces.Cache;
using HorselessNewspaper.Web.Core.Middleware.HorselessRouter;
using HorselessNewspaper.Web.Core.Middleware.HorselessRouter.Strategy;
using HorselessNewspaper.Web.Core.ScopedServices.RoutingStrategy;
using HorselessNewspaper.Web.Core.SingletonServices.Cache.Tenant;
using Microsoft.Extensions.DependencyInjection;
using TheHorselessNewspaper.Schemas.HostingModel.DTO;

namespace HorselessNewspaper.Web.Core.Extensions
{
    /// <summary>
    /// support headless cms asp.net core startup semantics
    /// </summary>
    public static class HorselessAspNetCoreStartupExtensions
    {
        public static IServiceCollection AddHorselessNewspaper(this IServiceCollection services,
        Action<HorselessServiceBuilder> options, ServiceLifetime scope = ServiceLifetime.Scoped)
        {
            var serviceBuilder = new HorselessServiceBuilder(services);
            serviceBuilder.AddRazorRuntimeCompilation = true;

            serviceBuilder.Services.AddSingleton<IHorselessCacheProvider<Guid, TenantDTO>, DefaultTenantCache>();

            #region cms routing pattern services
            serviceBuilder.Services.AddScoped<IHorselessRoutingStrategy, UrlSegmentRoutingStrategy>();

            // validate that this needs to be a singleton
            // as it's gating every request
            serviceBuilder.Services.AddSingleton<HorselessRouteTransformer>();

            #endregion  cms routing pattern services
            options?.Invoke(serviceBuilder);

            return services;
        }
    }
}
