using HorselessNewspaper.Web.Core.Extensions;
using HorselessNewspaper.Web.Core.Interfaces.Cache;
using HorselessNewspaper.Web.Core.SingletonServices.Cache.Tenant;
using TheHorselessNewspaper.Schemas.HostingModel.DTO;
using HorselessNewspaper.Web.Core.Extensions.Hosting;
using HorselessNewspaper.Web.Core.Middleware.HorselessRouter;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddHorselessNewspaper(opts =>
{

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
app.UseHorselessNewspaper(options =>
{
    options.Builder.UseEndpoints(options =>
    {
        // test of user defined routing scenario
        options.MapDynamicControllerRoute<HorselessRouteTransformer>("/pages");
    });
});

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
