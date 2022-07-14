﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace TheHorselessNewspaper.Schemas.HostingModel.HostingEntities
{
    public partial class AccessControlEntry
    {
        public AccessControlEntry()
        {
            SubjectTenants = new HashSet<Tenant>();
        }

        [Key]
        public Guid Id { get; set; }
        public string DisplayName { get; set; }
        public string ObjectId { get; set; }
        public bool? IsSoftDeleted { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreatedAt { get; set; }
        public bool? IsActive { get; set; }

        [ForeignKey("AccessControlEntries_Id")]
        [InverseProperty("AccessControlEntries")]
        public virtual ICollection<Tenant> SubjectTenants { get; set; }
    }
}