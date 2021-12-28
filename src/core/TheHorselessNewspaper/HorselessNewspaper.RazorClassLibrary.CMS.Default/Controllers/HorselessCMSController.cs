using HorselessNewspaper.Core.Interfaces.Query;
using HorselessNewspaper.Web.Core.ScopedServices.Content;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using NuGet.ContentModel;
using System.Linq.Expressions;
using System.Security.Claims;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.Controllers
{
    public static class TestExtensions
    {
        public static async Task<AuthenticationScheme[]> GetExternalProvidersAsync(this HttpContext context)
        {
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }

            var schemes = context.RequestServices.GetRequiredService<IAuthenticationSchemeProvider>();

            return (from scheme in await schemes.GetAllSchemesAsync()
                    where !string.IsNullOrEmpty(scheme.DisplayName)
                    select scheme).ToArray();
        }
    }


    [Route("/")]
    public class HorselessCMSController : Controller
    {



        public HorselessCMSController()
        {

        }

        [HttpGet("SignIn")]
        public async Task<IActionResult> SignIn()
        {

            return View("Signin", await HttpContext.GetExternalProvidersAsync());

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
                // return await Task.FromResult(View("ViewTemplate",));
                // TODO convert this reference into a devops productoin environment configurable feture toggle
                return await Task.FromResult( RedirectToAction( actionName: "SignIn")); 
                // return RedirectToRoute(new { action = "signin", controller = "KeyCloakAuthentication", area = "Authentication" });
            }
        }
    }
}
