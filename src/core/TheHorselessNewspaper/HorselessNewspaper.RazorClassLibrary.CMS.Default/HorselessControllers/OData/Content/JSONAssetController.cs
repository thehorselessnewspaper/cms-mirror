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

    [ApiExplorerSettings(IgnoreApi = true)]
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
        [HttpGet()]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<ContentModel.JSONAsset>))]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status401Unauthorized, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status403Forbidden, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status404NotFound, Type = typeof(ProblemDetails))]

        public async Task<ActionResult<IEnumerable<ContentModel.JSONAsset>>> Get()
        {
            var result = await _contentCollectionService.Query();
            return Ok(result);
        }

    }
}
