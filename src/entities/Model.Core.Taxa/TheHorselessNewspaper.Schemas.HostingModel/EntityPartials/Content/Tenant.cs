using Finbuckle.MultiTenant;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using TheHorselessNewspaper.HostingModel.Context;
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


    public class TenantIdentifierStrategyContainer
    {
        [Key]
        [Column("TenantIdentifierStrategyContainerId")]
        public Guid? Id { get; set; }

        [ForeignKey(nameof(TenantIdentifierStrategy))]
        public Guid? TenantIdentifierStrategyId { get; set; }

        public TenantIdentifierStrategy? TenantIdentifierStrategy { get; set; }
        public TenantIdentifierStrategyName TenantIdentifierStrategyName { get; set; }
    }
    /// <summary>
    /// collects the strategies thta can be used to identify a tenant
    /// modelled as a wrapper for a collection payload
    /// to avoid awkardness with mapping owned collections
    /// </summary>

    public class TenantIdentifierStrategy
    {

        [Key]
        [Column("TenantIdentifierStrategyId")]
        public Guid Id { get; set; }


        public Guid? TenantId { get; set; }
        public Tenant? Tenant { get; set; }
        public string DisplayName { get; set; } = string.Empty;

        public string ObjectId { get; set; }
        public bool? IsSoftDeleted { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreatedAt { get; set; }

        /// <summary>
        /// TODO
        /// resolve this collection chail 
        /// </summary>
        public virtual ICollection<TenantIdentifierStrategyContainer> TenantIdentifierStrategyContainers { get; set; } = new List<TenantIdentifierStrategyContainer>();
    }


    public partial class Tenant : IContentRowLevelSecured
    {
        public virtual TenantIdentifierStrategy? TenantIdentifierStrategy { get; set; } 

        [NotMapped]
        public virtual ICollection<AccessControlEntry> AccessControlList { get; set; }

        [NotMapped]
        public virtual ICollection<Principal> Owners { get; set; }
        [Timestamp]
        public byte[] Timestamp { get; set; } = BitConverter.GetBytes(DateTime.UtcNow.Ticks);
    }
}
