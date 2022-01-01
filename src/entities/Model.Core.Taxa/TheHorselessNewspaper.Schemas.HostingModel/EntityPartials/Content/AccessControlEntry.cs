using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Claims;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.HostingModel.Context;

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

    }


    public static class AccessControlEntryExtension
    {
        /// <summary>
        /// support easy evaluation in linq queries
        /// 
        /// evaluates how a requested permission applies to 
        /// - an entity
        /// - a claims principal
        /// </summary>
        /// <param name="principal"></param>
        /// <param name="authorizationService"></param>
        /// <returns></returns>
        public static async Task<bool> IsPermitted<T>(this T entity, ACEPermission permission, IClaimsPrincipal principal, IAuthorizationService service) 
            where T : IRowLevelSecured
        {
            var isPermittedRead = entity.AccessControlList.First().Permission.HasFlag(ACEPermission.READ) && permission.HasFlag(ACEPermission.READ);
            var isPermittedWrite = entity.AccessControlList.First().Permission.HasFlag(ACEPermission.WRITE) && permission.HasFlag(ACEPermission.WRITE);


            var isPermittedUpdate = entity.AccessControlList.First().Permission.HasFlag(ACEPermission.UPDATE) && permission.HasFlag(ACEPermission.UPDATE);
            var isPermittedDelete = entity.AccessControlList.First().Permission.HasFlag(ACEPermission.DELETE) && permission.HasFlag(ACEPermission.DELETE);

            return await Task.FromResult(true);
        }
    }
}
