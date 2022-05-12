using Finbuckle.MultiTenant;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Routing.Controllers;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using HorselessNewspaper.Web.Core.Interfaces.Content;
using HorselessNewspaper.Web.Core.Interfaces.Controller;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using Microsoft.AspNetCore.OData.Routing;
using Microsoft.AspNetCore.OData.Formatter;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.OData;
using System.Net;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.OData.Content
{

    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Route("{__tenant__}/ODataContent/ContentCollection")]
    [ApiExplorerSettings(IgnoreApi = true)]
    public class ContentCollectionController :
        ODataController, IContentQueryController<ContentModel.ContentCollection>
    {
        private IContentCollectionService<IQueryableContentModelOperator<ContentCollection>, ContentCollection> _contentCollectionService;
        private ITenantInfo _tenantInfo;

        public ContentCollectionController(IContentCollectionService<IQueryableContentModelOperator<ContentModel.ContentCollection>, ContentModel.ContentCollection> contentCollectionService, Finbuckle.MultiTenant.ITenantInfo tenantInfo)
        {
            this._contentCollectionService = contentCollectionService;
            this._tenantInfo = tenantInfo;
        }


        [Microsoft.AspNetCore.OData.Query.EnableQuery]
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<ContentModel.ContentCollection>))]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status401Unauthorized, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status403Forbidden, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status404NotFound, Type = typeof(ProblemDetails))]
        public async Task<ActionResult<IEnumerable<ContentModel.ContentCollection>>> Get()
        {
            var result = await _contentCollectionService.Query();
            
            return Ok(result);
        }


    }
}
