using HorselessNewspaper.RazorClassLibrary.CMS.Default.Controllers;
using HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.REST;
using HorselessNewspaper.Web.Core.Auth.Keycloak.Extensions;
using HorselessNewspaper.Web.Core.Extensions;
using HorselessNewspaper.Web.Core.Extensions.Hosting;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.Mvc.Razor.RuntimeCompilation;
using Microsoft.AspNetCore.OData;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using System.Reflection;
using TheHorselessNewspaper.HostingModel.Context.MSSQL;

namespace HorselessNewspaper.Web.Core.Startup
{
    /// <summary>
    /// support extensible startup 
    /// that encapsulates what's required
    /// to boot the cms
    /// 
    /// as per 
    /// https://www.infoworld.com/article/3646098/demystifying-the-program-and-startup-classes-in-aspnet-core.html
    /// </summary>
    public class HorselessAppStartup : AbstractAppStartup
    {
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
                app.UseRouteDebugger();

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


            services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.Unspecified;
                // Handling SameSite cookie according to https://docs.microsoft.com/en-us/aspnet/core/security/samesite?view=aspnetcore-3.1
                // options.HandleSameSiteCookieCompatibility();
            });
            services.AddCors(options =>
            {

                options.AddDefaultPolicy(
                    builder =>
                    {
            // TODO put something rational and devops engineer production environment configurable here
                        builder.AllowAnyOrigin();
                    });
            });


            services.AddRazorPages();
            // .AddRazorRuntimeCompilation();

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

            // globally enables mssql server
            services.UseHorselessContentModelMSSqlServer(Configuration, Configuration.GetConnectionString("ContentModelConnection"));
            services.UseHorselessHostingModelMSSqlServer(Configuration, Configuration.GetConnectionString("HostingModelConnection"));



            // as per https://docs.microsoft.com/en-us/shows/on-net/adding-a-little-swagger-to-odata
            // as per https://github.com/OData/WebApi/issues/2024

            services.AddStackExchangeRedisCache(o =>
            {
                o.Configuration = Configuration.GetConnectionString("RedisSessionCache");
            });

            services.AddSession(options =>
            {
                options.Cookie.SameSite = Microsoft.AspNetCore.Http.SameSiteMode.None;
                options.Cookie.SecurePolicy = CookieSecurePolicy.SameAsRequest;
            });

        }
    }
}
