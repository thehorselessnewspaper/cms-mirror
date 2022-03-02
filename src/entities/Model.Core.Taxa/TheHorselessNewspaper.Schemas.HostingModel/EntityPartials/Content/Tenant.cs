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
    
    [Owned]
    public class TenantIdentifierStrategy
    {
        [Key]
        public Guid Id { get; set; }
        public string DisplayName { get; set; }

        public string ObjectId { get; set; }
        public bool? IsSoftDeleted { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreatedAt { get; set; }
        public TenantIdentifierStrategyName Strategy { get; set; }  

    }

    [Table("Tenants")]
    public partial class Tenant : IContentRowLevelSecured
    {
        public ICollection<TenantIdentifierStrategy> TenantIdentifierStrategies { get; set; } 
        public ICollection<AccessControlEntry> AccessControlList { get; set; }
        public ICollection<Principal> Owners { get; set; } 
    }
}
