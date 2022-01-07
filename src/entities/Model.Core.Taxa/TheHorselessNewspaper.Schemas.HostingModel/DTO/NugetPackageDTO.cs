namespace TheHorselessNewspaper.Schemas.HostingModel.DTO
{
    public partial class NugetPackageDTO
    {
        public NugetPackageDTO()
        {
            TenantDeployments = new HashSet<TenantDTO>();
        }

        public Guid Id { get; set; }
        public string ObjectId { get; set; }
        public string PackageName { get; set; }
        public string PackageId { get; set; }
        public string Publisher { get; set; }
        public string Version { get; set; }
        public DateTime? CreatedAt { get; set; }
        public string DisplayName { get; set; }
        public Guid FilesystemAssetLocation_Id { get; set; }

        public virtual FilesystemAssetLocationDTO FilesystemAssetLocation { get; set; }

        public virtual ICollection<TenantDTO> TenantDeployments { get; set; }
    }
}
