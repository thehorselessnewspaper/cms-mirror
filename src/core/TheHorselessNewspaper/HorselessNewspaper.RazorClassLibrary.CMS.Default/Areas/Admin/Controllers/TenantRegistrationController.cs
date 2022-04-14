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
using HorselessNewspaper.Web.Core.Extensions.ClaimExtensions;
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
        public ActionResult Registrants()
        {

            return View();
        }

        [Authorize]
        // GET: TenantRegistrationController/Details/5
        public ActionResult Details(string id)
        {
            return View();
        }

        [Authorize]
        [HttpGet("Approve/{tenantId}")]
        public async Task<ActionResult> Approve(string tenantId)
        {
            if (tenantId == null)
            {
                return View(nameof(Index));
            }


            var tenantQueryResult = await hostingTenantsCollectionService.Query(w => w.Id.ToString().Equals(tenantId),
                new List<string>() { nameof(Tenant.Owners), nameof(Tenant.TenantInfos), nameof(Tenant.Accounts) });
            var tenantResult = tenantQueryResult.ToList();
            Tenant currentTenant = tenantResult.First();
            var tenant = GetTenantRegistrationModel(currentTenant);
            tenant.Id = currentTenant.Id;
            ViewData["Tenant"] = tenant;
            return View();
        }


        [Authorize]
        // POST: TenantRegistrationController/Create
        [HttpPost("Approve/{tenantId}")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Approve(string tenantId, TenantRegistrationModel model)
        {
            try
            {
                var tenantQuery = await hostingTenantsCollectionService.Query(w => w.Id.ToString().Equals(tenantId));
                var tenant = tenantQuery.Where(w => w.Id == Guid.Parse(tenantId)).First();
                if (tenant != null)

                {
                    tenant.IsSoftDeleted = false;
                    tenant.IsPublished = true;
                    // reject the application
                    var rejectResult = await hostingTenantsCollectionService.Update(tenant, new List<string>() { nameof(tenant.IsSoftDeleted), nameof(tenant.IsPublished) });
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

                var scheme = HttpContext.Request.IsHttps ? "https://" : "http://";
                var baseUrl = scheme + HttpContext.Request.Host;
                baseUrl = baseUrl.TrimEnd('/');

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
                    Iss = User.Claims.Iss(),
                    Sub = User.Claims.Sub(),
                    UPN = User.Claims.Upn(),
                    Email = User.Claims.Email(),
                    Aud = User.Claims.Aud(),
                    PreferredUserName = User.Claims.PreferredUsername()

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
                    Name = model.displayName,
                    TenantBaseUrl = baseUrl
                };

                var newTenant = new HostingModel.Tenant()
                {
                    Id = Guid.NewGuid(),
                    CreatedAt = DateTime.UtcNow,
                    DisplayName = model.displayName,
                    IsPublished = false,
                    IsSoftDeleted = false,
                    ObjectId = Guid.NewGuid().ToString(),
                    Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                    BaseUrl = new Uri(baseUrl),
                    TenantIdentifier = model.tenantIdentifier,
                    AccessControlEntries = new List<HostingModel.AccessControlEntry>()
                    {
                        new AccessControlEntry()
                        {
                            Id = Guid.NewGuid(),
                            CreatedAt = DateTime.UtcNow,
                            DisplayName = model.displayName,
                            IsSoftDeleted = false,
                            ObjectId = Guid.NewGuid().ToString(),
                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                            Permission = ACEPermission.READ,
                            PermissionType = ACEPermissionType.PERMIT,
                            Scope = ACEPermissionScope.OWNER
                        },
                        new AccessControlEntry()
                        {
                            Id = Guid.NewGuid(),
                            CreatedAt = DateTime.UtcNow,
                            DisplayName = model.displayName,
                            IsSoftDeleted = false,
                            ObjectId = Guid.NewGuid().ToString(),
                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                            Permission = ACEPermission.CREATE,
                            PermissionType = ACEPermissionType.PERMIT,
                            Scope = ACEPermissionScope.OWNER
                        },
                        new AccessControlEntry()
                        {
                            Id = Guid.NewGuid(),
                            CreatedAt = DateTime.UtcNow,
                            DisplayName = model.displayName,
                            IsSoftDeleted = false,
                            ObjectId = Guid.NewGuid().ToString(),
                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                            Permission = ACEPermission.DELETE,
                            PermissionType = ACEPermissionType.PERMIT,
                            Scope = ACEPermissionScope.OWNER
                        },
                        new AccessControlEntry()
                        {
                            Id = Guid.NewGuid(),
                            CreatedAt = DateTime.UtcNow,
                            DisplayName = model.displayName,
                            IsSoftDeleted = false,
                            ObjectId = Guid.NewGuid().ToString(),
                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                            Permission = ACEPermission.EXECUTE,
                            PermissionType = ACEPermissionType.PERMIT,
                            Scope = ACEPermissionScope.OWNER
                        },
                        new AccessControlEntry()
                        {
                            Id = Guid.NewGuid(),
                            CreatedAt = DateTime.UtcNow,
                            DisplayName = model.displayName,
                            IsSoftDeleted = false,
                            ObjectId = Guid.NewGuid().ToString(),
                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                            Permission = ACEPermission.PUBLISH,
                            PermissionType = ACEPermissionType.PERMIT,
                            Scope = ACEPermissionScope.OWNER
                        },
                        new AccessControlEntry()
                        {
                            Id = Guid.NewGuid(),
                            CreatedAt = DateTime.UtcNow,
                            DisplayName = model.displayName,
                            IsSoftDeleted = false,
                            ObjectId = Guid.NewGuid().ToString(),
                            Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks),
                            Permission = ACEPermission.SEARCH,
                            PermissionType = ACEPermissionType.PERMIT,
                            Scope = ACEPermissionScope.OWNER
                        }
                    }
                };

                newTenantInfo.ParentTenantId = newTenant.Id;
                newTenant.Owners.Add(newOwner);
                newTenant.TenantInfos.Add(newTenantInfo);


                var insertedTenant = await this.hostingTenantsCollectionService.Create(newTenant);

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
            Tenant tenant;

            var tenantQuery = await hostingTenantsCollectionService.Query();
            tenant = tenantQuery.Where(w => w.Id == Guid.Parse(id)).First();
            TenantRegistrationModel tenantRegistrationModel = GetTenantRegistrationModel(tenant);

            if (tenant != null)

            {

                ViewData["Tenant"] = tenantRegistrationModel;

                return View();
            }
            else
            {
                ViewData["Tenant"] = new TenantRegistrationModel() { displayName = "tenant not found", tenantIdentifier = "invalid action" };
                return View();
            }

        }

        public static TenantRegistrationModel GetTenantRegistrationModel(Tenant tenant)
        {
            if (tenant == null || tenant.TenantInfos == null || tenant.TenantInfos.Count() == 0)
            {
                return new TenantRegistrationModel() { displayName = tenant.DisplayName, tenantIdentifier = "invalid registration" };

            }
            else
            {
                TenantRegistrationModel tenantRegistrationModel = new TenantRegistrationModel() { displayName = tenant.DisplayName, tenantIdentifier = tenant.TenantInfos.First().Identifier };
                return tenantRegistrationModel;
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
