using HorselessNewspaper.Core.Web.Prototype.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using contentmodel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

using hostingmodel = TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;

namespace HorselessNewspaper.Core.Web.Prototype.Controllers
{


    public class HomeController : Controller
    {

        //convenience references for purpose of scaffolding
        public contentmodel.Tenant ContentModelTenant { get; set; }
        public hostingmodel.Tenant HostingModelTenant { get; set; }
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}