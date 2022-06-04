using HorselessNewspaper.RazorClassLibrary.CMS.Default.Controllers;
using HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.REST;
using HorselessNewspaper.Web.Core.Auth.Keycloak.Extensions;
using HorselessNewspaper.Web.Core.Extensions;
using HorselessNewspaper.Web.Core.Extensions.Hosting;
using HorselessNewspaper.Web.Core.Startup.Delegates;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpLogging;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.Mvc.Razor.RuntimeCompilation;
using Microsoft.AspNetCore.OData;
using Microsoft.AspNetCore.Routing;
using Microsoft.CodeAnalysis;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using System.Reflection;
using TheHorselessNewspaper.HostingModel.Context.MSSQL;

namespace HorselessNewspaper.Web.Core.Startup
{

    /// <summary>
    /// support extensible startup 
    /// that 
    /// 
    /// implements an opinionated startup.cs
    /// 
    /// encapsulates what's required
    /// to boot the cms in the tested order
    /// of registration of middleware and services
    /// 
    /// permits application developers to 
    /// fully participate in the startup.cs workflow
    /// without rewriting one if they don't want to
    /// 
    /// as per 
    /// https://www.infoworld.com/article/3646098/demystifying-the-program-and-startup-classes-in-aspnet-core.html
    /// </summary>
    public class HorselessAppStartup : AbstractAppStartup
    {
        public ConfigureSharedHostingDb OnConfigureSharedHostingDb;
        public ConfigureSharedContentDb OnConfigureSharedContentDb;

        public ConfigureRazorPages OnAddRazorPages;

        public ConfigureAuthenticationCookie OnAddAuthenticationCookie;

        public ConfigureSession OnConfigureSession;

        public ConfigureCors OnConfigureCors;

        public ConfigureCookiePolicy OnConfigureDefaultCookiePolicy;

        public ConfigureHttpLogging OnConfigureHttpLogging;

        IWebHostEnvironment Environment;
        public HorselessAppStartup(IConfiguration configuration, IWebHostEnvironment env) : base(configuration)
        {
            this.Environment = env;
        }

        public override void Configure(WebApplication app, IWebHostEnvironment env)
        {

            /// <summary>
            /// as per https://www.thecodebuzz.com/failed-to-determine-the-https-port-for-the-redirect/
            /// </summary>
            app.UseForwardedHeaders();

            // Configure the HTTP request pipeline.

            if (app.Environment.IsDevelopment())
            {
                // as per https://edi.wang/post/2020/4/29/my-aspnet-core-route-debugger-middleware
                // app.UseRouteDebugger();

            }

            if (!app.Environment.IsDevelopment())
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                // app.UseHsts();
            }

            app.UseStatusCodePages();

            app.UseSwagger();
            app.UseSwaggerUI();

            // no enforcement of https in dev
            // since https won't exist on containers in kubernetes
            // without great antipattern effort
            // app.UseHttpsRedirection();


            /// <summary>
            /// enables multitenancy and other cms patterns
            /// with attention to order of registration
            /// as per 
            ///     - https://docs.microsoft.com/en-us/aspnet/core/fundamentals/middleware/?view=aspnetcore-6.0#middleware-order
            ///     - https://www.finbuckle.com/MultiTenant/Docs/v6.6.0/ConfigurationAndUsage
            /// except for
            ///     builder.UseAuthentication() situated prior to builder.UseRouting()
            ///     due to need for ClaimsPrincipal during routing middleware logic
            ///     builder.UseAuthentication();     
            ///     builder.UseRouting();
            ///     builder.UseCors();
            ///     builder.UseMultiTenant();
            ///     builder.UseAuthorization();
            /// </summary>
            app.UseHorselessNewspaper(app, app.Environment, app.Configuration, options =>
            {
                

            });

            app.MapRazorPages();
            //app.MapControllerRoute(
            //    name: "default",
            //    pattern: "{controller=Home}/{action=Index}/{id?}");

        }

