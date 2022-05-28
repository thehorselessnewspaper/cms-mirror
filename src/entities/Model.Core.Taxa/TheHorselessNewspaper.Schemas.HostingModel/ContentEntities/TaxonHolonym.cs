using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    [Table("TaxonHolonym")]
    [Index("Holonyms_Id", Name = "IX_FK_TaxonHolonym_Holonym")]
    public partial class TaxonHolonym
    {
        [Key]
        public Guid Taxons_Id { get; set; }
        [Key]
        public Guid Holonyms_Id { get; set; }

        [ForeignKey("Holonyms_Id")]
        [InverseProperty("TaxonHolonyms")]
        public virtual Holonym Holonyms { get; set; } = null!;
        [ForeignKey("Taxons_Id")]
        [InverseProperty("TaxonHolonyms")]
        public virtual Taxon Taxons { get; set; } = null!;
    }
}
