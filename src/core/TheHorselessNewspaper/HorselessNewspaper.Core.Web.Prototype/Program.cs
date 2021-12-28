using HorselessNewspaper.Web.Core.Extensions;
using HorselessNewspaper.Web.Core.Interfaces.Cache;
using HorselessNewspaper.Web.Core.SingletonServices.Cache.Tenant;
using TheHorselessNewspaper.Schemas.HostingModel.DTO;
using HorselessNewspaper.Web.Core.Extensions.Hosting;
using HorselessNewspaper.Web.Core.Middleware.HorselessRouter;

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
using HorselessNewspaper.Web.Core.Auth.Keycloak.Extensions;
using System.Runtime.Loader;
using System.Security.Claims;

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
    .AddRazorRuntimeCompilation();
    // this hardcodes a static reference to the default horseless razor class library
    // i am sorry - the hoped for benefit is that this will always have a default implementation
    // .AddApplicationPart(typeof(HorselessCMSController).Assembly);

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
    // TODO examine this cookie magic string naming business
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

    opts.Events = new OpenIdConnectEvents
    {
        OnRedirectToIdentityProvider = async ctx =>
        {
            await Task.Yield();
        },
        OnMessageReceived = async ctxt =>
        {
            // Invoked when a protocol message is first received.
            await Task.Yield();
        },
        OnTicketReceived = async ctxt =>
        {
            // Invoked after the remote ticket has been received.
            // Can be used to modify the Principal before it is passed to the Cookie scheme for sign-in.
            // This example removes all 'groups' claims from the Principal (assuming the AAD app has been configured
            // with "groupMembershipClaims": "SecurityGroup"). Group memberships can be checked here and turned into
            // roles, to be persisted in the cookie.
            if (ctxt.Principal.Identity is ClaimsIdentity identity)
            {
                var groupClaims = ctxt.Principal.FindAll(x => x.Type == "roles")
                    .ToList(); 
                    // .ForEach(identity.RemoveClaim);
            }
            await Task.Yield();
        }
    };
});

// as per https://github.com/aspnet-contrib/AspNet.Security.OAuth.Providers/blob/dev/docs/keycloak.md
builder.Services.AddHorselessKeycloakAuth(builder.Configuration, keycloakOpts =>
{

});


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

app.UseHorselessNewspaper(app.Environment, app.Configuration, options =>
{

  
});

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
