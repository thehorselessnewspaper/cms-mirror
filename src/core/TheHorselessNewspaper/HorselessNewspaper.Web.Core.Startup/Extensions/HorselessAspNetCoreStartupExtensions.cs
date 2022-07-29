using AutoMapper;
using HorselessNewspaper.Core.Interfaces.Security.Cache;
using HorselessNewspaper.Web.Core.Automapper;
using HorselessNewspaper.Web.Core.HostedServices.ApplicationParts.ApplicationPartsLogger;
using HorselessNewspaper.Web.Core.HostedServices.Cache.TenantCache;
using HorselessNewspaper.Web.Core.Interfaces.Cache;
using HorselessNewspaper.Web.Core.Middleware.HorselessRouter;
using HorselessNewspaper.Web.Core.Middleware.HorselessRouter.Strategy;
using HorselessNewspaper.Web.Core.ScopedServices.AuthenticationSchemes;
using HorselessNewspaper.Web.Core.ScopedServices.RestClients;
using HorselessNewspaper.Web.Core.ScopedServices.RoutingStrategy;
using HorselessNewspaper.Web.Core.Services.Model.Extensions.Hosting;
using HorselessNewspaper.Web.Core.Services.Query.Authorization.Contexts;
using HorselessNewspaper.Web.Core.Services.Query.Authorization.Handler;
using HorselessNewspaper.Web.Core.Services.Query.Extensions;
using HorselessNewspaper.Web.Core.SingletonServices.Cache.Tenant;
using HorselessNewspaper.Web.Core.SingletonServices.ViewCompiler;
using HorselessNewspaper.Web.Core.UnitOfWork.ContentModelTasks.PrincipalTasks;
using Microsoft.AspNetCore.Authorization;
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
using TheHorselessNewspaper.HostingModel.MultiTenant;
using TheHorselessNewspaper.HostingModel.ODATA;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using ContentEntities = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using HostingEntities = TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
using HorselessNewspaper.Client.RabbitMQ.Extensions;
using HorselessNewspaper.Core.Repositories.TenantFilesystem.Extensions;
using HorselessNewspaper.Web.Core.Services.Persistence.LocalFilesystem.Extensions;
using HorselessNewspaper.Web.Core.Services.Query.HorselessRESTAPIClient;

