using Finbuckle.MultiTenant;
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
    [Route("api/HorselessContent/MIMEType")]
    public class MimeTypeRESTController : ControllerBase,
        IRESTContentController<MIMEType>
    {
        public IContentCollectionService<IQueryableContentModelOperator<MIMEType>, MIMEType> _contentCollectionService { get; set; }
        public ITenantInfo CurrentTenant { get; set; }

        public MimeTypeRESTController(IContentCollectionService<IQueryableContentModelOperator<MIMEType>,
                MIMEType> contentCollectionService, ITenantInfo tenantInfo)
        {
            _contentCollectionService = contentCollectionService;
            CurrentTenant = tenantInfo;
        }

        [HttpPost("Create")]
        [Consumes("application/json")]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(MIMEType))]
        [ProducesResponseType(StatusCodes.Status201Created, Type = typeof(MIMEType))]
        public async Task<ActionResult<MIMEType>> Create([FromBody] MIMEType contentCollection)
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

        [HttpGet("GetByObjectId")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(MIMEType))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<MIMEType>> GetByObjectId([FromRoute] string objectId)
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

        [Consumes("application/json")]
        [HttpPost("Update")]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(MIMEType))]
        [ProducesResponseType(StatusCodes.Status202Accepted, Type = typeof(MIMEType))]
        public async Task<ActionResult<MIMEType>> Update([FromRoute] string contentCollectionId, [FromBody] MIMEType contentCollection)
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
