using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Routing.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.HostingModel.Entities.Query;
using HostingModel = TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.OData.Hosting
{

    [Route("HorselessHosting/Tenant")]
    [Produces("application/json")]
    public class TenantController : ODataController
    {
        private readonly IQueryableHostingModelOperator<HostingModel.Tenant> _TenantSvc;

        public TenantController(IQueryableHostingModelOperator<HostingModel.Tenant> TenantSvc)
        {
            this._TenantSvc = TenantSvc;
        }

        [Microsoft.AspNetCore.OData.Query.EnableQuery]

        [HttpGet("Query")]
        public async Task<IActionResult> Get()
        {
            return Ok(await _TenantSvc.Read());
        }

        [HttpPost("Create")]
        [Consumes("application/json")]
        public async Task<IActionResult> Post([FromBody]  HostingModel.Tenant tenant)
        {
            return Ok(await _TenantSvc.Create(tenant));
        }
    }
}
