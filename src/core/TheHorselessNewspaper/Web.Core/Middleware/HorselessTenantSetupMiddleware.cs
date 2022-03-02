using Finbuckle.MultiTenant;
using HorselessNewspaper.Web.Core.Extensions.Claim;
using HorselessNewspaper.Web.Core.Interfaces.Cache;
using HorselessNewspaper.Web.Core.Middleware.HorselessRouter;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
using HostingEntities = TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
namespace HorselessNewspaper.Web.Core.Middleware
{
    /// <summary>
    /// as per 
    /// https://github.com/dotnet/AspNetCore.Docs/blob/main/aspnetcore/fundamentals/middleware/extensibility/samples/3.x/MiddlewareExtensibilitySample/Middleware/FactoryActivatedMiddleware.cs#L10
    /// </summary>
    public class HorselessTenantSetupMiddleware : IMiddleware
    {
        public IHorselessCacheProvider<Guid, ITenantInfo> TenantCache { get; private set; }

        private ILogger<HorselessTenantSetupMiddleware> _logger;

        public HorselessTenantSetupMiddleware(IHorselessCacheProvider<Guid, ITenantInfo> tenantCache, ILogger<HorselessTenantSetupMiddleware> logger)
        {
            TenantCache = tenantCache;
            _logger = logger;

            logger.LogTrace("dynamic route transformer initialized normally");
        }

        /// <summary>
        /// incredibly you can inject services here
        /// </summary>
        /// <param name="context"></param>
        /// <param name="next"></param>
        /// <returns></returns>
        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            // do something like as follows
            //    var keyValue = context.Request.Query["key"];

            //    if (!string.IsNullOrWhiteSpace(keyValue))
            //    {

            //    }

            //    // Assume this is the roles
            //    List<Claim> claims = new List<Claim>
            //{
            //    new Claim(ClaimTypes.Name, "John"),
            //    new Claim(ClaimTypes.Email, "john@someemail.com")
            //};

            //    foreach (KeyValuePair<string, string[]> tenantRole in _tenantRoles)
            //    {
            //        claims.AddRange(tenantRole.Value.Select(x => new Claim(ClaimTypes.Role, $"{tenantRole.Key}:{x}".ToLower())));
            //    }

            //    // Note: You need these for the AuthorizeAttribute.Roles    
            //    claims.AddRange(_tenantRoles.SelectMany(x => x.Value)
            //        .Select(x => new Claim(ClaimTypes.Role, x.ToLower())));

            //    context.User = new System.Security.Claims.ClaimsPrincipal(new ClaimsIdentity(claims,
            //        "Bearer"));

            bool hasNoTenants = await GetTenantCount() == 0;
            bool isAdminPrincipal = context.HasAdminClaimValues(new List<string>() { "admin", "owner" });

            //if (hasNoTenants && isAdminPrincipal && !context.Request.Path.Equals("/Installer/TenantSetup"))
            //{
            //    // context.Response.Redirect("/Installer/TenantSetup");
            //    context.Items["controller"] = "TenantSetup";
            //    context.Items["action"] = "Index";
            //    context.Items["area"] = "Installer";
            //}

            await next(context);
        }

        private async Task<int> GetTenantCount()
        {
            int ret = 0;

            if (TenantCache != null)
            {
                ret = await TenantCache.Count();
            }

            return ret;
        }
    }
}
