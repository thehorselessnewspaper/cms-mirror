using HorselessNewspaper.Web.Core.Extensions;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AspNet.Security.OpenId;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace HorselessNewspaper.Web.Core.Auth.Keycloak.Extensions
{
    /// <summary>
    /// integration as per https://github.com/aspnet-contrib/AspNet.Security.OpenId.Providers
    /// as per https://github.com/aspnet-contrib/AspNet.Security.OpenId.Providers/tree/dev/samples/Mvc.Client
    /// </summary>
    public static class HorselessKeycloakExtensions
    {
        public static IServiceCollection AddHorselessKeycloakAuth(this IServiceCollection services, Action<OpenIdAuthenticationOptions> keyCloakOptions,
            Action<HorselessServiceBuilder> options = null, ServiceLifetime scope = ServiceLifetime.Scoped)
        {
            var serviceBuilder = new HorselessServiceBuilder(services);



            #region as per https://docs.microsoft.com/en-us/aspnet/core/security/authentication/social/social-without-identity?view=aspnetcore-6.0
            serviceBuilder.Services.AddAuthentication(options =>
            {
                //options.DefaultAuthenticateScheme = AspNet.Security.OpenId.OpenIdAuthenticationDefaults.AuthenticationScheme; // CookieAuthenticationDefaults.AuthenticationScheme;
                //options.DefaultSignInScheme = AspNet.Security.OpenId.OpenIdAuthenticationDefaults.AuthenticationScheme;//  CookieAuthenticationDefaults.AuthenticationScheme;
                //options.DefaultChallengeScheme = AspNet.Security.OpenId.OpenIdAuthenticationDefaults.AuthenticationScheme;  //CookieAuthenticationDefaults.AuthenticationScheme;

                options.DefaultAuthenticateScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                options.DefaultSignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = CookieAuthenticationDefaults.AuthenticationScheme;

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
