using Finbuckle.MultiTenant;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using TheHorselessNewspaper.HostingModel.Context;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum TenantDeploymentWorkflowState
    {
        PendingApproval,
        Approved,
        ExistsInContentDb,
        HasOwners,
        HasACL,
        HasTenantFilesystem,
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

    [MultiTenant]

    public partial class TenantIdentifierStrategyContainer : IContentRowLevelSecured
    {
        public TenantIdentifierStrategyContainer() { }

        [Key]
        public Guid Id { get; set; }
        public TenantIdentifierStrategyName TenantIdentifierStrategyName { get; set; }

        public string DisplayName { get; set; } = string.Empty;


        public string ObjectId { get; set; } = String.Empty;
        public bool? IsSoftDeleted { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreatedAt { get; set; }

        [Timestamp]
        public byte[] Timestamp { get; set; } = BitConverter.GetBytes(DateTime.UtcNow.Ticks);

        public string TenantIdentifier { get; set; } = string.Empty;

        public Guid? StrategyId { get; set; }

        public TenantIdentifierStrategy? Strategy { get; set; }


        public ICollection<AccessControlEntry> AccessControlEntries { get; set; } = new HashSet<AccessControlEntry>();
        public ICollection<Principal> Owners { get; set; } = new HashSet<Principal>();
        public DateTime? UpdatedAt { get; set; }
        public string? DictionaryKey { get; set; }

    }


    /// <summary>
    /// collects the strategies thta can be used to identify a tenant
    /// modelled as a wrapper for a collection payload
    /// to avoid awkardness with mapping owned collections
    /// </summary>
    [MultiTenant]
    public partial class TenantIdentifierStrategy : IContentRowLevelSecured
    {
        public TenantIdentifierStrategy() { }

        [Key]
        // [Column("TenantIdentifierStrategyId")]
        public Guid Id { get; set; }

        public string DisplayName { get; set; } = string.Empty;

        public string ObjectId { get; set; } = String.Empty;

        public bool? IsSoftDeleted { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreatedAt { get; set; }

        [Timestamp]
        public byte[] Timestamp { get; set; } = BitConverter.GetBytes(DateTime.UtcNow.Ticks);



        // public Guid? TenantId { get; set; }

        // [InverseProperty(nameof(ContentEntities.Tenant.TenantIdentifierStrategy))]
        // public Tenant? Tenant { get; set; } = new Tenant();

        // [InverseProperty(nameof(TenantIdentifierStrategyContainer.Strategy))]
        public ICollection<TenantIdentifierStrategyContainer> StrategyContainers { get; set; } = new HashSet<TenantIdentifierStrategyContainer>();
        public ICollection<AccessControlEntry> AccessControlEntries { get; set; } = new HashSet<AccessControlEntry>();
        public ICollection<Principal> Owners { get; set; } = new HashSet<Principal>();
        public DateTime? UpdatedAt { get; set; }
        public string? DictionaryKey { get; set; }
    }

    /// <summary>
    /// tenant is a singleton in the current multitenant topology
    /// and is at the root of the data model affected by user interactions
    /// 
    /// due to finbuckle's tenant resolution strategies in the absence
    /// of a current http context tenant resolution middleware misfires
    /// 
    /// this implies a fallback strategy and a catchall tenant, implemented
    /// as a management tenant that is the source of all other tenant registrations
    /// 
    /// the management tenant can scan tenant collections more easily if the
    /// tenant entity is not multitenanted
    /// 
    /// or maybe not - we will se
    /// </summary>
    [MultiTenant]
    [Microsoft.EntityFrameworkCore.Index(nameof(TenantIdentifier), IsUnique = true)]
    public partial class Tenant : IContentRowLevelSecured, IMetaDataModelEntity
    {
        public bool IsPublished { get; set; }

        /// <summary>
        /// prospectively overrides all other tenant base url contexts
        /// </summary>
        public string BaseUrl { get; set; } = String.Empty;

        public Guid? TenantIdentifierStrategyId { get; set; }

        // [InverseProperty(nameof(ContentEntities.TenantIdentifierStrategy.Tenant))]

        // public TenantIdentifierStrategy? TenantIdentifierStrategy { get; set; } 

        /// <summary>
        /// prospectively override other tenant identifier definitions
        /// </summary>
        public string? TenantIdentifier { get; set; }



        [Timestamp]
        public byte[] Timestamp { get; set; } = BitConverter.GetBytes(DateTime.UtcNow.Ticks);
        public DateTime? UpdatedAt { get; set; }



        // [InverseProperty(nameof(JSONAsset.Tenants))]
        public HashSet<JSONAsset> MetaData { get; set; } = new HashSet<JSONAsset>();

        public string? DictionaryKey { get; set; }


        // [InverseProperty(nameof(Principal.OwnedTenants))]
        public ICollection<Principal> Owners { get; set; } = new HashSet<Principal>();


        // [ForeignKey("FK_PrincipalAccounts")]
        // [InverseProperty(nameof(Principal.Tenants))]
        public ICollection<Principal> Accounts { get; set; } = new HashSet<Principal>();

        public TenantDeploymentWorkflowState DeploymentState { get; set; } = TenantDeploymentWorkflowState.PendingApproval;

        // [ForeignKey("FK_AccessControlEntryManagedTenants")]
        [InverseProperty(nameof(AccessControlEntry.Tenants))]
        public ICollection<AccessControlEntry> AccessControlEntries { get; set; } = new HashSet<AccessControlEntry>();

        // [ForeignKey("FK_ContentCollectionTenants")]
        // [InverseProperty(nameof(ContentCollection.Tenants))]
        public ICollection<ContentCollection> ContentCollections { get; set; } = new HashSet<ContentCollection>();
    }
}
