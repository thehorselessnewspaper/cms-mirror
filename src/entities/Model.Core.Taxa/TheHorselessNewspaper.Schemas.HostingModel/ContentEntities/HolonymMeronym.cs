using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    [Table("HolonymMeronym")]
    [Index("Meronyms_Id", Name = "IX_FK_HolonymMeronym_Meronym")]
    public partial class HolonymMeronym
    {
        [Key]
        public Guid Holonyms_Id { get; set; }
        [Key]
        public Guid Meronyms_Id { get; set; }

        [ForeignKey("Holonyms_Id")]
        [InverseProperty("HolonymMeronyms")]
        public virtual Holonym Holonyms { get; set; } = null!;
        [ForeignKey("Meronyms_Id")]
        [InverseProperty("HolonymMeronyms")]
        public virtual Meronym Meronyms { get; set; } = null!;
    }
}
