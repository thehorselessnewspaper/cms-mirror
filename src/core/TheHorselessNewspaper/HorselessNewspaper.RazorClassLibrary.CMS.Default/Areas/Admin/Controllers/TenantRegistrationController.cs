using Finbuckle.MultiTenant;
using HorselessNewspaper.RazorClassLibrary.CMS.Default.Areas.Model;
using HorselessNewspaper.Web.Core.Interfaces.Content;
using HorselessNewspaper.Web.Core.Interfaces.Hosting;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.HostingModel.Entities.Query;
using TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using HostingModel = TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.Areas.Admin.Controllers
{
    [Authorize]
    [Area("Admin")]
    public class TenantRegistrationController : Controller
    {
        public IContentCollectionService<IQueryableContentModelOperator<ContentModel.Tenant>, ContentModel.Tenant> tenantCollectionService { get; set; }
        public IHostingCollectionService<IQueryableHostingModelOperator<HostingModel.Tenant>, HostingModel.Tenant> hostingTenantsCollectionService { get; set; }
        public IHostingCollectionService<IQueryableHostingModelOperator<HostingModel.TenantInfo>, HostingModel.TenantInfo> tenantInfoService { get; set; }
        public IHostingCollectionService<IQueryableHostingModelOperator<HostingModel.Principal>, HostingModel.Principal> principalService { get; set; }


        public ITenantInfo CurrentTenant { get; set; }

        ILogger<TenantRegistrationController> logger;

        public TenantRegistrationController(
            ILogger<TenantRegistrationController> logger,
            IContentCollectionService<IQueryableContentModelOperator<ContentModel.Tenant>, ContentModel.Tenant> tenantCollectionService,
            IHostingCollectionService<IQueryableHostingModelOperator<HostingModel.Tenant>, HostingModel.Tenant> hostingTenantsCollectionService,
            IHostingCollectionService<IQueryableHostingModelOperator<HostingModel.TenantInfo>, HostingModel.TenantInfo> tenantInfoService,
            ITenantInfo tenantInfo)
        {
            this.tenantCollectionService = tenantCollectionService;
            this.hostingTenantsCollectionService = hostingTenantsCollectionService;
            this.tenantInfoService = tenantInfoService;
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
        public async Task<ActionResult> Registrants()
        {
            var hasUnpublishedTenantQuery = await hostingTenantsCollectionService.Query(r => r.IsPublished == false && r.IsSoftDeleted == false, new List<string>() { nameof(Tenant.Owners)});
            var hasWaitingRequest = hasUnpublishedTenantQuery
                .OrderBy(o => o.CreatedAt)
                .ToList();
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
                var newOwner = new HostingModel.Principal()
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

                };

                var newTenantInfo = new HostingModel.TenantInfo()
                {

                    Id = Guid.NewGuid(),
                    CreatedAt = DateTime.UtcNow,
                    DisplayName = model.displayName,
                    IsSoftDeleted = false,
                    ObjectId = Guid.NewGuid().ToString(),
                    Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                    Identifier = model.tenantIdentifier,
                    Name = model.displayName
                };

                var newTenant = new HostingModel.Tenant()
                {
                    Id = Guid.NewGuid(),
                    CreatedAt = DateTime.UtcNow,
                    DisplayName = model.displayName,
                    IsPublished = false,
                    IsSoftDeleted = false,
                    ObjectId = Guid.NewGuid().ToString(),
                    Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks)
                };

                newTenantInfo.Tenant = newTenant;
                newTenant.Owners.Add(newOwner);
                newTenant.TenantInfos.Add(newTenantInfo);

               
                var insertedTenant = await this.hostingTenantsCollectionService.Create(newTenant);

                //var updateOwnerResult = await this.hostingTenantsCollectionService.InsertRelatedEntity<Principal>(insertedTenant.Id, nameof(insertedTenant.Owners),
                //    new List<Principal>() { newOwner});

                //var updatedTenantInforesult = await this.hostingTenantsCollectionService.InsertRelatedEntity<HostingModel.TenantInfo>(insertedTenant.Id, nameof(insertedTenant.TenantInfos),
                //    new List<HostingModel.TenantInfo>() { newTenantInfo });

                var tenantInfos = await this.tenantInfoService.Query();
                var tenantInfosResult = tenantInfos.ToList();

                return RedirectToAction(nameof(Index));
            }
            catch (Exception e)
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
        public async Task<ActionResult> Delete(string id)
        {
            var tenantQuery = await hostingTenantsCollectionService.Query();
            var tenant = tenantQuery.Where(w => w.Id == Guid.Parse(id)).First();
            if (tenant != null)

            {

                ViewData["Tenant"] = new TenantRegistrationModel() { displayName = tenant.DisplayName, tenantIdentifier = "invalid registration" };

                return View();
            }
            else
            {
                ViewData["Tenant"] = new TenantRegistrationModel() { displayName = "tenant not found", tenantIdentifier = "invalid action" };
                return View();
            }

        }

        [Authorize]
        // POST: TenantRegistrationController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Delete(string id, IFormCollection collection)
        {
            try
            {
                var tenantQuery = await hostingTenantsCollectionService.Query();
                var tenant = tenantQuery.Where(w => w.Id == Guid.Parse(id)).First();
                if (tenant != null)

                {
                    tenant.IsSoftDeleted = true;
                    // reject the application
                    var rejectResult = await hostingTenantsCollectionService.Update(tenant, new List<string>() { nameof(tenant.IsSoftDeleted) });
                    return RedirectToAction(nameof(Index));
                }
                else
                {
                    return RedirectToAction(nameof(Index));
                }
            }
            catch
            {
                return RedirectToAction(nameof(Index));
            }
        }
    }
}
