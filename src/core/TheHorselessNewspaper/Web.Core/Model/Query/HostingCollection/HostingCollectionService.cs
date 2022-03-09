using Finbuckle.MultiTenant;
using HorselessNewspaper.Web.Core.Interfaces.Hosting;
using HorselessNewspaper.Web.Core.Model.Query.ContentCollection;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.HostingModel.Context;
using TheHorselessNewspaper.HostingModel.Entities.Query;
using TheHorselessNewspaper.Schemas.HostingModel.Context;

namespace HorselessNewspaper.Web.Core.Model.Query.HostingCollection
{
    /// <summary>
    /// generic interface for querying hosting model dbcontext
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <typeparam name="Entity"></typeparam>
    public class HostingCollectionService<T, Entity> : IHostingCollectionService<T, Entity>
        where T : class, IQueryableHostingModelOperator<Entity>, IQueryableModelOperator<Entity>
        where Entity : class, IHostingRowLevelSecured
    {


        private IQueryableHostingModelOperator<Entity> _hostingModelService;
        private ITenantInfo _tenantInfo;
        ILogger<HostingCollectionService<T, Entity>> _logger;

        public HostingCollectionService(IQueryableHostingModelOperator<Entity> hostingModelService,
            Finbuckle.MultiTenant.ITenantInfo tenantInfo,
            ILogger<HostingCollectionService<T, Entity>> logger)
        {
            this._hostingModelService = hostingModelService;
            this._tenantInfo = tenantInfo;
            this._logger = logger;
        }

        public async Task<Entity> Create([FromBody] Entity entity)
        {
            Entity result;

            try
            {
                result = await _hostingModelService.Create(entity);
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
                var queryResult = await _hostingModelService.Read(w => w.ObjectId == objectId);

                if (queryResult == null)
                {
                    throw new Exception("not found");
                }
                else if (queryResult.First() == null)
                {
                    throw new Exception("not found");
                }
                else
                {
                    result = queryResult.First();
                }
            }
            catch (Exception ex)
            {
                throw new Exception("not found", ex);
            }

            return result;
        }

        public async Task<IQueryable<Entity>> Query()
        {
            var result = await _hostingModelService.Read();

            return result;
        }

        public async Task<IQueryable<Entity>> Query(Expression<Func<Entity, bool>> query, List<string> includeClauses = null)
        {
            var result = await _hostingModelService.Read(query, includeClauses);

            return result;
        }

        public async Task<Entity> Update([FromBody] Entity contentCollection, List<string> targetProperties = null)
        {
            Entity result;

            try
            {
                result = await _hostingModelService.Update(contentCollection, targetProperties);
            }
            catch (Exception ex)
            {
                throw new Exception($"failed update {ex.Message}");
            }

            return result;
        }

        public async Task<IEnumerable<U>> InsertRelatedEntity<U>(Guid entityId, string propertyName, IEnumerable<U> relatedEntities) where U : class
        {
            var result = await _hostingModelService.InsertRelatedEntity(entityId, propertyName, relatedEntities);

            return result;
        }

    }

}
