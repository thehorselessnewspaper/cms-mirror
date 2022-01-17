using Finbuckle.MultiTenant;
using HorselessNewspaper.Web.Core.Interfaces.Content;
using HorselessNewspaper.Web.Core.Interfaces.Controller;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.REST
{
    [ApiController]
    [Route("api/HorselessContent")]
    public class HorselessContentRESTController : ControllerBase, IContentController<ContentModel.HorselessContent>
    {

        public HorselessContentRESTController(IContentCollectionService<IQueryableContentModelOperator<ContentModel.HorselessContent>,
            ContentModel.HorselessContent> contentCollectionService, Finbuckle.MultiTenant.ITenantInfo tenantInfo)
        {
            this._contentCollectionService = contentCollectionService;
            this._tenantInfo = tenantInfo;
        }

        public  IContentCollectionService<IQueryableContentModelOperator<HorselessContent>, HorselessContent> _contentCollectionService { get; set; }
        public ITenantInfo _tenantInfo { get; set; }

        [HttpPost("Create")]
        [Consumes("application/json")]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(ContentModel.HorselessContent))]
        [ProducesResponseType(StatusCodes.Status201Created, Type = typeof(ContentModel.HorselessContent))]
        public Task<ActionResult<HorselessContent>> Create([FromBody] HorselessContent contentCollection)
        {
            throw new NotImplementedException();
        }

        [HttpGet("GetByObjectId")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ContentModel.HorselessContent))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public Task<ActionResult<HorselessContent>> GetByObjectId([FromRoute] string objectId)
        {
            throw new NotImplementedException();
        }

        [Consumes("application/json")]
        [HttpPost("Update")]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(ContentModel.HorselessContent))]
        [ProducesResponseType(StatusCodes.Status202Accepted, Type = typeof(ContentModel.HorselessContent))]
        public Task<ActionResult<HorselessContent>> Update([FromRoute] string contentCollectionId, [FromBody] HorselessContent contentCollection)
        {
            throw new NotImplementedException();
        }
    }
}
