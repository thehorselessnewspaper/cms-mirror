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
            AccessControlEntries = new HashSet<AccessControlEntry>();
            Owners = new HashSet<Principal>();
            SubjectAccessControlEntries = new HashSet<AccessControlEntry>();
            SubjectPrincipals = new HashSet<Principal>();
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

        [ForeignKey("SubjectAccessControlEntries_Id")]
        [InverseProperty(nameof(AccessControlEntry.SubjectAccessControlEntries))]
        public virtual ICollection<AccessControlEntry> AccessControlEntries { get; set; }
        [ForeignKey("OwnedAccessControlEntries_Id")]
        [InverseProperty(nameof(Principal.OwnedAccessControlEntries))]
        public virtual ICollection<Principal> Owners { get; set; }
        [ForeignKey("AccessControlEntries_Id")]
        [InverseProperty(nameof(AccessControlEntry.AccessControlEntries))]
        public virtual ICollection<AccessControlEntry> SubjectAccessControlEntries { get; set; }
        [ForeignKey("AccessControlEntries_Id")]
        [InverseProperty(nameof(Principal.AccessControlEntries))]
        public virtual ICollection<Principal> SubjectPrincipals { get; set; }
        [ForeignKey("AccessControlEntries_Id")]
        [InverseProperty(nameof(Tenant.AccessControlEntries))]
        public virtual ICollection<Tenant> SubjectTenants { get; set; }
    }
}