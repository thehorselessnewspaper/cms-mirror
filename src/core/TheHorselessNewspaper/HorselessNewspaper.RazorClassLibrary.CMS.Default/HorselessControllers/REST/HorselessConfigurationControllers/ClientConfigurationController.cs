using Finbuckle.MultiTenant;
using HorselessNewspaper.RazorClassLibrary.CMS.Default.Models;
using HorselessNewspaper.Web.Core.Model.Security;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.REST.HorselessConfigurationControllers
{
    /// <summary>
    /// serves auth and endpoint 
    /// data for rest clients
    /// 
    /// possibly obsolete as functionality replaced by
    /// RestClientConfigurationEndpoint middleware
    /// 
    /// benefit of the middleware is that it can respond to any url
    /// command channel is request headers/method
    /// POST headerkey=RestClientConfigurationEndpoint,headervalues=commands
    /// </summary>
    [Obsolete]
    [ApiController]
    [Route("api/[controller]")]
    public class ClientConfigurationController : ControllerBase
    {
        IConfiguration _configuration;
        ITenantInfo _tenant;
        ILogger<ClientConfigurationController> _logger;
        public ClientConfigurationController(ITenantInfo tenant, ILogger<ClientConfigurationController> logger, IConfiguration configuration)
        {
            this._configuration = configuration;
            this._logger = logger;
            this._tenant = tenant;
        }

        /// <summary>
        /// get endpoints and auth token
        /// valid for use by current user
        /// </summary>
        /// <returns></returns>
        [HttpGet("GetClientConfiguration", Name = "ClientConfiguration[controller]_[action]")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(RestClientConfiguration))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<RestClientConfiguration>> GetClientConfiguration()
        {
            this._logger.LogInformation($"{this.GetType().FullName} is serving client configuration");

            RestClientConfiguration configuration = new RestClientConfiguration();
            configuration.AccessToken = await HttpContext.GetTokenAsync("access_token");
            configuration.IsClaimsIdentity = this.User.Identities.Where(w => w.IsAuthenticated).Any();
            configuration.RESTEndpoint = _configuration["RestApiBaseUrl"];
            configuration.ODataEndpoint = _configuration["OdataApiBaseUrl"];

            return await Task.FromResult<RestClientConfiguration>(configuration);
        }

    }
}
