using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.HostingModel.Entities;

namespace TheHorselessNewspaper.Schemas.HostingModel.DTO
{
    public partial class HostDTO
    {
        public Guid Id { get; set; }
        public string DNSSafeHost { get; set; }
        public string IsTenanantDiscriminator { get; set; }
        public Guid? RoutingDiscriminatorId { get; set; }
        public string ObjectId { get; set; }
        public string HostDisplayName { get; set; }

        public RoutingDiscriminatorDTO RoutingDiscriminator { get; set; }
    }
}
