using Finbuckle.MultiTenant;
using HorselessNewspaper.Web.Core.Interfaces.Content;
using HorselessNewspaper.Web.Core.Interfaces.Controller;
using Microsoft.AspNetCore.OData.Routing;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Formatter;
using Microsoft.AspNetCore.OData.Routing.Controllers;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using Microsoft.AspNetCore.Http;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.OData.Content
{
    [Route("HorselessContent/[controller]")]
    [Produces("application/json")]
    public class MeronymController :
        ODataController, IContentQueryController<ContentModel.Meronym>
    {

        private readonly IContentCollectionService<IQueryableContentModelOperator<ContentModel.Meronym>, ContentModel.Meronym> _contentCollectionService;
        private readonly ITenantInfo _tenantInfo;


        public MeronymController(IContentCollectionService<IQueryableContentModelOperator<ContentModel.Meronym>, ContentModel.Meronym> contentCollectionService, Finbuckle.MultiTenant.ITenantInfo tenantInfo)
        {
            this._contentCollectionService = contentCollectionService;
            this._tenantInfo = tenantInfo;
        }

        [Microsoft.AspNetCore.OData.Query.EnableQuery]
        [HttpGet("Query")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<ContentModel.Meronym>))]
        public async Task<ActionResult<IEnumerable<ContentModel.Meronym>>> Query()
        {
            var result = await _contentCollectionService.Query();
            return Ok(result);
        }
    }
}
