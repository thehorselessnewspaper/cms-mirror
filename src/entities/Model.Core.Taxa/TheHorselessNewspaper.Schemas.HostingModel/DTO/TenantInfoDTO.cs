using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TheHorselessNewspaper.HostingModel.DTO
{
    public partial class TenantInfoDTO
    {
        public TenantInfoDTO()
        {
            FilesystemAssetLocations = new HashSet<FilesystemAssetLocationDTO>();
            WebAPITenantInfos = new HashSet<WebAPITenantInfoDTO>();
        }

        public Guid Id { get; set; }
        public string DisplayName { get; set; }
        public string ObjectId { get; set; }
        public bool? IsSoftDeleted { get; set; }
        public DateTime? CreatedAt { get; set; }
        public string Identifier { get; set; }
        public string Name { get; set; }
        public string ConnectionString { get; set; }

        public virtual ICollection<FilesystemAssetLocationDTO> FilesystemAssetLocations { get; set; }
        public virtual ICollection<WebAPITenantInfoDTO> WebAPITenantInfos { get; set; }
    }
}
