using Finbuckle.MultiTenant;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Claims;
using TheHorselessNewspaper.HostingModel.Context;
using TheHorselessNewspaper.Schemas.HostingModel.Context;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    /// <summary>
    /// resist the urge to use [Flags]
    /// due to ACE 1->1 SCOPE
    ///            1->1 Collection<Principal>
    /// </summary>
    /// [Flags]
    public enum ACEPermissionScope
    {
        SITE, TENANT, OWNER, ROLE, GROUP, WORKFLOW, ANONYMOUS, EVERYONE
    }


    [Flags]
    public enum ACEPermission
    {
        READ, CREATE, UPDATE, DELETE, SHARE, EXECUTE, SEARCH, PUBLISH, UNPUBLISH, APPROVE
    }

    public enum ACEPermissionType
    {
        PERMIT, DENY
    }

    /// <summary>
    /// evaluated as part of AccessControlList
    /// to permit deny principals operations
    /// </summary>

    //[MultiTenant]
    //[Table("AccessControlEntries")]
    //public partial class AccessControlEntry
    //{

    //    public ACEPermissionScope Scope { get; set; }

    //    public ACEPermission Permission { get; set; }

    //    public ACEPermissionType PermissionType { get; set; }

    //}

    [MultiTenant]
    public partial class AccessControlEntry : IQueryableModelEntity, IContentRowLevelSecured
    {

        public ACEPermissionScope Scope { get; set; }

        public ACEPermission Permission { get; set; }

        public ACEPermissionType PermissionType { get; set; }

        public byte[] Timestamp { get; set; } = BitConverter.GetBytes(DateTime.UtcNow.Ticks);

        //// [NotMapped]
        //public virtual ICollection<AccessControlEntry> AccessControlEntries { get; set; }

        // [NotMapped]
        //[InverseProperty(nameof(Principal.AccessControlList))]
        //public virtual ICollection<Principal> Owners { get; set; } = new HashSet<Principal>();

        /// <summary>
        /// principals referred to by this access control entry
        /// </summary>


        //// [ForeignKey("PrincipalId")]
        //[InverseProperty(nameof(Principal.AccessControlEntries))]
        //public virtual ICollection<Principal> Principals { get; set; } = new HashSet<Principal>();
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
            var isPermittedRead = entity.AccessControlEntries.First().Permission.HasFlag(ACEPermission.READ) && permission.HasFlag(ACEPermission.READ);
            var isPermittedWrite = entity.AccessControlEntries.First().Permission.HasFlag(ACEPermission.CREATE) && permission.HasFlag(ACEPermission.CREATE);


            var isPermittedUpdate = entity.AccessControlEntries.First().Permission.HasFlag(ACEPermission.UPDATE) && permission.HasFlag(ACEPermission.UPDATE);
            var isPermittedDelete = entity.AccessControlEntries.First().Permission.HasFlag(ACEPermission.DELETE) && permission.HasFlag(ACEPermission.DELETE);

            return await Task.FromResult(true);
        }
    }
}
