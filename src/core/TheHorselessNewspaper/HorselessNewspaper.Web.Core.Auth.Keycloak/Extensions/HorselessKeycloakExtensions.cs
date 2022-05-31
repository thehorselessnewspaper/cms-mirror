using HorselessNewspaper.Core.Interfaces.Security.Resolver;
using HorselessNewspaper.Web.Core.Auth.Keycloak.Claims;
using HorselessNewspaper.Web.Core.Auth.Keycloak.Model;
using HorselessNewspaper.Web.Core.Auth.Keycloak.Services.SecurityPrincipalResolver;
using HorselessNewspaper.Web.Core.Services.Model.Extensions.Hosting;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;
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

            // todo - make ServiceProvider available here so that 
            // IFeatureManager can be injected to enable/disable this feature
            serviceBuilder.Services.AddSingleton<IKeycloakAuthOptions, KeycloakAuthOptions>();

            serviceBuilder.Services.AddTransient<ISecurityPrincipalResolver, KeycloakSecurityPrincipalResolver>();

            #endregion surface the keycloak logout url configuration 

            #region as per https://docs.microsoft.com/en-us/aspnet/core/security/authentication/social/social-without-identity?view=aspnetcore-6.0
            serviceBuilder.Services.AddAuthentication(options =>
            {

                options.DefaultAuthenticateScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                options.DefaultSignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = OpenIdConnectDefaults.AuthenticationScheme;


            })

            .AddJwtBearer(JwtBearerDefaults.AuthenticationScheme, o =>
            {
                // handle development vertificate validation check skip
                // TODO switch via feature toggle
                // as per https://stackoverflow.com/questions/48550837/net-core-jwtbearer-skip-self-signed-certificate-validation-for-local-communicat
                o.BackchannelHttpHandler = new HttpClientHandler
                {
                    ServerCertificateCustomValidationCallback = delegate { return true; }
                };

                // my API name as defined in Config.cs - new ApiResource... or in DB ApiResources table
                o.Audience = configuration[KeycloakAuthOptions.AudienceConfigKey];
                // URL of Auth server(API and Auth are separate projects/applications),
                // so for local testing this is http://localhost:5000 if you followed ID4 tutorials
                o.Authority = configuration[KeycloakAuthOptions.AuthorityConfigKey];

                o.ClaimsIssuer = configuration[KeycloakAuthOptions.IssuerConfigKey];
                o.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
                {
                    ValidateAudience = false,
                    ValidateLifetime = false,
                    // Scopes supported by API as defined in Config.cs - new ApiResource... or in DB ApiScopes table
                    //ValidAudiences = new List<string>() {
                    //                "api.read",
                    //                "api.write"
                    //            },
                    ValidateIssuer = false
                };

                o.Events = new Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerEvents()
                {
                    
                    OnAuthenticationFailed = ctxt =>
                    {
                        var error = ctxt.Response.StatusCode;
                        return Task.CompletedTask;
                    },
                    OnForbidden = ctxt =>
                    {
                        var error = ctxt.Response.StatusCode;
                        return Task.CompletedTask;
                    },
                    OnChallenge = ctxt =>
                    {
                        var error = ctxt.Response.StatusCode;
                        return Task.CompletedTask;
                    },
                    OnMessageReceived = ctxt =>
                    {
                        var error = ctxt.Response.StatusCode;
                        return Task.CompletedTask;
                    }


                };
            })
            .AddOpenIdConnect(opts =>
            {
                // handle development vertificate validation check skip
                // TODO switch via feature toggle
                // as per https://stackoverflow.com/questions/48550837/net-core-jwtbearer-skip-self-signed-certificate-validation-for-local-communicat
                opts.BackchannelHttpHandler = new HttpClientHandler
                {
                    ServerCertificateCustomValidationCallback = delegate { return true; }
                };

                opts.SignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                //opts.SignedOutCallbackPath = "/";
                //opts.SignedOutRedirectUri = builder.Configuration[KeycloakAuthOptions.SignoutRedirectUrlConfigKey];
                opts.Authority = builder.Configuration[KeycloakAuthOptions.RealmConfigKey];
                opts.RequireHttpsMetadata = true;
                opts.ClientId = builder.Configuration[KeycloakAuthOptions.ClientIdConfigKey];
                opts.ClientSecret = builder.Configuration[KeycloakAuthOptions.ClientSecretConfigKey];
                opts.MetadataAddress = builder.Configuration[KeycloakAuthOptions.MetaDataConfigKey];
                opts.ResponseType = "code id_token";
                opts.GetClaimsFromUserInfoEndpoint = true;
                opts.SaveTokens = true;
                opts.Scope.Add("openid email profile roles web-origins");
                opts.NonceCookie.SameSite = SameSiteMode.None;
                opts.UseTokenLifetime = true;
                opts.CorrelationCookie.SameSite = SameSiteMode.None;

                // tweak the population of user.claims collection
                // as per https://leastprivilege.com/2017/11/15/missing-claims-in-the-asp-net-core-2-openid-connect-handler/
                opts.ClaimActions.Remove("aud");
                opts.ClaimActions.Remove("iss");
                opts.ClaimActions.Remove("azp"); // authorized party
                opts.ClaimActions.Remove("sub"); // locally scoped guid shaped string

                opts.ClaimActions.MapUniqueJsonKey("sub", ClaimTypes.NameIdentifier);

                opts.Events = new OpenIdConnectEvents
                {
                    OnRedirectToIdentityProvider = async ctx =>
                    {
                        await Task.Yield();
                    },
                    OnRemoteFailure = async ctx =>
                    {
                        // apparently you can use this to hide signin errors from asp.net core 
                        // https://stackoverflow.com/questions/53980129/oidc-login-fails-with-correlation-failed-cookie-not-found-while-cookie-is
                        ctx.Response.Redirect("/");
                        ctx.HandleResponse();

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
            })
            .AddCookie(opts =>
                {
                    
                    // TODO examine this cookie magic string naming business
                    // cookie.Cookie.Name = "keycloak.cookie";
                    opts.Cookie.MaxAge = TimeSpan.FromMinutes(60);
                    opts.Cookie.SecurePolicy = CookieSecurePolicy.Always;
                    opts.Cookie.SameSite = SameSiteMode.None;
                    opts.Cookie.IsEssential = true;
                    opts.SlidingExpiration = true;
                });

            // as per https://stackoverflow.com/questions/53702555/cant-access-roles-in-jwt-token-net-core/53817194#53817194
            serviceBuilder.Services.AddAuthorization(options =>
            {


                // options.DefaultPolicy = options.;

                options.AddPolicy("Administrator", policy =>
                 policy.RequireAssertion(c =>
                        JsonSerializer.Deserialize<Dictionary<string, string[]>>(c.User?.FindFirst((claim) => claim.Type == "realm_access")?.Value ?? "{}")
                    .FirstOrDefault().Value?.Any(v => v == "admin") ?? false));

            });


            //.AddOpenId(keyCloakOptions);


            //// as per https://docs.microsoft.com/en-us/aspnet/core/security/authorization/resourcebased?view=aspnetcore-6.0
            //serviceBuilder.Services.AddTransient<IAuthorizationHandler, RLSAuthorizationHandler>();

            serviceBuilder.Services.AddSingleton<IClaimsTransformation, HorselessKeycloakClaimsTransformer>();

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
