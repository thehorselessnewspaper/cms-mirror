using Microsoft.AspNetCore.Mvc;
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
    public interface IHostingCollectionService<T, Entity>
        where T : class, IQueryableHostingModelOperator<Entity>, IQueryableModelOperator<Entity>
        where Entity : class, IHostingRowLevelSecured
    {

        public Task<Entity> Create([FromBody] Entity entity);

        public Task<Entity> GetByObjectId(string objectId);

        public Task<IQueryable<Entity>> Query();

        public Task<Entity> Update([FromBody] Entity contentCollection, List<string> targetProperties = null);
    }
}
