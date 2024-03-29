﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.Context;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace TheHorselessNewspaper.Schemas.HostingModel.Context
{
    /// <summary>
    /// marks a db entity as evaluable via access control entry collectoin
    /// </summary>
    public interface IContentRowLevelSecured : IQueryableModelEntity
    {
        public ICollection<AccessControlEntry> AccessControlEntries { get; set; }
        public ICollection<Principal> Owners { get; set; }

    }
}
