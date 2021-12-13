using Microsoft.AspNetCore.Mvc;

namespace TheHorselessNewspaper.AdminPortal.Web.Areas.Installation.Controllers
{
    [Area("Installation")]
    [Route("[area]/[controller]/[action]")]
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
