using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using HorselessNewspaper.RazorClassLibrary.Keycloak.Default.Extensions;
using HorselessNewspaper.Web.Core.Auth.Keycloak.Model;

using System.Security.Claims;
using System.Web;

namespace HorselessNewspaper.RazorClassLibrary.Keycloak.Default.Controllers
{
     
    /// <summary>
    /// keycloak integration authentication controller
    /// as per https://github.com/aspnet-contrib/AspNet.Security.OAuth.Providers/blob/dev/samples/Mvc.Client/Controllers/AuthenticationController.cs
    /// </summary>
    public class KeycloakAuthenticationController : Controller
    {
        private IKeycloakAuthOptions AuthOptions { get; set; }
        public KeycloakAuthenticationController(IKeycloakAuthOptions keycloakAuthOptions)
        {
            this.AuthOptions = keycloakAuthOptions;
        }

        [HttpGet("Keycloak/SignIn")]
        public async Task<IActionResult> SignIn()
        {

            return View("Signin", await HttpContext.GetExternalProvidersAsync());

        }

        [HttpPost("Keycloak/SignIn")]
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

            // TODO defend against unavailable IDP  here - probe the challenge endpoint
            // IOException: IDX20804: Unable to retrieve document from: 'System.String'.
            var challengeResult = Challenge(new AuthenticationProperties { RedirectUri = "/" }, provider);
            return challengeResult;
        }

        [HttpPost("Keycloak/Signout")]
        public async Task<IActionResult> SignOutCurrentUser()
        {
            // similar to https://docs.identityserver.io/en/release/quickstarts/3_interactive_login.html
            // similar to https://github.com/tuxiem/AspNetCore-keycloak/blob/master/KeycloakAuth/Controllers/HomeController.cs
            // similar to https://issues.redhat.com/browse/KEYCLOAK-3399?page=com.atlassian.jira.plugin.system.issuetabpanels%3Achangehistory-tabpanel
            var redirectUri = await SignoutGetRedirectUrl();

            return Redirect(redirectUri.AbsolutePath);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        private async Task<Uri> SignoutGetRedirectUrl()
        {

            var redirectUri = AuthOptions.PostLogoutRedirectUri.AbsolutePath;
            try
            {
                string accessToken = await this.HttpContext.GetTokenAsync("access_token");
                string idToken = await this.HttpContext.GetTokenAsync("id_token");


                await HttpContext.SignOutAsync("Cookies");
                await HttpContext.SignOutAsync("OpenIdConnect");
                var urlEncodedRedirect = HttpUtility.UrlEncode(AuthOptions.PostLogoutRedirectUri.AbsoluteUri);
                redirectUri = GetRedirectFormatString(idToken, urlEncodedRedirect);
            }
            catch (Exception ex)
            {
                // do not redirect to keycloak integration logout uri 
                // because required token hints are not present
            }

            return new Uri(redirectUri);
        }

        private string GetRedirectFormatString(string idToken, string urlEncodedRedirect)
        {
            // todo SORT OUT if necessary to call keycloak logout url or just invalidate on asp.net core side
            // return $"{AuthOptions.OIDCLogoutUri.AbsoluteUri}?id_token_hint={idToken}&&redirect_uri={urlEncodedRedirect}";
            return $"{AuthOptions.PostLogoutRedirectUri}";

        }
    }
}
