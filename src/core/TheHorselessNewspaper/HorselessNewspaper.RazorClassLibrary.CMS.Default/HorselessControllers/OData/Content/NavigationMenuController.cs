using Finbuckle.MultiTenant;
using HorselessNewspaper.Web.Core.Interfaces.Content;
using HorselessNewspaper.Web.Core.Interfaces.Controller;
using Microsoft.AspNetCore.OData.Routing;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Formatter;
using Microsoft.AspNetCore.OData.Routing.Controllers;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.OData.Content
{
    [Route("HorselessContent/NavigationMenu")]
    [Produces("application/json")]
    public class NavigationMenuController :
        ODataController, IContentQueryController<ContentModel.NavigationMenu>
    { 
        private readonly IContentCollectionService<IQueryableContentModelOperator<ContentModel.NavigationMenu>, ContentModel.NavigationMenu> _contentCollectionService;
        private readonly ITenantInfo _tenantInfo;


        public NavigationMenuController(IContentCollectionService<IQueryableContentModelOperator<ContentModel.NavigationMenu>, ContentModel.NavigationMenu> contentCollectionService, Finbuckle.MultiTenant.ITenantInfo tenantInfo)
        {
            this._contentCollectionService = contentCollectionService;
            this._tenantInfo = tenantInfo;
        }

        [Microsoft.AspNetCore.OData.Query.EnableQuery]
        [HttpGet("Query")]
        public async Task<ActionResult<IEnumerable<ContentModel.NavigationMenu>>> Query()
        {
            var result = await _contentCollectionService.Query();
            return Ok(result);
        }

    }
}
