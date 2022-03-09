using Finbuckle.MultiTenant;
using HorselessNewspaper.Web.Core.Interfaces.Content;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.HostingModel.HostingEntities.Query;
using HostingModel = TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;

using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using HorselessNewspaper.RazorClassLibrary.CMS.Default.Areas.Model;
using HorselessNewspaper.Web.Core.Interfaces.Hosting;
using TheHorselessNewspaper.HostingModel.Entities.Query;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Logging;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.Areas.Admin.Controllers
{
    [Authorize]
    [Area("Admin")]
    public class TenantRegistrationController : Controller
    {
        public IContentCollectionService<IQueryableContentModelOperator<ContentModel.Tenant>, ContentModel.Tenant> tenantCollectionService { get; set; }
        public IHostingCollectionService<IQueryableHostingModelOperator<HostingModel.Tenant>, HostingModel.Tenant> hostingTenantsCollectionService { get; set; }
        public ITenantInfo CurrentTenant { get; set; }

        ILogger<TenantRegistrationController> logger;

        public TenantRegistrationController(
            ILogger<TenantRegistrationController> logger,
            IContentCollectionService<IQueryableContentModelOperator<ContentModel.Tenant>, ContentModel.Tenant> tenantCollectionService,
            IHostingCollectionService<IQueryableHostingModelOperator<HostingModel.Tenant>, HostingModel.Tenant> hostingTenantsCollectionService,
            ITenantInfo tenantInfo)
        {
            this.tenantCollectionService = tenantCollectionService;
            this.hostingTenantsCollectionService = hostingTenantsCollectionService;
            this.CurrentTenant = tenantInfo;
            this.logger = logger;
        }

        // GET: TenantRegistrationController
        public async Task<ActionResult> Index()
        {
            var iss = User.Claims.FirstOrDefault().Issuer;
            var sub = User.Claims.FirstOrDefault().Subject.Name;

            var hasUnpublishedTenantQuery = await hostingTenantsCollectionService.Query();
            var hasWaitingRequest = hasUnpublishedTenantQuery
                .Where(w => w.Owners.Where(o => o.Iss.Equals(iss) && o.Sub.Equals(sub)).Any()).Any();

            ViewData["WaitingRequestMessage"] = hasWaitingRequest;

            return View();
        }

        /// <summary>
        /// tenenant registrant management security scope
        /// </summary>
        /// <returns></returns>
        public ActionResult Registrants()
        {
            //var registrantsQuery = await hostingTenantsCollectionService.Query();
            //var waitingRequests = registrantsQuery
            //    .Where(w => w.IsPublished == false && w.IsSoftDeleted == false)
            //    .Take(5)
            //    .ToList();
            return View();
        }

        [Authorize]
        // GET: TenantRegistrationController/Details/5
        public ActionResult Details(string id)
        {
            return View();
        }

        [Authorize]
        // GET: TenantRegistrationController/Create
        public ActionResult Create()
        {
            return View();
        }

        [Authorize]
        // POST: TenantRegistrationController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create(TenantRegistrationModel model)
        {
            try
            {
                var newTenant = new HostingModel.Tenant()
                {
                    Id = Guid.NewGuid(),
                    CreatedAt = DateTime.UtcNow,
                    DisplayName = model.displayName,
                    IsPublished = false,
                    IsSoftDeleted = false,
                    ObjectId = Guid.NewGuid().ToString(),
                    Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                    Owners = new List<HostingModel.Principal>()
                    {
                        new HostingModel.Principal()
                        {
                            Id = Guid.NewGuid(),
                            CreatedAt = DateTime.UtcNow,
                            DisplayName = model.displayName,
                            IsSoftDeleted = false,
                            ObjectId = Guid.NewGuid().ToString(),
                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
// aud is not a guarantee
//                            Aud = User.Claims.Where(w => w.Type.Contains("aud")).FirstOrDefault().Value,

                            // subject/issuer are technically a compound unique key
                            Iss = User.Claims.FirstOrDefault().Issuer,
                            Sub = User.Claims.FirstOrDefault().Subject.Name

                        }
                    },
                    TenantInfos = new List<HostingModel.TenantInfo>()
                    {
                        new HostingModel.TenantInfo()
                        {

                            Id = Guid.NewGuid(),
                            CreatedAt = DateTime.UtcNow,
                            DisplayName = model.displayName,
                            IsSoftDeleted = false,
                            ObjectId = Guid.NewGuid().ToString(),
                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                            Identifier = model.tenantIdentifier,
                            Name = model.displayName
                        }
                    }
                };

                var insertedTenant = await this.hostingTenantsCollectionService.Create(newTenant);

                return RedirectToAction(nameof(Index));
            }
            catch(Exception e)
            {
                logger.LogWarning($"exception inserting new tenant {e.Message}");
                return View();
            }
        }

        [Authorize]
        // GET: TenantRegistrationController/Edit/5
        public ActionResult Edit(string id)
        {
            return View();
        }

        [Authorize]
        // POST: TenantRegistrationController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        [Authorize]
        // GET: TenantRegistrationController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        [Authorize]
        // POST: TenantRegistrationController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
