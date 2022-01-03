using Microsoft.AspNetCore.Mvc;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace Horseless.ODataScaffold.Controllers.OData
{
    public class ContentCollectionController : Microsoft.AspNetCore.OData.Routing.Controllers.ODataController
    {
        private readonly IQueryableContentModelOperator<ContentCollection> context;
        private readonly ILogger<ContentCollectionController> _logger;
        public ContentCollectionController(IQueryableContentModelOperator<ContentCollection> ctx, ILogger<ContentCollectionController> log)
        {
            this.context = ctx;
            this._logger = log;
        }

        [Microsoft.AspNetCore.OData.Query.EnableQuery]
        [HttpGet("horselessdata/ContentCollection")]
        [HttpGet("horselessdata/ContentCollection/$count")]
        public async Task<IActionResult> Get()
        {            
            return await Task.FromResult(Ok(this.context.Get()));
        }
    }
}
