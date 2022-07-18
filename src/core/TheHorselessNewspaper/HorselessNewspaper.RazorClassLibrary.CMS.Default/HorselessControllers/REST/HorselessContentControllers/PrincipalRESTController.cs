using HorselessNewspaper.Core.Interfaces.Constants.ControllerRouteStrings;
using HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.REST.Util;
using HorselessNewspaper.Web.Core.Services.Query.Controller.Content;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.REST.HorselessContentControllers
{
    [ApiController]
    [Route("{__tenant__}/" + RESTContentModelControllerStrings.API_HORSELESSCONTENTMODEL_Principal)]
    public class PrincipalRESTController : ControllerBase,
        IRESTContentController<ContentModel.Principal>
    {

        public IContentCollectionService<IQueryableContentModelOperator<Principal>, Principal> _contentCollectionService { get; set; }
        public ITenantInfo CurrentTenant { get; set; }

        public PrincipalRESTController(IContentCollectionService<IQueryableContentModelOperator<Principal>,
                Principal> contentCollectionService, ITenantInfo tenantInfo)
        {
            _contentCollectionService = contentCollectionService;
            CurrentTenant = tenantInfo;
        }


        [HttpPost("Create", Name = "ContentEntities[controller]_[action]")]
        [Consumes("application/json")]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(Principal))]
        [ProducesResponseType(StatusCodes.Status201Created, Type = typeof(Principal))]
        public async Task<ActionResult<Principal>> Create([FromBody] Principal contentCollection)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            try
            {
                var createResult = await _contentCollectionService.Create(contentCollection);
                return Created(Request.Path, createResult);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [HttpGet("GetByObjectId/{objectId}", Name = "ContentEntities[controller]_[action]")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Principal))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Principal>> GetByObjectId([FromRoute] string objectId)
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
        [HttpPost("Update/{contentCollectionId}", Name = "ContentEntities[controller]_[action]")]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(Principal))]
        [ProducesResponseType(StatusCodes.Status202Accepted, Type = typeof(Principal))]
        public async Task<ActionResult<Principal>> Update([FromRoute] string contentCollectionId, [FromBody] Principal contentCollection)
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


        [HttpGet("GetByPageNumber", Name = "ContentEntities[controller]_[action]")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<ContentModel.Principal>))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<IEnumerable<ContentModel.Principal>>> GetByPageNumber(int pageSize = 10, int pageNumber = 1, int pageCount = 1)
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
