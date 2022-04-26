using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using TheHorselessNewspaper.Schemas.HostingModel.Context;

namespace TheHorselessNewspaper.HostingModel.EntityPartials.Content.Strategy.Inheritance
{
    [Obsolete]
    public abstract class ContentRowLevelSecured : IContentRowLevelSecured
    {
        public virtual ICollection<AccessControlEntry> AccessControlEntries { get; set; } = new  List<AccessControlEntry>();
        public virtual ICollection<Principal> Owners { get; set; } = new HashSet<Principal>();
        public virtual Guid Id { get; set; }
        public virtual string? ObjectId { get; set; }
        public virtual DateTime? CreatedAt { get; set; }
        public virtual string? DisplayName { get; set; }
        public virtual bool? IsSoftDeleted { get; set; }
        [Timestamp]
        public byte[] Timestamp { get; set; } = BitConverter.GetBytes(DateTime.UtcNow.Ticks);
        public DateTime? UpdatedAt { get; set; }
    }
}
