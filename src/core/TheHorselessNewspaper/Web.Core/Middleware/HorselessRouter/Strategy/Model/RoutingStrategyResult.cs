using Microsoft.AspNetCore.Routing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.Middleware.HorselessRouter.Strategy.Model
{
    public class RoutingStrategyResult
    {
        /// <summary>
        /// true if the strategy was successful
        /// </summary>
        public bool IsRoutingMatch { get; set; } = false;

        public DateTime Timestamp { get; set; }

        public String MatchedValue { get; set; } = String.Empty;

        public RouteValueDictionary Payload { get; set; } = new RouteValueDictionary();
    }
}
