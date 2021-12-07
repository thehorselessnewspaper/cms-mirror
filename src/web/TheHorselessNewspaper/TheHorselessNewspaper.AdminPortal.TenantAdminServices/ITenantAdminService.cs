using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.HostingModel.Entities;

namespace TheHorselessNewspaper.AdminPortal.TenantAdminServices
{
    public interface ITenantAdminService
    {
        THNLPHostingContext DbContext { get; set; }

        public Task<List<Tenant>> FilterTenants(Expression<Func<Tenant, bool>> filterExpression);

        public Task<Tenant> SetTenant(Tenant tenant);

        public Task<Tenant> GetTenantByTenantId(string tenantId);
    }
}
