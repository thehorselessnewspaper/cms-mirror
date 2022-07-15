using Finbuckle.MultiTenant;
using HorselessNewspaper.Core.Interfaces.Constants.ControllerRouteStrings;
using HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.REST.Util;
using HorselessNewspaper.Web.Core.Services.Query.Entities;
using HorselessNewspaper.Web.Core.Services.Query.Controller;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using HorselessNewspaper.Web.Core.Services.Query.Controller.Content;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.REST.HorselessContentControllers
{
    [ApiController]
    [Route("{__tenant__}/" + RESTContentModelControllerStrings.API_HORSELESSCONTENTMODEL_TENANT)]
    // [Route("{tenant}/api/[controller]")]
    public class TenantRESTController : ControllerBase,
        IRESTContentController<Tenant>
    {

        public IContentCollectionService<IQueryableContentModelOperator<Tenant>, Tenant> _contentCollectionService { get; set; }
        public ITenantInfo CurrentTenant { get; set; }

        public TenantRESTController(IContentCollectionService<IQueryableContentModelOperator<Tenant>,
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



        [HttpGet("GetByObjectId/{objectId}", Name = "ContentEntities[controller]_[action]")]
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
            catch (Http404Exception ex)
            {
                return NotFound();
            }
            catch(Exception ex)
            {
                return NotFound();
            }


            return Ok(result);
        }

        [Consumes("application/json")]
        [HttpPost("Update/{contentCollectionId}", Name = "ContentEntities[controller]_[action]")]
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
                return Accepted(updateResult);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Consumes("application/json")]
        [HttpPost("UpdateProperties/{contentCollectionId}", Name = "ContentEntities[controller]_[action]")]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(Tenant))]
        [ProducesResponseType(StatusCodes.Status202Accepted, Type = typeof(Tenant))]
        public async Task<ActionResult<Tenant>> UpdateProperties([FromRoute] string contentCollectionId, [FromHeader] List<String> updatedProperties, [FromBody] Tenant contentCollection)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            try
            {
                List<string> updateablePropreties = await EntityReflectionHelpers.GetUpdateableProperties(contentCollection);
                if(updatedProperties != null && updatedProperties.Count > 0)
                {
                    updateablePropreties = new List<string>(updatedProperties);
                }

                var updateResult = await _contentCollectionService.Update(contentCollection, updateablePropreties);
                return Accepted(updateResult);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("GetByPageNumber", Name = "ContentEntities[controller]_[action]")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<Tenant>))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<IEnumerable<Tenant>>> GetByPageNumber(int pageSize = 10, int pageNumber = 1, int pageCount = 1)
        {

            IActionResult result;
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            try
            {
                var testFind = await _contentCollectionService.Query(pageSize, pageNumber, pageCount);

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
    }
}
