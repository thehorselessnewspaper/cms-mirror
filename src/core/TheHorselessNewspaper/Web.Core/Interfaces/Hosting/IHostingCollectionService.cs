using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.HostingModel.Context;
using TheHorselessNewspaper.HostingModel.Entities.Query;
using TheHorselessNewspaper.Schemas.HostingModel.Context;

namespace HorselessNewspaper.Web.Core.Interfaces.Hosting
{
    /// <summary>
    /// generalize operations used in odata content controllers
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <typeparam name="Entity"></typeparam>
    internal class IHostingCollectionService<T, Entity>
        where T : class, IQueryableHostingModelOperator<Entity>, IQueryableModelOperator<Entity>
        where Entity : class, IHostingRowLevelSecured
    {
    }
}
