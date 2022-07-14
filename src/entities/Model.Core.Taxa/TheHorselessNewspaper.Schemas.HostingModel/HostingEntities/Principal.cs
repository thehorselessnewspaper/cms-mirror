﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace TheHorselessNewspaper.Schemas.HostingModel.HostingEntities
{
    public partial class Principal
    {
        public Principal()
        {
            OwnedTenants = new HashSet<Tenant>();
            TenantAccounts = new HashSet<Tenant>();
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

        [ForeignKey("Owners_Id")]
        [InverseProperty("Owners")]
        public virtual ICollection<Tenant> OwnedTenants { get; set; }
        [ForeignKey("Accounts_Id")]
        [InverseProperty("Accounts")]
        public virtual ICollection<Tenant> TenantAccounts { get; set; }
    }
}