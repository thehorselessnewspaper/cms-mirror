using Finbuckle.MultiTenant;
using HorselessNewspaper.RazorClassLibrary.CMS.Default.Controllers;
using HorselessNewspaper.Web.Core.Auth.Keycloak.Extensions;
using HorselessNewspaper.Web.Core.Extensions;
using HorselessNewspaper.Web.Core.Extensions.Hosting;
using Microsoft.AspNetCore.Mvc.Razor.RuntimeCompilation;
using Microsoft.AspNetCore.OData;
using Microsoft.AspNetCore.OData.Formatter;
using Microsoft.Extensions.FileProviders;
using TheHorselessNewspaper.Schemas.HostingModel.Context.MSSQL;
using TheHorselessNewspaper.Schemas.HostingModel.ODATA;
using Swashbuckle.AspNetCore.SwaggerGen;
using System.Reflection;
using Microsoft.Net.Http.Headers;
using HorselessNewspaper.Web.Core.Filters.ActionFilters.Infrastructure;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddCors(options =>
{

    options.AddDefaultPolicy(
        builder =>
        {
            // TODO put something rational and devops engineer production environment configurable here
            builder.WithOrigins("https://localhost").AllowAnyOrigin();
        });
});

// setup a default tenant store

//builder.Services.AddMultiTenant<TenantInfo>()
//    .WithInMemoryStore(options =>
//    {
//        options.Tenants.Add(new TenantInfo()
//        {
//            ConnectionString = builder.Configuration.GetConnectionString("ContentModelConnection"),
//            Id = "6da806b8-f7ab-4e3a-8833-7e834a40e9d0",
//            Identifier = "6da806b8-f7ab-4e3a-8833-7e834a40e9d0",
//            Name = "the horseless phantom tenant"
//        });
//    })
//    .WithStaticStrategy("6da806b8-f7ab-4e3a-8833-7e834a40e9d0");


builder.Services.AddRazorPages();
builder.Services.AddControllersWithViews(options =>
{
    options.Filters.Add<InstallRequiredActionFilter>(int.MinValue);
})
.AddRazorRuntimeCompilation();
builder.Services.AddODataQueryFilter();
// enables odata entities
var model = new HorselessOdataModel();
var edm = await model.GetContentEDMModel();
// odata concerns
builder.Services.AddControllers()
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

        /// todo make this an environment configurable item
        options.AddRouteComponents("HorselessContent", edm);
    });

builder.Services.AddHttpContextAccessor();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
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

builder.Services.Configure<MvcRazorRuntimeCompilationOptions>(options =>
{
    options.FileProviders.Add(
            new EmbeddedFileProvider(typeof(HorselessCMSController).Assembly));
});

// as per https://github.com/aspnet-contrib/AspNet.Security.OAuth.Providers/blob/dev/docs/keycloak.md
builder.Services.AddHorselessKeycloakAuth(builder, keycloakOpts =>
{

});


builder.Services.AddHorselessNewspaper(builder.Configuration);


builder.Services.UseHorselessContentModelMSSqlServer(builder.Configuration, builder.Configuration.GetConnectionString("ContentModelConnection"));
builder.Services.UseHorselessHostingModelMSSqlServer(builder.Configuration, builder.Configuration.GetConnectionString("HostingModelConnection"));
builder.Services.AddMvcCore(options =>
{
    IEnumerable<ODataOutputFormatter> outputFormatters =
    options.OutputFormatters.OfType<ODataOutputFormatter>()
        .Where(foramtter => foramtter.SupportedMediaTypes.Count == 0);

    foreach (var outputFormatter in outputFormatters)
    {
        outputFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("application/odata"));
    }

});

builder.Services.AddDistributedMemoryCache();
builder.Services.AddSession();




var app = builder.Build();
// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}


app.UseSwagger();
app.UseSwaggerUI();
app.UseHttpsRedirection();
app.UseHorselessNewspaper(app, app.Environment, app.Configuration, options =>
{


});
app.MapRazorPages();


app.Run();
