using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HorselessNewspaper.Web.Core.Interfaces.Cache;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Claims;
using TheHorselessNewspaper.Schemas.HostingModel.DTO;
using HostingEntities = TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
using HorselessNewspaper.Web.Core.Extensions.Claim;

namespace HorselessNewspaper.Web.Core.Middleware.HorselessRouter
{


    /// <summary>
    /// as per
    /// https://www.strathweb.com/2019/08/dynamic-controller-routing-in-asp-net-core-3-0/
    /// 
    /// note
    /// * unlike other singleton middleware this entity supports constructor dependency injection and private fields
    ///   as per https://weblogs.asp.net/ricardoperes/dynamic-routing-in-asp-net-core-3
    /// </summary>
    public class HorselessRouteTransformer : DynamicRouteValueTransformer
    {
        ILogger<HorselessRouteTransformer> _logger;

        internal IHorselessCacheProvider<Guid, HostingEntities.TenantInfo>? TenantCache { get; set; }

        IHttpContextAccessor _httpContextAccessor;

        public bool IsActive { get; set; } = true;

        /// <summary>
        /// you probably don't want this constructor to execute
        /// it might mean you failed to register a dependency
        /// </summary>
        /// <param name="logger"></param>
        public HorselessRouteTransformer(ILogger<HorselessRouteTransformer> logger)
        {
            _logger = logger;
            TenantCache = null;

            logger.LogWarning("HorselessRouteTransformer initialized without IHorselessCacheProvider. Validate Dependency Injection Registrations");

        }

        public HorselessRouteTransformer(IHorselessCacheProvider<Guid, HostingEntities.TenantInfo> tenantCache, ILogger<HorselessRouteTransformer> logger, IHttpContextAccessor httpContextAccessor)
        {
            TenantCache = tenantCache;
            _logger = logger;
            _httpContextAccessor = httpContextAccessor;
            logger.LogTrace("dynamic route transformer initialized normally");
        }


        /// <summary>
        /// provides cms routing semantics
        /// </summary>
        /// <param name="httpContext"></param>
        /// <param name="values"></param>
        /// <returns></returns>
        public override async ValueTask<RouteValueDictionary> TransformAsync(HttpContext httpContext, RouteValueDictionary values)
        {
            // this code runs each time a cms controlled route is http requested
            _logger.LogTrace($"handling route path {httpContext.Request.Path}: IsActive: {this.IsActive}");

            if (IsActive)
            {
                var ctx = _httpContextAccessor.HttpContext;
                // this really calls for some fancy rules engine eventually

                bool hasNoTenants = await GetTenantCount() == 0;
                bool isAdminPrincipal = ctx.HasAdminClaimValues(new List<string>() { "admin", "owner"});

                if (hasNoTenants && isAdminPrincipal)
                {
                    _logger.LogTrace("no tenants found. redirecting to setup");
                }
            }

            return await ValueTask.FromResult(values);
        }

        private Task<bool> GetIsAuthenticatedAdmin()
        {
            throw new NotImplementedException();
        }

        private async Task<int> GetTenantCount()
        {
            int ret = 0;

            if (TenantCache != null && IsActive)
            {
                ret = await TenantCache.Count();
            }

            return ret;
        }
    }
}
