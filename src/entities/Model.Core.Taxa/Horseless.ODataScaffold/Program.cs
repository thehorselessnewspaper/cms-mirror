using HorselessNewspaper.RazorClassLibrary.CMS.Default.Controllers;
using HorselessNewspaper.Web.Core.Auth.Keycloak.Extensions;
using HorselessNewspaper.Web.Core.Extensions;
using HorselessNewspaper.Web.Core.Extensions.Hosting;
using Microsoft.AspNetCore.Mvc.Razor.RuntimeCompilation;
using Microsoft.AspNetCore.OData;
using Microsoft.Extensions.FileProviders;
using TheHorselessNewspaper.Schemas.HostingModel.Context.MSSQL;
using TheHorselessNewspaper.Schemas.HostingModel.ODATA;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();


builder.Services.AddCors(options =>
{

    options.AddDefaultPolicy(
        builder =>
        {
            // TODO put something rational and devops engineer production environment configurable here
            builder.WithOrigins("https://localhost").AllowAnyOrigin();
        });
});


builder.Services.AddControllersWithViews()
    .AddRazorRuntimeCompilation();

builder.Services.AddODataQueryFilter();
// enables odata entities
var model = new HorselessOdataModel();
var edm = await model.GetEdmModel();
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
        options.AddRouteComponents("horselessdata", edm);
    });

builder.Services.Configure<MvcRazorRuntimeCompilationOptions>(options =>
{
    options.FileProviders.Add(
            new EmbeddedFileProvider(typeof(HorselessCMSController).Assembly));
});

builder.Services.AddHorselessNewspaper(builder.Configuration);

// globally enables mssql server
builder.Services.UseHorselessContentModelMSSqlServer(builder.Configuration);
builder.Services.UseHorselessHostingModelMSSqlServer(builder.Configuration);

// as per https://github.com/aspnet-contrib/AspNet.Security.OAuth.Providers/blob/dev/docs/keycloak.md
builder.Services.AddHorselessKeycloakAuth(builder, keycloakOpts =>
{

});



var app = builder.Build();
// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();


app.UseCors();

app.UseAuthentication();
app.UseAuthorization();

app.UseHorselessNewspaper(app, app.Environment, app.Configuration, options =>
{


});

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
