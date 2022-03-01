using Finbuckle.MultiTenant;
using HorselessNewspaper.Web.Core.Interfaces.Content;
using HorselessNewspaper.Web.Core.Interfaces.Controller;
using HorselessNewspaper.Web.Core.Interfaces.Hosting;
using HorselessNewspaper.Web.Core.Model.Query.ContentCollection;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.HostingModel.Entities.Query;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
using HostingModel = TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.REST.HorselessHostingControllers
{
    [ApiController]
    [Route("api/HorselessHosting/Tenant")]
    public class TenantRESTController : ControllerBase,
        IRESTHostingController<HostingModel.Tenant>
    {
        public TenantRESTController(IHostingCollectionService<IQueryableHostingModelOperator<HostingModel.Tenant>, HostingModel.Tenant> contentCollectionService, Finbuckle.MultiTenant.ITenantInfo tenantInfo)
        {
            this.EntityCollectionService = contentCollectionService;
            this.CurrentTenant = tenantInfo;
        }

        public IHostingCollectionService<IQueryableHostingModelOperator<HostingModel.Tenant>, HostingModel.Tenant> EntityCollectionService { get; set; }
        public ITenantInfo CurrentTenant { get; set; }

        [HttpPost("Create")]
        [Consumes("application/json")]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(HostingModel.Tenant))]
        [ProducesResponseType(StatusCodes.Status201Created, Type = typeof(HostingModel.Tenant))]
        public async Task<ActionResult<HostingModel.Tenant>> Create([FromBody] HostingModel.Tenant entityCollectionId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            try
            {
                var createResult = await EntityCollectionService.Create(entityCollectionId);
                return Ok(createResult);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("GetByObjectId")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(HostingModel.Tenant))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<HostingModel.Tenant>> GetByObjectId([FromRoute] string objectId)
        {
            IActionResult result;
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            try
            {
                var testFind = await EntityCollectionService.GetByObjectId(objectId);

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
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(HostingModel.Tenant))]
        [ProducesResponseType(StatusCodes.Status202Accepted, Type = typeof(HostingModel.Tenant))]
        public async Task<ActionResult<HostingModel.Tenant>> Update([FromRoute] string entityCollectionId, [FromBody] HostingModel.Tenant entityCollection)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            try
            {
                var updateResult = await EntityCollectionService.Update(entityCollection);
                return Ok(updateResult);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
