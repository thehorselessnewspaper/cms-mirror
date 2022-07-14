using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using TheHorselessNewspaper.HostingModel.Context;
using Finbuckle.MultiTenant;
using TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
using System.Security.Claims;

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

        public ICollection<PrincipalClaim> PrincipalClaim { get; set; } = new HashSet<PrincipalClaim>();

        [ForeignKey("Principal")]
        public Guid? PrincipalId { get; set; }
        public Principal? Principal { get; set; }

        [ForeignKey("FK_AccessControlEntries")]
        public ICollection<AccessControlEntry>? AccessControlEntries { get; set; } = new HashSet<AccessControlEntry>();
        [ForeignKey("FK_OWNERS")]
        public ICollection<Principal>? Owners { get; set; } = new HashSet<Principal>();
    }

    [MultiTenant]
    [Microsoft.EntityFrameworkCore.Index(nameof(PreferredUserName), IsUnique = true)]
    public partial class Principal : IQueryableModelEntity, IContentRowLevelSecured
    {
        public bool IsAnonymous { get; set; } = true;

        public string UPN { get; set; } = string.Empty;

        public string Email { get; set; } = string.Empty;

        public string PreferredUserName { get; set; } = string.Empty;

        [Timestamp]
        public byte[] Timestamp { get; set; } = BitConverter.GetBytes(DateTime.UtcNow.Ticks);

        [InverseProperty("Principal")]
        public PrincipalClaimContainer? PrincipalClaimContainer { get; set; } = new PrincipalClaimContainer();
        public DateTime? UpdatedAt { get; set; }
        public string? DictionaryKey { get; set; }

        [InverseProperty(nameof(AccessControlEntry.SubjectPrincipals))]
        public ICollection<AccessControlEntry>? ManagingAccessControlEntries { get; set; } = new HashSet<AccessControlEntry>();

        [ForeignKey("FK_MANAGED_TENANTSId")]
        [InverseProperty(nameof(Tenant.Accounts))]
        public ICollection<Tenant>? ManagedTenants { get; set; } = new HashSet<Tenant>();

        [ForeignKey("FK_OWNED_TENANTSId")]
        [InverseProperty(nameof(Tenant.Owners))]
        public ICollection<Tenant>? OwnedTenants { get; set; } = new HashSet<Tenant>();

        /// <summary>
        /// not mapped - model impedence mismatch due to implemented interface
        /// </summary>
        [NotMapped]
        public ICollection<AccessControlEntry>? AccessControlEntries { get; set; } = new HashSet<AccessControlEntry>();

        /// <summary>
        /// not mapped - model impedence mismatch due to implemented interface
        /// </summary>
        [NotMapped]
        public ICollection<Principal>? Owners { get; set; } = new HashSet<Principal>();
    }
}
