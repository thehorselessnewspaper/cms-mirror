using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.AspNetCore.Routing;

namespace HorselessNewspaper.Web.Core.Middleware.HorselessRouter
{

    /// <summary>
    /// as per
    /// https://www.strathweb.com/2019/08/dynamic-controller-routing-in-asp-net-core-3-0/
    /// </summary>
    public class HorselessRouteTransformer : DynamicRouteValueTransformer
    {
        public override ValueTask<RouteValueDictionary> TransformAsync(HttpContext httpContext, RouteValueDictionary values)
        {
            throw new NotImplementedException();
        }
    }
}
