using HorselessNewspaper.Core.Interfaces.Query;
using HorselessNewspaper.Web.Core.ScopedServices.Content;
using Microsoft.AspNetCore.Mvc;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.Controllers
{
    [Route("/")]
    public class HorselessCMSController : Controller
    {

        private HorselessCMSController()
        {
            int i = 0;
        }

        public HorselessCMSController(HorselessEntityFrameworkQueryProvider<ContentCollection> contentCollections)
        {
            this.ContentCollections = contentCollections;
        }

        public IHorselessQueryResultProvider<ContentCollection> ContentCollections { get; }

        public IActionResult ViewTemplate()
        {
            return View();
        }
    }
}
