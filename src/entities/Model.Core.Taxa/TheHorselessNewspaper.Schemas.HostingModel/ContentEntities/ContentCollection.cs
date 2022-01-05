﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
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
            ChildContentCollections = new HashSet<ContentCollection>();
            MimeContents = new HashSet<HorselessContent>();
            ParentContentCollections = new HashSet<ContentCollection>();
            Publications = new HashSet<Publication>();
            Taxonomies = new HashSet<Taxonomy>();
            Tenants = new HashSet<Tenant>();
        }

        [Key]
        public Guid Id { get; set; }
        public string DisplayName { get; set; }
        [Required]
        public string ObjectId { get; set; }
        public bool? IsSoftDeleted { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreatedAt { get; set; }
        public bool AllowAnonymousRead { get; set; }
        public bool? IsPublished { get; set; }
        public string PublishedURL { get; set; }
        public string PreviewURL { get; set; }

        [ForeignKey("ParentContentCollections_Id")]
        [InverseProperty(nameof(ContentCollection.ParentContentCollections))]
        public virtual ICollection<ContentCollection> ChildContentCollections { get; set; }
        [ForeignKey("ContentCollections_Id")]
        [InverseProperty(nameof(HorselessContent.ContentCollections))]
        public virtual ICollection<HorselessContent> MimeContents { get; set; }
        [ForeignKey("ChildContentCollections_Id")]
        [InverseProperty(nameof(ContentCollection.ChildContentCollections))]
        public virtual ICollection<ContentCollection> ParentContentCollections { get; set; }
        [ForeignKey("ContentCollections_Id")]
        [InverseProperty(nameof(Publication.ContentCollections))]
        public virtual ICollection<Publication> Publications { get; set; }
        [ForeignKey("ContentCollections_Id")]
        [InverseProperty(nameof(Taxonomy.ContentCollections))]
        public virtual ICollection<Taxonomy> Taxonomies { get; set; }
        [ForeignKey("ContentCollections_Id")]
        [InverseProperty(nameof(Tenant.ContentCollections))]
        public virtual ICollection<Tenant> Tenants { get; set; }
    }
}