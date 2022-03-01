using Finbuckle.MultiTenant;
using HorselessNewspaper.Core.Interfaces.Constants.ControllerRouteStrings;
using HorselessNewspaper.Web.Core.Interfaces.Content;
using HorselessNewspaper.Web.Core.Interfaces.Controller;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.REST.HorselessContentControllers
{

    [ApiController]
    [Route(RESTContentModelControllerStrings.API_HORSELESSCONTENTMODEL_HORSELESSSESSION)]

    public class HorselessSessionRESTController : ControllerBase,
        IRESTContentController<HorselessSession>
    {

        public IContentCollectionService<IQueryableContentModelOperator<HorselessSession>, HorselessSession> _contentCollectionService { get; set; }
        public ITenantInfo CurrentTenant { get; set; }

        public HorselessSessionRESTController(IContentCollectionService<IQueryableContentModelOperator<HorselessSession>,
            HorselessSession> contentCollectionService, ITenantInfo tenantInfo)
        {
            _contentCollectionService = contentCollectionService;
            CurrentTenant = tenantInfo;
        }

        [HttpPost("Create")]
        [Consumes("application/json")]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(ContentCollection))]
        [ProducesResponseType(StatusCodes.Status201Created, Type = typeof(ContentCollection))]
        public async Task<ActionResult<HorselessSession>> Create([FromBody] HorselessSession contentCollection)
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
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ContentCollection))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<HorselessSession>> GetByObjectId([FromRoute] string objectId)
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
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(ContentCollection))]
        [ProducesResponseType(StatusCodes.Status202Accepted, Type = typeof(ContentCollection))]
        public async Task<ActionResult<HorselessSession>> Update([FromRoute] string contentCollectionId, [FromBody] HorselessSession contentCollection)
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
