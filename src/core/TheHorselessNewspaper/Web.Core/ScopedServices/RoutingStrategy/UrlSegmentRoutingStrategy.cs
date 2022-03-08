using HorselessNewspaper.Web.Core.Middleware.HorselessRouter.Strategy;
using HorselessNewspaper.Web.Core.Middleware.HorselessRouter.Strategy.Model;
using Microsoft.AspNetCore.Routing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.ScopedServices.RoutingStrategy
{
    public class UrlSegmentRoutingStrategy : IHorselessRoutingStrategy
    {
        public UrlSegmentRoutingStrategy()
        {

        }

        public byte Priority {get; set; }

        public Task<RoutingStrategyResult> TransformAsync(SocketsHttpConnectionContext httpContext, RouteValueDictionary values)
        {
            throw new NotImplementedException();
        }
    }
}
