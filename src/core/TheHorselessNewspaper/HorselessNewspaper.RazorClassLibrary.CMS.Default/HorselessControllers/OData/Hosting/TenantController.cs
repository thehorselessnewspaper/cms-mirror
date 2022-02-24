using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Routing.Controllers;
using TheHorselessNewspaper.HostingModel.Entities.Query;
using HostingModel = TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.OData.Hosting
{

    // [Route("HorselessHosting/Tenants")]
    [Produces("application/json")]
    public class TenantController : ODataController
    {
        private readonly IQueryableHostingModelOperator<HostingModel.Tenant> _TenantSvc;

        public TenantController(IQueryableHostingModelOperator<HostingModel.Tenant> TenantSvc)
        {
            this._TenantSvc = TenantSvc;
        }

        [Microsoft.AspNetCore.OData.Query.EnableQuery]

        [HttpGet("HorselessHosting/Query")]
        // [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IAsyncEnumerable<HostingModel.Tenant>))]
        public async Task<ActionResult<IEnumerable<HostingModel.Tenant>>> Query()

        {
            return Ok(await _TenantSvc.Read());
        }


    }
}
