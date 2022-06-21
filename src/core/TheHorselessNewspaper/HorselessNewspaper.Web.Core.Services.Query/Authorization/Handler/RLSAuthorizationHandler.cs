using Microsoft.AspNetCore.Authorization.Infrastructure;
using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Http;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using HorselessNewspaper.Web.Core.Services.Query.Controller.Content;
using HorselessNewspaper.Web.Core.Authorization.Model;
using HorselessNewspaper.Web.Core.Services.Model.Extensions.Claim;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.HostingModel.Context;

namespace HorselessNewspaper.Web.Core.Services.Query.Authorization.Handler
{
    /// <summary>
    /// row levle secured authorization handler
    /// as per https://docs.microsoft.com/en-us/aspnet/core/security/authorization/resourcebased?view=aspnetcore-6.0
    /// </summary>
    public class RLSAuthorizationHandler : AuthorizationHandler<OperationAuthorizationRequirement, IContentRowLevelSecured>
    {
        ILogger<RLSAuthorizationHandler> _logger;
        IHttpContextAccessor _httpcontextAccessor;
        IQueryableContentModelOperator<Tenant> _tenantOperator;

        public RLSAuthorizationHandler(ILogger<RLSAuthorizationHandler> log, IHttpContextAccessor httpcontextAccessor, IQueryableContentModelOperator<Tenant> tenantOperator)
        {
            _logger = log;
            _httpcontextAccessor = httpcontextAccessor;
            _tenantOperator = tenantOperator;
        }

        protected override async Task HandleRequirementAsync(AuthorizationHandlerContext context, OperationAuthorizationRequirement requirement, IContentRowLevelSecured resource)
        {

            // resolve the tenant
            try
            {
                try
                {
                    // evaluate access control list against principal \
                    var principal = _httpcontextAccessor.HttpContext.Features.Get<Principal>();
                    if(principal == null)
                    {
                        _logger.LogCritical($"{this.GetType().FullName} Principal Feature is unavailable");
                    }
                    else
                    {
                        var upn = principal.UPN;
                        var resourceName = resource.GetType().Name;

                    }
 
                }
                catch (Exception e)
                {
                    _logger.LogWarning($"{GetType().FullName} failed probe for user UPN");
                }

                _logger.LogTrace($"{GetType().Name} is confirming tenant context resolver operational");

                var currentPrincipal = _httpcontextAccessor.HttpContext.Features.Get<Principal>();
                var currentTenant = _httpcontextAccessor.HttpContext.Features.Get<Tenant>();
                var isFunctionalTenantResolution = currentPrincipal == null ? false : true;
                if (isFunctionalTenantResolution)
                {
                    try
                    {
                        var tenantQuery = await _tenantOperator.Read(w => w.Id == currentTenant.Id, new List<string>()
                        { nameof(Tenant.AccessControlEntries)});
                        var tenantAccessControlEntries = tenantQuery.SelectMany(s => s.AccessControlEntries).ToList();

                        _logger.LogTrace($"{GetType().Name} has confirmed tenant context resolver operational for tenant resolution");

                        var principal = currentPrincipal;
                        _logger.LogInformation($"{GetType().Name} is evaluating upn={principal.UPN}");

                        foreach (var ace in principal.AccessControlEntries.Where(w => w.PermissionType == ACEPermissionType.PERMIT && w.Permission == ACEPermission.CREATE))
                        {
                            // evaluating deny permissions against resource
                            context.Succeed(requirement);
                        }

                        // todo - make this heuristic more robust 
                        if (!_httpcontextAccessor.HttpContext.HasDevopsAdminClaims() && requirement == AccessControlledOperations.Execute)
                        {
                            context.Fail();
                            return;
                        }

                        context.Succeed(requirement);
                    }
                    catch (Exception e)
                    {
                        _logger.LogError($"auth handler failed to resolve current principal {e.Message}");
                    }
                }
            }
            catch (Exception e)
            {
                _logger.LogError($"exception authorizing user {e.Message}");
                context.Fail(new AuthorizationFailureReason(this, $"auth failed due to {e.Message}"));
                return;
            }


            context.Succeed(requirement);
            return;
        }
    }
}
