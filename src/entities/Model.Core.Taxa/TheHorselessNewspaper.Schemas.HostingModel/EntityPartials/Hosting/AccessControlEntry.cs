using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Claims;
using TheHorselessNewspaper.Schemas.HostingModel.Context;

namespace TheHorselessNewspaper.Schemas.HostingModel.HostingEntities
{

    [Flags]
    public enum ACEPermissionScope
    {
        OWNER, ROLE, GROUP, WORKFLOW, ANONYMOUS, EVERYONE
    }


    [Flags]
    public enum ACEPermission
    {
        READ, CREATE, UPDATE, DELETE, SHARE, EXECUTE, SEARCH, PUBLISH, UNPUBLISH
    }

    public enum ACEPermissionType
    {
        PERMIT, DENY, SUBMIT_REQUEST, APPROVE_REQUEST, DENY_REQUEST
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

        public ACEPermissionType PermissionType { get; set; }

        public ICollection<Principal> SubjectPrincipals { get; set; }  = new  HashSet<Principal>();

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
        public static async Task<bool> IsPermitted<T>(this T entity, ACEPermission permission, ClaimsPrincipal principal, IAuthorizationService service) 
            where T : IContentRowLevelSecured
        {
            var isPermittedRead = entity.AccessControlList.First().Permission.HasFlag(ACEPermission.READ) && permission.HasFlag(ACEPermission.READ);
            var isPermittedWrite = entity.AccessControlList.First().Permission.HasFlag(ACEPermission.CREATE) && permission.HasFlag(ACEPermission.CREATE);


            var isPermittedUpdate = entity.AccessControlList.First().Permission.HasFlag(ACEPermission.UPDATE) && permission.HasFlag(ACEPermission.UPDATE);
            var isPermittedDelete = entity.AccessControlList.First().Permission.HasFlag(ACEPermission.DELETE) && permission.HasFlag(ACEPermission.DELETE);

            return await Task.FromResult(true);
        }
    }
}
