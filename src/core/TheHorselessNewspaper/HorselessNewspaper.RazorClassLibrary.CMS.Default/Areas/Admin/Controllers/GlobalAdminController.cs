using Microsoft.AspNetCore.Mvc;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class GlobalAdminController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
