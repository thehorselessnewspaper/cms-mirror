using AutoMapper;
using Microsoft.EntityFrameworkCore;
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
    /// <summary>
    /// entity operations service for Tenant Admin
    /// </summary>
    public class TenantAdminService : ITenantAdminService
    {
        public THNLPHostingContext DbContext { get; set; }

        private IMapper autoMapper { get; set; }

        public TenantAdminService(THNLPHostingContext dbContext, IMapper mapper)
        {
            this.DbContext = dbContext;
            autoMapper = mapper;
        }

        public async Task<List<TenantDTO>> GetTenants(Expression<Func<Tenant, bool>> filterExpression)
        {
            var result = new List<TenantDTO>();

            var tenants = await DbContext.Tenants.Where(filterExpression).ToListAsync<Tenant>();
            result = autoMapper.Map<List<Tenant>, List<TenantDTO>>(tenants); 


            return result;
        }

        public Task<TenantDTO> SetTenant(TenantDTO tenant)
        {
            throw new NotImplementedException();
        }

        public Task<TenantDTO> GetTenantByTenantId(string tenantId)
        {
            throw new NotImplementedException();
        }

        public Task<TenantDTO> GetTenantByObjectId(string tenantId)
        {
            throw new NotImplementedException();
        }
    }
}
