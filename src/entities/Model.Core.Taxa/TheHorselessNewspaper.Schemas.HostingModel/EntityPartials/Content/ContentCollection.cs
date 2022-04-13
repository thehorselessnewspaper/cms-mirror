using Finbuckle.MultiTenant;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
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

        public virtual ICollection<AccessControlEntry> AccessControlEntries { get; set; } = new HashSet<AccessControlEntry>();
        public virtual ICollection<Principal> Owners { get; set; } =  new HashSet<Principal>();

        [Timestamp]
        public byte[] Timestamp {get; set;}  = BitConverter.GetBytes(DateTime.UtcNow.Ticks);
    }
}
