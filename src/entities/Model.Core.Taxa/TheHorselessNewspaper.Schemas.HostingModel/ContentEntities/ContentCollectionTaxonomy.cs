using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    [Index("ContentCollections_Id", Name = "IX_FK_ContentCollectionTaxonomies_ContentCollection")]
    public partial class ContentCollectionTaxonomy
    {
        [Key]
        public Guid Taxonomies_Id { get; set; }
        [Key]
        public Guid ContentCollections_Id { get; set; }

        [ForeignKey("ContentCollections_Id")]
        [InverseProperty("ContentCollectionTaxonomies")]
        public virtual ContentCollection ContentCollections { get; set; } = null!;
        [ForeignKey("Taxonomies_Id")]
        [InverseProperty("ContentCollectionTaxonomies")]
        public virtual Taxonomy Taxonomies { get; set; } = null!;
    }
}
