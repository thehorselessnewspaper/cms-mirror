using HorselessNewspaper.Web.Core.Extensions;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AspNet.Security.OpenId;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Configuration;
using HorselessNewspaper.Web.Core.Auth.Keycloak.Model;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;
using System.Text.Json;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authentication;
using HorselessNewspaper.Web.Core.Auth.Keycloak.Claims;

namespace HorselessNewspaper.Web.Core.Auth.Keycloak.Extensions
{
    /// <summary>
    /// integration as per https://github.com/aspnet-contrib/AspNet.Security.OpenId.Providers
    /// as per https://github.com/aspnet-contrib/AspNet.Security.OpenId.Providers/tree/dev/samples/Mvc.Client
    /// </summary>
    public static class HorselessKeycloakExtensions
    {


        public static IServiceCollection AddHorselessKeycloakAuth(this IServiceCollection services, IConfiguration configuration, Action<OpenIdAuthenticationOptions> keyCloakOptions,
            Action<HorselessServiceBuilder> options = null, ServiceLifetime scope = ServiceLifetime.Scoped)
        {
            var serviceBuilder = new HorselessServiceBuilder(configuration, services);


            #region surface the keycloak logout url configuration 
            IKeycloakAuthOptions keycloakAuthOptions = new KeycloakAuthOptions()
            {
                OIDCLogoutUri = new Uri(configuration[KeycloakAuthOptions.OIDCLogoutUriConfigKey]),
                PostLogoutRedirectUri = new Uri(configuration[KeycloakAuthOptions.PostLogoutRedirectUriConfigKey])

            };

            serviceBuilder.Services.AddTransient<IClaimsTransformation, HorselessKeycloakClaimsTransformer>();

            serviceBuilder.Services.AddSingleton<IKeycloakAuthOptions>(keycloakAuthOptions);
            #endregion surface the keycloak logout url configuration 

            #region as per https://docs.microsoft.com/en-us/aspnet/core/security/authentication/social/social-without-identity?view=aspnetcore-6.0
            serviceBuilder.Services.AddAuthentication(options =>
            {
                //options.DefaultAuthenticateScheme = AspNet.Security.OpenId.OpenIdAuthenticationDefaults.AuthenticationScheme; // CookieAuthenticationDefaults.AuthenticationScheme;
                //options.DefaultSignInScheme = AspNet.Security.OpenId.OpenIdAuthenticationDefaults.AuthenticationScheme;//  CookieAuthenticationDefaults.AuthenticationScheme;
                //options.DefaultChallengeScheme = AspNet.Security.OpenId.OpenIdAuthenticationDefaults.AuthenticationScheme;  //CookieAuthenticationDefaults.AuthenticationScheme;

                options.DefaultAuthenticateScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                options.DefaultSignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = CookieAuthenticationDefaults.AuthenticationScheme;

            })

            .AddJwtBearer(o =>
            {
                // my API name as defined in Config.cs - new ApiResource... or in DB ApiResources table
                o.Audience = configuration[KeycloakAuthOptions.AudienceConfigKey];
                // URL of Auth server(API and Auth are separate projects/applications),
                // so for local testing this is http://localhost:5000 if you followed ID4 tutorials
                o.Authority = configuration[KeycloakAuthOptions.AuthorityConfigKey];

                o.ClaimsIssuer = configuration[KeycloakAuthOptions.IssuerConfigKey];
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
