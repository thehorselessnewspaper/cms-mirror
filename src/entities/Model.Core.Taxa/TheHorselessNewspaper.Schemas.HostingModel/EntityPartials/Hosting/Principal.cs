﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using TheHorselessNewspaper.HostingModel.Context;

namespace TheHorselessNewspaper.Schemas.HostingModel.HostingEntities
{

    public partial class HorselessPrincipal
    {

    }

    [Microsoft.EntityFrameworkCore.Index(nameof(PreferredUserName), IsUnique = true)]
    public partial class Principal : IQueryableModelEntity, IHostingRowLevelSecured
    {
        public string UPN { get; set; } = string.Empty;

        public string Email { get; set; } = string.Empty;

        public string PreferredUserName { get; set; } = string.Empty;

        [Timestamp]
        public byte[] Timestamp { get; set; } = BitConverter.GetBytes(DateTime.UtcNow.Ticks);
        public DateTime? UpdatedAt { get; set; }
        public string? DictionaryKey { get; set; }

        [ForeignKey("FK_OWNED_TENANTS")]
        [InverseProperty(nameof(Tenant.Owners))]
        public ICollection<Tenant> OwnedTenants { get; set; } = new HashSet<Tenant>();

        [ForeignKey("FK_TENANT_ACCOUNTS")]
        [InverseProperty(nameof(Tenant.Accounts))]
        public ICollection<Tenant> TenantAccounts { get; set; } = new HashSet<Tenant>();

        [NotMapped]
        public ICollection<AccessControlEntry> AccessControlEntries { get; set; } = new HashSet<AccessControlEntry>();


        [NotMapped]
        public ICollection<Principal> Owners { get; set; }
    }
}