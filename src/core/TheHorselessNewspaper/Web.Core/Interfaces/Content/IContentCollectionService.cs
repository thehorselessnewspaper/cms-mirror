using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.HostingModel.Context;
using TheHorselessNewspaper.Schemas.HostingModel.Context;

namespace HorselessNewspaper.Web.Core.Interfaces.Content
{
    /// <summary>
    /// web wrapper for entity framework query services
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <typeparam name="Entity"></typeparam>
    internal interface IContentCollectionService<T, Entity>
        where T : class, IQueryableContentModelOperator<Entity>, IQueryableModelOperator<Entity>
        where Entity : class, IContentRowLevelSecured
    {
    }
}
