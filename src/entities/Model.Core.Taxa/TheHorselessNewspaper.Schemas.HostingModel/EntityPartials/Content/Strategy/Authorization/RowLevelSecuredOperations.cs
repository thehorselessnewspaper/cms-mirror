using Microsoft.AspNetCore.Authorization.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace TheHorselessNewspaper.Schemas.HostingModel.EntityPartials.Content.Strategy.Authorization
{
    /// <summary>
    /// support asp.net core resource based authorization 
    /// as per 
    ///     - https://docs.microsoft.com/en-us/aspnet/core/security/authorization/resourcebased?view=aspnetcore-6.0
    /// </summary>
    public static class RowLevelSecuredOperations
    {
        public static OperationAuthorizationRequirement DELETE =
            new OperationAuthorizationRequirement { Name = nameof(ACEPermission.DELETE) };

        public static OperationAuthorizationRequirement EXECUTE =
            new OperationAuthorizationRequirement { Name = nameof(ACEPermission.EXECUTE) };

        public static OperationAuthorizationRequirement READ =
            new OperationAuthorizationRequirement { Name = nameof(ACEPermission.READ) };

        public static OperationAuthorizationRequirement SHARE =
           new OperationAuthorizationRequirement { Name = nameof(ACEPermission.SHARE) };

        public static OperationAuthorizationRequirement UPDATE =
            new OperationAuthorizationRequirement { Name = nameof(ACEPermission.UPDATE) };

        public static OperationAuthorizationRequirement WRITE =
            new OperationAuthorizationRequirement { Name = nameof(ACEPermission.WRITE) };
    }
}
