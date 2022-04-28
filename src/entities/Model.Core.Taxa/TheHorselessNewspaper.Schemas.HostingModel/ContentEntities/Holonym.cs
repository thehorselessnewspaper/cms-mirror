﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    public partial class Holonym
    {
        public Holonym()
        {
            Meronyms = new HashSet<Meronym>();
            Taxons = new HashSet<Taxon>();
        }

        [Key]
        public Guid Id { get; set; }
        public string DisplayName { get; set; }
        public string ObjectId { get; set; }
        public bool? IsSoftDeleted { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreatedAt { get; set; }
        public string JsonValue { get; set; }
        public string JsonSchema { get; set; }

        [ForeignKey("Holonyms_Id")]
        [InverseProperty("Holonyms")]
        public virtual ICollection<Meronym> Meronyms { get; set; }
        [ForeignKey("Holonyms_Id")]
        [InverseProperty("Holonyms")]
        public virtual ICollection<Taxon> Taxons { get; set; }
    }
}