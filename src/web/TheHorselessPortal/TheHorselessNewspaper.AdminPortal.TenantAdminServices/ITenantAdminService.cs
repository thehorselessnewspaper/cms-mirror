using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.AdminPortal.TenantAdminServices.Models.Tenant;
using TheHorselessNewspaper.Schemas.HostingModel.Entities;

namespace TheHorselessNewspaper.AdminPortal.TenantAdminServices
{
    public interface ITenantAdminService
    {
        THNLPHostingContext DbContext { get; set; }

        public Task<List<TenantDTO>> GetTenants(Expression<Func<Tenant, bool>> filterExpression);

        public Task<TenantDTO> SetTenant(TenantDTO tenant);

        public Task<TenantDTO> GetTenantByTenantId(string tenantId);

        public Task<TenantDTO> GetTenantByObjectId(string tenantId);
    }
}
