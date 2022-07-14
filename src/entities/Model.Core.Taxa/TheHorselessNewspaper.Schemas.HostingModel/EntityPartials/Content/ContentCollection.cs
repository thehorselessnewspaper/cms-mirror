﻿using Finbuckle.MultiTenant;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.Context;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    [MultiTenant]
    public partial class ContentCollection : IContentRowLevelSecured
    {
        [InverseProperty(nameof(AccessControlEntry.ManagedContentCollections))]
        public virtual ICollection<AccessControlEntry>? AccessControlEntries { get; set; } = new HashSet<AccessControlEntry>();

        [InverseProperty(nameof(ContentCollection.ChildContentCollections))]
        public virtual ICollection<ContentCollection>? ParentContentCollections { get; set; } = new HashSet<ContentCollection>();


        [ForeignKey("ChildContentCollectionsId")]
        [InverseProperty(nameof(ContentCollection.ParentContentCollections))]
        public virtual ICollection<ContentCollection>? ChildContentCollections { get; set; } = new HashSet<ContentCollection>();


        public virtual ICollection<Principal>? Owners { get; set; } =  new HashSet<Principal>();

        [Timestamp]
        public byte[] Timestamp {get; set;}  = BitConverter.GetBytes(DateTime.UtcNow.Ticks);
        public DateTime? UpdatedAt { get; set; }
        public string? DictionaryKey { get; set; }
    }
}
