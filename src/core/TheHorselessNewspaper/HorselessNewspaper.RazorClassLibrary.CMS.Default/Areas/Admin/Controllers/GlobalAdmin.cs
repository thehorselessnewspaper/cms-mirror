using Microsoft.AspNetCore.Mvc;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.Areas.Admin.Controllers
{
    public class GlobalAdmin : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
