using Finbuckle.MultiTenant;
using HorselessNewspaper.Core.Interfaces.Constants.ControllerRouteStrings;
using HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.REST.Util;
using HorselessNewspaper.Web.Core.Interfaces.Content;
using HorselessNewspaper.Web.Core.Interfaces.Controller;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Net.Mime;
using System.Xml.Linq;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.REST.DynamicRender
{
    /// <summary>
    /// support client side asynchronous 
    /// page composition via rest retrieval of views
    /// </summary>

    [Route("/")]
    [ApiExplorerSettings(IgnoreApi = false)]
    public class DynamicViewServerController : Controller
    {
        private IContentCollectionService<IQueryableContentModelOperator<HorselessView>, HorselessView> _horselessViewOperator { get; set; }
        private ITenantInfo _tenantInfo;
        private IAuthenticationService _authService;
        private ILogger<DynamicViewServerController> _logger;

        public DynamicViewServerController(IAuthenticationService authService,
            IContentCollectionService<IQueryableContentModelOperator<HorselessView>, HorselessView> horselessViewOperator,
                ITenantInfo tenantInfo, ILogger<DynamicViewServerController> logger)
        {
            this._horselessViewOperator = horselessViewOperator;
            this._tenantInfo = tenantInfo;
            this._authService = authService;
            this._logger = logger;
        }

        #region view service operations
        private async Task<bool> GetIsRegisteredView(string viewName)
        {
            var ret = false;
            try
            {

                var query = await this._horselessViewOperator.Query(w => w.Name.Equals(viewName));
                var queryResult = query.Any();

                ret = queryResult;

            }
            catch (Exception e)
            {
                _logger.LogError($"{this.GetType().Name} had a problem serving view name {viewName}. error was {e.Message}");
                ret = false;
            }
            return ret;
        }

        #endregion view service operations
        /// <summary>
        /// serves partials according to rbac
        /// </summary>
        /// <param name="viewName"></param>
        /// <returns></returns>
        [HttpGet("GetDynamicView", Name = "Presentation[controller]_[action]")]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status202Accepted)]
        [Produces("text/html")]
        public IActionResult GetDynamicView([FromHeader] string viewName, [FromHeader] Guid? parentContentCollectionObjectId)
        {
            return View(viewName);
        }
    }
}
