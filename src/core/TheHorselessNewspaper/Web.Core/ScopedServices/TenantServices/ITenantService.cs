using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.HostingModel.Entities;

namespace HorselessNewspaper.Web.Core.ScopedServices.TenantServices
{
    public interface ITenantService
    {
        public Task<Tenant> GetCurrentTenant();
    }
}
