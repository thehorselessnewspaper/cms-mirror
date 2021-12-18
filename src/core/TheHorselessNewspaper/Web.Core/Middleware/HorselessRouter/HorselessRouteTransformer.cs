using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HorselessNewspaper.Web.Core.Interfaces.Cache;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.AspNetCore.Routing;
using TheHorselessNewspaper.Schemas.HostingModel.DTO;

namespace HorselessNewspaper.Web.Core.Middleware.HorselessRouter
{

    /// <summary>
    /// as per
    /// https://www.strathweb.com/2019/08/dynamic-controller-routing-in-asp-net-core-3-0/
    /// </summary>
    public class HorselessRouteTransformer : DynamicRouteValueTransformer
    {
        public HorselessRouteTransformer()
        {

        }

        internal HorselessRouteTransformer(IHorselessCacheProvider<Guid, TenantDTO> tenantCache)
        {
            TenantCache = tenantCache;
        }

        internal IHorselessCacheProvider<Guid, TenantDTO> TenantCache { get; set; }

        /// <summary>
        /// provides cms routing semantics
        /// </summary>
        /// <param name="httpContext"></param>
        /// <param name="values"></param>
        /// <returns></returns>
        public override async ValueTask<RouteValueDictionary> TransformAsync(HttpContext httpContext, RouteValueDictionary values)
        {
            // this code runs each time a cms controlled route is http requested
            int i = 0;
            i++;
            return await ValueTask.FromResult(values);
        }
    }
}
