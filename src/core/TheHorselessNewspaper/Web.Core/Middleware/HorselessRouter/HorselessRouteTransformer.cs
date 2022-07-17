using Finbuckle.MultiTenant;
using Finbuckle.MultiTenant.Stores;
using HorselessNewspaper.Web.Core.Extensions.ClaimExtensions;
using HorselessNewspaper.Web.Core.Interfaces.Cache;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Logging;
using TheHorselessNewspaper.HostingModel.MultiTenant;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using ContentEntities = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

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

        internal IHorselessCacheProvider<Guid, ContentEntities.Tenant>? TenantCache { get; set; }

        IHttpContextAccessor _httpContextAccessor;

        public bool IsActive { get; set; } = true;

        IMultiTenantStore<HorselessTenantInfo> multitenantStore;

        HorselessSession currentHorselessSession;


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
            throw new Exception("invalid service startup. missing dependency injection dependencies");
        }

        public HorselessRouteTransformer(IHorselessCacheProvider<Guid, ContentEntities.Tenant> tenantCache, 
                            ILogger<HorselessRouteTransformer> logger, IHttpContextAccessor httpContextAccessor,
                            HorselessSession horselessSession,
                            IMultiTenantStore<HorselessTenantInfo> multitenantStore)
        {
            TenantCache = tenantCache;
            _logger = logger;
            _httpContextAccessor = httpContextAccessor;
            logger.LogTrace("dynamic route transformer initialized normally");
            this.multitenantStore = multitenantStore;
            this.currentHorselessSession = horselessSession;
            // this.tenantInfo = tenantinfo;

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

            try
            {
                var tenant = values["__tenant__"] as string;
                if (IsActive && tenant != null && tenant != String.Empty)
                {
                    // distributed cache retrieval

                    var cachedTenants = await this.multitenantStore.TryGetAsync(tenant);
                    if(cachedTenants != null)
                    {
                        return values;
                    }
                    else
                    {
                        return values;
                    }

                }
            }
            catch (Exception e)
            {

                _logger.LogInformation($"exception transforming route {e.Message}");
            }

            return await ValueTask.FromResult(values);
        }

        private RouteValueDictionary HandleInitialTenantSetup(RouteValueDictionary values, bool hasNoTenants, bool isAdminPrincipal)
        {
            var ctx = _httpContextAccessor.HttpContext;
            if (hasNoTenants && isAdminPrincipal && values != null && values["controller"] != null)
            {
                values = new RouteValueDictionary();
                _logger.LogTrace("no tenants found. redirecting to setup");
                values["controller"] = "TenantSetup";
                values["area"] = "Installer";
                values["action"] = "Index";
            }
            // handle the case of urlpath = /
            else if (hasNoTenants && isAdminPrincipal
                && ctx.Request.Path.Equals("/")
                && values != null
                && values["slug"] == null
                )
            {
                values = new RouteValueDictionary();
                _logger.LogTrace("no tenants found. redirecting to setup");
                values["area"] = "Installer";
                values["controller"] = "TenantSetup";
 
                values["action"] = "Index";
            }
            else if (hasNoTenants && isAdminPrincipal
                && ctx.Request.Path.Equals("/")
                && values == null
                // && values["slug"] != null
    )
            {
                values = new RouteValueDictionary();
                _logger.LogTrace("no tenants found. redirecting to setup");
                values["controller"] = "TenantSetup";
                values["area"] = "Installer";
                values["action"] = "Index";
            }

            return values;
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
