using Finbuckle.MultiTenant;
using HorselessNewspaper.Web.Core.Services.Query.Controller;
using HorselessNewspaper.Web.Core.Services.Query.Entities;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Routing.Controllers;
using HorselessNewspaper.Web.Core.Services.Query.Controller.Content;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using Microsoft.AspNetCore.OData.Query;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.OData.Content
{

    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Route("{__tenant__}/ODataContent/JSONAsset")]
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

        public async Task<ActionResult<IQueryable<ContentModel.JSONAsset>>> Get(ODataQueryOptions<ContentModel.JSONAsset> options)
        {
            var result = await _contentCollectionService.Query(options);
            return Ok(result);
        }

    }
}
