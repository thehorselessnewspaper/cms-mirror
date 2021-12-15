using HorselessNewspaper.Web.Core.Middleware.HorselessRouter.Strategy.Model;
using Microsoft.AspNetCore.Routing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.Middleware.HorselessRouter.Strategy
{
    public interface IHorselessRoutingStrategy
    {
        /// <summary>
        /// nobody will ever need more than 8 bits to specify priority
        /// </summary>
        public byte Priority { get; set; }

        public Task<RoutingStrategyResult> TransformAsync(SocketsHttpConnectionContext httpContext, RouteValueDictionary values);
    }
}
