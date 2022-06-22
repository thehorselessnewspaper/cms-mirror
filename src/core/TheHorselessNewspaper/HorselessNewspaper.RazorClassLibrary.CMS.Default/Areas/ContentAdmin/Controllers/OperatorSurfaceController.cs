using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.MultiTenant;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.Areas.ContentAdmin.Controllers
{
    [Authorize]
    [Area("ContentAdmin")]
    public class OperatorSurfaceController : Controller
    {

        private readonly HorselessTenantInfo? CurrentTenant;

        public OperatorSurfaceController(ITenantInfo tenant) : base()
        {
            this.CurrentTenant = tenant as HorselessTenantInfo;
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}
