using Microsoft.AspNetCore.Authorization.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.Authorization.Model
{
    /// <summary>
    /// as per https://docs.microsoft.com/en-us/aspnet/core/security/authorization/resourcebased?view=aspnetcore-6.0
    /// specifies operations that can be performed against resources
    /// </summary>
    public static class AccessControlledOperations
    {
        public static OperationAuthorizationRequirement Create =
            new OperationAuthorizationRequirement { Name = nameof(Create) };
        public static OperationAuthorizationRequirement Read =
            new OperationAuthorizationRequirement { Name = nameof(Read) };
        public static OperationAuthorizationRequirement Update =
            new OperationAuthorizationRequirement { Name = nameof(Update) };
        public static OperationAuthorizationRequirement Delete =
            new OperationAuthorizationRequirement { Name = nameof(Delete) };
        public static OperationAuthorizationRequirement Share =
            new OperationAuthorizationRequirement { Name = nameof(Share) };
        public static OperationAuthorizationRequirement Execute =
            new OperationAuthorizationRequirement { Name = nameof(Execute) };
        public static OperationAuthorizationRequirement Search =
            new OperationAuthorizationRequirement { Name = nameof(Search) };
        public static OperationAuthorizationRequirement Unpublish =
            new OperationAuthorizationRequirement { Name = nameof(Unpublish) };
        public static OperationAuthorizationRequirement Approve =
            new OperationAuthorizationRequirement { Name = nameof(Approve) };
        public static OperationAuthorizationRequirement Publish =
            new OperationAuthorizationRequirement { Name = nameof(Publish) };
    }
}
