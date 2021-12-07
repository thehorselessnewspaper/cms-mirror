using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TheHorselessNewspaper.AdminPortal.WebApi.Services.TenantAdmin;
using System.Linq;
using System.Linq.Expressions;
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

        public async Task<List<Tenant>> GetTenants(List<string> tenantIds)
        {

            var result = await this.TenantAdminService.GetTenants(t => tenantIds.Contains(t.TenantId));
            return result;
        }
    }
}
