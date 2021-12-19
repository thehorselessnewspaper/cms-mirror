using HorselessNewspaper.Core.Interfaces.Query;
using HorselessNewspaper.Web.Core.ScopedServices.Content;
using Microsoft.AspNetCore.Mvc;
using System.Linq.Expressions;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.Controllers
{
    [Route("/")]
    public class HorselessCMSController : Controller
    {


        public HorselessCMSController()
        {

        }


        public IActionResult ViewTemplate()
        {
            return View();
        }
    }
}
