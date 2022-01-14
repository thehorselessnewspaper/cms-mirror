using System.Text.Json.Serialization;
using TheHorselessNewspaper.HostingModel.Context;
using TheHorselessNewspaper.Schemas.HostingModel.Context;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{

    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum TenantIdentifierStrategy 
    {
        STATIC,
        BASE_PATH,
        ASPNETCORE_ROUTE,
        DNS_HOSTNAME,
        DNS_FQDN
    }
    
    public partial class Tenant : IContentRowLevelSecured
    {
        public ICollection<TenantIdentifierStrategy> TenantIdentifierStrategies { get; set; }
        public ICollection<AccessControlEntry> AccessControlList { get; set; } = new HashSet<AccessControlEntry>();
        public ICollection<Principal> Owners { get; set; } = new HashSet<Principal>();
    }
}
