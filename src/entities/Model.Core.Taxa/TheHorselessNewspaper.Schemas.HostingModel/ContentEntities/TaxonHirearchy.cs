using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    [Table("TaxonHirearchy")]
    [Index("DerivativeTaxons_Id", Name = "IX_FK_TaxonTaxon_Taxon1")]
    public partial class TaxonHirearchy
    {
        [Key]
        public Guid AntecedentTaxons_Id { get; set; }
        [Key]
        public Guid DerivativeTaxons_Id { get; set; }

        [ForeignKey("AntecedentTaxons_Id")]
        [InverseProperty("TaxonHirearchyAntecedentTaxons")]
        public virtual Taxon AntecedentTaxons { get; set; } = null!;
        [ForeignKey("DerivativeTaxons_Id")]
        [InverseProperty("TaxonHirearchyDerivativeTaxons")]
        public virtual Taxon DerivativeTaxons { get; set; } = null!;
    }
}
