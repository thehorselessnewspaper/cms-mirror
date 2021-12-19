using HorselessNewspaper.Core.Interfaces.Query;
using HorselessNewspaper.Web.Core.HostedServices.ApplicationParts.ApplicationPartsLogger;
using HorselessNewspaper.Web.Core.Interfaces.Cache;
using HorselessNewspaper.Web.Core.Middleware.HorselessRouter;
using HorselessNewspaper.Web.Core.Middleware.HorselessRouter.Strategy;
using HorselessNewspaper.Web.Core.ScopedServices.Content;
using HorselessNewspaper.Web.Core.ScopedServices.RoutingStrategy;
using HorselessNewspaper.Web.Core.SingletonServices.Cache.Tenant;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.AspNetCore.Mvc.Razor.RuntimeCompilation;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
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

            // todo - why is this here
            serviceBuilder.AddRazorRuntimeCompilation = true;

            // as per https://docs.microsoft.com/en-us/archive/msdn-magazine/2016/september/asp-net-core-feature-slices-for-asp-net-core-mvc
            // as per https://docs.microsoft.com/en-us/aspnet/core/mvc/controllers/areas?view=aspnetcore-6.0
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

            serviceBuilder.Services.AddScoped<THNLPContentContext>();

            // as per https://stackoverflow.com/questions/33566075/generic-repository-in-asp-net-core-without-having-a-separate-addscoped-line-per
            // support injecting a provider for a generic entity type determined by consumers of the injected service
            serviceBuilder.Services.AddScoped(typeof(IHorselessQueryResultProvider<>), typeof(HorselessEntityFrameworkQueryProvider<>));
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
