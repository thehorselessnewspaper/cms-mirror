using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using TheHorselessNewspaper.Schemas.HostingModel.Entities;

namespace TheHorselessNewspaper.AdminPortal.WebApi.Services.TenantAdmin
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