        public override void ConfigureServices(IServiceCollection services)
        {

            if (OnConfigureHttpLogging != null)
            {
                services.AddHttpLogging(logging =>
                {
                    OnConfigureHttpLogging(logging);

                });

            }
            else
            {
                services.AddHttpLogging(logging =>
                {
                    logging.LoggingFields = HttpLoggingFields.All;
                    logging.RequestBodyLogLimit = 4096;
                    logging.ResponseBodyLogLimit = 4096;

                });
            }


            services.Configure<CookiePolicyOptions>(options =>
            {

                if (OnConfigureDefaultCookiePolicy != null)
                {
                    OnConfigureDefaultCookiePolicy(options);
                }
                else
                {
                    // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                    options.CheckConsentNeeded = context => true;
                    options.MinimumSameSitePolicy = SameSiteMode.Lax;

                    options.Secure = CookieSecurePolicy.None;
                    // Handling SameSite cookie according to https://docs.microsoft.com/en-us/aspnet/core/security/samesite?view=aspnetcore-3.1
                    // options.HandleSameSiteCookieCompatibility();
                }
            });
            services.AddCors(options =>
            {
                if (OnConfigureCors != null)
                {
                    OnConfigureCors(options);
                }
                else
                {
                    options.AddDefaultPolicy(
                        builder =>
                        {
                            builder
                            .AllowAnyHeader()
                            .AllowAnyMethod()
                            .AllowAnyOrigin();


                        });
                }
            });

            if (OnAddRazorPages != null)
            {
                OnAddRazorPages(services);
            }
            else
            {
                services.AddRazorPages();
                // .AddRazorRuntimeCompilation();
            }

            services.AddControllersWithViews(options =>
            {
                // options.Filters.Add<InstallRequiredActionFilter>(int.MinValue);
            }).AddRazorRuntimeCompilation();

            services.AddODataQueryFilter();

            /// <summary>
            /// as per https://www.thecodebuzz.com/failed-to-determine-the-https-port-for-the-redirect/
            /// </summary>
            services.Configure<ForwardedHeadersOptions>(options =>
            {
                options.ForwardedHeaders =
                    ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto;

            });

            services.AddHttpContextAccessor();
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen(options =>
            {
                // options.ResolveConflictingActions(apiDescriptions => apiDescriptions.First());

                options.CustomSchemaIds(t =>
                {
                    // produce this template export interface ContentEntitiesAccessControlEntry 
                    var frag = t.FullName.Split('.');
                    var container = frag[frag.Length - 2];
                    return container + t.Name;
                });
                //options.CustomOperationIds(apiDesc =>
                //{
                //    // produce this template export interface ContentEntitiesAccessControlEntry 
                //    return apiDesc.TryGetMethodInfo(out MethodInfo methodInfo) ? methodInfo.DeclaringType.Name + methodInfo.Name : null;

                //});
                options.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo { Title = "Horseless Content API", Version = "v1" });

                // eliminate odata metadata controller from swagger doc
                // as per https://stackoverflow.com/questions/70472622/how-to-hide-odata-metadata-controller-in-swagger
                options.DocumentFilter<SwaggerODataControllerDocumentFilter>();
            });


            // as per https://github.com/aspnet-contrib/AspNet.Security.OAuth.Providers/blob/dev/docs/keycloak.md
            services.AddHorselessKeycloakAuth(Configuration, keycloakOpts =>
            {

            });

            services.AddHorselessNewspaper(Configuration, Environment);

            services.Configure<MvcRazorRuntimeCompilationOptions>(options =>
            {
                options.FileProviders.Add(
                        new EmbeddedFileProvider(typeof(HorselessCMSController).Assembly));

                options.FileProviders.Add(new EmbeddedFileProvider(
                    typeof(HorselessCMSController).GetTypeInfo().Assembly,
                    "HorselessNewspaper.RazorClassLibrary.CMS.Default"
                ));

                var contentRootPath = Path.GetFullPath(
                Path.Combine(Environment.ContentRootPath, ".", ""));

                var librarypath = Path.GetFullPath(
                   Path.Combine(contentRootPath, "..", "HorselessNewspaper.RazorClassLibrary.CMS.Default"));
                options.FileProviders.Add(new PhysicalFileProvider(contentRootPath));

                options.FileProviders.Add(new PhysicalFileProvider(Environment.ContentRootPath));



                //options.FileProviders.Add(new PhysicalFileProvider(contentRootPath));
            });

            if (OnConfigureSharedContentDb != null)
            {
                OnConfigureSharedContentDb(services);
            }
            else
            {
                // globally enables mssql server
                services.UseHorselessContentModelMSSqlServer(Configuration, Configuration.GetConnectionString("ContentModelConnection"));
            }

            if (OnConfigureSharedHostingDb != null)
            {
                OnConfigureSharedHostingDb(services);
            }
            else
            {
                services.UseHorselessHostingModelMSSqlServer(Configuration, Configuration.GetConnectionString("HostingModelConnection"));
            }


            // as per https://docs.microsoft.com/en-us/shows/on-net/adding-a-little-swagger-to-odata
            // as per https://github.com/OData/WebApi/issues/2024

            // **** warning ****
            // this is a mission critical service
            // without which login is impaired by
            // loss of cookies on post /signin-oidc
            services.AddStackExchangeRedisCache(o =>
            {
                o.Configuration = Configuration.GetConnectionString("RedisSessionCache");
            });

            services.AddSession(options =>
            {
                if (OnConfigureSession != null)
                {
                    OnConfigureSession(options);
                }
                else
                {
                    options.Cookie.SameSite = Microsoft.AspNetCore.Http.SameSiteMode.Lax;
                    options.Cookie.SecurePolicy = CookieSecurePolicy.SameAsRequest;
                }
            });

        }
    }
}
