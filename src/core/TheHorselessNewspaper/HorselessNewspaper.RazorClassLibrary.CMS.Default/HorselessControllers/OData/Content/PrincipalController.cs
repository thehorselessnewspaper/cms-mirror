using HorselessNewspaper.Web.Core.Services.Query.Controller.Content;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Routing.Controllers;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.OData.Content
{
    [Route("{__tenant__}/ODataContent/Principal")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [ApiExplorerSettings(IgnoreApi = true)]
    public class PrincipalController :
        ODataController, IContentQueryController<ContentModel.Principal>
    {
        private IContentCollectionService<IQueryableContentModelOperator<ContentModel.Principal>, ContentModel.Principal> principalCollectionService;
        private ITenantInfo _tenantInfo;

        public PrincipalController(IContentCollectionService<IQueryableContentModelOperator<ContentModel.Principal>, ContentModel.Principal> principalCollectionService, Finbuckle.MultiTenant.ITenantInfo tenantInfo)
        {
            this.principalCollectionService = principalCollectionService;
            this._tenantInfo = tenantInfo;
        }


        [Microsoft.AspNetCore.OData.Query.EnableQuery]
        [HttpGet()]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IQueryable<ContentModel.Principal>))]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status401Unauthorized, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status403Forbidden, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status404NotFound, Type = typeof(ProblemDetails))]
        public async Task<ActionResult<IQueryable<ContentModel.Principal>>> Get(ODataQueryOptions<ContentModel.Principal> options)
        {
            var result = await principalCollectionService.Query(options);

                return Ok(result);
   
        }

    }
}
