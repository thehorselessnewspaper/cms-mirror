using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Routing.Attributes;
using Microsoft.AspNetCore.OData.Routing.Controllers;

using HostingModel = TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.OData.Hosting
{
    // [ODataAttributeRouting]
    [Route("ODataHosting")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [ApiExplorerSettings(IgnoreApi = true)]
    public class TenantController : ODataController
    {
        private readonly IQueryableHostingModelOperator<HostingModel.Tenant> _TenantSvc;

        public TenantController(IQueryableHostingModelOperator<HostingModel.Tenant> TenantSvc)
        {
            this._TenantSvc = TenantSvc;
        }


        /// <summary>
        /// todo - 
        /// rationalize the return types of odata Get()
        /// is it IQueryable<T> or IEnumerable<T>>
        /// </summary>
        /// <returns></returns>
        [Microsoft.AspNetCore.OData.Query.EnableQuery]
        // [HttpGet("Tenant")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IQueryable<TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.Tenant>))]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status401Unauthorized, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status403Forbidden, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status404NotFound, Type = typeof(ProblemDetails))]

        // public async Task<ActionResult<IQueryable<TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.Tenant>>> GetHostingTenants(ODataQueryOptions<IQueryable<TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.Tenant>> options)

        public async Task<ActionResult<IQueryable<HostingModel.Tenant>>> Get(ODataQueryOptions<TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.Tenant> options)

        {

            var result = await _TenantSvc.Read<ODataQueryOptions<HostingModel.Tenant>, HostingModel.Tenant>  (options);
            if (result != null)
            {
                return Ok(result);
            }
            else
            {
                return Ok(new List<HostingModel.Tenant>());
            }
        }



    }
}
