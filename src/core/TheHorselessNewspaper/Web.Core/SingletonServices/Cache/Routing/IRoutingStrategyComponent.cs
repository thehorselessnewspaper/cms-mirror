using HorselessNewspaper.Web.Core.Interfaces.Cache;
using HorselessNewspaper.Web.Core.Middleware.HorselessRouter.Strategy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.HostingModel.DTO;

namespace HorselessNewspaper.Web.Core.SingletonServices.Cache.Routing
{
    public interface IRoutingStrategyComponent
    {
        public List<IHorselessRoutingStrategy> RoutingStrategies { get; set; }

    }
}
