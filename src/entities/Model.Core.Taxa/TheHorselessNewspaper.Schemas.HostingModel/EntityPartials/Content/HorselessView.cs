using Finbuckle.MultiTenant;
using Microsoft.Extensions.FileProviders;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.Context;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities

{
    /// <summary>
    /// support loading razor (and other) views from the database
    /// totally as per https://www.mikesdotnetting.com/article/301/loading-asp-net-core-mvc-views-from-a-database-or-other-location
    /// </summary>
    [MultiTenant]
    public partial class HorselessView : IContentRowLevelSecured, IFileInfo
    {
        // [ForeignKey("FK_AccessControlEntryManagedHorselessViews")]
        [InverseProperty(nameof(AccessControlEntry.HorselessViews))]
        public ICollection<AccessControlEntry> AccessControlEntries { get; set; } = new HashSet<AccessControlEntry>();

        [InverseProperty(nameof(Principal.HorselessViews))]
        public ICollection<Principal> Owners { get; set; } = new HashSet<Principal>();
        public DateTime? UpdatedAt { get; set; }
        public byte[] Timestamp { get; set; }

        public bool Exists { get; set; }

        public bool IsDirectory { get; set; }

        public DateTimeOffset LastModified { get; set; }

        public long Length { get; set; } = String.Empty;

        public string Name { get; set; } = String.Empty;

        public string PhysicalPath { get; set; } = String.Empty;

        public byte[] ViewContent { get; set; } = new byte[0];
        public string? DictionaryKey { get; set; }

        public ICollection<ContentCollection> ContentCollections { get; set; } = new HashSet<ContentCollection>();

        [InverseProperty(nameof(Placeholder.HorselessView))]
        public ICollection<Placeholder> Placeholders { get; set; } = new HashSet<Placeholder>();

        [JsonIgnore]
        [NotMapped]
        public Stream CreateReadStream()
        {
            return new MemoryStream(ViewContent);
        }
    }
}
