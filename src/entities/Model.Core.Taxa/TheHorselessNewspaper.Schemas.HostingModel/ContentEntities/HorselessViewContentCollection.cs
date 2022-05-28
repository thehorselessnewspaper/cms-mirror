using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    [Table("HorselessViewContentCollection")]
    [Index("ContentCollections_Id", Name = "IX_FK_HorselessViewContentCollection_ContentCollection")]
    public partial class HorselessViewContentCollection
    {
        [Key]
        public Guid HorselessViews_Id { get; set; }
        [Key]
        public Guid ContentCollections_Id { get; set; }

        [ForeignKey("ContentCollections_Id")]
        [InverseProperty("HorselessViewContentCollections")]
        public virtual ContentCollection ContentCollections { get; set; } = null!;
        [ForeignKey("HorselessViews_Id")]
        [InverseProperty("HorselessViewContentCollections")]
        public virtual HorselessView HorselessViews { get; set; } = null!;
    }
}
