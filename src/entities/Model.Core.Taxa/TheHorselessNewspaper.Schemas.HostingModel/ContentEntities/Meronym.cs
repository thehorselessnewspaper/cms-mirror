﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    public partial class Meronym
    {
        public Meronym()
        {
            Holonyms = new HashSet<Holonym>();
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

        [ForeignKey("Meronyms_Id")]
        [InverseProperty(nameof(Holonym.Meronyms))]
        public virtual ICollection<Holonym> Holonyms { get; set; }
    }
}