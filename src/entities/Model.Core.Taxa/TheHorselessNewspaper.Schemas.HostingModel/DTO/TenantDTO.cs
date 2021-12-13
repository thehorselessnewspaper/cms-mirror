using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.HostingModel.Entities;

namespace TheHorselessNewspaper.Schemas.HostingModel.DTO
{
    public partial class TenantDTO
    {
        public TenantDTO()
        {
            RoutingDiscriminators = new HashSet<RoutingDiscriminatorDTO>();
        }

        public Guid Id { get; set; }
        public string TenantDisplayName { get; set; }
        public string ObjectId { get; set; }
        public bool IsSoftDeleted { get; set; }

        public ICollection<RoutingDiscriminatorDTO> RoutingDiscriminators { get; set; }
    }
}
