using Finbuckle.MultiTenant;
using HorselessNewspaper.Web.Core.Services.Query.Entities;
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
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.OData.Content
{

    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Route("{__tenant__}/ODataContent/MIMEType")]
    [ApiExplorerSettings(IgnoreApi = true)]
    public class MimeTypeController :
        ODataController, IContentQueryController<ContentModel.MIMEType>
    {
        private readonly IContentCollectionService<IQueryableContentModelOperator<ContentModel.MIMEType>, ContentModel.MIMEType> _contentCollectionService;
        private readonly ITenantInfo _tenantInfo;


        public MimeTypeController(IContentCollectionService<IQueryableContentModelOperator<ContentModel.MIMEType>, ContentModel.MIMEType> contentCollectionService, Finbuckle.MultiTenant.ITenantInfo tenantInfo)
        {
            this._contentCollectionService = contentCollectionService;
            this._tenantInfo = tenantInfo;
        }


        [Microsoft.AspNetCore.OData.Query.EnableQuery]
        [HttpGet()]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<ContentModel.MIMEType>))]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status401Unauthorized, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status403Forbidden, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status404NotFound, Type = typeof(ProblemDetails))]
        public async Task<ActionResult<IEnumerable<ContentModel.MIMEType>>> Get()
        {
            var result = await _contentCollectionService.Query();
            return Ok(result);
        }

    }
}
