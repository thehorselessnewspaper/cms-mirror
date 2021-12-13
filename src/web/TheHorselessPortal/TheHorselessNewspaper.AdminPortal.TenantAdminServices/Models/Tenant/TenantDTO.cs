using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.AdminPortal.TenantAdminServices.Models.Hosting;
using TheHorselessNewspaper.Schemas.HostingModel.Entities;

namespace TheHorselessNewspaper.AdminPortal.TenantAdminServices.Models.Tenant
{
    public class TenantDTO
    {
        public TenantDTO()
        {
            RoutingDiscriminators = new HashSet<RoutingDiscriminatorDTO>();
        }

        public string? ObjectId { get; set; }

        public string? TenantDisplayName { get; set; }

        public virtual ICollection<RoutingDiscriminatorDTO>? RoutingDiscriminators { get; set; }
    }
}
