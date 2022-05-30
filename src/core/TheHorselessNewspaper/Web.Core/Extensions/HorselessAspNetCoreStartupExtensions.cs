using AutoMapper;
using HorselessNewspaper.Web.Core.Automapper;
using HorselessNewspaper.Web.Core.HostedServices.ApplicationParts.ApplicationPartsLogger;
using HorselessNewspaper.Web.Core.HostedServices.Cache.TenantCache;
using HorselessNewspaper.Web.Core.Interfaces.Cache;
using HorselessNewspaper.Web.Core.Middleware;
using HorselessNewspaper.Web.Core.Middleware.HorselessRouter;
using HorselessNewspaper.Web.Core.Middleware.HorselessRouter.Strategy;
using HorselessNewspaper.Web.Core.ScopedServices.AuthenticationSchemes;
using HorselessNewspaper.Web.Core.ScopedServices.Contexts;
using HorselessNewspaper.Web.Core.ScopedServices.RestClients;
using HorselessNewspaper.Web.Core.ScopedServices.RestClients.Also;
using HorselessNewspaper.Web.Core.ScopedServices.RoutingStrategy;
using HorselessNewspaper.Web.Core.SingletonServices.Cache.Tenant;
using HorselessNewspaper.Web.Core.SingletonServices.ViewCompiler;
using HorselessNewspaper.Web.Core.UnitOfWork.ContentModelTasks.PrincipalTasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.AspNetCore.Mvc.Razor.Compilation;
using Microsoft.AspNetCore.OData;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileSystemGlobbing;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.Primitives;
using Microsoft.FeatureManagement;
using System.Text.Json.Serialization;
using HorselessNewspaper.Web.Core.Services.Query.Controller.Content;
using HorselessNewspaper.Web.Core.Services.Query.Entities;

using TheHorselessNewspaper.HostingModel.MultiTenant;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using ContentEntities = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using HostingEntities = TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
using HorselessNewspaper.Web.Core.Services.Query.Controller.Content;
using HorselessNewspaper.Web.Core.Services.Query.Controller.Hosting;
using TheHorselessNewspaper.HostingModel.ODATA;

namespace HorselessNewspaper.Web.Core.Extensions
{
    /// <summary>
    /// support headless cms asp.net core startup semantics
    /// </summary>
    public static class HorselessAspNetCoreStartupExtensions
    {
        public static IServiceCollection AddHorselessNewspaper(this IServiceCollection services, IConfiguration configuration, IWebHostEnvironment environment,
        Action<HorselessServiceBuilder> options = null, ServiceLifetime scope = ServiceLifetime.Scoped)
        {
            var serviceBuilder = new HorselessServiceBuilder(configuration, services);

            serviceBuilder.Services.AddSingleton<IConfiguration>(configuration);
            serviceBuilder.Services.AddFeatureManagement();

            var automapperConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(new AutoMapperProfile());
            });

            IMapper mapper = automapperConfig.CreateMapper();

            serviceBuilder.Services.AddSingleton(mapper);

            serviceBuilder.Services.AddHttpClient(Options.DefaultName, c =>
            {
                var baseUrl = configuration["RestApiBaseUrl"];
                c.BaseAddress = new System.Uri(baseUrl);
                int i = 0;
            })
            /// disable SSL cert validation
            /// as per https://stackoverflow.com/questions/62860290/disable-ssl-certificate-verification-in-default-injected-ihttpclientfactory
            /// TODo
            /// enable via conbfiguration
            .ConfigurePrimaryHttpMessageHandler(() =>
            {
                return new HttpClientHandler
                {
                    ClientCertificateOptions = ClientCertificateOption.Manual,
                    ServerCertificateCustomValidationCallback =
                        (httpRequestMessage, cert, certChain, policyErrors) => true
                };
            });

            serviceBuilder.Services.AddTransient<IHorselessRestApiClient, HorselessRestApiClient>(

                s =>
                {
                    var baseUrl = configuration["RestApiBaseUrl"];
                    return new HorselessRestApiClient(
                        baseUrl: baseUrl, s.GetRequiredService<HttpClient>()
                    );
                });

            serviceBuilder.Services.AddTransient<IHorselessRestApiClientAlso, HorselessRestApiClientAlso>(

                s =>
                {
                    var baseUrl = configuration["RestApiBaseUrl"];
                    return new HorselessRestApiClientAlso(
                        baseUrl: baseUrl, s.GetRequiredService<HttpClient>()
                    );
                });

