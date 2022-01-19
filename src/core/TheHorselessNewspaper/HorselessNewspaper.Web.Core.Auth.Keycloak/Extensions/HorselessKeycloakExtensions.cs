using HorselessNewspaper.Web.Core.Auth.Keycloak.Claims;
using HorselessNewspaper.Web.Core.Auth.Keycloak.Model;
using HorselessNewspaper.Web.Core.Authorization.Handler;
using HorselessNewspaper.Web.Core.Extensions;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.Security.Claims;
using System.Text.Json;

namespace HorselessNewspaper.Web.Core.Auth.Keycloak.Extensions
{
    /// <summary>
    /// integration as per https://github.com/aspnet-contrib/AspNet.Security.OpenId.Providers
    /// as per https://github.com/aspnet-contrib/AspNet.Security.OpenId.Providers/tree/dev/samples/Mvc.Client
    /// </summary>
    public static class HorselessKeycloakExtensions
    {


        public static IServiceCollection AddHorselessKeycloakAuth(this IServiceCollection services, WebApplicationBuilder builder, Action<OpenIdConnectOptions> keyCloakOptions,
            Action<HorselessServiceBuilder> options = null, ServiceLifetime scope = ServiceLifetime.Scoped)
        {
            IConfiguration configuration = builder.Configuration;
            var serviceBuilder = new HorselessServiceBuilder(configuration, services);


            #region surface the keycloak logout url configuration 
            IKeycloakAuthOptions keycloakAuthOptions = new KeycloakAuthOptions()
            {
                OIDCLogoutUri = new Uri(configuration[KeycloakAuthOptions.OIDCLogoutUriConfigKey]),
                PostLogoutRedirectUri = new Uri(configuration[KeycloakAuthOptions.PostLogoutRedirectUriConfigKey])

            };

            serviceBuilder.Services.AddScoped<IClaimsTransformation, HorselessKeycloakClaimsTransformer>();

            serviceBuilder.Services.AddSingleton<IKeycloakAuthOptions>(keycloakAuthOptions);
            #endregion surface the keycloak logout url configuration 

            #region as per https://docs.microsoft.com/en-us/aspnet/core/security/authentication/social/social-without-identity?view=aspnetcore-6.0
            serviceBuilder.Services.AddAuthentication(options =>
            {
                //options.DefaultAuthenticateScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                //options.DefaultSignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                //options.DefaultChallengeScheme = CookieAuthenticationDefaults.AuthenticationScheme;

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
            .AddJwtBearer(o =>
            {
                // my API name as defined in Config.cs - new ApiResource... or in DB ApiResources table
                o.Audience = configuration[KeycloakAuthOptions.AudienceConfigKey];
                // URL of Auth server(API and Auth are separate projects/applications),
                // so for local testing this is http://localhost:5000 if you followed ID4 tutorials
                o.Authority = configuration[KeycloakAuthOptions.AuthorityConfigKey];

                o.ClaimsIssuer = configuration[KeycloakAuthOptions.IssuerConfigKey];
                o.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
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
                opts.ResponseType = "code";
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

            // as per https://stackoverflow.com/questions/53702555/cant-access-roles-in-jwt-token-net-core/53817194#53817194
            serviceBuilder.Services.AddAuthorization(options =>
            {
                options.AddPolicy("Administrator", policy =>
                 policy.RequireAssertion(c =>
                        JsonSerializer.Deserialize<Dictionary<string, string[]>>(c.User?.FindFirst((claim) => claim.Type == "realm_access")?.Value ?? "{}")
                    .FirstOrDefault().Value?.Any(v => v == "admin") ?? false));
            });

            //.AddOpenId(keyCloakOptions);

            // as per https://docs.microsoft.com/en-us/aspnet/core/security/authorization/resourcebased?view=aspnetcore-6.0
            serviceBuilder.Services.AddSingleton<IAuthorizationHandler, RLSAuthorizationHandler>();

            // alternative approach without keycloak binaries and just JWT https://stackoverflow.com/questions/67532553/secure-asp-net-core-3-1-mvc-app-with-keycloak
            // as per https://github.com/aspnet-contrib/AspNet.Security.OpenId.Providers/tree/dev/samples/Mvc.Client
            //serviceBuilder.Services.AddAuthentication(o =>
            //{
            //    //o.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            //    //o.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

            //})

            //.AddCookie(options =>
            //{
            //    //options.LoginPath = "/signin";
            //    //options.LogoutPath = "/signout";
            //});
            //.AddJwtBearer(keyCloakOptions)

            #endregion as per https://docs.microsoft.com/en-us/aspnet/core/security/authentication/social/social-without-identity?view=aspnetcore-6.0

            options?.Invoke(serviceBuilder);
            return services;
        }
    }
}
