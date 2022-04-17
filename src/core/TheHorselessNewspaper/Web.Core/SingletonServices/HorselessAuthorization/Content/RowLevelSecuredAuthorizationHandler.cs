using Microsoft.AspNetCore.Authorization.Infrastructure;
using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using TheHorselessNewspaper.Schemas.HostingModel.Context;

namespace HorselessNewspaper.Web.Core.SingletonServices.HorselessAuthorization.Content
{
    #region authentication requirements
    public class IsMustBeAuthenticatedRequirement : IAuthorizationRequirement { }
    #endregion

    #region role requirements
    public class IsOwnerRequirement : IAuthorizationRequirement { }
    #endregion

    #region row level secured requirements
    public class IsNotDeniedRequirement : IAuthorizationRequirement { }

    public class CanDeleteRequirement : IAuthorizationRequirement { }

    public class CanExecuteRequirement : IAuthorizationRequirement { }

    public class CanReadRequirement : IAuthorizationRequirement { }

    public class CanShareRequirement : IAuthorizationRequirement { }

    public class CanUpdateRequirement : IAuthorizationRequirement { }

    public class CanWriteRequirement : IAuthorizationRequirement { }
    #endregion
    /// <summary>
    /// integrate with asp.net core authorization 
    /// as per
    ///     - https://docs.microsoft.com/en-us/aspnet/core/security/authorization/resourcebased?view=aspnetcore-6.0
    /// </summary>
    //public class DeleteOperationAuthorizationHandler : AuthorizationHandler<CanDeleteRequirement, IContentRowLevelSecured>
    //{
    //    protected override async Task HandleRequirementAsync(AuthorizationHandlerContext context, CanDeleteRequirement requirement, IContentRowLevelSecured resource)
    //    {

    //        // apply delete permission evaluation strategies

                
    //        return;
    //    }
    //}
}
