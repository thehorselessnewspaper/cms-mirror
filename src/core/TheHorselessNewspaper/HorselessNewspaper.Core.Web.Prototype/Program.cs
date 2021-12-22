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
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.CodeAnalysis;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;
using HorselessNewspaper.Web.Core.Auth.Keycloak.Model;

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

builder.Services.AddControllersWithViews()
    .AddRazorRuntimeCompilation()
    // this hardcodes a static reference to the default horseless razor class library
    // i am sorry - the hoped for benefit is that this will always have a default implementation
    .AddApplicationPart(typeof(HorselessCMSController).Assembly);

builder.Services.Configure<MvcRazorRuntimeCompilationOptions>(options =>
{
    options.FileProviders.Add(
            new EmbeddedFileProvider(typeof(HorselessCMSController).Assembly));
});

builder.Services.AddHorselessNewspaper(builder.Configuration);
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = CookieAuthenticationDefaults.AuthenticationScheme;
    options.DefaultSignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = OpenIdConnectDefaults.AuthenticationScheme;

})
.AddCookie(cookie =>
{
    cookie.Cookie.Name = "keycloak.cookie";
    cookie.Cookie.MaxAge = TimeSpan.FromMinutes(60);
    cookie.Cookie.SecurePolicy = CookieSecurePolicy.SameAsRequest;
    cookie.SlidingExpiration = true;
})
.AddOpenIdConnect(opts =>
{
  
    opts.SignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
    //opts.SignedOutCallbackPath = "/";
    //opts.SignedOutRedirectUri = builder.Configuration[KeycloakAuthOptions.SignoutRedirectUrlConfigKey];
    opts.Authority = builder.Configuration[KeycloakAuthOptions.RealmConfigKey];
    opts.RequireHttpsMetadata = false;
    opts.ClientId = builder.Configuration[KeycloakAuthOptions.ClientIdConfigKey];
    opts.ClientSecret = builder.Configuration[KeycloakAuthOptions.ClientSecretConfigKey];
    opts.MetadataAddress = builder.Configuration[KeycloakAuthOptions.MetaDataConfigKey];
    opts.ResponseType = OpenIdConnectResponseType.Code;
    opts.GetClaimsFromUserInfoEndpoint = true;
    opts.SaveTokens = true;
    opts.Scope.Add("openid email profile roles web-origins");
    opts.NonceCookie.SameSite = SameSiteMode.Unspecified;
    opts.CorrelationCookie.SameSite = SameSiteMode.Unspecified;
})
.AddJwtBearer(o =>
    {
        // my API name as defined in Config.cs - new ApiResource... or in DB ApiResources table
        o.Audience = builder.Configuration[KeycloakAuthOptions.AudienceConfigKey];
        // URL of Auth server(API and Auth are separate projects/applications),
        // so for local testing this is http://localhost:5000 if you followed ID4 tutorials
        o.Authority = builder.Configuration[KeycloakAuthOptions.AuthorityConfigKey];

        o.ClaimsIssuer = builder.Configuration[KeycloakAuthOptions.IssuerConfigKey];
        o.RequireHttpsMetadata = !builder.Environment.IsDevelopment();
        o.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateAudience = true,
            // Scopes supported by API as defined in Config.cs - new ApiResource... or in DB ApiScopes table
            ValidAudiences = new List<string>() {
                        "api.read",
                        "api.write"
                    },
            ValidateIssuer = true
        };
    })
;

// as per https://github.com/aspnet-contrib/AspNet.Security.OAuth.Providers/blob/dev/docs/keycloak.md
builder.Services.AddHorselessKeycloakAuth(builder.Configuration, keycloakOpts =>
{

    //// keycloakOpts.Realm = builder.Configuration["Keycloak:Realm"];
    //keycloakOpts.Authority = new Uri(builder.Configuration["Keycloak:Authority"]);
    //keycloakOpts.Realm = builder.Configuration["Keycloak:Realm"];
    //keycloakOpts.SignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
    //keycloakOpts.ClaimsIssuer = builder.Configuration["KeycloakOpts:Issuer"];

    //keycloakOpts.SaveTokens = true;
    //keycloakOpts.CallbackPath = "/";
    //keycloakOpts.RequireHttpsMetadata = false;
    //keycloakOpts.RequireHttpsMetadata = false;
});

// Add services to the container.
//builder.Services.AddControllersWithViews()
//    .AddRazorRuntimeCompilation();

builder.Services.AddAuthorization();

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
