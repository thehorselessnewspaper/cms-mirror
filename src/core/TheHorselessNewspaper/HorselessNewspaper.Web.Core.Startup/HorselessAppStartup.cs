using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using HorselessNewspaper.RazorClassLibrary.CMS.Default.Controllers;
using HorselessNewspaper.Web.Core.Auth.Keycloak.Extensions;
using HorselessNewspaper.Web.Core.Extensions;
using HorselessNewspaper.Web.Core.Extensions.Hosting;
using HorselessNewspaper.Web.Core.Filters.ActionFilters.Infrastructure;
using Microsoft.AspNetCore.Mvc.Razor.RuntimeCompilation;
using Microsoft.AspNetCore.OData;
using Microsoft.AspNetCore.OData.Formatter;
using Microsoft.Extensions.FileProviders;
using Microsoft.Net.Http.Headers;
using Swashbuckle.AspNetCore.SwaggerGen;
using System.Reflection;
using TheHorselessNewspaper.Schemas.HostingModel.Context.MSSQL;
using TheHorselessNewspaper.Schemas.HostingModel.ODATA;
using Microsoft.AspNetCore.OData.Routing.Conventions;
using Microsoft.AspNetCore.HttpOverrides;
using System.Text.Json.Serialization;
using Finbuckle.MultiTenant;
using TheHorselessNewspaper.HostingModel.MultiTenant;
using HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.REST;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Http;

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
        public HorselessAppStartup(IConfigurationRoot configuration) : base(configuration)
        {

        }

        public override void Configure(IApplicationBuilder app)
        {
            throw new NotImplementedException();
        }

        public override void ConfigureServices(IServiceCollection services)
        {

            services.AddCors(options =>
            {

                options.AddDefaultPolicy(
                    builder =>
                    {
            // TODO put something rational and devops engineer production environment configurable here
                        builder.WithOrigins("https://localhost").AllowAnyOrigin();
                    });
            });


            services.AddRazorPages();
            // .AddRazorRuntimeCompilation();

            services.AddControllersWithViews(options =>
            {
                // options.Filters.Add<InstallRequiredActionFilter>(int.MinValue);
            });
            // .AddRazorRuntimeCompilation();

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
 
                options.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo { Title = "Horseless Content API", Version = "v1" });

                // eliminate odata metadata controller from swagger doc
                // as per https://stackoverflow.com/questions/70472622/how-to-hide-odata-metadata-controller-in-swagger
                options.DocumentFilter<SwaggerODataControllerDocumentFilter>();
            });


            // as per https://github.com/aspnet-contrib/AspNet.Security.OAuth.Providers/blob/dev/docs/keycloak.md
            services.AddHorselessKeycloakAuth(builder, keycloakOpts =>
            {

            });

            services.AddHorselessNewspaper(this.Configuration, builder.Environment);

            

            // globally enables mssql server
            services.UseHorselessContentModelMSSqlServer(this.Configuration, this.Configuration.GetConnectionString("ContentModelConnection"));
            services.UseHorselessHostingModelMSSqlServer(this.Configuration, this.Configuration.GetConnectionString("HostingModelConnection"));


            // as per https://docs.microsoft.com/en-us/shows/on-net/adding-a-little-swagger-to-odata
            // as per https://github.com/OData/WebApi/issues/2024
            services.AddMvcCore(options =>
            {
                IEnumerable<ODataOutputFormatter> outputFormatters =
                options.OutputFormatters.OfType<ODataOutputFormatter>()
                    .Where(foramtter => foramtter.SupportedMediaTypes.Count == 0);

                IEnumerable<ODataInputFormatter> inputFormatters =
                    options.InputFormatters.OfType<ODataInputFormatter>()
                        .Where(formatter => formatter.SupportedMediaTypes.Count == 0);

                foreach (var outputFormatter in outputFormatters)
                {
                    outputFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("application/odata"));
                    outputFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("application/json"));

                }

                foreach (var inputFormatter in inputFormatters)
                {
                    inputFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("application/odata"));
                    inputFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("application/json"));

                }

            });

            services.AddDistributedMemoryCache();
            services.AddSession(options =>
            {
                options.Cookie.SameSite = Microsoft.AspNetCore.Http.SameSiteMode.None;
                options.Cookie.SecurePolicy = CookieSecurePolicy.Always;
                options.Cookie.IsEssential = true;
            });

        }
    }
}
