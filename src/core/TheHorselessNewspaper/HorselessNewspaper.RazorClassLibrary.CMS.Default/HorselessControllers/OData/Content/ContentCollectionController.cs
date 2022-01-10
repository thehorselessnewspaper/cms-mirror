using Finbuckle.MultiTenant;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Routing.Controllers;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using HorselessNewspaper.Web.Core.Interfaces.Content;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.OData.Content
{
    [Route("HorselessContent")]
    internal class ContentCollectionController : 
        ODataController
        
    {
        private readonly IQueryableContentModelOperator<ContentModel.ContentCollection> _contentCollectionService;
        private readonly ITenantInfo _tenantInfo;

        public ContentCollectionController(IQueryableContentModelOperator<ContentModel.ContentCollection> contentCollectionService, Finbuckle.MultiTenant.ITenantInfo tenantInfo)
        {
            this._contentCollectionService = contentCollectionService;
            this._tenantInfo = tenantInfo;
        }

        [Microsoft.AspNetCore.OData.Query.EnableQuery]
        [HttpGet("Query")]

        // breaks openapi [HttpGet("HorselessContent/ContentCollection/$count")]
        public async Task<ActionResult<ContentModel.ContentCollection>> Query()
        {
            return  Ok(await _contentCollectionService.Read());
        }

        [Microsoft.AspNetCore.OData.Query.EnableQuery]
        [HttpGet("GetByObjectId")]

        // breaks openapi [HttpGet("HorselessContent/ContentCollection/$count")]
        public async Task<IActionResult> GetByObjectId(string objectId)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest();
            }

            try
            {
                var testFind = await _contentCollectionService.Read(w => w.ObjectId == objectId);

                if (testFind == null)
                {
                    return NotFound();
                }
                else if (testFind.First() == null)
                {
                    return NotFound();
                }
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }

            var found = await _contentCollectionService.Read(w => w.ObjectId == objectId);

            var first = found.FirstOrDefault();

            return Ok(first);
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody]ContentModel.ContentCollection contentCollection)
        {
            ContentModel.ContentCollection result;
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            try
            {
                result = await _contentCollectionService.Create(contentCollection);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }

            return Ok(result);
        }

        [HttpPost("Update")]
        public async Task<IActionResult> Update([FromBody] ContentModel.ContentCollection contentCollection)
        {
            ContentModel.ContentCollection result;
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            try
            {
                result = await _contentCollectionService.Update(contentCollection);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

            return Ok(result);
        }
    }
}
