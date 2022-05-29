using Finbuckle.MultiTenant;
using HorselessNewspaper.Web.Core.Services.Query.Entities;
using HorselessNewspaper.Web.Core.Interfaces.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.HostingModel.Entities.Query;
using HostingModel = TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;

using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using Microsoft.AspNetCore.Authorization;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.Areas.Admin.Controllers
{
    [Authorize]
    [Area("Admin")]
    public class TenantOwnerController : Controller
    {
        public IContentCollectionService<IQueryableContentModelOperator<ContentModel.Tenant>, ContentModel.Tenant> tenantCollectionService { get; set; }
        public IHostingCollectionService<IQueryableHostingModelOperator<HostingModel.Tenant>, HostingModel.Tenant> hostingTenantsCollectionService { get; set; }
        public ITenantInfo CurrentTenant { get; set; }

        ILogger<TenantOwnerController> logger;

        public TenantOwnerController(
            ILogger<TenantOwnerController> logger,
            IContentCollectionService<IQueryableContentModelOperator<ContentModel.Tenant>, ContentModel.Tenant> tenantCollectionService,
            IHostingCollectionService<IQueryableHostingModelOperator<HostingModel.Tenant>, HostingModel.Tenant> hostingTenantsCollectionService,
            ITenantInfo tenantInfo
            )
        {
            this.tenantCollectionService = tenantCollectionService;
            this.hostingTenantsCollectionService = hostingTenantsCollectionService;
            this.CurrentTenant = tenantInfo;
        }

        [Authorize]
        public async Task<IActionResult> Index()
        {
            var hasWaitingRequest = await GetPendingRegistrationStatusMessage();
            ViewData["WaitingRequestMessage"] = hasWaitingRequest;
            return View();
        }

        [AllowAnonymous]
        public async Task<IActionResult> Register()
        {
            var hasWaitingRequest = await GetPendingRegistrationStatusMessage();
            ViewData["WaitingRequestMessage"] = hasWaitingRequest;
            return View();
        }

        private async Task<bool> GetPendingRegistrationStatusMessage()
        {
            if (User.Identities.Where(w => w.IsAuthenticated).Any())
            {
                var iss = User.Claims.FirstOrDefault().Issuer;
                var sub = User.Claims.FirstOrDefault().Subject.Name;

                var hasUnpublishedTenantQuery = await hostingTenantsCollectionService.Query();
                var hasWaitingRequest = hasUnpublishedTenantQuery
                    .Where(w => w.Owners.Where(o => o.Iss.Equals(iss) && o.Sub.Equals(sub)).Any()).Any();

                return hasWaitingRequest;

            }
            else
            {
                return false;

            }
        }
    }
}
