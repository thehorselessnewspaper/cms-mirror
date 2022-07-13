using Finbuckle.MultiTenant;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;
using Microsoft.Extensions.Logging;
using System.Linq.Expressions;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.HostingModel.Context;

namespace HorselessNewspaper.Web.Core.Services.Query.Controller.Content
{
    /// <summary>
    /// suitable for injection into controllers
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <typeparam name="Entity"></typeparam>
    public class ContentCollectionService<T, Entity> : IContentCollectionService<T, Entity>
        where T : class , IQueryableContentModelOperator<Entity>, IQueryableModelOperator<Entity>
        where Entity : class, IContentRowLevelSecured
    {
        private IQueryableContentModelOperator<Entity> _contentModelService;
        private ITenantInfo _tenantInfo;
        ILogger<ContentCollectionService<T, Entity>> _logger;

        public ContentCollectionService(IQueryableContentModelOperator<Entity> contentModelService, 
            Finbuckle.MultiTenant.ITenantInfo tenantInfo,
            ILogger<ContentCollectionService<T, Entity>> logger)
        {
            this._contentModelService = contentModelService;
            this._tenantInfo = tenantInfo;
            this._logger = logger;
        }

        public async Task<Entity> Create([FromBody] Entity entity)
        {
            Entity result;

            try
            {
                result = await _contentModelService.Create(entity);
            }
            catch (Exception ex)
            {
                return await Task.FromException<Entity>(ex);
            }

            return result;
           
        }

        public async Task<Entity> GetByObjectId(string objectId)
        {
            Entity result;
            try
            {
                var queryResult = await _contentModelService.Read(w => w.ObjectId == objectId);

                if (queryResult == null)
                {
                    throw new Http404Exception("not found");
                }
                else if (queryResult.First() == null)
                {
                    throw new Http404Exception("not found");
                }
                else
                {
                    result =  queryResult.First();
                }
            }
            catch (Exception ex)
            {
                throw new Http404Exception("not found", ex);
            }

            return result;
        }

        public async Task<IQueryable<Entity>> Query(int pageSize = 10, int pageNumber = 1, int pageCount = 1)
        {
            var result = await _contentModelService.Read(pageSize, pageNumber, pageCount);

            return result;
        }

        public async Task<IQueryable<Entity>> Query(Expression<Func<Entity, bool>> query, List<string> includeClauses = null, int pageSize = 10, int pageNumber = 1, int pageCount = 1)
        {
            var result = await _contentModelService.Read(query, includeClauses, pageSize, pageNumber, pageCount);

            return result;
        }

        public async Task<Entity> Update([FromBody] Entity contentCollection, List<string> targetProperties = null)
        {
            Entity result;

            try
            {
                result = await _contentModelService.Update(contentCollection, targetProperties);
            }
            catch (Exception ex)
            {
                throw new Exception($"failed update {ex.Message}", ex);
            }

            return result;
        }

        public async Task<IEnumerable<U>> InsertRelatedEntity<U>(Guid entityId, string propertyName, IEnumerable<U> relatedEntities) where U : class
        {
            var result = await _contentModelService.InsertRelatedEntity(entityId, propertyName, relatedEntities);

            return result;
        }

        public async Task<IQueryable<U>> ReadFilterByMetaData<U>(Expression<Func<U, bool>> query, List<string> includeClauses = null, int pageSize = 10, int pageNumber = 1, int pageCount = 1) where U : class, IContentRowLevelSecured, IQueryableMetaDataModelEntity
        {
            var result = await _contentModelService.ReadFilterByMetaData(query, includeClauses, pageSize, pageNumber, pageCount);

            return result;
        }

        public async Task<IQueryable<Entity>> Query(ODataQueryOptions<Entity> query)
        {
            var result = await _contentModelService.Read<ODataQueryOptions<Entity>, Entity>(query);
            return result;

        }
    }
}
