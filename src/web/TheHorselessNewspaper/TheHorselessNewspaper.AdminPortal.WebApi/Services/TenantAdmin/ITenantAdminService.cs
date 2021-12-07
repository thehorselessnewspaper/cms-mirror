using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using TheHorselessNewspaper.Schemas.HostingModel.Entities;

namespace TheHorselessNewspaper.AdminPortal.WebApi.Services.TenantAdmin
{
    public interface ITenantAdminService
    {
        THNLPHostingContext DbContext { get; set; }

        public Task<List<Tenant>> GetTenants(Expression<Func<Tenant, bool>> filterExpression);

        public Task<Tenant> SetTenant(Tenant tenant);

        public Task<Tenant> GetTenantByTenantId(string tenantId);
    }
}
