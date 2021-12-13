using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.HostingModel.Entities;

namespace TheHorselessNewspaper.AdminPortal.TenantAdminServices.Models.Hosting
{
    public class HostDTO
    {
        public string? ObjectId { get; set; }
        public string? DNSSafeHost { get; set; }
        public string? IsTenanantDiscriminator { get; set; }

        public virtual RoutingDiscriminatorDTO? RoutingDiscriminator { get; set; }
    }
}
