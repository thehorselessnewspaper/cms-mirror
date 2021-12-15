using HorselessNewspaper.Web.Core.Middleware.HorselessRouter.Strategy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.SingletonServices.Cache.Routing
{
    /// <summary>
    /// aggregates routing strategy concrete classes
    /// dependency of DynamicRouteValueTransformer
    /// </summary>
    public class RoutingStrategyComponent : IRoutingStrategyComponent
    {
        public RoutingStrategyComponent()
        {
            RoutingStrategies = new List<IHorselessRoutingStrategy>();
        }

        public List<IHorselessRoutingStrategy> RoutingStrategies { get; set; }
    }
}
