﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    public partial class Tenant
    {
        public Tenant()
        {
            ContentCollections = new HashSet<ContentCollection>();
        }

        public Guid Id { get; set; }
        public string DisplayName { get; set; }
        public string ObjectId { get; set; }
        public bool? IsSoftDeleted { get; set; }
        public DateTime? CreatedAt { get; set; }

        public virtual ICollection<ContentCollection> ContentCollections { get; set; }
    }
}