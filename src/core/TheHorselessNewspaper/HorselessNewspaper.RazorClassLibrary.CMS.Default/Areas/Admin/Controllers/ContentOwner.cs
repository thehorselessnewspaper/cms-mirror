using Finbuckle.MultiTenant;
using Microsoft.AspNetCore.Mvc;
using TheHorselessNewspaper.HostingModel.MultiTenant;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.Areas.Admin.Controllers
{
    public class ContentOwner : Controller
    {
        private HorselessTenantInfo CurrentTenant { get; set; } = new HorselessTenantInfo();
        public ContentOwner(ITenantInfo tenant) : base()
        {
            this.CurrentTenant = tenant as HorselessTenantInfo;
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}
