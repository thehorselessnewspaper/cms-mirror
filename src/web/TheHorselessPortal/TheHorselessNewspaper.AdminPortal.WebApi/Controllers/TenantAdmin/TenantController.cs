﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Linq.Expressions;
using TheHorselessNewspaper.AdminPortal.TenantAdminServices;
using TheHorselessNewspaper.AdminPortal.TenantAdminServices.Models.Tenant;
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

        public async Task<List<TenantDTO>> FilerTenantsByTenantId(List<string> tenantIds)
        {

            var result = await this.TenantAdminService.GetTenants(t => tenantIds.Contains(t.ObjectId));
            return result;
        }

        public async Task<List<TenantDTO>> FilerTenantsByTenantDisplayName(List<string> tenantNames)
        {

            var result = await this.TenantAdminService.GetTenants(t => tenantNames.Contains(t.DisplayName));
            return result;
        }
    }
}
