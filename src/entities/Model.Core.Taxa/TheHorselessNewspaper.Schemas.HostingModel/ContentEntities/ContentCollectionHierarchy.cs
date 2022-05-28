using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    [Table("ContentCollectionHierarchy")]
    [Index("ParentContentCollections_Id", Name = "IX_FK_ContentCollectionHierarchy_ChildContentCollections")]
    public partial class ContentCollectionHierarchy
    {
        [Key]
        public Guid ChildContentCollections_Id { get; set; }
        [Key]
        public Guid ParentContentCollections_Id { get; set; }

        [ForeignKey("ChildContentCollections_Id")]
        [InverseProperty("ContentCollectionHierarchyChildContentCollections")]
        public virtual ContentCollection ChildContentCollections { get; set; } = null!;
        [ForeignKey("ParentContentCollections_Id")]
        [InverseProperty("ContentCollectionHierarchyParentContentCollections")]
        public virtual ContentCollection ParentContentCollections { get; set; } = null!;
    }
}
