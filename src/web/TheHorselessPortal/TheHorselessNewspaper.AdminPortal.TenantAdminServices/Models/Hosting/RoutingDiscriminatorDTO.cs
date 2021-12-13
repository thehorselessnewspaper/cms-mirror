using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.AdminPortal.TenantAdminServices.Models.Tenant;
using TheHorselessNewspaper.Schemas.HostingModel.Entities;

namespace TheHorselessNewspaper.AdminPortal.TenantAdminServices.Models.Hosting
{
    public class RoutingDiscriminatorDTO
    {
        public RoutingDiscriminatorDTO()
        {
            Hosts = new HashSet<HostDTO>();
            UriPaths = new HashSet<UriPath>();
        }

        public string? ObjectId { get; set; }
        public bool? IsActive { get; set; }
        public Guid? TenantId { get; set; }

        public virtual TenantDTO? Tenant { get; set; }
        public virtual ICollection<HostDTO>? Hosts { get; set; }
        public virtual ICollection<UriPath>? UriPaths { get; set; }
    }
}
