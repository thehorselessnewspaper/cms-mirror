using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.Areas.Admin.Controllers
{

    public class TenantRegistrationController : Controller
    {
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
        public ActionResult Create(IFormCollection collection)
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
