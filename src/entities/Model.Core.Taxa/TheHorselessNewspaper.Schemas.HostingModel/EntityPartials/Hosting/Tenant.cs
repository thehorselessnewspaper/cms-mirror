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
    public enum TenantDeploymentWorkflowState
    {
        PendingApproval,
        Approved,
        ExistsInContentDb,
        HasOwners,
        HasACL,
        HasContentCollection,
        DeploymentComplete
    }

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
        public Guid? Id { get; set; }
        public TenantIdentifierStrategyName TenantIdentifierStrategyName { get; set; }

        [Timestamp]
        public byte[] Timestamp { get; set; } = BitConverter.GetBytes(DateTime.UtcNow.Ticks);

        public Guid? StrategyId { get; set; }

        [InverseProperty(nameof(TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.TenantIdentifierStrategy.StrategyContainers))]
        public TenantIdentifierStrategy? Strategy { get; set; }
    }

    /// <summary>
    /// collects the strategies thta can be used to identify a tenant
    /// modelled as a wrapper for a collection payload
    /// to avoid awkardness with mapping owned collections
    /// </summary>
    public partial class TenantIdentifierStrategy
    {
        [Key]
        public Guid Id { get; set; }
        public string DisplayName { get; set; } = string.Empty;

        public string ObjectId { get; set; }
        public bool? IsSoftDeleted { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreatedAt { get; set; }

        public Guid? TenantId { get; set; }

        // [InverseProperty(nameof(HostingEntities.Tenant.TenantIdentifierStrategy))]
        public Tenant? Tenant { get; set; }

        [InverseProperty(nameof(TenantIdentifierStrategyContainer.Strategy))]
        public virtual ICollection<TenantIdentifierStrategyContainer> StrategyContainers { get; set; } = new List<TenantIdentifierStrategyContainer>();
    }

    /// <summary>
    /// watch for interactions with
    /// multitenant subsystem
    /// </summary>
    [Microsoft.EntityFrameworkCore.Index(nameof(TenantIdentifier), IsUnique = true)]
    public partial class Tenant : IHostingRowLevelSecured
    {
        public bool IsPublished { get; set; }

        /// <summary>
        /// prospectively overrides all other tenant base url contexts
        /// </summary>
        public string BaseUrl { get; set; } = String.Empty;

        /// <summary>
        /// prospectively override other tenant identifier definitions
        /// </summary>
        public string? TenantIdentifier { get; set; }

        // public Guid? TenantIdentifierStrategyId { get; set; }
        
        // [InverseProperty(nameof(HostingEntities.TenantIdentifierStrategy.Tenant))]
        public TenantIdentifierStrategy? TenantIdentifierStrategy { get; set; }


        [Timestamp]
        public byte[] Timestamp { get; set; } = BitConverter.GetBytes(DateTime.UtcNow.Ticks);

        public virtual ICollection<TenantInfo> TenantInfos { get; set; } = new HashSet<TenantInfo>();
        public DateTime? UpdatedAt { get; set; }
        public string? DictionaryKey { get; set; }

        
        [InverseProperty(nameof(AccessControlEntry.Tenants))]
        public ICollection<AccessControlEntry> AccessControlEntries { get; set; } = new HashSet<AccessControlEntry>();


        // [InverseProperty(nameof(Principal.OwnedTenants))]
        public ICollection<Principal> Owners { get; set; } = new HashSet<Principal>();

        public ICollection<KeyCloakConfiguration> KeyCloakConfigurations { get; set; } = new HashSet<KeyCloakConfiguration>();

        public ICollection<NugetPackage> NugetPackages { get; set; } = new HashSet<NugetPackage>();

        [InverseProperty(nameof(Principal.Tenants))]
        public ICollection<Principal> Accounts { get; set; } = new HashSet<Principal>();

        public TenantDeploymentWorkflowState DeploymentState { get; set; } = TenantDeploymentWorkflowState.PendingApproval;
    }


}