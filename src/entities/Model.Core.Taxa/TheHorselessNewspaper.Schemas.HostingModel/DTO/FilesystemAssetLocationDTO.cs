using TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;

namespace TheHorselessNewspaper.HostingModel.DTO
{
    public class FilesystemAssetLocationDTO
    {
        public FilesystemAssetLocationDTO()
        {
            NugetPackages = new HashSet<NugetPackageDTO>();
            HostWWWRootAssetLocations = new HashSet<HostDTO>();
            UriPathWWWRootAssetLocations = new HashSet<UriPathDTO>();
        }

        public Guid Id { get; set; }
        public string DisplayName { get; set; }
        public DateTime? CreatedAt { get; set; }
        public string AssetURI { get; set; }
        public Guid? TenantInfoId { get; set; }

        public virtual TenantInfo TenantInfo { get; set; }
        public virtual ICollection<NugetPackageDTO> NugetPackages { get; set; }

        public virtual ICollection<HostDTO> HostWWWRootAssetLocations { get; set; }
        public virtual ICollection<UriPathDTO> UriPathWWWRootAssetLocations { get; set; }
    }
}


