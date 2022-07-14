using Finbuckle.MultiTenant;
using System.ComponentModel.DataAnnotations;
using TheHorselessNewspaper.HostingModel.Context;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    [MultiTenant]
    public partial class HorselessSession : IContentRowLevelSecured
    {

        [Timestamp]
        public byte[] Timestamp { get; set; } = BitConverter.GetBytes(DateTime.UtcNow.Ticks);
        public DateTime? UpdatedAt { get; set; }
        public string? DictionaryKey { get; set; }

        public ICollection<AccessControlEntry>? AccessControlEntries { get; set; }
        public ICollection<Principal>? Owners { get; set; }
    }
}
