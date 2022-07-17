using Finbuckle.MultiTenant;
using HorselessNewspaper.Web.Core.Services.Query.Entities;
using HorselessNewspaper.Web.Core.Services.Query.Controller;
using Microsoft.AspNetCore.OData.Routing;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Formatter;
using Microsoft.AspNetCore.OData.Routing.Controllers;
using HorselessNewspaper.Web.Core.Services.Query.Controller.Content;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.OData.Query;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.OData.Content
{

    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Route("ODataContent/NavigationMenuItem")]
    [ApiExplorerSettings(IgnoreApi = true)]
    public class NavigationMenuItemController :
        ODataController, IContentQueryController<ContentModel.NavigationMenuItem>

    {
        private readonly IContentCollectionService<IQueryableContentModelOperator<ContentModel.NavigationMenuItem>, ContentModel.NavigationMenuItem> _contentCollectionService;
        private readonly ITenantInfo _tenantInfo;


        public NavigationMenuItemController(IContentCollectionService<IQueryableContentModelOperator<ContentModel.NavigationMenuItem>, ContentModel.NavigationMenuItem> contentCollectionService, Finbuckle.MultiTenant.ITenantInfo tenantInfo)
        {
            this._contentCollectionService = contentCollectionService;
            this._tenantInfo = tenantInfo;
        }

        [Microsoft.AspNetCore.OData.Query.EnableQuery]
        [HttpGet()]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IQueryable<ContentModel.NavigationMenuItem>))]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status401Unauthorized, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status403Forbidden, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status404NotFound, Type = typeof(ProblemDetails))]
        public async Task<ActionResult<IQueryable<ContentModel.NavigationMenuItem>>> Get(ODataQueryOptions<ContentModel.NavigationMenuItem> options)
        {
            var result = await _contentCollectionService.Query(options);
            return Ok(result);
        }

    }
}
