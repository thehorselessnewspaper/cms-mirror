using Finbuckle.MultiTenant;
using HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.REST.Util;
using HorselessNewspaper.Web.Core.Interfaces.Controller;
using HorselessNewspaper.Web.Core.Interfaces.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.Entities.Query;
using HostingModel = TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.REST.HorselessHostingControllers
{
    [ApiController]
    [Route(API_HORSELESSHOSTINGMODEL_TENANTINFO)]
    public class TenantInfoRESTController : ControllerBase,
        IRESTHostingController<HostingModel.TenantInfo>
    {
        public TenantInfoRESTController(IHostingCollectionService<IQueryableHostingModelOperator<HostingModel.TenantInfo>, HostingModel.TenantInfo> contentCollectionService, Finbuckle.MultiTenant.ITenantInfo tenantInfo)
        {
            this.EntityCollectionService = contentCollectionService;
            this.CurrentTenant = tenantInfo;
        }

        protected const string API_HORSELESSHOSTINGMODEL_TENANTINFO = "api/HorselessHostingModel/TenantInfo";
        public IHostingCollectionService<IQueryableHostingModelOperator<HostingModel.TenantInfo>, HostingModel.TenantInfo> EntityCollectionService { get; set;}
        public ITenantInfo CurrentTenant { get; set;}

        [HttpPost("HostingEntitiesTenantInfoCreate", Name = "HostingEntities[controller]_[action]")]
        [Consumes("application/json")]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(HostingModel.TenantInfo))]
        [ProducesResponseType(StatusCodes.Status201Created, Type = typeof(HostingModel.TenantInfo))]
        public async Task<ActionResult<HostingModel.TenantInfo>> Create([FromBody] HostingModel.TenantInfo entityCollectionId)
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

        [HttpGet("HostingEntitiesTenantInfoGetByObjectId", Name = "HostingEntities[controller]_[action]")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(HostingModel.TenantInfo))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<HostingModel.TenantInfo>> GetByObjectId([FromRoute] string objectId)
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
        [HttpPost("HostingEntitiesTenantInfoUpdate/{entityCollectionId}", Name = "HostingEntities[controller]_[action]")]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(HostingModel.TenantInfo))]
        [ProducesResponseType(StatusCodes.Status202Accepted, Type = typeof(HostingModel.TenantInfo))]
        public async Task<ActionResult<HostingModel.TenantInfo>> Update([FromRoute] string entityCollectionId, [FromBody] HostingModel.TenantInfo entityCollection)
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


    }
}
