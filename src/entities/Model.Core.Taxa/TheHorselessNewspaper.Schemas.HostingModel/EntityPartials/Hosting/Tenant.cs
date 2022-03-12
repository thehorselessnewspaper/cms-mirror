﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using Finbuckle.MultiTenant;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using TheHorselessNewspaper.HostingModel.Context;

namespace TheHorselessNewspaper.Schemas.HostingModel.HostingEntities
{

    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum TenantIdentifierStrategyName
    {
        STATIC,
        BASE_PATH,
        ASPNETCORE_ROUTE,
        DNS_HOSTNAME,
        DNS_FQDN
    }

    [MultiTenant]
    public class TenantIdentifierStrategyContainer
    {
        [Key]
        public Guid? Id { get; set; }
        public TenantIdentifierStrategyName TenantIdentifierStrategyName { get; set; }

        [Timestamp]
        public byte[] Timestamp { get; set; } = BitConverter.GetBytes(DateTime.UtcNow.Ticks);

        [ForeignKey(nameof(TenantIdentifierStrategyContainer.Strategy))]
        public Guid? StrategyId { get; set; }

        [InverseProperty(nameof(TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.TenantIdentifierStrategy.StrategyContainers))]
        public TenantIdentifierStrategy? Strategy { get; set; }
    }

    /// <summary>
    /// collects the strategies thta can be used to identify a tenant
    /// modelled as a wrapper for a collection payload
    /// to avoid awkardness with mapping owned collections
    /// </summary>
    [MultiTenant]
    public partial class TenantIdentifierStrategy
    {
        [Key]
        public Guid Id { get; set; }
        public string DisplayName { get; set; } = string.Empty;

        public string ObjectId { get; set; }
        public bool? IsSoftDeleted { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreatedAt { get; set; }

        public Guid? TargetTenantId { get; set; }

        [ForeignKey(nameof(TenantIdentifierStrategy.TargetTenantId))]
        [InverseProperty(nameof(Tenant.TenantIdentifierStrategy))]
        public Tenant TargetTenant { get; set; }

        [InverseProperty(nameof(TenantIdentifierStrategyContainer.Strategy))]
        public virtual ICollection<TenantIdentifierStrategyContainer> StrategyContainers { get; set; } = new List<TenantIdentifierStrategyContainer>();
    }

    /// <summary>
    /// watch for interactions with
    /// multitenant subsystem
    /// </summary>
    public partial class Tenant : IHostingRowLevelSecured
    {
        public bool IsPublished { get; set; }

        [InverseProperty(nameof(TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.TenantIdentifierStrategy.TargetTenant))]
        public TenantIdentifierStrategy? TenantIdentifierStrategy { get; set; }


        public ICollection<AccessControlEntry> AccessControlList { get; set; } = new HashSet<AccessControlEntry>();


        //public Guid? OwnersId { get; set; }

        //[ForeignKey(nameof(OwnersId))]
        [InverseProperty(nameof(Principal.OwnedTenants))]
        public ICollection<Principal> Owners { get; set; } = new HashSet<Principal>();


        //public Guid? PrincipalsId { get; set; }

        //[ForeignKey(nameof(PrincipalsId))]
        [InverseProperty(nameof(Principal.Tenants))]

        public ICollection<Principal> Principals { get; set; } = new HashSet<Principal>();

        [Timestamp]
        public byte[] Timestamp { get; set; } = BitConverter.GetBytes(DateTime.UtcNow.Ticks);

        //public Guid? TenantInfosId { get; set; }


        public virtual ICollection<TenantInfo> TenantInfos { get; set; } = new HashSet<TenantInfo>();
    }
}