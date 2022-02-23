using Finbuckle.MultiTenant;
using HorselessNewspaper.Web.Core.Interfaces.Content;
using HorselessNewspaper.Web.Core.Interfaces.Controller;
using Microsoft.AspNetCore.OData.Routing;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Formatter;
using Microsoft.AspNetCore.OData.Routing.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.OData.Content
{
    //[Route("HorselessContent/HorselessContent")]
    [Produces("application/json")]
    public class HorselessContentController :
        ODataController, IContentQueryController<ContentModel.HorselessContent>

    {

        private readonly IContentCollectionService<IQueryableContentModelOperator<ContentModel.HorselessContent>, ContentModel.HorselessContent> _contentCollectionService;
        private readonly ITenantInfo _tenantInfo;


        public HorselessContentController(IContentCollectionService<IQueryableContentModelOperator<ContentModel.HorselessContent>, ContentModel.HorselessContent> contentCollectionService, Finbuckle.MultiTenant.ITenantInfo tenantInfo)
        {
            this._contentCollectionService = contentCollectionService;
            this._tenantInfo = tenantInfo;
        }

        [Microsoft.AspNetCore.OData.Query.EnableQuery]
        // [HttpGet("Query")]
        // breaks openapi [HttpGet("HorselessContent/ContentCollection/$count")]
        public async Task<ActionResult<IEnumerable<ContentModel.HorselessContent>>> Query()
        {
            var result = await _contentCollectionService.Query();
            return Ok(result);
        }
    }
}
