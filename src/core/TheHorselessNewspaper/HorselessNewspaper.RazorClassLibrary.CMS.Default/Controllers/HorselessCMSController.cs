using HorselessNewspaper.Core.Interfaces.Query;
using HorselessNewspaper.Web.Core.ScopedServices.Content;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using NuGet.ContentModel;
using System.Linq.Expressions;
using System.Security.Claims;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.Controllers
{
    [Route("/")]
    public class HorselessCMSController : Controller
    {


        public HorselessCMSController()
        {

        }

        // [Authorize]
        public async Task<IActionResult> ViewTemplate()
        {
            var user = User.Identities.First();
            if (user != null && user.Claims != null && user.Claims.Count() > 0)
            {
                // TODO constrain against required claims
                return View();
            }
            else
            {
                // TODO convert this reference into a devops productoin environment configurable feture toggle
                return RedirectToAction(actionName: "signin", controllerName: "KeyCloakAuthentication"); 

            }
        }
    }
}
