using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using HorselessNewspaper.RazorClassLibrary.Keycloak.Default.Extensions;
using System.Security.Claims;

namespace HorselessNewspaper.RazorClassLibrary.Keycloak.Default.Controllers
{
    /// <summary>
    /// keycloak integration authentication controller
    /// as per https://github.com/aspnet-contrib/AspNet.Security.OAuth.Providers/blob/dev/samples/Mvc.Client/Controllers/AuthenticationController.cs
    /// </summary>
    public class KeycloakAuthenticationController : Controller
    {
        [HttpGet("~/signin")]
        public async Task<IActionResult> SignIn()
        {

            return View("SignIn", await HttpContext.GetExternalProvidersAsync());

        }

        [HttpPost("~/signin")]
        public async Task<IActionResult> SignIn([FromForm] string provider)
        {
            // Note: the "provider" parameter corresponds to the external
            // authentication provider choosen by the user agent.
            if (string.IsNullOrWhiteSpace(provider))
            {
                return BadRequest();
            }

            if (!await HttpContext.IsProviderSupportedAsync(provider))
            {
                return BadRequest();
            }

            // Instruct the middleware corresponding to the requested external identity
            // provider to redirect the user agent to its own authorization endpoint.
            // Note: the authenticationScheme parameter must match the value configured in Startup.cs
            return Challenge(new AuthenticationProperties { RedirectUri = "/" }, provider);
        }

        [HttpGet("~/signout")]
        [HttpPost("~/signout")]
        public  async  Task<IActionResult> SignOutCurrentUser()
        {
            // similar to https://docs.identityserver.io/en/release/quickstarts/3_interactive_login.html
            // similar to https://github.com/tuxiem/AspNetCore-keycloak/blob/master/KeycloakAuth/Controllers/HomeController.cs
            await HttpContext.SignOutAsync("Cookies");
            await HttpContext.SignOutAsync("OpenIdConnect");
            // Instruct the cookies middleware to delete the local cookie created
            // when the user agent is redirected from the external identity provider
            // after a successful authentication flow (e.g Google or Facebook).
            //return SignOut(new AuthenticationProperties { RedirectUri = "/" },
            //    CookieAuthenticationDefaults.AuthenticationScheme);
            return Redirect("/");
        }
    }
}
