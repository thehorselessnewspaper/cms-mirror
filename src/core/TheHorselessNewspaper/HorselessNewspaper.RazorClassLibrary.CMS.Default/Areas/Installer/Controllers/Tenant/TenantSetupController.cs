using Microsoft.AspNetCore.Mvc;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.Areas.Installer.Controllers.Tenant
{
    [Area("Installer")]
    public class TenantSetupController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
