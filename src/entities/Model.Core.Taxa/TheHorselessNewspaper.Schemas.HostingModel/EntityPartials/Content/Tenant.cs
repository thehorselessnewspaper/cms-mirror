using Microsoft.EntityFrameworkCore;
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
        public TenantIdentifierStrategyName Strategy { get; set; }  
    }

    public partial class Tenant : IContentRowLevelSecured
    {
        public virtual ICollection<TenantIdentifierStrategy> TenantIdentifierStrategies { get; set; }
        public ICollection<AccessControlEntry> AccessControlList { get; set; } = new HashSet<AccessControlEntry>();
        public ICollection<Principal> Owners { get; set; } = new HashSet<Principal>();
    }
}
