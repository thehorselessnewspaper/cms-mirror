using Finbuckle.MultiTenant;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Routing.Controllers;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using HorselessNewspaper.Web.Core.Interfaces.Content;
using HorselessNewspaper.Web.Core.Interfaces.Controller;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.OData.Content
{
    [Route("HorselessContent")]
    public class ContentCollectionController : 
        ODataController , IContentController<ContentModel.ContentCollection>

    {
        private readonly IContentCollectionService<IQueryableContentModelOperator<ContentModel.ContentCollection>, ContentModel.ContentCollection> _contentCollectionService;
        private readonly ITenantInfo _tenantInfo;


        public ContentCollectionController(IContentCollectionService<IQueryableContentModelOperator<ContentModel.ContentCollection>, ContentModel.ContentCollection> contentCollectionService, Finbuckle.MultiTenant.ITenantInfo tenantInfo)
        {
            this._contentCollectionService = contentCollectionService;
            this._tenantInfo = tenantInfo;
        }

        [Microsoft.AspNetCore.OData.Query.EnableQuery]
        [HttpGet("Query")]

        // breaks openapi [HttpGet("HorselessContent/ContentCollection/$count")]
        public async Task<IActionResult> Query()
        {
            var result = await _contentCollectionService.Query();
            return  Ok(result);
        }

        [Microsoft.AspNetCore.OData.Query.EnableQuery]
        [HttpGet("GetByObjectId")]
        public async Task<IActionResult> GetByObjectId(string objectId)
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
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }

            return Ok(result);
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody]ContentModel.ContentCollection contentCollection)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            try
            {
                var createResult  = await _contentCollectionService.Create(contentCollection);
                return Ok(createResult);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [HttpPost("Update")]
        public async Task<IActionResult> Update([FromBody] ContentModel.ContentCollection contentCollection)
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
