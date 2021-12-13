using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.HostingModel.Entities;

namespace TheHorselessNewspaper.Schemas.HostingModel.DTO
{
    public partial class UriPathDTO
    {
        public Guid Id { get; set; }
        public string AbsolutePath { get; set; }
        public string IsTenantDiscriminator { get; set; }
        public Guid RoutingDiscriminatorId { get; set; }
        public string ObjectId { get; set; }
        public string HostDisplayName { get; set; }

        public RoutingDiscriminatorDTO RoutingDiscriminator { get; set; }
    }
}
