using Finbuckle.MultiTenant;
using HorselessNewspaper.Web.Core.Interfaces.Security.Resolver;
using HorselessNewspaper.Web.Core.Middleware.HttpContextFeatures.HorselessTenantPrincipal;
using HorselessNewspaper.Web.Core.Model.Query;
using HorselessNewspaper.Web.Core.Model.Security;
using HorselessNewspaper.Web.Core.Services.Model.REST.Security;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.Middleware.ClientConfigurationMiddleware
{
    /// <summary>
    /// resolves current RestClientContext for the current url
    /// short circuits requests with following properties
    /// - HTTP Method = Post
    /// - Http Header RestClientConfigurationEndpoint=Get
    /// 
    /// the method and header parameters are commands to the middleware
    /// to return auth and endpoint service data to rest clients
    /// </summary>
    public class RestClientConfigurationEndpoint
    {
        private readonly RequestDelegate _next;
        ILogger<RestClientConfigurationEndpoint> _logger;
        public RestClientConfigurationEndpoint(RequestDelegate next, ILogger<RestClientConfigurationEndpoint> logger)
        {
            _next = next;
            this._logger = logger;
        }

        /// <summary>
        /// evaluate client configuration parameters
        /// by depending on tenant resolution of the http request
        /// 
        /// to do - differentiate between 
        /// multitenanancy supplied parameters 
        /// vs static appsettings.json settings
        /// </summary>
        /// <param name="context"></param>
        /// <param name="serviceProvider"></param>
        /// <param name="configProvider"></param>
        /// <param name="tenant"></param>
        /// <returns></returns>
        public async Task InvokeAsync(HttpContext context, IServiceProvider serviceProvider, IConfiguration configProvider, ITenantInfo tenant)
        {
            // is the class name present in the headers
            var hasMiddlewareCommandHeaders = context.Request.Headers.
                                                Where(w => w.Key.ToLower()
                                                .Equals(this.GetType().Name.ToLower())).Any();
            // todo 
            // parse the values for command options
            if (hasMiddlewareCommandHeaders && context.Request.Method == HttpMethod.Post.ToString())
            {
                try
                {
                    // client context request command was sent to the middleware
                    _logger.LogInformation($"{this.GetType().FullName} has been sent a client configuration request");
                    var restClientConfiguration = await GetConfiguration(configProvider);

                    var accessToken = await context.GetTokenAsync("access_token");
                    var authHeader = context.Request.Headers["Authorization"];

                    if (accessToken != null && accessToken != String.Empty)
                    {
                        // user has a claims identity
                        restClientConfiguration.AccessToken = accessToken;
                    }
                    else if(authHeader != Microsoft.Extensions.Primitives.StringValues.Empty)
                    {
                        // user has auth header token but no claims identity
                        // this echos the header the user sent
                        restClientConfiguration.AccessToken = authHeader;
                    }

                    restClientConfiguration.IsClaimsIdentity = context.User.Identities.Where(w => w.IsAuthenticated).Any();
                    restClientConfiguration.TenantIdentifier = tenant.Identifier;

                    restClientConfiguration.RESTEndpoint = restClientConfiguration.RESTEndpoint + $"/{tenant.Identifier}";
                    restClientConfiguration.ODataEndpoint = restClientConfiguration.ODataEndpoint;

                    var jsonResult = JsonConvert.SerializeObject(restClientConfiguration);
                    await context.Response.WriteAsync(jsonResult);
                }
                catch (Exception e)
                {
                    // fail silent
                    _logger.LogError($"{this.GetType().FullName} threw an excetion {e.Message}");
                    await _next(context);
                }
            }
            else
            {
                try
                {
                    await _next(context);
                }
                catch(Exception e)
                {
                    _logger.LogError($"{this.GetType().FullName} middleware pipeline exception: {e.Message}");
                }
            }
        }

        public async Task<RestClientConfiguration> GetConfiguration(IConfiguration configuration)
        {
            RestClientConfiguration restClientConfiguration = new RestClientConfiguration();

            restClientConfiguration.RESTEndpoint = configuration["RestApiBaseUrl"];
            restClientConfiguration.ODataEndpoint = configuration["OdataApiBaseUrl"];

            return await Task.FromResult<RestClientConfiguration>(restClientConfiguration);
        }
    }
}
