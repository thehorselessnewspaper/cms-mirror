using Microsoft.AspNetCore.OData.Routing.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using Finbuckle.MultiTenant;
using Microsoft.AspNetCore.Mvc;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using HorselessNewspaper.Web.Core.Interfaces.Content;
using HorselessNewspaper.Web.Core.Interfaces.Controller;
using Microsoft.AspNetCore.OData.Routing;
using Microsoft.AspNetCore.OData.Formatter;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authorization.Infrastructure;
using HorselessNewspaper.Web.Core.Authorization.Model;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.OData.Content
{
    [Route("{__tenant__}/ODataContent/HorselessView")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]

    [ApiExplorerSettings(IgnoreApi = true)]
    public class HorselessViewController :
        ODataController, IContentQueryController<ContentModel.HorselessView>
    {
        private readonly IContentCollectionService<IQueryableContentModelOperator<ContentModel.HorselessView>, ContentModel.HorselessView> _horselessViewService;
        private readonly ITenantInfo _tenantInfo;
        IAuthorizationService authorizationService;

        public HorselessViewController(IContentCollectionService<IQueryableContentModelOperator<ContentModel.HorselessView>,
            ContentModel.HorselessView> horselessViewService, Finbuckle.MultiTenant.ITenantInfo tenantInfo,
            IAuthorizationService authorizationService)
        {
            this._horselessViewService = horselessViewService;
            this._tenantInfo = tenantInfo;
            this.authorizationService = authorizationService;
        }


        [Microsoft.AspNetCore.OData.Query.EnableQuery]


        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<ContentModel.HorselessView>))]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status401Unauthorized, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status403Forbidden, Type = typeof(ProblemDetails))]
        [ProducesResponseType(StatusCodes.Status404NotFound, Type = typeof(ProblemDetails))]
        public async Task<ActionResult<IEnumerable<ContentModel.HorselessView>>> Get()
        {
            var isFailedAuthorization = false;

            var potentialResult = await _horselessViewService.Query();
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

            if (isFailedAuthorization)
            {
                return Unauthorized();
            }

            var result = await _horselessViewService.Query();

            return Ok(result);
        }
    }
}
