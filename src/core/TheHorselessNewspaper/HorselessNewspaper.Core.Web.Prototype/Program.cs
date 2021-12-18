using HorselessNewspaper.Web.Core.Extensions;
using HorselessNewspaper.Web.Core.Interfaces.Cache;
using HorselessNewspaper.Web.Core.SingletonServices.Cache.Tenant;
using TheHorselessNewspaper.Schemas.HostingModel.DTO;
using HorselessNewspaper.Web.Core.Extensions.Hosting;
using HorselessNewspaper.Web.Core.Middleware.HorselessRouter;
using HorselessNewspaper.Web.Core.Auth.Keycloak.Extensions;
using Microsoft.Extensions.Options;
using HorselessNewspaper.RazorClassLibrary.CMS.Default.Controllers;
using System.Configuration;
using Microsoft.Extensions.FileProviders;
using Microsoft.AspNetCore.Mvc.Razor.RuntimeCompilation;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllersWithViews()
    // this hardcodes a static reference to the default horseless razor class library
    // i am sorry - the hoped for benefit is that this will always have a default implementation
    .AddApplicationPart(typeof(HorselessCMSController).Assembly);

builder.Services.Configure<MvcRazorRuntimeCompilationOptions>(options =>
{
    options.FileProviders.Add(
            new EmbeddedFileProvider(typeof(HorselessCMSController).Assembly)); });

builder.Services.AddHorselessNewspaper();

// as per https://github.com/aspnet-contrib/AspNet.Security.OAuth.Providers/blob/dev/docs/keycloak.md
builder.Services.AddHorselessKeycloakAuth(keycloakOpts =>
{
    keycloakOpts.ClientId = builder.Configuration["Keycloak:ClientId"];
    keycloakOpts.ClientSecret = builder.Configuration["Keycloak:ClientSecret"];
    keycloakOpts.Domain = builder.Configuration["Keycloak:Domain"];
    keycloakOpts.Realm = builder.Configuration["Keycloak:Realm"]; 
});

// Add services to the container.
builder.Services.AddControllersWithViews();

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

app.UseAuthorization();

app.UseHorselessNewspaper(options =>
{
    options.Builder.UseEndpoints(options =>
    {
        // test of user defined routing scenario
        options.MapDynamicControllerRoute<HorselessRouteTransformer>("");

        app.MapControllerRoute(
        name: "HorselessCMS",
        pattern: "{controller=HorselessCMS}/{action=ViewTemplate}/{id?}");
    });
});

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
