using Microsoft.AspNetCore.Authorization.Infrastructure;
using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.HostingModel.Context;
using Microsoft.Extensions.Logging;

namespace HorselessNewspaper.Web.Core.Authorization.Handler
{
    /// <summary>
    /// row levle secured authorization handler
    /// as per https://docs.microsoft.com/en-us/aspnet/core/security/authorization/resourcebased?view=aspnetcore-6.0
    /// </summary>
    public class RLSAuthorizationHandler : AuthorizationHandler<OperationAuthorizationRequirement, IContentRowLevelSecured>
    {
        ILogger<RLSAuthorizationHandler> _logger;
        public RLSAuthorizationHandler(ILogger<RLSAuthorizationHandler> log)
        {
            _logger = log;
        }

        protected override async Task HandleRequirementAsync(AuthorizationHandlerContext context, OperationAuthorizationRequirement requirement, IContentRowLevelSecured resource)
        {
            // evaluate access control list against principal 
            var resourceName = resource.GetType().Name;
            return;
        }
    }
}
