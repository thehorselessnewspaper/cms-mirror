using Finbuckle.MultiTenant;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using TheHorselessNewspaper.Schemas.HostingModel.Context;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum TenantIdentifierStrategyName
    {
        STATIC,
        BASE_PATH,
        ASPNETCORE_ROUTE,
        DNS_HOSTNAME,
        DNS_FQDN
    }

    [MultiTenant]
    public class TenantIdentifierStrategyContainer
    {
        [Key]
        public Guid? Id { get; set; }
        public TenantIdentifierStrategyName TenantIdentifierStrategyName { get; set; }

        [Timestamp]
        public byte[] Timestamp { get; set; } = BitConverter.GetBytes(DateTime.UtcNow.Ticks);


        public TenantIdentifierStrategy? Strategy { get; set; }
    }


    /// <summary>
    /// collects the strategies thta can be used to identify a tenant
    /// modelled as a wrapper for a collection payload
    /// to avoid awkardness with mapping owned collections
    /// </summary>
    [MultiTenant]
    public class TenantIdentifierStrategy
    {

        [Key]
        // [Column("TenantIdentifierStrategyId")]
        public Guid Id { get; set; }

        public string DisplayName { get; set; } = string.Empty;

        public string ObjectId { get; set; }
        public bool? IsSoftDeleted { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreatedAt { get; set; }

        [Timestamp]
        public byte[] Timestamp { get; set; } = BitConverter.GetBytes(DateTime.UtcNow.Ticks);

        [ForeignKey("TargetTenantId")]
        [InverseProperty(nameof(Tenant.TenantIdentifierStrategy))]
        public Tenant TargetTenant { get; set; }

        [InverseProperty(nameof(TenantIdentifierStrategyContainer.Strategy))]
        public virtual ICollection<TenantIdentifierStrategyContainer> StrategyContainers { get; set; } = new List<TenantIdentifierStrategyContainer>();
    }


    public partial class Tenant : IContentRowLevelSecured
    {
        public bool IsPublished { get; set; }

        public virtual TenantIdentifierStrategy? TenantIdentifierStrategy { get; set; } = new TenantIdentifierStrategy();


        public virtual ICollection<AccessControlEntry> AccessControlList { get; set; } = new HashSet<AccessControlEntry>();

        [ForeignKey("OwnedTenantsId")]
        [InverseProperty(nameof(Principal.OwnedTenants))]
        public virtual ICollection<Principal> Owners { get; set; } = new HashSet<Principal>();

        /// <summary>
        /// principals who have registered in the tenant
        /// </summary>
        [ForeignKey("PrincipalId")]
        [InverseProperty(nameof(Principal.Tenants))]
        public virtual ICollection<Principal> Principals { get; set; } = new HashSet<Principal>();

        [Timestamp]
        public byte[] Timestamp { get; set; } = BitConverter.GetBytes(DateTime.UtcNow.Ticks);
    }
}
