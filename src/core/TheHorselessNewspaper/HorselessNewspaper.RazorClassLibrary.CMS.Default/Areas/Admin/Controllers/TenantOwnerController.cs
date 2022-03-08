using Finbuckle.MultiTenant;
using HorselessNewspaper.Web.Core.Interfaces.Content;
using HorselessNewspaper.Web.Core.Interfaces.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.HostingModel.Entities.Query;
using HostingModel = TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;

using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.Areas.Admin.Controllers
{
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

        public async Task<IActionResult> Index()
        {
            var iss = User.Claims.FirstOrDefault().Issuer;
            var sub = User.Claims.FirstOrDefault().Subject.Name;

            var hasUnpublishedTenantQuery = await hostingTenantsCollectionService.Query();
            var hasWaitingRequest = hasUnpublishedTenantQuery
                .Where(w => w.Owners.Where(o => o.Iss.Equals(iss) && o.Sub.Equals(sub)).Any()).Any();

            ViewData["WaitingRequestMessage"] = hasWaitingRequest;
            return View();
        }

        public async Task<IActionResult> Register()
        {
            var iss = User.Claims.FirstOrDefault().Issuer;
            var sub = User.Claims.FirstOrDefault().Subject.Name;

            var hasUnpublishedTenantQuery = await hostingTenantsCollectionService.Query();
            var hasWaitingRequest = hasUnpublishedTenantQuery
                .Where(w => w.Owners.Where(o => o.Iss.Equals(iss) && o.Sub.Equals(sub)).Any()).Any();

            ViewData["WaitingRequestMessage"] = hasWaitingRequest;
            return View();
        }
    }
}
