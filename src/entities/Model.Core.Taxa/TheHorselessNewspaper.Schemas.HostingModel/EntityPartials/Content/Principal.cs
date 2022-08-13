using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using TheHorselessNewspaper.HostingModel.Context;
using Finbuckle.MultiTenant;
using TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
using System.Security.Claims;
using System.Text.Json.Serialization;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{

    [MultiTenant]
    public partial class PrincipalClaim
    {
        [Key]
        public Guid Id { get; set; }
        public ICollection<AccessControlEntry>? AccessControlEntries { get; set; } = new HashSet<AccessControlEntry>();
        public ICollection<Principal>? Owners { get; set; } = new HashSet<Principal>();

        public string? ClaimType { get; set; } = String.Empty;
        public string ClaimValue { get; set; } = String.Empty;
        public string? ClaimValueType { get; set; } = String.Empty;

        public string ClaimIssuer { get; set; } = String.Empty;

        public Guid? PrincipalClaimContainerId { get; set; }

        public PrincipalClaimContainer? PrincipalClaimContainer { get; set; }

    }

 
    [MultiTenant]
    public partial class PrincipalClaimContainer
    {
        [Key]
        public Guid Id { get; set; }

        public string? ObjectId { get; set; }

        public string? DisplayName { get; set; }

        public ICollection<PrincipalClaim> PrincipalClaims { get; set; } = new HashSet<PrincipalClaim>();


        public Guid? PrincipalId { get; set; }

        //[ForeignKey(nameof(PrincipalClaimContainer.PrincipalId))]
        [InverseProperty(nameof(ContentEntities.Principal.PrincipalClaimContainer))]
        public Principal? Principal { get; set; }


        public ICollection<AccessControlEntry>? AccessControlEntries { get; set; } = new HashSet<AccessControlEntry>();

        public ICollection<Principal>? Owners { get; set; } = new HashSet<Principal>();
    }

    [MultiTenant]
    [Microsoft.EntityFrameworkCore.Index(nameof(PreferredUserName), nameof(Id), nameof(ObjectId), IsUnique = true)]
    public partial class Principal : IQueryableModelEntity, IContentRowLevelSecured
    {
        public bool IsAnonymous { get; set; } = true;

        public string UPN { get; set; } = string.Empty;

        public string Email { get; set; } = string.Empty;

        public string PreferredUserName { get; set; } = string.Empty;

        [Timestamp]
        public byte[] Timestamp { get; set; } = BitConverter.GetBytes(DateTime.UtcNow.Ticks);

        // public Guid? PrincipalClaimContainerId { get; set; }
        public PrincipalClaimContainer? PrincipalClaimContainer { get; set; }


        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime? UpdatedAt { get; set; }
        public string? DictionaryKey { get; set; }

        // [ForeignKey("FK_AccessControlEntrySubjectPrincipals")]
        // [InverseProperty(nameof(AccessControlEntry.SubjectPrincipals))]
        public ICollection<AccessControlEntry> ManagingAccessControlEntries { get; set; } = new HashSet<AccessControlEntry>();

        // [ForeignKey("FK_TenantAccounts")]
        // [InverseProperty(nameof(Tenant.Accounts))]
        // public ICollection<Tenant> Tenants { get; set; } = new HashSet<Tenant>();

        // [ForeignKey("FK_TenantOwners")]
        // [InverseProperty(nameof(Tenant.Owners))]
        // public ICollection<Tenant> OwnedTenants { get; set; } = new HashSet<Tenant>();


        // [InverseProperty(nameof(HorselessSession.Owners))]
        public ICollection<HorselessSession> OwnedHorselessSessions { get; set; } = new HashSet<HorselessSession>();



        // [InverseProperty(nameof(HorselessSession.Principal))]
        public ICollection<HorselessSession> HorselessSessions { get; set; } = new HashSet<HorselessSession>();

        // [InverseProperty(nameof(HorselessContent.Owners))]
        public ICollection<HorselessContent> HorselessContents { get; set; } = new HashSet<HorselessContent>();

        // [InverseProperty(nameof(HorselessContent.Owners))]
        public ICollection<HorselessView> HorselessViews { get; set; } = new HashSet<HorselessView>();

        //[InverseProperty(nameof(ContentCollection.Owners))]
        public ICollection<ContentCollection> ContentCollections { get; set; } = new HashSet<ContentCollection>();

        //[InverseProperty(nameof(FilesystemAsset.Owners))]
        public ICollection<FilesystemAsset> FilesystemAssets { get; set; } = new HashSet<FilesystemAsset>();

        //[InverseProperty(nameof(Holonym.Owners))]
        public ICollection<Holonym> Holonyms { get; set; } = new HashSet<Holonym>();

        //[InverseProperty(nameof(JSONAsset.Owners))]
        public ICollection<JSONAsset> JSONAssets { get; set; } = new HashSet<JSONAsset>();


        //[InverseProperty(nameof(Placeholder.Owners))]
        public ICollection<Placeholder> Placeholders { get; set; } = new HashSet<Placeholder>();

        /// <summary>
        /// not mapped - model impedence mismatch due to implemented interface
        /// </summary>
        [NotMapped]
        [JsonIgnore]
        public ICollection<AccessControlEntry>? AccessControlEntries { get; set; } = new HashSet<AccessControlEntry>();

        /// <summary>
        /// not mapped - model impedence mismatch due to implemented interface
        /// </summary>
        [NotMapped]
        [JsonIgnore]
        public ICollection<Principal>? Owners { get; set; } = new HashSet<Principal>();
    }
}