namespace HorselessNewspaper.Web.Core.Extensions
{
    /// <summary>
    /// support headless cms asp.net core startup semantics
    /// </summary>
    public static class HorselessAspNetCoreStartupExtensions
    {
        private const string defaultTenantIdentifier = "lache";
        private const string DefaultIdentifier = "lache";
        public static IServiceCollection AddHorselessNewspaper(this IServiceCollection services, IConfiguration configuration, IWebHostEnvironment environment,
        Action<HorselessServiceBuilder> options = null, ServiceLifetime scope = ServiceLifetime.Scoped)
        {
            var serviceBuilder = new HorselessServiceBuilder(configuration, services);

            serviceBuilder.Services.AddSingleton<IConfiguration>(configuration);
            serviceBuilder.Services.AddFeatureManagement();

            // as per https://docs.microsoft.com/en-us/aspnet/core/security/authorization/resourcebased?view=aspnetcore-6.0
            serviceBuilder.Services.AddTransient<IAuthorizationHandler, RLSAuthorizationHandler>();

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


            serviceBuilder.Services.AddPosixFilesystemRepository();
            serviceBuilder.Services.AddPosixFilesystemService();

            serviceBuilder.Services.AddTransient<IHorselessRestApiClient, HorselessRestApiClient>(

                s =>
                {
                    var baseUrl = configuration["RestApiBaseUrl"];
                    return new HorselessRestApiClient(
                        baseUrl: baseUrl, s.GetRequiredService<HttpClient>()
                    );
                });


            serviceBuilder.Services.AddTransient<IHorselessRESTAPIClient, HorselessRESTAPIClient>(

                s =>
                {
                    var baseUrl = configuration["RestApiBaseUrl"];
                    return new HorselessRESTAPIClient(
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

            // register rabitmq client
            services.AddHorselessRabbitMQClient();

            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            #region multitenancy as per https://www.finbuckle.com/MultiTenant/
            serviceBuilder.Services.AddMultiTenant<HorselessTenantInfo>()
                .WithInMemoryStore(options =>
                {
                    options.Tenants.Add(
                        new HorselessTenantInfo()
                        {
                            Payload = new HostingEntities.TenantInfo()
                            {
                                ConnectionString = configuration.GetConnectionString("ContentModelConnection"),
                                Id = Guid.Parse("6da806b8-f7ab-4e3a-8833-7e834a40e9d0"),
                                Identifier = DefaultIdentifier, // = "6da806b8-f7ab-4e3a-8833-7e834a40e9d0",
                                Name = "the Management",
                                ObjectId = "236324b8-278e-4372-9d06-13c40aabd8b2",
                                CreatedAt = DateTime.UtcNow,
                                DisplayName = "the management tenant",
                                ParentTenant = new HostingEntities.Tenant()
                                {
                                    Id = Guid.NewGuid(),
                                    DisplayName = "the management",
                                    IsPublished = true,
                                    IsSoftDeleted = false,
                                    ObjectId = Guid.NewGuid().ToString(),
                                    TenantIdentifier = DefaultIdentifier,
                                    TenantIdentifierStrategy = new HostingEntities.TenantIdentifierStrategy()

                                }
                            }
                        });
                })
                .WithDistributedCacheStore(TimeSpan.FromMinutes(5))

                 .WithBasePathStrategy(o => o.RebaseAspNetCorePathBase = false)
                 .WithHeaderStrategy("__tenant__")
                 .WithRouteStrategy("__tenant__")
                .WithDelegateStrategy(async context =>
                {
                    var httpContext = context as HttpContext;
                    if (httpContext == null)
                    {
                        return defaultTenantIdentifier; // return "6da806b8-f7ab-4e3a-8833-7e834a40e9d0";
                    }
                    else
                    {
                        var routeValue = httpContext.Request.RouteValues["__tenant__"] as string;

                        if (routeValue != String.Empty && routeValue != null)
                        {
                            var tenantIdParm = routeValue.ToString();
                            return tenantIdParm;
                        }
                        else
                        {
                            return defaultTenantIdentifier; // return "6da806b8-f7ab-4e3a-8833-7e834a40e9d0";
                        }
                    }
                });
            //.WithStaticStrategy(defaultTenantIdentifier);



            #endregion multitenancy as per https://www.finbuckle.com/MultiTenant/

            #region content collection query services
            /**
             * for injection into controllers
             **/

            services.AddHorselessQueryOperators();

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

            services.AddControllers().AddJsonOptions(x =>
                    x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.Preserve);
            services.AddMvc(
                    opts =>
                    {
                        // permit content negotiation
                        opts.RespectBrowserAcceptHeader = true; opts.EnableEndpointRouting = true;
                    }
                )
                .AddJsonOptions(x =>
                {  
                    x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
                    x.JsonSerializerOptions.MaxDepth = 1;
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
                        .SetMaxTop(1000)
                        .Count();

                        options.TimeZone = TimeZoneInfo.Utc;
                        // options.Conventions.Remove(options.Conventions.First(convention => convention is MetadataRoutingConvention));

                        /// todo make this an environment configurable item
                        // options.AddRouteComponents("ODataHosting", edmHosting);
                        options.AddRouteComponents("{__tenant__}/ODataContent", edmContent);
                        options.AddRouteComponents("{__tenant__}/ODataHosting", edmHosting);


                    });
            // .ddOData(options =>
            //{
            //    /// TODO - surface these as configurable parameters 
            //    options
            //    .Select()
            //    .Expand()
            //    .Filter()
            //    .OrderBy()
            //    .SetMaxTop(1000)
            //    .Count();

            //    options.TimeZone = TimeZoneInfo.Utc;
            //    // options.Conventions.Remove(options.Conventions.First(convention => convention is MetadataRoutingConvention));
            //    options.AddRouteComponents("{__tenant__}/ODataHosting", edmHosting);

            //    /// todo make this an environment configurable item
            //    // options.AddRouteComponents("ODataHosting", edmHosting);
            //    // options.AddRouteComponents(edmContent);
            //});
            services.AddODataQueryFilter();

            options?.Invoke(serviceBuilder);

            return services;
        }
    }
}
