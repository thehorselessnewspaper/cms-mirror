using Microsoft.AspNetCore.Authorization.Infrastructure;
using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.HostingModel.Context;
using Microsoft.Extensions.Logging;
using HorselessNewspaper.Web.Core.Interfaces.Security.Resolver;

namespace HorselessNewspaper.Web.Core.Authorization.Handler
{
    /// <summary>
    /// row levle secured authorization handler
    /// as per https://docs.microsoft.com/en-us/aspnet/core/security/authorization/resourcebased?view=aspnetcore-6.0
    /// </summary>
    public class RLSAuthorizationHandler : AuthorizationHandler<OperationAuthorizationRequirement, IContentRowLevelSecured>
    {
        ILogger<RLSAuthorizationHandler> _logger;
        ISecurityPrincipalResolver _securityPrincipalResolver;

        public RLSAuthorizationHandler(ILogger<RLSAuthorizationHandler> log, ISecurityPrincipalResolver securityPrincipalResolver)
        {
            _logger = log;
            this._securityPrincipalResolver = securityPrincipalResolver;
        }

        protected override async Task HandleRequirementAsync(AuthorizationHandlerContext context, OperationAuthorizationRequirement requirement, IContentRowLevelSecured resource)
        {
            // evaluate access control list against principal 
            var resourceName = resource.GetType().Name;

            // resolve the tenant
            try
            {
                _logger.LogInformation($"{this.GetType().Name} is confirming tenant context resolver operational");

                var isFunctionalTenantResolution = await _securityPrincipalResolver.EnsureCanResoleCurrentTenant();
                if (isFunctionalTenantResolution)
                {
                    try
                    {
                        _logger.LogInformation($"{this.GetType().Name} has confirmed tenant context resolver operational for tenant resolution");

                        var principal = await _securityPrincipalResolver.GetCurrentPrincipal();
                        _logger.LogInformation($"auth handler has resolved current principal {principal.DisplayName}");
                    }
                    catch(Exception e)
                    {
                        _logger.LogError($"auth handler failed to resolve current principal {e.Message}");
                    }
                }
            }
            catch(Exception e)
            {
                _logger.LogError($"exception authorizing user {e.Message}");
                context.Fail(new AuthorizationFailureReason(this, $"auth failed due to {e.Message}") );
                return;
            }


            context.Succeed(requirement);
            return;
        }
    }
}
