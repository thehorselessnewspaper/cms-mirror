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
    public partial class Principal: IQueryableModelEntity, IHostingRowLevelSecured
    {

        [Timestamp]
        public byte[] Timestamp { get; set; } = BitConverter.GetBytes(DateTime.UtcNow.Ticks);

        [NotMapped]
        public ICollection<AccessControlEntry> AccessControlList { get; set; }

        [NotMapped]
        public ICollection<Principal> Owners { get; set;  }

        public virtual ICollection<Tenant> Tenants { get; set; } = new HashSet<Tenant>();
        
        [ForeignKey("AccessControlEntryId")]
        [InverseProperty("Principals")]
        public ICollection<AccessControlEntry> AccessControlEntries { get; set; }
    }
}