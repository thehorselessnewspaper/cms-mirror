﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    public partial class Publication
    {
        public ICollection<AccessControlEntry> AccessControlList { get; set; }
    }
}