﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    [Index(nameof(ParentTenantId), Name = "IX_FK_TenantHorselessClaimsPrincipal")]
    public partial class Principal
    {
        public Principal()
        {
            HorselessSessions = new HashSet<HorselessSession>();
            AccessControlEntries = new HashSet<AccessControlEntry>();
        }

        [Key]
        public Guid Id { get; set; }
        public string DisplayName { get; set; }
        public string ObjectId { get; set; }
        public bool? IsSoftDeleted { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreatedAt { get; set; }
        public string Iss { get; set; }
        public string Aud { get; set; }
        public string Sub { get; set; }
        public Guid? ParentTenantId { get; set; }

        [ForeignKey(nameof(ParentTenantId))]
        [InverseProperty(nameof(Tenant.Principals))]
        public virtual Tenant ParentTenant { get; set; }
        [InverseProperty(nameof(HorselessSession.HorselessClaimsPrincipal))]
        public virtual ICollection<HorselessSession> HorselessSessions { get; set; }

        [ForeignKey("Principals_Id")]
        [InverseProperty(nameof(AccessControlEntry.Principals))]
        public virtual ICollection<AccessControlEntry> AccessControlEntries { get; set; }
    }
}