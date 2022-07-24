using Finbuckle.MultiTenant;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json;
using System.Text.Json.Nodes;
using TheHorselessNewspaper.HostingModel.Context;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    [MultiTenant]
    public partial class JSONAsset : IContentRowLevelSecured
    {
        public ICollection<AccessControlEntry>? AccessControlEntries { get; set; } = new HashSet<AccessControlEntry>();

        public ICollection<Principal>? Owners { get; set; } = new HashSet<Principal>();

        [InverseProperty(nameof(Tenant.MetaData))]
        public ICollection<Tenant> Tenants { get; set; } = new HashSet<Tenant>();

        [Timestamp]
        public byte[] Timestamp { get; set; } = BitConverter.GetBytes(DateTime.UtcNow.Ticks);
        public DateTime? UpdatedAt { get; set; }
        public string? DictionaryKey { get; set; }

        /// <summary>
        /// system.text.json representation of the data
        /// </summary>
        [NotMapped]
        public JsonObject JsonObject
        {
            get
            {
                try
                {
                    var ret = JsonNode.Parse(this.JsonValue).AsObject();
                    return ret;
                }
                catch(Exception e)
                {
                    return JsonNode.Parse("{}").AsObject();
                }
            }
        }
    }
}
