using Finbuckle.MultiTenant;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using TheHorselessNewspaper.HostingModel.Context;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{

    [MultiTenant]
    public partial class Placeholder : IContentRowLevelSecured, IQueryableModelEntity
    {
        [Timestamp]
        public byte[] Timestamp { get; set; } = BitConverter.GetBytes(DateTime.UtcNow.Ticks);
        public ICollection<AccessControlEntry>? AccessControlEntries { get; set; } = new HashSet<AccessControlEntry>();
        public ICollection<Principal>? Owners { get; set; } = new HashSet<Principal>();
        public DateTime? UpdatedAt { get; set; }
        public string? DictionaryKey { get; set; }

        public Guid? HorselessViewId { get; set; }


        public HorselessView? HorselessViews { get; set; }
    }
}
