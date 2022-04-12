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

    // [Table("Principals")]
    public partial class Principal : IQueryableModelEntity, IHostingRowLevelSecured
    {
        public string UPN { get; set; } = string.Empty;

        public string Email { get; set; } = string.Empty;

        public string PreferredUserName { get; set; } = string.Empty;

        [Timestamp]
        public byte[] Timestamp { get; set; } = BitConverter.GetBytes(DateTime.UtcNow.Ticks);

        [NotMapped]
        public ICollection<AccessControlEntry> AccessControlList { get; set; } = new HashSet<AccessControlEntry>();

        [NotMapped]
        public ICollection<Principal> Owners { get; set;  }

        public virtual ICollection<Tenant> Tenants { get; set; } = new HashSet<Tenant>();

        public Guid? AccessControlEntriesId { get; set; }

        [ForeignKey(nameof(AccessControlEntriesId))]
        [InverseProperty(nameof(AccessControlEntry.Principals))]
        public ICollection<AccessControlEntry> AccessControlEntries { get; set; }

        public Guid? OwnedTenantsId { get; set; }

        [ForeignKey(nameof(OwnedTenantsId))]
        [InverseProperty(nameof(Tenant.Owners))]
        public virtual ICollection<Tenant> OwnedTenants { get; set; } = new HashSet<Tenant>();
    }
}