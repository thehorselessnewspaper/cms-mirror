using HorselessNewspaper.Core.Interfaces.Security.Cache;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
namespace HorselessNewspaper.Web.Core.ScopedServices.AuthenticationSchemes
{
    public class AuthenticationSchemesCache : IAuthenticationSchemesCache
    {
        private readonly HttpContext? context;

        public AuthenticationSchemesCache(IHttpContextAccessor httpContext)
        {
            this.context = httpContext.HttpContext;
        }

        public async Task<AuthenticationScheme[]> GetExternalProvidersAsync()
        {
            if (context == null)
            {
                return new AuthenticationScheme[] { };
            }

            var schemes = context.RequestServices.GetRequiredService<IAuthenticationSchemeProvider>();

            return (from scheme in await schemes.GetAllSchemesAsync()
                    where !string.IsNullOrEmpty(scheme.DisplayName)
                    select scheme).ToArray();
        }

    }
}
