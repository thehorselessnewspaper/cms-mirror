using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    [Table("NavigationMenuItemHierarchy")]
    [Index("ParentNavigationItems_Id", Name = "IX_FK_NavigationMenuItemHierarchy_ChildNavigationItems")]
    public partial class NavigationMenuItemHierarchy
    {
        [Key]
        public Guid ChildNavigationItems_Id { get; set; }
        [Key]
        public Guid ParentNavigationItems_Id { get; set; }

        [ForeignKey("ChildNavigationItems_Id")]
        [InverseProperty("NavigationMenuItemHierarchyChildNavigationItems")]
        public virtual NavigationMenuItem ChildNavigationItems { get; set; } = null!;
        [ForeignKey("ParentNavigationItems_Id")]
        [InverseProperty("NavigationMenuItemHierarchyParentNavigationItems")]
        public virtual NavigationMenuItem ParentNavigationItems { get; set; } = null!;
    }
}
