using HorselessNewspaper.Web.Core.Auth.Keycloak.Model;
using HorselessNewspaper.Web.Core.Services.Query.Authorization.Contexts;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System.Web;

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



        public static async Task<bool> IsProviderSupportedAsync(this HttpContext context, string provider)
        {
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }

            return (from scheme in await context.GetExternalProvidersAsync()
                    where string.Equals(scheme.Name, provider, StringComparison.OrdinalIgnoreCase)
                    select scheme).Any();
        }
    }


    [Route("/")]
    [ApiExplorerSettings(IgnoreApi = true)]
    public class HorselessCMSController : Controller
    {
        private ITenantInfo CurrentTenant { get; set; }

        private readonly IHorselessTenantContext tenantContext;
        private readonly ILogger<HorselessCMSController> logger;

        private IKeycloakAuthOptions AuthOptions { get; set; }

        public HorselessCMSController(IAuthenticationService authService, IKeycloakAuthOptions keycloakAuthOptions, ITenantInfo tenant, IHorselessTenantContext tenantContext, ILogger<HorselessCMSController> logger)
        {

            var svcMetaData = authService.GetType().FullName;

            this.AuthOptions = keycloakAuthOptions;
            this.CurrentTenant = tenant;
            this.tenantContext = tenantContext;
            this.logger = logger;

        }

        [HttpGet("~/SignIn")]
        public async Task<IActionResult> SignIn()
        {

            return View("Signin", await HttpContext.GetExternalProvidersAsync());

        }

        [HttpPost("~/SignIn")]
        public async Task<IActionResult> SignIn([FromForm] string provider, [FromForm] string returnUrl)
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
            try
            {
                logger.LogInformation($"handling signin request return url = {returnUrl}, provider {provider}");
                //var uriBuilder = new UriBuilder(returnUrl)
                //{
                //    Scheme = Uri.UriSchemeHttps
                //};
                //HttpContext.Request.IsHttps = true;

                //var proxyNormalizedReturnUrl = uriBuilder.Uri.ToString();
                var challengeResult = Challenge(new AuthenticationProperties { RedirectUri = returnUrl }, provider);
  
                return challengeResult;
            }
            catch(InvalidOperationException iEx)
            {
                logger.LogWarning($"problem signinging in {iEx.Message}");
                return Redirect(returnUrl);
            }
            catch (NotImplementedException iEx)
            {
                logger.LogWarning($"problem signinging in {iEx.Message}");
                return Redirect(returnUrl);
            }
            catch (Exception ex)
            {
                logger.LogWarning($"problem signinging in {ex.Message}");
                return Redirect(returnUrl);
            }
        }

        public async Task<IActionResult> ViewTemplate()
        {
            var token = await HttpContext.GetTokenAsync("access_token");
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
                // return await Task.FromResult(RedirectToAction(actionName: "SignIn"));
                // return RedirectToRoute(new { action = "signin", controller = "KeyCloakAuthentication", area = "Authentication" });
            }

            return View();
        }

        [HttpPost("Signout")]
        public async Task<IActionResult> SignOutCurrentUser()
        {
            // similar to https://docs.identityserver.io/en/release/quickstarts/3_interactive_login.html
            // similar to https://github.com/tuxiem/AspNetCore-keycloak/blob/master/KeycloakAuth/Controllers/HomeController.cs
            // similar to https://issues.redhat.com/browse/KEYCLOAK-3399?page=com.atlassian.jira.plugin.system.issuetabpanels%3Achangehistory-tabpanel
            var redirectUri = await SignoutGetRedirectUrl();

            // return Redirect(redirectUri.AbsolutePath);
            return SignOut("Cookies", "OpenIdConnect");
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
                await HttpContext.SignOutAsync();
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
