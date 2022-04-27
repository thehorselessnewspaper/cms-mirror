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
using Microsoft.AspNetCore.Http;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace HorselessNewspaper.Web.Core.Authorization.Handler
{
    /// <summary>
    /// row levle secured authorization handler
    /// as per https://docs.microsoft.com/en-us/aspnet/core/security/authorization/resourcebased?view=aspnetcore-6.0
    /// </summary>
    public class RLSAuthorizationHandler : AuthorizationHandler<OperationAuthorizationRequirement, IContentRowLevelSecured>
    {
        ILogger<RLSAuthorizationHandler> _logger;
        IHttpContextAccessor _httpcontextAccessor;

        public RLSAuthorizationHandler(ILogger<RLSAuthorizationHandler> log, IHttpContextAccessor httpcontextAccessor)
        {
            _logger = log;
            this._httpcontextAccessor = httpcontextAccessor;
        }

        protected override async Task HandleRequirementAsync(AuthorizationHandlerContext context, OperationAuthorizationRequirement requirement, IContentRowLevelSecured resource)
        {
            // evaluate access control list against principal 
            var resourceName = resource.GetType().Name;

            // resolve the tenant
            try
            {
                _logger.LogInformation($"{this.GetType().Name} is confirming tenant context resolver operational");

                var currentPrincipal = this._httpcontextAccessor.HttpContext.Features.Get<Principal>();
                var isFunctionalTenantResolution = currentPrincipal == null ? false : true;
                if (isFunctionalTenantResolution)
                {
                    try
                    {
                        _logger.LogInformation($"{this.GetType().Name} has confirmed tenant context resolver operational for tenant resolution");

                        var principal = currentPrincipal;
                        _logger.LogInformation($"{this.GetType().Name} is evaluating upn={principal.UPN}");

                        foreach (var ace in principal.AccessControlEntries.Where(w => w.PermissionType == ACEPermissionType.DENY))
                        {
                            // evaluating deny permissions against resource

                        }


                        context.Succeed(requirement);
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
