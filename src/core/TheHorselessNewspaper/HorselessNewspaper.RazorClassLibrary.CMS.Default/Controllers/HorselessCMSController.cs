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
                ClaimsPrincipal currentUser = this.User;
                //Get username, for keycloak you need to regex this to get the clean username
                var userNameClaim = currentUser.FindFirst(ClaimTypes.NameIdentifier);
                if(userNameClaim != null)
                {
                    var userName = userNameClaim.Value;
                    int i = 0;
                }

                //logs an error so it's easier to find - thanks debug.


                //Debug this line of code if you want to validate the content jwt.io
                string accessToken = await HttpContext.GetTokenAsync("access_token");
                string idToken = await HttpContext.GetTokenAsync("id_token");
                return View();
            }
            else
            {
                return RedirectToAction(actionName: "signin", controllerName: "KeyCloakAuthentication"); 

            }
        }
    }
}
