using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.HostingModel.Entities;

namespace TheHorselessNewspaper.AdminPortal.TenantAdminServices.Models.Hosting
{
    public class UriPathDTO
    {
        public string? ObjectId { get; set; }
        public string? AbsolutePath { get; set; }
        public string? IsTenantDiscriminator { get; set; }
        public string? RoutingDiscriminatorId { get; set; }

        public virtual RoutingDiscriminatorDTO? RoutingDiscriminator { get; set; }
    }
}
