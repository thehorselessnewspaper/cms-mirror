using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Routing.Controllers;
using TheHorselessNewspaper.HostingModel.Entities.Query;
using HostingModel = TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.OData.Hosting
{
    [Route("HorselessHosting/Tenant")]
    [ApiExplorerSettings(IgnoreApi = false)]
    public class TenantController : ODataController
    {
        private readonly IQueryableHostingModelOperator<HostingModel.Tenant> _TenantSvc;

        public TenantController(IQueryableHostingModelOperator<HostingModel.Tenant> TenantSvc)
        {
            this._TenantSvc = TenantSvc;
        }


        [Microsoft.AspNetCore.OData.Query.EnableQuery]
        [HttpGet()]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<HostingModel.Tenant>))]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status401Unauthorized, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status403Forbidden, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status404NotFound, Type = typeof(ProblemDetails))]

        // [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IAsyncEnumerable<HostingModel.Tenant>))]
        public async Task<ActionResult<IEnumerable<HostingModel.Tenant>>> Get()

        {
            return Ok(await _TenantSvc.Read());
        }


    }
}
