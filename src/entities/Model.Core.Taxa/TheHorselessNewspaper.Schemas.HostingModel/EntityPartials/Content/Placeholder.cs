using Finbuckle.MultiTenant;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using TheHorselessNewspaper.HostingModel.Context;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{

    [MultiTenant]
    public partial class Placeholder : IContentRowLevelSecured, IQueryableModelEntity
    {
        [Timestamp]
        public byte[] Timestamp { get; set; } = BitConverter.GetBytes(DateTime.UtcNow.Ticks);

        [InverseProperty(nameof(AccessControlEntry.Placeholders))]
        public ICollection<AccessControlEntry> AccessControlEntries { get; set; } = new HashSet<AccessControlEntry>();


        [InverseProperty(nameof(Principal.Placeholders))]
        public ICollection<Principal> Owners { get; set; } = new HashSet<Principal>();


        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime? UpdatedAt { get; set; }
        public string? DictionaryKey { get; set; }

        public Guid? HorselessViewId { get; set; }

        // [InverseProperty(nameof(HorselessView.Placeholders))]
        public HorselessView? HorselessView { get; set; }
    }
}
