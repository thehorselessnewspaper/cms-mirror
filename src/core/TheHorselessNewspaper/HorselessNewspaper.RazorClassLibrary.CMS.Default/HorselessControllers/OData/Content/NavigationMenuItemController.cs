using Finbuckle.MultiTenant;
using HorselessNewspaper.Web.Core.Interfaces.Content;
using HorselessNewspaper.Web.Core.Interfaces.Controller;
using Microsoft.AspNetCore.OData.Routing;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Formatter;
using Microsoft.AspNetCore.OData.Routing.Controllers;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.OData.Content
{
    //[Route("HorselessContent/NavigationMenuItem")]

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
        [HttpGet("Query")]

        // breaks openapi [HttpGet("HorselessContent/ContentCollection/$count")]
        public async Task<ActionResult<IEnumerable<ContentModel.NavigationMenuItem>>> Query()
        {
            var result = await _contentCollectionService.Query();
            return Ok(result);
        }

    }
}
