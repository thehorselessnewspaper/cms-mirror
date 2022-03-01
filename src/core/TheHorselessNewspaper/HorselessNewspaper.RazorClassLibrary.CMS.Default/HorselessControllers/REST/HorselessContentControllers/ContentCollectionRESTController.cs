using Finbuckle.MultiTenant;
using HorselessNewspaper.Web.Core.Interfaces.Content;
using HorselessNewspaper.Web.Core.Interfaces.Controller;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using HorselessNewspaper.Core.Interfaces.Constants.ControllerRouteStrings;
namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.REST.HorselessContentControllers
{
    [ApiController]
    [Route(RESTContentModelControllerStrings.API_HORSELESSCONTENTMODEL_CONTENTCOLLECTION)]

    public class ContentCollectionRESTController : ControllerBase,
        IRESTContentController<ContentModel.ContentCollection>
    {

        public IContentCollectionService<IQueryableContentModelOperator<ContentModel.ContentCollection>, ContentModel.ContentCollection> _contentCollectionService { get; set; }
        public ITenantInfo CurrentTenant { get; set; }

        public ContentCollectionRESTController(IContentCollectionService<IQueryableContentModelOperator<ContentModel.ContentCollection>,
            ContentModel.ContentCollection> contentCollectionService, ITenantInfo tenantInfo)
        {
            _contentCollectionService = contentCollectionService;
            CurrentTenant = tenantInfo;
        }

        [HttpGet("{objectId}")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ContentModel.ContentCollection))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ContentModel.ContentCollection>> GetByObjectId(string objectId)
        {

            IActionResult result;
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            try
            {
                var testFind = await _contentCollectionService.GetByObjectId(objectId);

                if (testFind == null)
                {
                    return NotFound();
                }
                else if (testFind == null)
                {
                    return NotFound();
                }
                else
                {
                    result = Ok(testFind);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

            return Ok(result);
        }

        [HttpPost("Create")]
        [Consumes("application/json")]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(ContentModel.ContentCollection))]
        [ProducesResponseType(StatusCodes.Status201Created, Type = typeof(ContentModel.ContentCollection))]
        public async Task<ActionResult<ContentModel.ContentCollection>> Create([FromBody] ContentModel.ContentCollection contentCollection)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            try
            {
                var createResult = await _contentCollectionService.Create(contentCollection);
                return Ok(createResult);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [Consumes("application/json")]
        [HttpPost("Update")]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(ContentModel.ContentCollection))]
        [ProducesResponseType(StatusCodes.Status202Accepted, Type = typeof(ContentModel.ContentCollection))]
        public async Task<ActionResult<ContentModel.ContentCollection>> Update([FromRoute] string contentCollectionId, [FromBody] ContentModel.ContentCollection contentCollection)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            try
            {
                var updateResult = await _contentCollectionService.Update(contentCollection);
                return Ok(updateResult);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
    }
}
