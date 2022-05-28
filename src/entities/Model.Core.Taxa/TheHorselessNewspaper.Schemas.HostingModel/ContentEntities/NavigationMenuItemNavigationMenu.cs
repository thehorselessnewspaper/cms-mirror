using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    [Table("NavigationMenuItemNavigationMenu")]
    [Index("ParentNavigationMenus_Id", Name = "IX_FK_NavigationMenuItemNavigationMenu_NavigationMenu")]
    public partial class NavigationMenuItemNavigationMenu
    {
        [Key]
        public Guid ChildNavigationMenuItems_Id { get; set; }
        [Key]
        public Guid ParentNavigationMenus_Id { get; set; }

        [ForeignKey("ChildNavigationMenuItems_Id")]
        [InverseProperty("NavigationMenuItemNavigationMenus")]
        public virtual NavigationMenuItem ChildNavigationMenuItems { get; set; } = null!;
        [ForeignKey("ParentNavigationMenus_Id")]
        [InverseProperty("NavigationMenuItemNavigationMenus")]
        public virtual NavigationMenu ParentNavigationMenus { get; set; } = null!;
    }
}
