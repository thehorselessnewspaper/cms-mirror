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
    [Route(RESTContentModelControllerStrings.API_HORSELESSCONTENTMODEL_NAVIGATIONMENU)]
    public class NavigationMenuRESTController : ControllerBase,
        IRESTContentController<NavigationMenu>
    {

        public IContentCollectionService<IQueryableContentModelOperator<NavigationMenu>, NavigationMenu> _contentCollectionService { get; set; }
        public ITenantInfo CurrentTenant { get; set; }

        public NavigationMenuRESTController(IContentCollectionService<IQueryableContentModelOperator<NavigationMenu>,
        NavigationMenu> contentCollectionService, ITenantInfo tenantInfo)
        {
            _contentCollectionService = contentCollectionService;
            CurrentTenant = tenantInfo;
        }

        [HttpPost("Create", Name = "[controller]_[action]")]
        [Consumes("application/json")]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(MIMEType))]
        [ProducesResponseType(StatusCodes.Status201Created, Type = typeof(MIMEType))]
        public async Task<ActionResult<NavigationMenu>> Create([FromBody] NavigationMenu contentCollection)
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
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(MIMEType))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<NavigationMenu>> GetByObjectId([FromRoute] string objectId)
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
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(MIMEType))]
        [ProducesResponseType(StatusCodes.Status202Accepted, Type = typeof(MIMEType))]
        public async Task<ActionResult<NavigationMenu>> Update([FromRoute] string contentCollectionId, [FromBody] NavigationMenu contentCollection)
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
