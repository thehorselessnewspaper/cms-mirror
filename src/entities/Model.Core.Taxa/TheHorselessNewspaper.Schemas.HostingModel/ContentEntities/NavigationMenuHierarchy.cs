using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    [Table("NavigationMenuHierarchy")]
    [Index("Parents_Id", Name = "IX_FK_NavigationMenuHierarchy_Children")]
    public partial class NavigationMenuHierarchy
    {
        [Key]
        public Guid Children_Id { get; set; }
        [Key]
        public Guid Parents_Id { get; set; }

        [ForeignKey("Children_Id")]
        [InverseProperty("NavigationMenuHierarchyChildren")]
        public virtual NavigationMenu Children { get; set; } = null!;
        [ForeignKey("Parents_Id")]
        [InverseProperty("NavigationMenuHierarchyParents")]
        public virtual NavigationMenu Parents { get; set; } = null!;
    }
}
