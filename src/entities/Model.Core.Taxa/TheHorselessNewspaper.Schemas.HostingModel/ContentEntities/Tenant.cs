﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable enable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    public partial class Tenant
    {
        public Tenant()
        {
            ContentCollections = new HashSet<ContentCollection>();
        }

        [Key]
        public Guid Id { get; set; }
        public string? DisplayName { get; set; }
        public string? ObjectId { get; set; }
        public bool? IsSoftDeleted { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreatedAt { get; set; }

        [ForeignKey("Tenants_Id")]
        [InverseProperty("Tenants")]
        public virtual ICollection<ContentCollection> ContentCollections { get; set; }
    }
}