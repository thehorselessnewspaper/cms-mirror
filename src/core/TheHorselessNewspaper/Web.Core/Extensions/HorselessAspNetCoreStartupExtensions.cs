using Finbuckle.MultiTenant;
using HorselessNewspaper.Web.Core.HostedServices.ApplicationParts.ApplicationPartsLogger;
using HorselessNewspaper.Web.Core.HostedServices.Cache.TenantCache;
using HorselessNewspaper.Web.Core.Interfaces.Cache;
using HorselessNewspaper.Web.Core.Interfaces.Content;
using HorselessNewspaper.Web.Core.Interfaces.Hosting;
using HorselessNewspaper.Web.Core.Middleware;
using HorselessNewspaper.Web.Core.Middleware.HorselessRouter;
using HorselessNewspaper.Web.Core.Middleware.HorselessRouter.Strategy;
using HorselessNewspaper.Web.Core.Model.Query.ContentCollection;
using HorselessNewspaper.Web.Core.Model.Query.HostingCollection;
using HorselessNewspaper.Web.Core.ScopedServices.AuthenticationSchemes;
using HorselessNewspaper.Web.Core.ScopedServices.RoutingStrategy;
using HorselessNewspaper.Web.Core.SingletonServices.Cache.Tenant;
using HorselessNewspaper.Web.Core.SingletonServices.ViewCompiler;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.AspNetCore.Mvc.Razor.Compilation;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.FeatureManagement;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.HostingModel.Entities.Query;
using TheHorselessNewspaper.HostingModel.MultiTenant;
using ContentEntities = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using HostingEntities = TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;

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
            services.Configure((Action<RazorViewEngineOptions>)(o =>
            {

                // o.ViewLocationFormats.Clear();

                // configure loading HorselessViews
                // TODO bugfix required
                // can only discover HorselessViews folder if it already has views

                //var currentDir = Directory.GetCurrentDirectory();
                //Matcher matcher = new();
                //matcher.AddInclude("../**/HorselessViews/**/*.cshtml");
                //foreach (var result in matcher.GetResultsInFullPath(@"..\"))
                //{
                //    var split = result.Split(Path.DirectorySeparatorChar, 255);      
                //    var path = string.Empty;
                //    foreach (var trimmed in split.Take(split.Count() - 1))
                //    {
                //        path = path + trimmed + "/";
                //    }

                //    if (path.Contains("shared",StringComparison.InvariantCultureIgnoreCase))
                //    {
                //        var sharedPath = $"{path}" + @"/{0}" + RazorViewEngine.ViewExtension;
                //        o.ViewLocationFormats.Add(sharedPath);
                //    }
                //    else
                //    {
                //        string item = $"{path}" + @"{1}/{0}" + RazorViewEngine.ViewExtension;
                //        o.ViewLocationFormats.Add(item);
                //    }


                //}

                o.ViewLocationFormats.Add
                    ("~/../HorselessNewspaper.RazorClassLibrary.CMS.Default/HorselessViews/{1}/{0}" + RazorViewEngine.ViewExtension);
                o.ViewLocationFormats.Add
                    ("~/../HorselessNewspaper.RazorClassLibrary.CMS.Default/HorselessViews/Shared/{0}" + RazorViewEngine.ViewExtension);

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
            })

            );
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            #region multitenancy as per https://www.finbuckle.com/MultiTenant/
            serviceBuilder.Services.AddMultiTenant<HorselessTenantInfo>()
                .WithInMemoryStore(options =>
                {
                    options.Tenants.Add(new HorselessTenantInfo(
                        new HostingEntities.TenantInfo()
                        {
                            ConnectionString = configuration.GetConnectionString("ContentModelConnection"),
                            Id = Guid.Parse("6da806b8-f7ab-4e3a-8833-7e834a40e9d0"),
                            Identifier = "localhost",
                            Name = "the horseless phantom tenant",
                            ObjectId = "236324b8-278e-4372-9d06-13c40aabd8b2",
                            CreatedAt = DateTime.UtcNow,
                            DisplayName = "static default tenant"
                        })
                    ); 
                })
                .WithStaticStrategy("localhost");

            // for bootstrappingduring testing only
            serviceBuilder.Services.AddSingleton<ITenantInfo>(new HorselessTenantInfo()
            {
                ConnectionString = serviceBuilder.Configuration.GetConnectionString("ContentModelConnection"),
                Id = "6da806b8-f7ab-4e3a-8833-7e834a40e9d0",
                Identifier = "6da806b8-f7ab-4e3a-8833-7e834a40e9d0",
                Name = "static default tenant"
            });

            #endregion multitenancy as per https://www.finbuckle.com/MultiTenant/

            #region content collection query services
            /**
             * for injection into controllers
             **/
            serviceBuilder.Services.AddScoped<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.ContentCollection>, ContentEntities.ContentCollection>,
                ContentCollectionService<IQueryableContentModelOperator<ContentEntities.ContentCollection>, ContentEntities.ContentCollection>>();
            serviceBuilder.Services.AddScoped<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.Tenant>, ContentEntities.Tenant>,
                ContentCollectionService<IQueryableContentModelOperator<ContentEntities.Tenant>, ContentEntities.Tenant>>();
            serviceBuilder.Services.AddScoped<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.FilesystemAsset>, ContentEntities.FilesystemAsset>,
                ContentCollectionService<IQueryableContentModelOperator<ContentEntities.FilesystemAsset>, ContentEntities.FilesystemAsset>>();
            serviceBuilder.Services.AddScoped<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.Holonym>, ContentEntities.Holonym>,
                ContentCollectionService<IQueryableContentModelOperator<ContentEntities.Holonym>, ContentEntities.Holonym>>();
            serviceBuilder.Services.AddScoped<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.HorselessContent>, ContentEntities.HorselessContent>,
                ContentCollectionService<IQueryableContentModelOperator<ContentEntities.HorselessContent>, ContentEntities.HorselessContent>>();
            serviceBuilder.Services.AddScoped<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.JSONAsset>, ContentEntities.JSONAsset>,
                ContentCollectionService<IQueryableContentModelOperator<ContentEntities.JSONAsset>, ContentEntities.JSONAsset>>();
            serviceBuilder.Services.AddScoped<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.Meronym>, ContentEntities.Meronym>,
                ContentCollectionService<IQueryableContentModelOperator<ContentEntities.Meronym>, ContentEntities.Meronym>>();
            serviceBuilder.Services.AddScoped<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.MIMEType>, ContentEntities.MIMEType>,
                ContentCollectionService<IQueryableContentModelOperator<ContentEntities.MIMEType>, ContentEntities.MIMEType>>();
            serviceBuilder.Services.AddScoped<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.MIMEType>, ContentEntities.MIMEType>,
                ContentCollectionService<IQueryableContentModelOperator<ContentEntities.MIMEType>, ContentEntities.MIMEType>>();
            serviceBuilder.Services.AddScoped<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.NavigationMenuItem>, ContentEntities.NavigationMenuItem>,
                 ContentCollectionService<IQueryableContentModelOperator<ContentEntities.NavigationMenuItem>, ContentEntities.NavigationMenuItem>>();
            serviceBuilder.Services.AddScoped<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.NavigationMenu>, ContentEntities.NavigationMenu>,
                 ContentCollectionService<IQueryableContentModelOperator<ContentEntities.NavigationMenu>, ContentEntities.NavigationMenu>>();
            #endregion

            #region hosting collection query services
            /**
             * for injection into controllers
             **/
           serviceBuilder.Services.AddScoped<IHostingCollectionService<IQueryableHostingModelOperator<HostingEntities.NugetPackage>, HostingEntities.NugetPackage>,
                     HostingCollectionService<IQueryableHostingModelOperator<HostingEntities.NugetPackage>, HostingEntities.NugetPackage>>();
            serviceBuilder.Services.AddScoped<IHostingCollectionService<IQueryableHostingModelOperator<HostingEntities.KeyCloakConfiguration>, HostingEntities.KeyCloakConfiguration>,
                     HostingCollectionService<IQueryableHostingModelOperator<HostingEntities.KeyCloakConfiguration>, HostingEntities.KeyCloakConfiguration>>();
             serviceBuilder.Services.AddScoped<IHostingCollectionService<IQueryableHostingModelOperator<HostingEntities.Tenant>, HostingEntities.Tenant>,
                     HostingCollectionService<IQueryableHostingModelOperator<HostingEntities.Tenant>, HostingEntities.Tenant>>();
            serviceBuilder.Services.AddScoped<IHostingCollectionService<IQueryableHostingModelOperator<HostingEntities.Principal>, HostingEntities.Principal>,
         HostingCollectionService<IQueryableHostingModelOperator<HostingEntities.Principal>, HostingEntities.Principal>>();
            
            serviceBuilder.Services.AddScoped<IHostingCollectionService<IQueryableHostingModelOperator<HostingEntities.AccessControlEntry>, HostingEntities.AccessControlEntry>,
