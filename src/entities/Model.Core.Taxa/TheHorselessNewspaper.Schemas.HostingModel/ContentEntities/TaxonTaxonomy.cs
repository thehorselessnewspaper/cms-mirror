using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    [Table("TaxonTaxonomy")]
    [Index("Taxonomies_Id", Name = "IX_FK_TaxonTaxonomy_Taxonomy")]
    public partial class TaxonTaxonomy
    {
        [Key]
        public Guid Taxons_Id { get; set; }
        [Key]
        public Guid Taxonomies_Id { get; set; }

        [ForeignKey("Taxonomies_Id")]
        [InverseProperty("TaxonTaxonomies")]
        public virtual Taxonomy Taxonomies { get; set; } = null!;
        [ForeignKey("Taxons_Id")]
        [InverseProperty("TaxonTaxonomies")]
        public virtual Taxon Taxons { get; set; } = null!;
    }
}
