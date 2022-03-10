using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using TheHorselessNewspaper.Schemas.HostingModel.Context;
using TheHorselessNewspaper.HostingModel.Context;
using Finbuckle.MultiTenant;
using TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{

    // [MultiTenant]
    public partial class Principal : IQueryableModelEntity, IContentRowLevelSecured
    {
        [Timestamp]
        public byte[] Timestamp { get; set; } = BitConverter.GetBytes(DateTime.UtcNow.Ticks);

        [NotMapped]
        public ICollection<AccessControlEntry> AccessControlList { get; set; } = new List<AccessControlEntry>();

        [NotMapped]
        public ICollection<Principal> Owners { get; set; } = new HashSet<Principal>();

        /// <summary>
        /// tenants where the principal is registered
        /// </summary>
        [ForeignKey("TenantId")]
        [InverseProperty(nameof(Tenant.Principals))]
        public ICollection<Tenant> Tenants { get; set; } = new HashSet<Tenant>();

        /// <summary>
        /// access control entries that refer to this principal
        /// </summary>
        [ForeignKey("AccessControlEntryId")]
        [InverseProperty(nameof(AccessControlEntry.Principals))]
        public ICollection<AccessControlEntry> AccessControlEntries { get; set; } = new HashSet<AccessControlEntry>();

        [ForeignKey("OwnedTenantsId")]
        [InverseProperty(nameof(Tenant.Owners))]
        public ICollection<Tenant> OwnedTenants { get; set; } = new HashSet<Tenant>();
    }
}
