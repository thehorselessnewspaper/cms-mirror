﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable enable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    public partial class ContentCollection
    {
        public ContentCollection()
        {
            HorselessViews = new HashSet<HorselessView>();
            MimeContents = new HashSet<HorselessContent>();
            Publications = new HashSet<Publication>();
            Taxonomies = new HashSet<Taxonomy>();
            Tenants = new HashSet<Tenant>();
        }

        [Key]
        public Guid Id { get; set; }
        public string? DisplayName { get; set; }
        public string? ObjectId { get; set; }
        public bool? IsSoftDeleted { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreatedAt { get; set; }
        public bool? AllowAnonymousRead { get; set; }
        public bool? IsPublished { get; set; }
        public string? PublishedURL { get; set; }
        public string? PreviewURL { get; set; }

        [ForeignKey("ContentCollections_Id")]
        [InverseProperty("ContentCollections")]
        public virtual ICollection<HorselessView> HorselessViews { get; set; } = new HashSet<HorselessView>();
        [ForeignKey("ContentCollections_Id")]
        [InverseProperty("ContentCollections")]
        public virtual ICollection<HorselessContent> MimeContents { get; set; } = new HashSet<HorselessContent>();
        [ForeignKey("ContentCollections_Id")]
        [InverseProperty("ContentCollections")]
        public virtual ICollection<Publication> Publications { get; set; } = new HashSet<Publication>();
        [ForeignKey("ContentCollections_Id")]
        [InverseProperty("ContentCollections")]
        public virtual ICollection<Taxonomy> Taxonomies { get; set; } = new HashSet<Taxonomy>();
        [ForeignKey("ContentCollections_Id")]
        [InverseProperty("ContentCollections")]
        public virtual ICollection<Tenant> Tenants { get; set; } = new HashSet<Tenant>();

        [InverseProperty(nameof(ContentCollection.ParentContentCollections))]
        public virtual ICollection<ContentCollection> ChildContentCollections { get; set; } = new HashSet<ContentCollection>();

        [InverseProperty(nameof(ContentCollection.ChildContentCollections))]
        public virtual ICollection<ContentCollection> ParentContentCollections { get; set; } = new HashSet<ContentCollection>();
    }
}