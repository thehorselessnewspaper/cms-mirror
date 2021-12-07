using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.HostingModel.Entities;

namespace TheHorselessNewspaper.AdminPortal.TenantAdminServices
{
    /// <summary>
    /// entity operations service for Tenant Admin
    /// </summary>
    public class TenantAdminService : ITenantAdminService
    {
        public THNLPHostingContext DbContext { get; set; }

        public TenantAdminService(THNLPHostingContext dbContext)
        {
            this.DbContext = dbContext;
        }

        public async Task<List<Tenant>> GetTenants(Expression<Func<Tenant, bool>> filterExpression)
        {
            var result = await DbContext.Tenants.Where(filterExpression).ToListAsync<Tenant>();
            return result;
        }

        public Task<Tenant> SetTenant(Tenant tenant)
        {
            throw new NotImplementedException();
        }

        public Task<Tenant> GetTenantByTenantId(string tenantId)
        {
            throw new NotImplementedException();
        }
    }
}
