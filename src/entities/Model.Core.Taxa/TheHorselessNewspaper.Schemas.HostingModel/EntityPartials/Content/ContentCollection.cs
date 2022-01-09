﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.Context;
using TheHorselessNewspaper.Schemas.HostingModel.Context;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    public partial class ContentCollection : IContentRowLevelSecured
    {

        public virtual ICollection<AccessControlEntry> AccessControlList { get; set; } = new HashSet<AccessControlEntry>();
        public virtual ICollection<Principal> Owners { get; set; } =  new HashSet<Principal>();
    }
}
