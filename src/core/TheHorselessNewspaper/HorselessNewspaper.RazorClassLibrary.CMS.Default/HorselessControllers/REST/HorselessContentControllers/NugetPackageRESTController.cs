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
    [Route("{__tenant__}/" + RESTContentModelControllerStrings.API_HORSELESSCONTENTMODEL_NUGEPACKAGE)]
    public class NugetPackageRESTController : ControllerBase,
        IRESTContentController<ContentModel.NugetPackage>
    {
        public IContentCollectionService<IQueryableContentModelOperator<NugetPackage>, NugetPackage> _contentCollectionService { get; set; }
        public ITenantInfo CurrentTenant { get; set; }

        public NugetPackageRESTController(IContentCollectionService<IQueryableContentModelOperator<NugetPackage>,
                NugetPackage> contentCollectionService, ITenantInfo tenantInfo)
        {
            _contentCollectionService = contentCollectionService;
            CurrentTenant = tenantInfo;
        }

        [HttpPost("Create", Name = "ContentEntities[controller]_[action]")]
        [Consumes("application/json")]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(NugetPackage))]
        [ProducesResponseType(StatusCodes.Status201Created, Type = typeof(NugetPackage))]
        public async Task<ActionResult<NugetPackage>> Create([FromBody] NugetPackage contentCollection)
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
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(NugetPackage))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<NugetPackage>> GetByObjectId([FromRoute] string objectId)
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
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(NugetPackage))]
        [ProducesResponseType(StatusCodes.Status202Accepted, Type = typeof(NugetPackage))]
        public async Task<ActionResult<NugetPackage>> Update([FromRoute] string contentCollectionId, [FromBody] NugetPackage contentCollection)
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
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<ContentModel.NugetPackage>))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<IEnumerable<ContentModel.NugetPackage>>> GetByPageNumber(int pageSize = 10, int pageNumber = 1, int pageCount = 1)
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
