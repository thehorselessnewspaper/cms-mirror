using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    [Table("PublicationHierarchy")]
    [Index("PublicationParents_Id", Name = "IX_FK_PublicationHierarchy_PublicationChildren")]
    public partial class PublicationHierarchy
    {
        [Key]
        public Guid PublicationChildren_Id { get; set; }
        [Key]
        public Guid PublicationParents_Id { get; set; }

        [ForeignKey("PublicationChildren_Id")]
        [InverseProperty("PublicationHierarchyPublicationChildren")]
        public virtual Publication PublicationChildren { get; set; } = null!;
        [ForeignKey("PublicationParents_Id")]
        [InverseProperty("PublicationHierarchyPublicationParents")]
        public virtual Publication PublicationParents { get; set; } = null!;
    }
}
