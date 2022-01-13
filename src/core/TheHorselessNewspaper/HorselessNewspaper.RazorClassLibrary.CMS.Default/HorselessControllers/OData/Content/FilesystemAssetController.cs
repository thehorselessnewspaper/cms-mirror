using Finbuckle.MultiTenant;
using HorselessNewspaper.Web.Core.Interfaces.Content;
using HorselessNewspaper.Web.Core.Interfaces.Controller;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Formatter;
using Microsoft.AspNetCore.OData.Routing.Controllers;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.OData.Content
{
    [Route("HorselessContent/FilesystemAsset")]
    public class FilesystemAssetController :
        ODataController, IContentController<ContentModel.FilesystemAsset>
    {
        private IContentCollectionService<IQueryableContentModelOperator<FilesystemAsset>, FilesystemAsset> _contentCollectionService;
        private ITenantInfo _tenantInfo;

        public FilesystemAssetController(IContentCollectionService<IQueryableContentModelOperator<ContentModel.FilesystemAsset>, ContentModel.FilesystemAsset> contentCollectionService, Finbuckle.MultiTenant.ITenantInfo tenantInfo)
        {
            this._contentCollectionService = contentCollectionService;
            this._tenantInfo = tenantInfo;
        }


        [Microsoft.AspNetCore.OData.Query.EnableQuery]
        [HttpGet("Query")]
        public async Task<IActionResult> Query()
        {
            var result = await _contentCollectionService.Query();
            return Ok(result);
        }

        [Microsoft.AspNetCore.OData.Query.EnableQuery]
        [HttpGet("GetByObjectId")]
        public async Task<IActionResult> GetByObjectId([FromODataUri] string objectId)
        {

            IActionResult result;
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            try
            {
                var testFind = await _contentCollectionService.GetByObjectId(objectId);

                if (testFind == null)
                {
                    return NotFound();
                }
                else if (testFind == null)
                {
                    return NotFound();
                }
                else
                {
                    result = Ok(testFind);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

            return Ok(result);
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody] ContentModel.FilesystemAsset contentCollection)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            try
            {
                var createResult = await _contentCollectionService.Create(contentCollection);
                return Ok(createResult);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [HttpPost("Update")]
        public async Task<IActionResult> Update([FromBody] ContentModel.FilesystemAsset contentCollection)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            try
            {
                var updateResult = await _contentCollectionService.Update(contentCollection);
                return Ok(updateResult);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
    }
}
