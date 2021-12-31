using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TheHorselessNewspaper.Schemas.HostingModel.DTO
{
    public partial class WebAPITenantInfoDTO
    {
        public Guid Id { get; set; }
        public string DisplayName { get; set; }
        public string ObjectId { get; set; }
        public bool? IsSoftDeleted { get; set; }
        public DateTime? CreatedAt { get; set; }
        public string Identifier { get; set; }
        public string Name { get; set; }
        public string ConnectionString { get; set; }
        public Guid? TenantInfo_Id { get; set; }

        public virtual TenantInfoDTO TenantInfo { get; set; }
    }
}
