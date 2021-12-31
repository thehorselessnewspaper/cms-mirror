using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Claims;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{

    [Flags]
    public enum ACEPermissionScope
    {
        OWNER, ROLE, GROUP, WORKFLOW, ANONYMOUS, EVERYONE
    }


    [Flags]
    public enum ACEPermission
    {
        READ, WRITE, UPDATE, DELETE, SHARE, EXECUTE
    }

    public enum ACEPermissionType
    {
        PERMIT, DENY
    }

    /// <summary>
    /// evaluated as part of AccessControlList
    /// to permit deny principals operations
    /// </summary>
    [Owned]
    public partial class AccessControlEntry
    {
        public ACEPermissionScope Scope { get; set; }

        public ACEPermission Permission { get; set; }

        public ACEPermissionType Type { get; set; }

        /// <summary>
        /// support easy evaluation in linq queries
        /// </summary>
        /// <param name="principal"></param>
        /// <param name="authorizationService"></param>
        /// <returns></returns>
        public async Task<bool> IsPermitted<T>(IClaimsPrincipal principal, IAuthorizationService service, Func<IAuthorizationService, IClaimsPrincipal, Task<bool>> evaluate) where T : IClaimsPrincipal
        {
            
            return await evaluate(service, principal);
        }
    }
}
