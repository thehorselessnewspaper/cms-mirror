using Microsoft.AspNetCore.Mvc;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace Horseless.ODataScaffold.Controllers.OData
{
    public class HorselessContentMockODataController : Microsoft.AspNetCore.OData.Routing.Controllers.ODataController
    {
        private readonly IQueryableContentModelOperator<ContentCollection> context;
        private readonly ILogger<HorselessContentMockODataController> _logger;
        public HorselessContentMockODataController(IQueryableContentModelOperator<ContentCollection> ctx, ILogger<HorselessContentMockODataController> log)
        {
            this.context = ctx;
            this._logger = log;
        }

        [Microsoft.AspNetCore.OData.Query.EnableQuery]
        [HttpGet("horselessdatamock/ContentCollection")]
        [HttpGet("horselessdatamock/ContentCollection/$count")]
        public async Task<IActionResult> Get()
        {
            return await Task.FromResult(Ok());
        }
    }
}
