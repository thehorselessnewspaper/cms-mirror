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

        public string DisplayName { get; set; } = string.Empty;

        public string ObjectId { get; set; }
        public bool? IsSoftDeleted { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreatedAt { get; set; }

        [Timestamp]
        public byte[] Timestamp { get; set; } = BitConverter.GetBytes(DateTime.UtcNow.Ticks);

        public string TenantIdentifier { get; set; }

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
        public Tenant? TargetTenant { get; set; }

        [InverseProperty(nameof(TenantIdentifierStrategyContainer.Strategy))]
        public virtual ICollection<TenantIdentifierStrategyContainer> StrategyContainers { get; set; } = new List<TenantIdentifierStrategyContainer>();
    }

    /// <summary>
    /// tenant is a singleton in the current multitenant topology
    /// and is at the root of the data model affected by user interactions
    /// 
    /// due to finbuckle's tenant resolution strategies in the absence
    /// of a current http context tenant resolution middleware misfires
    /// 
    /// this implies a fallback strategy and a catchall tenant, implemented
    /// as a management tenant that is the source of all other tenant registrations
    /// 
    /// the management tenant can scan tenant collections more easily if the
    /// tenant entity is not multitenanted
    /// </summary>
    public partial class Tenant : IContentRowLevelSecured
    {
        public bool IsPublished { get; set; }

        /// <summary>
        /// prospectively overrides all other tenant base url contexts
        /// </summary>
        public Uri? BaseUrl { get; set; }

        public virtual TenantIdentifierStrategy? TenantIdentifierStrategy { get; set; } = new TenantIdentifierStrategy();

        /// <summary>
        /// prospectively override other tenant identifier definitions
        /// </summary>
        public string? TenantIdentifier { get; set; }



        [Timestamp]
        public byte[] Timestamp { get; set; } = BitConverter.GetBytes(DateTime.UtcNow.Ticks);
    }
}
