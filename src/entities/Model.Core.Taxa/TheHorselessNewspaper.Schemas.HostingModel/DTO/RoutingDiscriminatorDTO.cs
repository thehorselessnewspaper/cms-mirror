using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.HostingModel.Entities;

namespace TheHorselessNewspaper.Schemas.HostingModel.DTO
{
    public partial class RoutingDiscriminatorDTO
    {
        public RoutingDiscriminatorDTO()
        {
            Hosts = new HashSet<HostDTO>();
            UriPaths = new HashSet<UriPathDTO>();
        }

        public Guid Id { get; set; }
        public bool IsActive { get; set; }
        public Guid? TenantId { get; set; }
        public string ObjectId { get; set; }
        public string RuleDisplayName { get; set; }

        public TenantDTO Tenant { get; set; }
        public ICollection<HostDTO> Hosts { get; set; }
        public ICollection<UriPathDTO> UriPaths { get; set; }
    }
}
