﻿using TheHorselessNewspaper.Schemas.HostingModel.Context;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    public partial class Taxon : IRowLevelSecured
    {
        public ICollection<AccessControlEntry> AccessControlList { get; set; } = new HashSet<AccessControlEntry>();
        public ICollection<Principal> Owners { get; set; } = new HashSet<Principal>();
    }
}
