using Microsoft.AspNetCore.Mvc;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.Controllers
{
    [Route("/")]
    public class HorselessCMSController : Controller
    {
        public IActionResult ViewTemplate()
        {
            return View();
        }
    }
}
