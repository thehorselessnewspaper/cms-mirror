using Finbuckle.MultiTenant;
using HorselessNewspaper.Web.Core.Services.Query.Entities;
using HorselessNewspaper.Web.Core.Interfaces.Controller;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Formatter;
using Microsoft.AspNetCore.OData.Routing.Controllers;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.OData.Content
{

    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Route("{__tenant__}/ODataContent/FilesystemAsset")]

    [ApiExplorerSettings(IgnoreApi = true)]
    public class FilesystemAssetController :
        ODataController, IContentQueryController<ContentModel.FilesystemAsset>
    {
        private IContentCollectionService<IQueryableContentModelOperator<FilesystemAsset>, FilesystemAsset> _contentCollectionService;
        private ITenantInfo _tenantInfo;

        public FilesystemAssetController(IContentCollectionService<IQueryableContentModelOperator<ContentModel.FilesystemAsset>, ContentModel.FilesystemAsset> contentCollectionService, Finbuckle.MultiTenant.ITenantInfo tenantInfo)
        {
            this._contentCollectionService = contentCollectionService;
            this._tenantInfo = tenantInfo;
        }


        [Microsoft.AspNetCore.OData.Query.EnableQuery]
        [HttpGet()]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<ContentModel.FilesystemAsset>))]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status401Unauthorized, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status403Forbidden, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status404NotFound, Type = typeof(ProblemDetails))]
        public async Task<ActionResult<IEnumerable<ContentModel.FilesystemAsset>>> Get()
        {
            var result = await _contentCollectionService.Query();
            return Ok(result);
        }

    }
}
