using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.HostingModel.Context;
using TheHorselessNewspaper.Schemas.HostingModel.Context;

namespace HorselessNewspaper.Web.Core.Services.Query.Entities
{
    /// <summary>
    /// web wrapper for entity framework query services
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <typeparam name="Entity"></typeparam>
    public interface IContentCollectionService<T, Entity>
        where T : class, IQueryableContentModelOperator<Entity>, IQueryableModelOperator<Entity>
        where Entity : class, IContentRowLevelSecured
    {

        public Task<Entity> Create([FromBody] Entity entity);

        public Task<Entity> GetByObjectId(string objectId);
        Task<IEnumerable<U>> InsertRelatedEntity<U>(Guid entityId, string propertyName, IEnumerable<U> relatedEntities) where U : class;
        public Task<IQueryable<Entity>> Query(int pageSize = 10, int pageNumber = 1, int pageCount = 1);
        Task<IQueryable<Entity>> Query(Expression<Func<Entity, bool>> query, List<string> includeClauses = null, int pageSize = 10, int pageNumber = 1, int pageCount = 1);
        public Task<Entity> Update([FromBody] Entity contentCollection, List<string> targetProperties = null);
    }
}
