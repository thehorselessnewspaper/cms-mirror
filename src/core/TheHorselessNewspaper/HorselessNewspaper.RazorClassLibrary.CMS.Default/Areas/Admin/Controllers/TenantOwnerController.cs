using Microsoft.AspNetCore.Mvc;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class TenantOwnerController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Register()
        {
            return View();
        }
    }
}
