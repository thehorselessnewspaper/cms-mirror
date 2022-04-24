using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using TheHorselessNewspaper.Schemas.HostingModel.Context;
using TheHorselessNewspaper.HostingModel.Context;
using Finbuckle.MultiTenant;
using TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
using System.Security.Claims;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    [Owned]
    public partial class PrincipalClaimContainer
    {
        public List<Claim> Claims { get; set; } = new List<Claim>();
    }

    [MultiTenant]
    public partial class Principal : IQueryableModelEntity, IContentRowLevelSecured
    {
        public bool IsAnonymous { get; set; } = true;

        public string UPN { get; set; } = string.Empty;

        public string Email { get; set; } = string.Empty;

        public string PreferredUserName { get; set; } = string.Empty;

        [Timestamp]
        public byte[] Timestamp { get; set; } = BitConverter.GetBytes(DateTime.UtcNow.Ticks);

        public PrincipalClaimContainer PrincipalClaims { get; set; } = new PrincipalClaimContainer();

        // [NotMapped]
        //[InverseProperty(nameof(AccessControlEntry.Owners))]
        //public ICollection<AccessControlEntry> AccessControlList { get; set; } = new List<AccessControlEntry>();

        // [NotMapped]
        // [InverseProperty(nameof(Tenant.Principals))]
        //public ICollection<Principal> Owners { get; set; } = new HashSet<Principal>();

        /// <summary>
        /// tenants where the principal is registered
        /// </summary>
        // [ForeignKey("Id")]
        //[InverseProperty(nameof(Tenant.Principals))]
        //public ICollection<Tenant> Tenants { get; set; } = new HashSet<Tenant>();

        /// <summary>
        /// access control entries that refer to this principal
        /// </summary>
        // [ForeignKey("AccessControlEntryId")]
        //[InverseProperty(nameof(AccessControlEntry.Principals))]
        //public ICollection<AccessControlEntry> AccessControlEntries { get; set; } = new HashSet<AccessControlEntry>();

        
        //[InverseProperty(nameof(Tenant.Owners))]
        //public ICollection<Tenant> OwnedTenants { get; set; } = new HashSet<Tenant>();
    }
}
