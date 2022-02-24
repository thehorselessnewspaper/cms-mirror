using Finbuckle.MultiTenant;
using HorselessNewspaper.Web.Core.Interfaces.Content;
using HorselessNewspaper.Web.Core.Interfaces.Controller;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Formatter;
using Microsoft.AspNetCore.OData.Routing.Controllers;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.OData.Content
{
    //[Route("HorselessContent/FilesystemAsset")]
    [Produces("application/json")]
    public class FilesystemAssetController :
        ODataController, IContentQueryController<ContentModel.FilesystemAsset>
    {
        private IContentCollectionService<IQueryableContentModelOperator<FilesystemAsset>, FilesystemAsset> _contentCollectionService;
        private ITenantInfo _tenantInfo;

        public FilesystemAssetController(IContentCollectionService<IQueryableContentModelOperator<ContentModel.FilesystemAsset>, ContentModel.FilesystemAsset> contentCollectionService, Finbuckle.MultiTenant.ITenantInfo tenantInfo)
        {
            this._contentCollectionService = contentCollectionService;
            this._tenantInfo = tenantInfo;
        }


        [Microsoft.AspNetCore.OData.Query.EnableQuery]
        [HttpGet("HorselessContent/FilesystemAsset")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<ContentModel.FilesystemAsset>))]
        public async Task<ActionResult<IEnumerable<ContentModel.FilesystemAsset>>> Query()
        {
            var result = await _contentCollectionService.Query();
            return Ok(result);
        }

    }
}
