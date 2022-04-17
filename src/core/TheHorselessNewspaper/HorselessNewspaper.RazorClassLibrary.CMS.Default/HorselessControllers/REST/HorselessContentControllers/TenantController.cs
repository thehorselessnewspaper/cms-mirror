using Finbuckle.MultiTenant;
using HorselessNewspaper.Core.Interfaces.Constants.ControllerRouteStrings;
using HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.REST.Util;
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
    [Route("{__tenant__}/" + RESTContentModelControllerStrings.API_HORSELESSCONTENTMODEL_TENANT)]
    // [Route("{tenant}/api/[controller]")]
    public class TenantController : ControllerBase,
        IRESTContentController<Tenant>
    {

        public IContentCollectionService<IQueryableContentModelOperator<Tenant>, Tenant> _contentCollectionService { get; set; }
        public ITenantInfo CurrentTenant { get; set; }

        public TenantController(IContentCollectionService<IQueryableContentModelOperator<Tenant>,
           Tenant> contentCollectionService, ITenantInfo tenantInfo)
        {
            _contentCollectionService = contentCollectionService;
            CurrentTenant = tenantInfo;
        }

        [HttpPost("Create")]
        [Consumes("application/json")]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(Tenant))]
        [ProducesResponseType(StatusCodes.Status201Created, Type = typeof(Tenant))]
        public async Task<ActionResult<Tenant>> Create([FromBody] Tenant contentCollection)
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



        [HttpGet("GetByObjectId", Name = "[controller]_[action]")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Tenant))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Tenant>> GetByObjectId([FromRoute] string objectId)
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
        [HttpPost("Update/{contentCollectionId}", Name = "[controller]_[action]")]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(Tenant))]
        [ProducesResponseType(StatusCodes.Status202Accepted, Type = typeof(Tenant))]
        public async Task<ActionResult<Tenant>> Update( [FromRoute] string contentCollectionId, [FromBody] Tenant contentCollection)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            try
            {
                List<string> updateablePropreties = await EntityReflectionHelpers.GetUpdateableProperties(contentCollection);

                var updateResult = await _contentCollectionService.Update(contentCollection, updateablePropreties);
                return Ok(updateResult);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
