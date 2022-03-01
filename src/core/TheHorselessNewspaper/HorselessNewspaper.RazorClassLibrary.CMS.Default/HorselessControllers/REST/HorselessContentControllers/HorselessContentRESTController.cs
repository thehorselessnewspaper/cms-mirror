using Finbuckle.MultiTenant;
using HorselessNewspaper.Core.Interfaces.Constants.ControllerRouteStrings;
using HorselessNewspaper.Web.Core.Interfaces.Content;
using HorselessNewspaper.Web.Core.Interfaces.Controller;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.REST.HorselessContentControllers
{
    [ApiController]
    [Route(RESTContentModelControllerStrings.API_HORSELESSCONTENTMODEL_CONTENTCOLLECTION)]
    public class HorselessContentRESTController : ControllerBase, IRESTContentController<ContentModel.HorselessContent>
    {
        public HorselessContentRESTController(IContentCollectionService<IQueryableContentModelOperator<ContentModel.HorselessContent>,
            ContentModel.HorselessContent> contentCollectionService, ITenantInfo tenantInfo)
        {
            _contentCollectionService = contentCollectionService;
            CurrentTenant = tenantInfo;
        }

        public IContentCollectionService<IQueryableContentModelOperator<ContentModel.HorselessContent>, ContentModel.HorselessContent> _contentCollectionService { get; set; }
        public ITenantInfo CurrentTenant { get; set; }

        [HttpPost("Create")]
        [Consumes("application/json")]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(ContentModel.HorselessContent))]
        [ProducesResponseType(StatusCodes.Status201Created, Type = typeof(ContentModel.HorselessContent))]
        public Task<ActionResult<ContentModel.HorselessContent>> Create([FromBody] ContentModel.HorselessContent contentCollection)
        {
            throw new NotImplementedException();
        }

        [HttpGet("GetByObjectId")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ContentModel.HorselessContent))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public Task<ActionResult<ContentModel.HorselessContent>> GetByObjectId([FromRoute] string objectId)
        {
            throw new NotImplementedException();
        }

        [Consumes("application/json")]
        [HttpPost("Update")]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(ContentModel.HorselessContent))]
        [ProducesResponseType(StatusCodes.Status202Accepted, Type = typeof(ContentModel.HorselessContent))]
        public Task<ActionResult<ContentModel.HorselessContent>> Update([FromRoute] string contentCollectionId, [FromBody] ContentModel.HorselessContent contentCollection)
        {
            throw new NotImplementedException();
        }
    }
}
