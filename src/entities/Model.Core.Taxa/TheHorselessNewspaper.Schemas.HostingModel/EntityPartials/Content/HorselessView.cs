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
    public partial class HorselessView : IContentRowLevelSecured, IFileInfo
    {

        [InverseProperty(nameof(AccessControlEntry.ManagedHorselessViews))]
        public ICollection<AccessControlEntry>? AccessControlEntries { get; set; } = new HashSet<AccessControlEntry>();


        public ICollection<Principal>? Owners { get; set; } = new HashSet<Principal>();
        public DateTime? UpdatedAt { get; set; }
        public byte[] Timestamp { get; set; }

        public bool Exists { get; set; }

        public bool IsDirectory { get; set; }

        public DateTimeOffset LastModified { get; set; }

        public long Length { get; set; }

        public string Name { get; set; }

        public string PhysicalPath { get; set; }

        public byte[] ViewContent { get; set; } = new byte[0];
        public string? DictionaryKey { get; set; }

        public Stream CreateReadStream()
        {
            return new MemoryStream(ViewContent);
        }
    }
}
