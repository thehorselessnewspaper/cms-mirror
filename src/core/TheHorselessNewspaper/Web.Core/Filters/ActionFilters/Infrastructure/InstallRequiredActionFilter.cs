using HorselessNewspaper.Web.Core.Interfaces.Cache;
using HorselessNewspaper.Web.Core.Middleware;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Logging;
using NuGet.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
using HostingEntities = TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
using HorselessNewspaper.Web.Core.Extensions.Claim;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Finbuckle.MultiTenant;

namespace HorselessNewspaper.Web.Core.Filters.ActionFilters.Infrastructure
{
    public class InstallRequiredActionFilter : IAsyncActionFilter
    {
        const string installerController = "TenantSetup";
        const string installerAction = "Index";
        const string installerArea = "Installer";

        public InstallRequiredActionFilter(IHorselessCacheProvider<Guid, ITenantInfo> tenantCache, ILogger<InstallRequiredActionFilter> logger)
        {
            TenantCache = tenantCache;
            _logger = logger;

            logger.LogTrace("InstallRequiredActionFilter initialized normally");
        }

        public IHorselessCacheProvider<Guid, ITenantInfo> TenantCache { get; private set; }

        private ILogger<InstallRequiredActionFilter> _logger;

        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            bool isAdminPrincipal = context.HttpContext.HasAdminClaimValues(new List<string>() { "admin", "owner" });
            string area = (string)context.RouteData.Values["area"];
            string controller = (string)context.RouteData.Values["controller"];
            string action = (string)context.RouteData.Values["action"];
            if (await IsMustCompleteTenantSetup(isAdminPrincipal, area, controller, action))
            {
                _logger.LogWarning("tenant setup required. redirecting");
                context.Result = new RedirectToRouteResult(
                    new RouteValueDictionary(new { area = installerArea, controller = installerController, action = installerAction }));

                context.HttpContext.Response.Redirect("/installer/tenantsetup/index");
            }
            else
            {
                await next();
            }
        }

        private async Task<bool> IsMustCompleteTenantSetup(bool isAdminPrincipal, string area = "", string controller = "", string action = "")
        {
            bool ret = true;
            bool hasNoTenants = await GetTenantCount() == 0;

            var isIgnoredArea = installerArea.Equals(area, StringComparison.OrdinalIgnoreCase);

            var isIgnoredController = installerController.Equals(controller, StringComparison.OrdinalIgnoreCase);
            var isIgnoredAction = installerAction.Equals(area, StringComparison.OrdinalIgnoreCase);

            ret = hasNoTenants && isAdminPrincipal && (isIgnoredArea == false) && (isIgnoredController == false) && (isIgnoredAction == false);
            return ret;
        }

        private async Task<int> GetTenantCount()
        {
            int ret = 0;

            if (TenantCache != null)
            {
                ret = await TenantCache.Count();
            }

            return ret;
        }
    }
}
