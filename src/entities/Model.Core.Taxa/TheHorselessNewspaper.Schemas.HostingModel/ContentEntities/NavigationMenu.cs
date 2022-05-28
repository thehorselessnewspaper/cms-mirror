﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable enable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    public partial class NavigationMenu
    {
        public NavigationMenu()
        {
            ChildNavigationMenuItems = new HashSet<NavigationMenuItem>();
            Children = new HashSet<NavigationMenu>();
            Parents = new HashSet<NavigationMenu>();
        }

        [Key]
        public Guid Id { get; set; }
        public string? DisplayName { get; set; }
        public string? ObjectId { get; set; }
        public bool? IsSoftDeleted { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreatedAt { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? PublishAt { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? UnPublishAt { get; set; }
        public bool? IsPublished { get; set; }
        public string? MenuLabel { get; set; }
        public string? MenuDescription { get; set; }
        public string? MenuAltText { get; set; }

        [ForeignKey("ParentNavigationMenus_Id")]
        [InverseProperty("ParentNavigationMenus")]
        public virtual ICollection<NavigationMenuItem> ChildNavigationMenuItems { get; set; }
        [ForeignKey("Parents_Id")]
        [InverseProperty("Parents")]
        public virtual ICollection<NavigationMenu> Children { get; set; }
        [ForeignKey("Children_Id")]
        [InverseProperty("Children")]
        public virtual ICollection<NavigationMenu> Parents { get; set; }
    }
}