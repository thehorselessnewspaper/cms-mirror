﻿using HorselessNewspaper.Web.Core.Services.Query.Controller.Content;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Routing.Controllers;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.OData.Content
{
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Route("{__tenant__}/ODataContent/AccessControlEntry")]
    [ApiExplorerSettings(IgnoreApi = true)]
    public class AccessControlEntryController :
        ODataController // , IContentQueryController<ContentModel.AccessControlEntry>
    {
        private IContentCollectionService<IQueryableContentModelOperator<AccessControlEntry>, AccessControlEntry> _contentCollectionService;
        private ITenantInfo _tenantInfo;
        public AccessControlEntryController(IContentCollectionService<IQueryableContentModelOperator<ContentModel.AccessControlEntry>, ContentModel.AccessControlEntry> contentCollectionService, Finbuckle.MultiTenant.ITenantInfo tenantInfo)
        {
            this._contentCollectionService = contentCollectionService;
            this._tenantInfo = tenantInfo;
        }



        [Microsoft.AspNetCore.OData.Query.EnableQuery]
        [HttpGet(Name = "GetContentEntitiesAccessControlEntry")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<ContentModel.AccessControlEntry>))]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status401Unauthorized, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status403Forbidden, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status404NotFound, Type = typeof(ProblemDetails))]
        public async Task<ActionResult<IQueryable<AccessControlEntry>>> GetContentEntitiesAccessControlEntry(ODataQueryOptions<AccessControlEntry> options)
        {
            var result = await _contentCollectionService.Query(options);

            return Ok(result);
        }
    }
}
