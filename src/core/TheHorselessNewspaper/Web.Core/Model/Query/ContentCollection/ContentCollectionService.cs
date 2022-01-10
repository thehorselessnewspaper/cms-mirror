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

        public async Task<ActionResult<Entity>> Create([FromBody] Entity entity)
        {
            Entity result;

            try
            {
                result = await _contentModelService.Create(entity);
            }
            catch (Exception ex)
            {
                return new BadRequestResult();
            }

            var okResult = new ActionResult<Entity>(result);
            return okResult;
           
        }

        public async Task<ActionResult<Entity>> GetByObjectId(string objectId)
        {
            try
            {
                var testFind = await _contentModelService.Read(w => w.ObjectId == objectId);

                if (testFind == null)
                {
                    return new NotFoundResult();
                }
                else if (testFind.First() == null)
                {
                    return new NotFoundResult();
                }
            }
            catch (Exception ex)
            {
                return new BadRequestResult();
            }

            var found = await _contentModelService.Read(w => w.ObjectId == objectId);

            var first = found.FirstOrDefault();

            return new ActionResult<Entity>(first);
        }

        public async Task<ActionResult<IQueryable<Entity>>> Query()
        {
            var result = await _contentModelService.Read();

            var okResult = new ActionResult<IQueryable<Entity>>(result);
            return okResult;
        }

        public async Task<ActionResult<Entity>> Update([FromBody] Entity contentCollection)
        {
            Entity result;

            try
            {
                result = await _contentModelService.Update(contentCollection);
            }
            catch (Exception ex)
            {
                return new BadRequestResult();
            }

            var okResult = new ActionResult<Entity>(result);
            return okResult;
        }
    }
}