HostingCollectionService<IQueryableHostingModelOperator<HostingEntities.AccessControlEntry>, HostingEntities.AccessControlEntry>>();
            
            serviceBuilder.Services.AddScoped<IHostingCollectionService<IQueryableHostingModelOperator<HostingEntities.TenantInfo>, HostingEntities.TenantInfo>,
                     HostingCollectionService<IQueryableHostingModelOperator<HostingEntities.TenantInfo>, HostingEntities.TenantInfo>>();
              serviceBuilder.Services.AddScoped<IHostingCollectionService<IQueryableHostingModelOperator<HostingEntities.WebAPITenantInfo>, HostingEntities.WebAPITenantInfo>,
                     HostingCollectionService<IQueryableHostingModelOperator<HostingEntities.WebAPITenantInfo>, HostingEntities.WebAPITenantInfo>>();

            #endregion

            serviceBuilder.Services.AddScoped<IAuthenticationSchemesCache, AuthenticationSchemesCache>();

            serviceBuilder.Services.AddSingleton<IHorselessCacheProvider<Guid, ContentEntities.Tenant>, DefaultTenantCache>();

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
            serviceBuilder.Services.AddScoped<HorselessRouteTransformer>();
            serviceBuilder.Services.AddScoped<HorselessTenantSetupMiddleware>();
            #endregion  cms routing pattern services

            #region hosted services
            services.AddHostedService<TenantCacheService>();

            #endregion hosted services
            options?.Invoke(serviceBuilder);

            return services;
        }
    }
}
