using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    [Table("PublicationContentCollection")]
    [Index("ContentCollections_Id", Name = "IX_FK_PublicationContentCollection_ContentCollection")]
    public partial class PublicationContentCollection
    {
        [Key]
        public Guid Publications_Id { get; set; }
        [Key]
        public Guid ContentCollections_Id { get; set; }

        [ForeignKey("ContentCollections_Id")]
        [InverseProperty("PublicationContentCollections")]
        public virtual ContentCollection ContentCollections { get; set; } = null!;
        [ForeignKey("Publications_Id")]
        [InverseProperty("PublicationContentCollections")]
        public virtual Publication Publications { get; set; } = null!;
    }
}
