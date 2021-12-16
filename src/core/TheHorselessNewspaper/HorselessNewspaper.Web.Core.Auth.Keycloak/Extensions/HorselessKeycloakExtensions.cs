using HorselessNewspaper.Web.Core.Extensions;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AspNet.Security.OAuth.Keycloak;
using Microsoft.AspNetCore.Authentication.Cookies;

namespace HorselessNewspaper.Web.Core.Auth.Keycloak.Extensions
{
    /// <summary>
    /// integration as per https://github.com/aspnet-contrib/AspNet.Security.OAuth.Providers/blob/dev/docs/keycloak.md
    /// </summary>
    public static class HorselessKeycloakExtensions
    {
        public static IServiceCollection AddHorselessKeycloakAuth(this IServiceCollection services, Action<KeycloakAuthenticationOptions> keyCloakOptions,
            Action<HorselessServiceBuilder> options = null, ServiceLifetime scope = ServiceLifetime.Scoped)
        {
            var serviceBuilder = new HorselessServiceBuilder(services);

            #region as per https://docs.microsoft.com/en-us/aspnet/core/security/authentication/social/social-without-identity?view=aspnetcore-6.0
            // alternative approach without keycloak binaries and just JWT https://stackoverflow.com/questions/67532553/secure-asp-net-core-3-1-mvc-app-with-keycloak
            serviceBuilder.Services.AddAuthentication(options =>
            {
                options.DefaultScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = KeycloakAuthenticationDefaults.AuthenticationScheme;
            })
            .AddCookie()
            .AddKeycloak(keyCloakOptions);

            #endregion as per https://docs.microsoft.com/en-us/aspnet/core/security/authentication/social/social-without-identity?view=aspnetcore-6.0

            options?.Invoke(serviceBuilder);
            return services;
        }
    }
}
