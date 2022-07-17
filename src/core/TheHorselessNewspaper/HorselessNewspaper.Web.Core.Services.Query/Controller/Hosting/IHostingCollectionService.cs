using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using HorselessNewspaper.Web.Core.Services.Query.Controller.Content;
using TheHorselessNewspaper.HostingModel.Context;
using TheHorselessNewspaper.HostingModel.HostingEntities.Query;
using Microsoft.AspNetCore.OData.Query;

namespace HorselessNewspaper.Web.Core.Services.Query.Controller.Hosting
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
        Task<IEnumerable<U>> InsertRelatedEntity<U>(Guid entityId, string propertyName, IEnumerable<U> relatedEntities, Expression<Func<Entity, bool>> parentItemFilter = null, Expression<Func<U, bool>> relatedItemFilter = null) where U : class, IHostingRowLevelSecured;
        public Task<IQueryable<Entity>> Query(int pageSize = 10, int pageNumber = 1, int pageCount = 1);
        Task<IQueryable<Entity>> Query(Expression<Func<Entity, bool>> query, List<string> includeClauses = null, int pageSize = 10, int pageNumber = 1, int pageCount = 1);
        public Task<Entity> Update([FromBody] Entity contentCollection, List<string> targetProperties = null);
        public Task<IQueryable<Entity>> Read(ODataQueryOptions<Entity> queryOptions);

    }
}
