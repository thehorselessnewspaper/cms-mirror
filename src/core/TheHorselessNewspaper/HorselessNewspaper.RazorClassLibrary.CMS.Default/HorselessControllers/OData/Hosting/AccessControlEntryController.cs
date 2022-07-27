using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Routing.Controllers;
using HostingModel = TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.OData.Hosting
{
    [Route("{__tenant__}/ODataHosting/AccessControlEntry")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [ApiExplorerSettings(IgnoreApi = true)]
    public class AccessControlEntryController : ODataController
    {
        private IQueryableHostingModelOperator<HostingModel.AccessControlEntry> _AccessControlEntrySvc;

        public AccessControlEntryController(IQueryableHostingModelOperator<HostingModel.AccessControlEntry> _AccessControlEntrySvc)
        {
            this._AccessControlEntrySvc = _AccessControlEntrySvc;
        }

        [Microsoft.AspNetCore.OData.Query.EnableQuery]
        [HttpGet()]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IQueryable<HostingModel.AccessControlEntry>))]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status401Unauthorized, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status403Forbidden, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status404NotFound, Type = typeof(ProblemDetails))]

        public async Task<ActionResult<IQueryable<HostingModel.AccessControlEntry>>> Get(ODataQueryOptions<HostingModel.AccessControlEntry> options)
        {
            var result = await _AccessControlEntrySvc.Read<ODataQueryOptions<HostingModel.AccessControlEntry>, HostingModel.AccessControlEntry>(options);
            if (result != null)
            {

                return Ok(result);
            }
            else
            {
                return Ok(new List<HostingModel.AccessControlEntry>());
            }
        }
    }
}
