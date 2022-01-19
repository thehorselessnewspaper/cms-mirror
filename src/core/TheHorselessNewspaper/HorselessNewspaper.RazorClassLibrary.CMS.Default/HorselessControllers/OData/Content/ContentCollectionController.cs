using Finbuckle.MultiTenant;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Routing.Controllers;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using HorselessNewspaper.Web.Core.Interfaces.Content;
using HorselessNewspaper.Web.Core.Interfaces.Controller;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using Microsoft.AspNetCore.OData.Routing;
using Microsoft.AspNetCore.OData.Formatter;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.OData;


namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.OData.Content
{
    [Route("HorselessContent/ContentCollection")]

    public class ContentCollectionController :
        ODataController, IContentQueryController<ContentModel.ContentCollection>
    {
        private IContentCollectionService<IQueryableContentModelOperator<ContentCollection>, ContentCollection> _contentCollectionService;
        private ITenantInfo _tenantInfo;

        public ContentCollectionController(IContentCollectionService<IQueryableContentModelOperator<ContentModel.ContentCollection>, ContentModel.ContentCollection> contentCollectionService, Finbuckle.MultiTenant.ITenantInfo tenantInfo)
        {
            this._contentCollectionService = contentCollectionService;
            this._tenantInfo = tenantInfo;
        }


        [Microsoft.AspNetCore.OData.Query.EnableQuery]
        [HttpGet("Query")]
        // breaks openapi [HttpGet("HorselessContent/ContentCollection/$count")]
        public async Task<ActionResult<IEnumerable<ContentModel.ContentCollection>>> Query()
        {
            var result = await _contentCollectionService.Query();
            return Ok(result);
        }


    }
}
