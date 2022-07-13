using Finbuckle.MultiTenant;
using HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.REST.Util;
using HorselessNewspaper.Web.Core.Services.Query.Controller.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using HostingModel = TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
using HorselessNewspaper.Web.Core.Services.Query.Controller;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.REST.HorselessHostingControllers
{
    [ApiController]
    [Route(API_HORSELESSHOSTINGMODEL_TENANT)]
    public class TenantRESTController : ControllerBase,
        IRESTHostingController<HostingModel.Tenant>
    {
        public TenantRESTController(IHostingCollectionService<IQueryableHostingModelOperator<HostingModel.Tenant>, HostingModel.Tenant> contentCollectionService, Finbuckle.MultiTenant.ITenantInfo tenantInfo)
        {
            this.EntityCollectionService = contentCollectionService;
            this.CurrentTenant = tenantInfo;
        }

        protected const string API_HORSELESSHOSTINGMODEL_TENANT = "api/HorselessHostingModel/TenantREST";

        public IHostingCollectionService<IQueryableHostingModelOperator<HostingModel.Tenant>, HostingModel.Tenant> EntityCollectionService { get; set; }
        public ITenantInfo CurrentTenant { get; set; }

        [HttpPost("HostingEntitiesTenantCreate", Name = "HostingEntities[controller]_[action]")]
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

        [HttpGet("HostingEntitiesTenantGetByObjectId", Name = "HostingEntities[controller]_[action]")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(HostingModel.Tenant))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<HostingModel.Tenant>> GetByObjectId(string objectId)
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
        [HttpPost("HostingEntitiesTenantUpdate/{entityCollectionId}", Name = "HostingEntities[controller]_[action]")]
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
                List<string> updateablePropreties = await EntityReflectionHelpers.GetUpdateableProperties(entityCollection);

                var updateResult = await EntityCollectionService.Update(entityCollection, updateablePropreties);

                return Ok(updateResult);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("HostingEntitiesTenantGetByPageNumber", Name = "HostingEntities[controller]_[action]")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<HostingModel.Tenant>))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<IEnumerable<HostingModel.Tenant>>> GetByPageNumber(int pageSize = 10, int pageNumber = 1, int pageCount = 1)
        {

            IActionResult result;
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            try
            {
                var testFind = await EntityCollectionService.Query(pageSize, pageNumber, pageCount);

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
