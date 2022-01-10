﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    [Index(nameof(TenantId), Name = "IX_FK_TenantHorselessClaimsPrincipal")]
    public partial class HorselessClaimsPrincipal
    {
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
        public Guid? TenantId { get; set; }

        [ForeignKey(nameof(TenantId))]
        [InverseProperty("HorselessClaimsPrincipals")]
        public virtual Tenant Tenant { get; set; }
    }
}