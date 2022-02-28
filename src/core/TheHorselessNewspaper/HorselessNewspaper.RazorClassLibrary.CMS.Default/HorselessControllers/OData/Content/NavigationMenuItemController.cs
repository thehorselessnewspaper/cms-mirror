using Finbuckle.MultiTenant;
using HorselessNewspaper.Web.Core.Interfaces.Content;
using HorselessNewspaper.Web.Core.Interfaces.Controller;
using Microsoft.AspNetCore.OData.Routing;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Formatter;
using Microsoft.AspNetCore.OData.Routing.Controllers;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using Microsoft.AspNetCore.Http;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.OData.Content
{

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
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<ContentModel.NavigationMenuItem>))]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status401Unauthorized, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status403Forbidden, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status404NotFound, Type = typeof(ProblemDetails))]
        public async Task<ActionResult<IEnumerable<ContentModel.NavigationMenuItem>>> Get()
        {
            var result = await _contentCollectionService.Query();
            return Ok(result);
        }

    }
}
