using Finbuckle.MultiTenant;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Claims;
using System.Text.Json.Serialization;
using TheHorselessNewspaper.HostingModel.Context;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    /// <summary>
    /// resist the urge to use [Flags]
    /// due to ACE 1->1 SCOPE
    ///            1->1 Collection<Principal>
    /// </summary>
    /// [Flags]


    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum ACEPermissionScope
    {
        SITE, TENANT, OWNER, ROLE, GROUP, WORKFLOW, ANONYMOUS, EVERYONE
    }

    [JsonConverter(typeof(JsonStringEnumConverter))]
    [Flags]
    public enum ACEPermission
    {
        READ, CREATE, UPDATE, DELETE, SHARE, EXECUTE, SEARCH, PUBLISH, UNPUBLISH, APPROVE
    }
    [JsonConverter(typeof(JsonStringEnumConverter))]
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
        public DateTime? UpdatedAt { get; set; }

        // [ForeignKey("FK_ContentCollectionAccessControlEntries")]
        [InverseProperty(nameof(ContentCollection.AccessControlEntries))]
        public virtual ICollection<ContentCollection> ContentCollections { get; set; } = new HashSet<ContentCollection>();

        /// <summary>
        ///  [ForeignKey("FK_HorselessContentAccessControlEntries")]
        /// </summary>
        [InverseProperty(nameof(HorselessContent.AccessControlEntries))]
        public virtual ICollection<HorselessContent> HorselessContents { get; set; } = new HashSet<HorselessContent>();

        // [ForeignKey("FK_HorselessViewAccessControlEntries")]
        [InverseProperty(nameof(HorselessView.AccessControlEntries))]
        public virtual ICollection<HorselessView> ManagedHorselessViews { get; set; } = new HashSet<HorselessView>();

        // [ForeignKey("FK_PublicationAccessControlEntries")]
        [InverseProperty(nameof(Publication.AccessControlEntries))]
        public virtual ICollection<Publication> ManagedPublications { get; set; } = new HashSet<Publication>();


        //[ForeignKey("FK_TenantAccessControlEntries")]
        [InverseProperty(nameof(Tenant.AccessControlEntries))]
        public virtual ICollection<Tenant> ManagedTenants { get; set; } = new HashSet<Tenant>();


        public string? DictionaryKey { get; set; }

        /// <summary>
        /// not mapped - model impedence mismatch due to implemented interface
        /// </summary>
        [NotMapped]
        public ICollection<AccessControlEntry> AccessControlEntries { get; set; } = new HashSet<AccessControlEntry>();

        /// <summary>
        /// not mapped - model impedence mismatch due to implemented interface
        /// </summary>
        [NotMapped]
        public ICollection<Principal>? Owners { get; set; } = new HashSet<Principal>();


        [InverseProperty(nameof(Principal.ManagingAccessControlEntries))]
        public ICollection<Principal>? SubjectPrincipals { get; set; } = new HashSet<Principal>();
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
