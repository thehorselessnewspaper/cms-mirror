using Finbuckle.MultiTenant;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Claims;
using System.Text.Json.Serialization;
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

        [InverseProperty(nameof(ContentCollection.AccessControlEntries))]
        public virtual ICollection<ContentCollection?>? ManagedContentCollections { get; set; } = new HashSet<ContentCollection?>();

        //[InverseProperty(nameof(ContentCollection.AccessControlEntries))]
        //public virtual ICollection<HorselessSession?>? ManagedHorselessSessions { get; set; } = new HashSet<HorselessSession?>();

        [InverseProperty(nameof(HorselessContent.AccessControlEntries))]
        public virtual ICollection<HorselessContent?>? ManagedHorselessContents { get; set; } = new HashSet<HorselessContent?>();

        [InverseProperty(nameof(HorselessView.AccessControlEntries))]
        public virtual ICollection<HorselessView?>? ManagedHorselessViews { get; set; } = new HashSet<HorselessView?>();

        [InverseProperty(nameof(Publication.AccessControlEntries))]
        public virtual ICollection<Publication?>? ManagedPublications { get; set; } = new HashSet<Publication?>();
        public string? DictionaryKey { get; set; }
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
