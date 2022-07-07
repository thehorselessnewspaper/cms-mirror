using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Routing.Attributes;
using Microsoft.AspNetCore.OData.Routing.Controllers;

using TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
using HostingModel = TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.OData.Hosting
{
    [Route("ODataHosting")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [ApiExplorerSettings(IgnoreApi = true)]
    public class PrincipalController : ODataController
    {
        private IQueryableHostingModelOperator<Principal> _principalSvc;

        public PrincipalController(IQueryableHostingModelOperator<HostingModel.Principal> principalSvc)
        {
            this._principalSvc = principalSvc;
        }

        [Microsoft.AspNetCore.OData.Query.EnableQuery]
        [HttpGet("Principal")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<HostingModel.Principal>))]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status401Unauthorized, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status403Forbidden, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status404NotFound, Type = typeof(ProblemDetails))]

        public async Task<ActionResult<IQueryable<HostingModel.Principal>>> Get()

        {
            return Ok(await _principalSvc.Read());
        }

    }
}
