using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Routing.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.OData.Content
{
    [Route("HorselessContent")]
    public class ContentCollectionController : ODataController
    {
        private readonly IQueryableContentModelOperator<ContentModel.ContentCollection> _contentCollectionService;

        public ContentCollectionController(IQueryableContentModelOperator<ContentModel.ContentCollection> contentCollectionService)
        {
            this._contentCollectionService = contentCollectionService;
        }

        [Microsoft.AspNetCore.OData.Query.EnableQuery]
        [HttpGet("Get")]

        // breaks openapi [HttpGet("HorselessContent/ContentCollection/$count")]
        public async Task<IActionResult> Get()
        {
            return  Ok(await _contentCollectionService.Read());
        }

        [HttpPost("Post")]
        public async Task<IActionResult> Post([FromBody]ContentModel.ContentCollection contentCollection)
        {
            return Ok(await _contentCollectionService.Create(contentCollection));
        }
    }
}
