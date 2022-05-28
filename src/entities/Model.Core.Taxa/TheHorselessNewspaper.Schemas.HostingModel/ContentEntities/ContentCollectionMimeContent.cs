using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    [Table("ContentCollectionMimeContent")]
    [Index("MimeContents_Id", Name = "IX_FK_ContentCollectionMimeContent_MimeContent")]
    public partial class ContentCollectionMimeContent
    {
        [Key]
        public Guid ContentCollections_Id { get; set; }
        [Key]
        public Guid MimeContents_Id { get; set; }

        [ForeignKey("ContentCollections_Id")]
        [InverseProperty("ContentCollectionMimeContents")]
        public virtual ContentCollection ContentCollections { get; set; } = null!;
        [ForeignKey("MimeContents_Id")]
        [InverseProperty("ContentCollectionMimeContents")]
        public virtual HorselessContent MimeContents { get; set; } = null!;
    }
}
