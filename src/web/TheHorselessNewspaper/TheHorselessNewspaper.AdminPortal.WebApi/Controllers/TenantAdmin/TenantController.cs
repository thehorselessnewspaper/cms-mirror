using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Linq.Expressions;
using TheHorselessNewspaper.AdminPortal.TenantAdminServices;
using TheHorselessNewspaper.Schemas.HostingModel.Entities;

namespace TheHorselessNewspaper.AdminPortal.WebApi.Controllers.TenantAdmin
{
    [Route("api/[controller]")]
    [ApiController]
    public class TenantController : ControllerBase
    {

        ITenantAdminService TenantAdminService { get; set; }

        public TenantController(ITenantAdminService tenantAdminService)
        {
            this.TenantAdminService = tenantAdminService;
        }

        public async Task<List<Tenant>> FilerTenantsByTenantId(List<string> tenantIds)
        {

            var result = await this.TenantAdminService.FilterTenants(t => tenantIds.Contains(t.TenantId));
            return result;
        }

        public async Task<List<Tenant>> FilerTenantsByTenantDisplayName(List<string> tenantNames)
        {

            var result = await this.TenantAdminService.FilterTenants(t => tenantNames.Contains(t.TenantDisplayName));
            return result;
        }
    }
}
