using Finbuckle.MultiTenant;
using HorselessNewspaper.Web.Core.Interfaces.Content;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.HostingModel.Context;
using TheHorselessNewspaper.Schemas.HostingModel.Context;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using Microsoft.Extensions.Logging;

namespace HorselessNewspaper.Web.Core.Model.Query.ContentCollection
{
    /// <summary>
    /// suitable for injection into controllers
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <typeparam name="Entity"></typeparam>
    public class ContentCollectionService<T, Entity> : IContentCollectionService<T, Entity>
        where T : class, IQueryableContentModelOperator<Entity>, IQueryableModelOperator<Entity>
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
                    throw new Exception("not found");
                }
                else if (queryResult.First() == null)
                {
                    throw new Exception("not found");
                }
                else
                {
                    result =  queryResult.First();
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
            var result = await _contentModelService.Read();

            return result;
        }

        public async Task<Entity> Update([FromBody] Entity contentCollection)
        {
            Entity result;

            try
            {
                result = await _contentModelService.Update(contentCollection);
            }
            catch (Exception ex)
            {
                throw new Exception($"failed update {ex.Message}");
            }

            return result;
        }
    }
}
