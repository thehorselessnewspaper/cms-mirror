namespace TheHorselessNewspaper.Schemas.HostingModel.DTO
{
    public partial class TenantDTO
    {
        public TenantDTO()
        {
            RoutingDiscriminators = new HashSet<RoutingDiscriminatorDTO>();
            AvailableNugetPackages = new HashSet<NugetPackageDTO>();
        }

        public Guid Id { get; set; }
        public string DisplayName { get; set; }
        public string ObjectId { get; set; }
        public bool? IsSoftDeleted { get; set; }
        public DateTime? CreatedAt { get; set; }
        public Guid? KeyCloakConfigurationId { get; set; }

        public virtual KeyCloakConfigurationDTO KeyCloakConfiguration { get; set; }
        public virtual ICollection<RoutingDiscriminatorDTO> RoutingDiscriminators { get; set; }

        public virtual ICollection<NugetPackageDTO> AvailableNugetPackages { get; set; }
    }
}
