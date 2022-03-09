﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
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

    public class TenantIdentifierStrategyContainer
    {
        [Key]
        // [Column("TenantIdentifierStrategyContainerId")]
        public Guid? Id { get; set; }
        public TenantIdentifierStrategyName TenantIdentifierStrategyName { get; set; }

        public TenantIdentifierStrategy? Strategy { get; set; }
    }


    public partial class TenantIdentifierStrategy
    {
        [Key]
        [Column("TenantIdentifierStrategyId")]
        public Guid Id { get; set; }
        public string DisplayName { get; set; } = string.Empty;

        public string ObjectId { get; set; }
        public bool? IsSoftDeleted { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreatedAt { get; set; }

        /// TODO
        /// resolve this collection chail 
        /// </summary>
        public virtual ICollection<TenantIdentifierStrategyContainer> StrategyContainers { get; set; } = new List<TenantIdentifierStrategyContainer>();
    }

    public partial class Tenant : IHostingRowLevelSecured
    {
        public bool IsPublished { get; set; }
        public TenantIdentifierStrategy? TenantIdentifierStrategy { get; set; }
        public ICollection<AccessControlEntry> AccessControlList { get; set; } = new HashSet<AccessControlEntry>();
        
        [NotMapped]
        public ICollection<Principal> Owners { get; set; } = new HashSet<Principal>();

        [ForeignKey("PrincipalId")]
        [InverseProperty(nameof(Principal.Tenants))]

        public ICollection<Principal> Principals { get; set; } = new HashSet<Principal>();

        [Timestamp]
        public byte[] Timestamp { get; set; } = BitConverter.GetBytes(DateTime.UtcNow.Ticks);
    }
}