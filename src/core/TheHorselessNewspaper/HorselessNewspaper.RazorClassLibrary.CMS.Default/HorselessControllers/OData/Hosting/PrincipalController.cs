using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Routing.Attributes;
using Microsoft.AspNetCore.OData.Routing.Controllers;

using TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
using HostingModel = TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.OData.Hosting
{

    [Route("{__tenant__}/ODataHosting/Principal")]
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
        [HttpGet(Name = "GetHostingPrincipal")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IQueryable<HostingModel.Principal>))]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status401Unauthorized, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status403Forbidden, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status404NotFound, Type = typeof(ProblemDetails))]

        public async Task<ActionResult<IQueryable<HostingModel.Principal>>> GetHostingPrincipal(ODataQueryOptions<HostingModel.Principal> options)
        {
            var result = await _principalSvc.Read<ODataQueryOptions<HostingModel.Principal>, HostingModel.Principal>(options);
            if (result != null)
            {

                return Ok(result);
            }
            else
            {
                return Ok(new List<HostingModel.Principal>());
            }
        }

    }
}