            // as per https://docs.microsoft.com/en-us/archive/msdn-magazine/2016/september/asp-net-core-feature-slices-for-asp-net-core-mvc
            // as per https://docs.microsoft.com/en-us/aspnet/core/mvc/controllers/areas?view=aspnetcore-6.0
            services.Configure((Action<RazorViewEngineOptions>)(o =>
            {

                // o.ViewLocationFormats.Clear();

                //configure loading HorselessViews
                //TODO bugfix required
                // can only discover HorselessViews folder if it already has views

                var currentDir = Directory.GetCurrentDirectory();
                Matcher matcher = new();
                matcher.AddInclude($"**/*Views/**/*.cshtml");
                foreach (var result in matcher.GetResultsInFullPath(@"..\"))
                {
                    var split = result.Split(Path.DirectorySeparatorChar, 255);
                    var path = string.Empty;
                    foreach (var trimmed in split.Take(split.Count() - 1))
                    {
                        path = path + trimmed + "/";
                    }

                    if (path.Contains("shared", StringComparison.InvariantCultureIgnoreCase))
                    {
                        var sharedPath = $"{path}" + @"/{0}" + RazorViewEngine.ViewExtension;
                        o.ViewLocationFormats.Add(sharedPath.TrimStart('/'));
                    }
                    else
                    {
                        string item = $"{path}" + @"{1}/{0}" + RazorViewEngine.ViewExtension;
                        o.ViewLocationFormats.Add(item.TrimStart('/'));
                    }


                }
                o.ViewLocationFormats.Add("../HorselessNewspaper.RazorClassLibrary.CMS.Default/Views/{1}/{0}" + RazorViewEngine.ViewExtension);
                o.ViewLocationFormats.Add("../HorselessNewspaper.RazorClassLibrary.CMS.Default/Views/Shared/{0}" + RazorViewEngine.ViewExtension);

                o.ViewLocationFormats.Add("../HorselessNewspaper.RazorClassLibrary.CMS.Default/HorselessViews/{1}/{0}" + RazorViewEngine.ViewExtension);
                o.ViewLocationFormats.Add("../HorselessNewspaper.RazorClassLibrary.CMS.Default/HorselessViews/Shared/{0}" + RazorViewEngine.ViewExtension);
            })

            );



            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            #region multitenancy as per https://www.finbuckle.com/MultiTenant/
            serviceBuilder.Services.AddMultiTenant<HorselessTenantInfo>()
                .WithInMemoryStore(options =>
                {
                    options.Tenants.Add(
                        new HorselessTenantInfo(
                        new HostingEntities.TenantInfo()
                        {
                            ConnectionString = configuration.GetConnectionString("ContentModelConnection"),
                            Id = Guid.Parse("6da806b8-f7ab-4e3a-8833-7e834a40e9d0"),
                            Identifier = "6da806b8-f7ab-4e3a-8833-7e834a40e9d0",
                            Name = "the Management",
                            ObjectId = "236324b8-278e-4372-9d06-13c40aabd8b2",
                            CreatedAt = DateTime.UtcNow,
                            DisplayName = "the management tenant"
                        }
                        )
                    );
                })
                .WithRouteStrategy()
                //.WithDelegateStrategy(async context =>
                //{
                //    return await Task.FromResult<string>("6da806b8-f7ab-4e3a-8833-7e834a40e9d0");
                //})
                .WithDelegateStrategy(async context =>
                {
                    var httpContext = context as HttpContext;
                    if (httpContext == null)
                    {
                        return "6da806b8-f7ab-4e3a-8833-7e834a40e9d0";
                    }
                    else
                    {
                        httpContext.Request.Query.TryGetValue("tenant", out StringValues tenantIdParam);
                        var tenantIdParm = tenantIdParam.ToString();
                        if (tenantIdParm != String.Empty)
                        {
                            return tenantIdParm;
                        }
                        else
                        {
                            return "6da806b8-f7ab-4e3a-8833-7e834a40e9d0";
                        }
                    }
                })
                .WithStaticStrategy("6da806b8-f7ab-4e3a-8833-7e834a40e9d0");
            //.WithDelegateStrategy(async context =>
            //{
            //    var httpContext = context as HttpContext;
            //    if (httpContext == null)
            //    {
            //        return "6da806b8-f7ab-4e3a-8833-7e834a40e9d0";
            //    }
            //    else
            //    {
            //        httpContext.Request.Query.TryGetValue("tenant", out StringValues tenantIdParam);
            //        return tenantIdParam.ToString();
            //    }
            //});


            //.WithDelegateStrategy(async context =>
            //{
            //    var httpContext = context as HttpContext;
            //    if(httpContext == null)
            //    {
            //        return "phantom";
            //    }
            //    else
            //    {
            //        httpContext.Request.Query.TryGetValue("tenant", out StringValues tenantIdParam);
            //        return tenantIdParam.ToString();
            //    }
            //});




            #endregion multitenancy as per https://www.finbuckle.com/MultiTenant/

            #region content collection query services
            /**
             * for injection into controllers
             **/
            serviceBuilder.Services.AddTransient<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.ContentCollection>, ContentEntities.ContentCollection>,
                ContentCollectionService<IQueryableContentModelOperator<ContentEntities.ContentCollection>, ContentEntities.ContentCollection>>();
            serviceBuilder.Services.AddTransient<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.Tenant>, ContentEntities.Tenant>,
                ContentCollectionService<IQueryableContentModelOperator<ContentEntities.Tenant>, ContentEntities.Tenant>>();
            serviceBuilder.Services.AddTransient<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.FilesystemAsset>, ContentEntities.FilesystemAsset>,
                ContentCollectionService<IQueryableContentModelOperator<ContentEntities.FilesystemAsset>, ContentEntities.FilesystemAsset>>();
            serviceBuilder.Services.AddTransient<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.Holonym>, ContentEntities.Holonym>,
                ContentCollectionService<IQueryableContentModelOperator<ContentEntities.Holonym>, ContentEntities.Holonym>>();
            serviceBuilder.Services.AddTransient<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.HorselessContent>, ContentEntities.HorselessContent>,
                ContentCollectionService<IQueryableContentModelOperator<ContentEntities.HorselessContent>, ContentEntities.HorselessContent>>();
            serviceBuilder.Services.AddTransient<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.HorselessSession>, ContentEntities.HorselessSession>,
                ContentCollectionService<IQueryableContentModelOperator<ContentEntities.HorselessSession>, ContentEntities.HorselessSession>>();

            serviceBuilder.Services.AddTransient<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.JSONAsset>, ContentEntities.JSONAsset>,
                ContentCollectionService<IQueryableContentModelOperator<ContentEntities.JSONAsset>, ContentEntities.JSONAsset>>();
            serviceBuilder.Services.AddTransient<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.Meronym>, ContentEntities.Meronym>,
                ContentCollectionService<IQueryableContentModelOperator<ContentEntities.Meronym>, ContentEntities.Meronym>>();
            serviceBuilder.Services.AddTransient<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.MIMEType>, ContentEntities.MIMEType>,
                ContentCollectionService<IQueryableContentModelOperator<ContentEntities.MIMEType>, ContentEntities.MIMEType>>();
            serviceBuilder.Services.AddTransient<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.MIMEType>, ContentEntities.MIMEType>,
                ContentCollectionService<IQueryableContentModelOperator<ContentEntities.MIMEType>, ContentEntities.MIMEType>>();
            serviceBuilder.Services.AddTransient<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.NavigationMenuItem>, ContentEntities.NavigationMenuItem>,
                 ContentCollectionService<IQueryableContentModelOperator<ContentEntities.NavigationMenuItem>, ContentEntities.NavigationMenuItem>>();
            serviceBuilder.Services.AddTransient<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.NavigationMenu>, ContentEntities.NavigationMenu>,
                 ContentCollectionService<IQueryableContentModelOperator<ContentEntities.NavigationMenu>, ContentEntities.NavigationMenu>>();
            serviceBuilder.Services.AddTransient<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.Principal>, ContentEntities.Principal>,
                 ContentCollectionService<IQueryableContentModelOperator<ContentEntities.Principal>, ContentEntities.Principal>>();
            serviceBuilder.Services.AddTransient<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.AccessControlEntry>, ContentEntities.AccessControlEntry>,
                       ContentCollectionService<IQueryableContentModelOperator<ContentEntities.AccessControlEntry>, ContentEntities.AccessControlEntry>>();
            serviceBuilder.Services.AddTransient<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.HorselessView>, ContentEntities.HorselessView>,
                ContentCollectionService<IQueryableContentModelOperator<ContentEntities.HorselessView>, ContentEntities.HorselessView>>();
            serviceBuilder.Services.AddTransient<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.Publication>, ContentEntities.Publication>,
                ContentCollectionService<IQueryableContentModelOperator<ContentEntities.Publication>, ContentEntities.Publication>>();
            serviceBuilder.Services.AddTransient<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.NugetPackage>, ContentEntities.NugetPackage>,
                   ContentCollectionService<IQueryableContentModelOperator<ContentEntities.NugetPackage>, ContentEntities.NugetPackage>>();
            serviceBuilder.Services.AddTransient<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.Taxon>, ContentEntities.Taxon>,
                            ContentCollectionService<IQueryableContentModelOperator<ContentEntities.Taxon>, ContentEntities.Taxon>>();
            serviceBuilder.Services.AddTransient<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.Taxonomy>, ContentEntities.Taxonomy>,
                             ContentCollectionService<IQueryableContentModelOperator<ContentEntities.Taxonomy>, ContentEntities.Taxonomy>>();
            serviceBuilder.Services.AddTransient<IContentCollectionService<IQueryableContentModelOperator<ContentEntities.Placeholder>, ContentEntities.Placeholder>,
                            ContentCollectionService<IQueryableContentModelOperator<ContentEntities.Placeholder>, ContentEntities.Placeholder>>();

            #endregion

            #region hosting collection query services
            /**
             * for injection into controllers
             **/
            serviceBuilder.Services.AddTransient<IHostingCollectionService<IQueryableHostingModelOperator<HostingEntities.NugetPackage>, HostingEntities.NugetPackage>,
                      HostingCollectionService<IQueryableHostingModelOperator<HostingEntities.NugetPackage>, HostingEntities.NugetPackage>>();
            serviceBuilder.Services.AddTransient<IHostingCollectionService<IQueryableHostingModelOperator<HostingEntities.KeyCloakConfiguration>, HostingEntities.KeyCloakConfiguration>,
                     HostingCollectionService<IQueryableHostingModelOperator<HostingEntities.KeyCloakConfiguration>, HostingEntities.KeyCloakConfiguration>>();
            serviceBuilder.Services.AddTransient<IHostingCollectionService<IQueryableHostingModelOperator<HostingEntities.Tenant>, HostingEntities.Tenant>,
                    HostingCollectionService<IQueryableHostingModelOperator<HostingEntities.Tenant>, HostingEntities.Tenant>>();
            serviceBuilder.Services.AddTransient<IHostingCollectionService<IQueryableHostingModelOperator<HostingEntities.Principal>, HostingEntities.Principal>,
         HostingCollectionService<IQueryableHostingModelOperator<HostingEntities.Principal>, HostingEntities.Principal>>();

            serviceBuilder.Services.AddTransient<IHostingCollectionService<IQueryableHostingModelOperator<HostingEntities.AccessControlEntry>, HostingEntities.AccessControlEntry>,
                HostingCollectionService<IQueryableHostingModelOperator<HostingEntities.AccessControlEntry>, HostingEntities.AccessControlEntry>>();

            serviceBuilder.Services.AddTransient<IHostingCollectionService<IQueryableHostingModelOperator<HostingEntities.TenantInfo>, HostingEntities.TenantInfo>,
                     HostingCollectionService<IQueryableHostingModelOperator<HostingEntities.TenantInfo>, HostingEntities.TenantInfo>>();
            serviceBuilder.Services.AddTransient<IHostingCollectionService<IQueryableHostingModelOperator<HostingEntities.WebAPITenantInfo>, HostingEntities.WebAPITenantInfo>,
                   HostingCollectionService<IQueryableHostingModelOperator<HostingEntities.WebAPITenantInfo>, HostingEntities.WebAPITenantInfo>>();

            #endregion

            #region repositories
            serviceBuilder.Services.AddScoped<IContentPrincipalTasksRepository, ContentPrincipalTasksRepository>();

            #endregion repositories

            serviceBuilder.Services.AddScoped<IAuthenticationSchemesCache, AuthenticationSchemesCache>();


            serviceBuilder.Services.AddSingleton<IHorselessCacheProvider<Guid, ContentEntities.Tenant>, DefaultTenantCache>();

            // support dynamic view loading and unloading
            // wholly based on https://stackoverflow.com/questions/48206993/how-to-load-asp-net-core-razor-view-dynamically-at-runtime
            ServiceDescriptor descriptor = services.FirstOrDefault(s => s.ServiceType == typeof(IViewCompilerProvider));
            serviceBuilder.Services.Remove(descriptor);
            services.AddSingleton<IViewCompilerProvider, HorselessViewCompilerProvider>();

            #region cms routing pattern services
            serviceBuilder.Services.AddScoped<IHorselessRoutingStrategy, UrlSegmentRoutingStrategy>();


            // as per https://stackoverflow.com/questions/33566075/generic-repository-in-asp-net-core-without-having-a-separate-addscoped-line-per
            // support injecting a provider for a generic entity type determined by consumers of the injected service
            //serviceBuilder.Services.AddScoped(typeof(IHorselessQueryResultProvider<>), typeof(HorselessEntityFrameworkQueryProvider<>));
            // don't do this unless you mean to be specific about the Entity collection
            // serviceBuilder.Services.AddScoped<HorselessEntityFrameworkQueryProvider<ContentCollection>>();

            // serviceBuilder.Services.AddScoped< HorselessEntityFrameworkQueryProvider<ContentCollection>>();
            // validate that this needs to be a singleton
            // as it's gating every request
            serviceBuilder.Services.AddScoped<HorselessRouteTransformer>();

            // obsolete
            // serviceBuilder.Services.AddScoped<HorselessTenantSetupMiddleware>();

            serviceBuilder.Services.AddScoped<IHorselessTenantContext, TenantContext>();

            serviceBuilder.Services.AddScoped<HorselessSession>((instanceFactory) =>
            {
                HorselessSession horselessSession = new HorselessSession()
                {
                    Id = Guid.NewGuid(),
                    ObjectId = Guid.NewGuid().ToString()
                };

                using (var scope = instanceFactory.CreateScope())
                {
                    IHttpContextAccessor ctxAccessor = instanceFactory.GetRequiredService<IHttpContextAccessor>();
                    var httpContext = ctxAccessor.HttpContext;

                    var currentUser = httpContext.User;

                    if (currentUser.Identity.IsAuthenticated && currentUser.Claims != null && currentUser.Claims.Count() > 0)
                    {
                        var candidateClaim = currentUser.Claims.Where(w => w.Issuer != null).FirstOrDefault();
                        horselessSession.Iss = candidateClaim.Issuer;
                        horselessSession.Sub = candidateClaim.Subject.Name;
                    }
                }

                return horselessSession;
            });

            #endregion  cms routing pattern services

            #region hosted services
            // hosted service di issues handled as per
            // https://stackoverflow.com/questions/58397807/how-to-resolve-hostedservice-in-controller
            // services.AddTransient<ApplicationPartsLogger>();
            // serviceBuilder.Services.AddHostedService<ApplicationPartsLogger>(provider => provider.GetService<ApplicationPartsLogger>());
            serviceBuilder.Services.AddHostedService<ApplicationPartsLogger>();

            // hosted service di issues handled as per
            // https://stackoverflow.com/questions/58397807/how-to-resolve-hostedservice-in-controller
            serviceBuilder.Services.AddSingleton<TenantCacheService>();
            serviceBuilder.Services.AddHostedService<TenantCacheService>(provider => provider.GetService<TenantCacheService>());
            #endregion hosted services

            var model = new HorselessOdataModel();
            var edmContent = model.GetContentEDMModel();
            var edmHosting = model.GetHostingEDMModel();
            // handle cycles in json responses 
            // as per https://gavilan.blog/2021/05/19/fixing-the-error-a-possible-object-cycle-was-detected-in-different-versions-of-asp-net-core/
            services.AddControllers(
                    opts =>
                    {
                        // permit content negotiation
                        opts.RespectBrowserAcceptHeader = true;
                    }
                ).AddJsonOptions(x =>
                {
                    x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
                    x.JsonSerializerOptions.PropertyNamingPolicy = null; // leave property names unchanged
                    x.JsonSerializerOptions.PropertyNameCaseInsensitive = true;
                    x.JsonSerializerOptions.ReadCommentHandling = System.Text.Json.JsonCommentHandling.Skip;

                })
                    .AddOData(options =>
                    {
                        /// TODO - surface these as configurable parameters 
                        options
                        .Select()
                        .Expand()
                        .Filter()
                        .OrderBy()
                        .SetMaxTop(100)
                        .Count();

                        options.TimeZone = TimeZoneInfo.Utc;
                        // options.Conventions.Remove(options.Conventions.First(convention => convention is MetadataRoutingConvention));

                        /// todo make this an environment configurable item
                        options.AddRouteComponents("ODataContent", edmContent);



                    })
                    .AddOData(options =>
                    {
                        /// TODO - surface these as configurable parameters 
                        options
                        .Select()
                        .Expand()
                        .Filter()
                        .OrderBy()
                        .SetMaxTop(100)
                        .Count();

                        options.TimeZone = TimeZoneInfo.Utc;
                        // options.Conventions.Remove(options.Conventions.First(convention => convention is MetadataRoutingConvention));

                        /// todo make this an environment configurable item
                        options.AddRouteComponents("ODataHosting", edmHosting);
                    });

            options?.Invoke(serviceBuilder);

            return services;
        }
    }
}
