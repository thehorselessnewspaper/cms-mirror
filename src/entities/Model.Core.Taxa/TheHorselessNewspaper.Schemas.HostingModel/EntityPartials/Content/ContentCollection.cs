using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.HostingModel.Context;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    public partial class ContentCollection : IRowLevelSecured
    {
        public ICollection<AccessControlEntry> AccessControlList { get; set; }
        public ICollection<Principal> Owners { get; set; }
    }
}
