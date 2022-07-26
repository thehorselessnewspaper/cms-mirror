using Microsoft.AspNetCore.OData.Routing.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HorselessNewspaper.Web.Core.Services.Query.Controller.Content;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using Finbuckle.MultiTenant;
using Microsoft.AspNetCore.Mvc;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using HorselessNewspaper.Web.Core.Services.Query.Entities;
using HorselessNewspaper.Web.Core.Services.Query.Controller;
using Microsoft.AspNetCore.OData.Routing;
using Microsoft.AspNetCore.OData.Formatter;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authorization.Infrastructure;
using HorselessNewspaper.Web.Core.Authorization.Model;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Routing.Attributes;
using System.Xml.Linq;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.OData.Content
{
    // [ODataAttributeRouting]
    [Route("{__tenant__}/ODataContentTenant")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [ApiExplorerSettings(IgnoreApi = true)]
    public class TenantController :
        ODataController , IContentQueryController<ContentModel.Tenant>

    {
        private readonly IContentCollectionService<IQueryableContentModelOperator<ContentModel.Tenant>, ContentModel.Tenant> _contentCollectionService;
        private readonly ITenantInfo _tenantInfo;
        IAuthorizationService authorizationService;

        public TenantController(IContentCollectionService<IQueryableContentModelOperator<ContentModel.Tenant>,
            ContentModel.Tenant> contentCollectionService, Finbuckle.MultiTenant.ITenantInfo tenantInfo,
            IAuthorizationService authorizationService)
        {
            this._contentCollectionService = contentCollectionService;
            this._tenantInfo = tenantInfo;
            this.authorizationService = authorizationService;
        }


        [Microsoft.AspNetCore.OData.Query.EnableQuery]

         [HttpGet()]

        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IQueryable<ContentModel.Tenant>))]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status401Unauthorized, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status403Forbidden, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status404NotFound, Type = typeof(ProblemDetails))]

        public async Task<ActionResult<IQueryable<ContentModel.Tenant>>> Get(ODataQueryOptions<ContentModel.Tenant> options)
        {
            try
            {

                var isFailedAuthorization = false;

                var potentialResult = await _contentCollectionService.Query(options);
                if (potentialResult != null)
                {
                    var items = potentialResult.ToList();
                    foreach (var item in items)
                    {
                        var authorizeResult = await this.authorizationService
                                                .AuthorizeAsync(User, item, AccessControlledOperations.Read);
                        if (!authorizeResult.Succeeded)
                        {
                            isFailedAuthorization = true;
                        }
                    }
                }
                else
                {
                    return Ok(new List<ContentModel.Tenant>());
                }

                if (isFailedAuthorization)
                {
                    return Unauthorized();
                }


                return Ok(potentialResult);
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }


    }
}
