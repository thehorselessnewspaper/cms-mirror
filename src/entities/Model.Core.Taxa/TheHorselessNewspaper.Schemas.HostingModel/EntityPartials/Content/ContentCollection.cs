using Finbuckle.MultiTenant;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.Context;
using TheHorselessNewspaper.Schemas.HostingModel.Context;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    [MultiTenant]
    public partial class ContentCollection : IContentRowLevelSecured
    {
        [ForeignKey("FK_ContentCollection_AccessControlEntries")]
        public virtual ICollection<AccessControlEntry>? AccessControlEntries { get; set; } = new HashSet<AccessControlEntry>();

        [ForeignKey("FK_ContentCollection_Owners")]
        public virtual ICollection<Principal>? Owners { get; set; } =  new HashSet<Principal>();

        [Timestamp]
        public byte[] Timestamp {get; set;}  = BitConverter.GetBytes(DateTime.UtcNow.Ticks);
        public DateTime? UpdatedAt { get; set; }
    }
}
