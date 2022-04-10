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

var builder = WebApplication.CreateBuilder(args);
using var loggerFactory = LoggerFactory.Create(builder =>
{
    builder
        .AddFilter("Microsoft", LogLevel.Warning)
        .AddFilter("System", LogLevel.Warning)
        .AddFilter("LoggingConsoleApp.Program", LogLevel.Debug)
        .AddConsole();
});

ILogger logger = loggerFactory.CreateLogger<Program>();

builder.Services.AddCors(options =>
{

    options.AddDefaultPolicy(
        builder =>
        {
            // TODO put something rational and devops engineer production environment configurable here
            builder.WithOrigins("https://localhost").AllowAnyOrigin();
        });
});


builder.Services.AddRazorPages()
    .AddRazorRuntimeCompilation();

builder.Services.AddControllersWithViews(options =>
{
    options.Filters.Add<InstallRequiredActionFilter>(int.MinValue);
})
.AddRazorRuntimeCompilation();

builder.Services.AddODataQueryFilter();


// enables odata entities
var model = new HorselessOdataModel();
var edmContent = await model.GetContentEDMModel();
var edmHosting = await model.GetHostingEDMModel();

// spa concerns 
// as per https://www.teamscs.com/2021/05/creating-a-vue-js-net-core-web-app/
//builder.Services.AddSpaStaticFiles(options =>
//{
//    options.RootPath = "horseless-vues/dist";
//});

// odata concerns


builder.Services.AddControllers()
    // json cycle handler as per https://gavilan.blog/2021/05/19/fixing-the-error-a-possible-object-cycle-was-detected-in-different-versions-of-asp-net-core/
    .AddJsonOptions(x => x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.Preserve)
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
        options.AddRouteComponents("HorselessContent", edmContent);


        
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
        options.AddRouteComponents("HorselessHosting", edmHosting);
    });

/// <summary>
/// as per https://www.thecodebuzz.com/failed-to-determine-the-https-port-for-the-redirect/
/// </summary>
builder.Services.Configure<ForwardedHeadersOptions>(options =>
{
    options.ForwardedHeaders =
        ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto;
});

builder.Services.AddHttpContextAccessor();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.ResolveConflictingActions(apiDescriptions => apiDescriptions.First());
    options.CustomSchemaIds(t =>
    {
        // produce this template export interface ContentEntitiesAccessControlEntry 
        var frag = t.FullName.Split('.');
        var container = frag[frag.Length - 2];
        return container + t.Name;
    });
    options.CustomOperationIds(apiDesc =>
    {
        // produce this template export interface ContentEntitiesAccessControlEntry 
        return apiDesc.TryGetMethodInfo(out MethodInfo methodInfo) ? methodInfo.DeclaringType.Name + methodInfo.Name : null;

    });
    options.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo { Title = "Horseless Content API", Version = "v1" });

});

//// this hardcodes a static reference to the default horseless razor class library
//// i am sorry - the hoped for benefit is that this will always have a default implementation
//// .AddApplicationPart(typeof(HorselessCMSController).Assembly);



// as per https://github.com/aspnet-contrib/AspNet.Security.OAuth.Providers/blob/dev/docs/keycloak.md
builder.Services.AddHorselessKeycloakAuth(builder, keycloakOpts =>
{

});

builder.Services.AddHorselessNewspaper(builder.Configuration, builder.Environment);

builder.Services.Configure<MvcRazorRuntimeCompilationOptions>(options =>
{
    //options.FileProviders.Add(
    //        new EmbeddedFileProvider(typeof(HorselessCMSController).Assembly));

    //var libraryPath = Path.GetFullPath(
    //   Path.Combine(builder.Environment.ContentRootPath, "..", "HorselessNewspaper.RazorClassLibrary.CMS.Default"));

    //options.FileProviders.Add(new PhysicalFileProvider(libraryPath));

    //var contentRootPath = Path.GetFullPath(
    //Path.Combine(builder.Environment.ContentRootPath, ".", ""));

    //options.FileProviders.Add(new PhysicalFileProvider(contentRootPath));
});

// globally enables mssql server
builder.Services.UseHorselessContentModelMSSqlServer(builder.Configuration, builder.Configuration.GetConnectionString("ContentModelConnection"));
builder.Services.UseHorselessHostingModelMSSqlServer(builder.Configuration, builder.Configuration.GetConnectionString("HostingModelConnection"));



// as per https://docs.microsoft.com/en-us/shows/on-net/adding-a-little-swagger-to-odata
// as per https://github.com/OData/WebApi/issues/2024
builder.Services.AddMvcCore(options =>
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

}).AddRazorRuntimeCompilation();

builder.Services.AddDistributedMemoryCache();
builder.Services.AddSession(options =>
{
    options.Cookie.SameSite = Microsoft.AspNetCore.Http.SameSiteMode.None;
    options.Cookie.SecurePolicy = CookieSecurePolicy.Always;
    options.Cookie.IsEssential = true;
});

foreach (var service in builder.Services)
{
    logger.LogDebug($"Service: {service.ServiceType.FullName} Lifetime: { service.Lifetime} Instance: { service.ImplementationType?.FullName}");
}



var app = builder.Build();

/// <summary>
/// as per https://www.thecodebuzz.com/failed-to-determine-the-https-port-for-the-redirect/
/// </summary>
app.UseForwardedHeaders();

// Configure the HTTP request pipeline.

if(app.Environment.IsDevelopment())
{
    // as per https://edi.wang/post/2020/4/29/my-aspnet-core-route-debugger-middleware
    app.UseRouteDebugger();

}

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();


}

app.UseSwagger();
app.UseSwaggerUI();
app.UseHttpsRedirection();


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


app.Run();

public partial class Program { }