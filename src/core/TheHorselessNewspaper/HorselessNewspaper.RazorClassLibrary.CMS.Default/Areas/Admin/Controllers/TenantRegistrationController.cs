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

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.Areas.Admin.Controllers
{
    [Authorize]
    [Area("Admin")]
    public class TenantRegistrationController : Controller
    {
        public IContentCollectionService<IQueryableContentModelOperator<ContentModel.Tenant>, ContentModel.Tenant> tenantCollectionService { get; set; }
        public ITenantInfo CurrentTenant { get; set; }

        public TenantRegistrationController(
            IContentCollectionService<IQueryableContentModelOperator<ContentModel.Tenant>,
            ContentModel.Tenant> tenantCollectionService, ITenantInfo tenantInfo)
        {
            this.tenantCollectionService = tenantCollectionService;
            this.CurrentTenant = tenantInfo;
        }

        // GET: TenantRegistrationController
        public ActionResult Index()
        {
            return View();
        }

        [Authorize]
        // GET: TenantRegistrationController/Details/5
        public ActionResult Details(int id)
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
        public ActionResult Create(TenantRegistrationModel model)
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
        // GET: TenantRegistrationController/Edit/5
        public ActionResult Edit(int id)
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
