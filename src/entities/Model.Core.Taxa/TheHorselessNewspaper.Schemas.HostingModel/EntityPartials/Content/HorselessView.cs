using Microsoft.Extensions.FileProviders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.HostingModel.Context;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities

{
    /// <summary>
    /// support loading razor (and other) views from the database
    /// totally as per https://www.mikesdotnetting.com/article/301/loading-asp-net-core-mvc-views-from-a-database-or-other-location
    /// </summary>
    public partial class HorselessView : IContentRowLevelSecured, IFileInfo
    {
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

        public Stream CreateReadStream()
        {
            return new MemoryStream(this.ViewContent);
        }
    }
}
