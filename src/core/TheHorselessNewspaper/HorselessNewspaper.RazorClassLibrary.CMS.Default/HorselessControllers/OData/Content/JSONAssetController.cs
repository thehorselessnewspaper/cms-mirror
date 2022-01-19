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
    [Route("HorselessContent/JSONAsset")]
    [Produces("application/json")]
    public class JSONAssetController :
        ODataController, IContentQueryController<ContentModel.JSONAsset>
    {
        private readonly IContentCollectionService<IQueryableContentModelOperator<ContentModel.JSONAsset>, ContentModel.JSONAsset> _contentCollectionService;
        private readonly ITenantInfo _tenantInfo;


        public JSONAssetController(IContentCollectionService<IQueryableContentModelOperator<ContentModel.JSONAsset>, ContentModel.JSONAsset> contentCollectionService, Finbuckle.MultiTenant.ITenantInfo tenantInfo)
        {
            this._contentCollectionService = contentCollectionService;
            this._tenantInfo = tenantInfo;
        }

        [Microsoft.AspNetCore.OData.Query.EnableQuery]
        [HttpGet("Query")]
        public async Task<ActionResult<IEnumerable<ContentModel.JSONAsset>>> Query()
        {
            var result = await _contentCollectionService.Query();
            return Ok(result);
        }

    }
}
