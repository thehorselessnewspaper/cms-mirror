using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.HostingModel.Entities;

namespace TheHorselessNewspaper.Schemas.HostingModel.DTO
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


