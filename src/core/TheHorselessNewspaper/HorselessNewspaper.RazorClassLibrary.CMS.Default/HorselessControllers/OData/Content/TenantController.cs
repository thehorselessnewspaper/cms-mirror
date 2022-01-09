using Microsoft.AspNetCore.OData.Routing.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using Finbuckle.MultiTenant;
using Microsoft.AspNetCore.Mvc;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.OData.Content
{
    internal class TenantController :
        ODataController,
        IContentCollectionController<IQueryableContentModelOperator<ContentModel.Tenant>, ContentModel.Tenant>
    {
        private readonly IQueryableContentModelOperator<Tenant> _tenantService;
        private readonly ITenantInfo _tenantInfo;

        public TenantController(IQueryableContentModelOperator<ContentModel.Tenant> tenantService, Finbuckle.MultiTenant.ITenantInfo tenantInfo)
        {
            this._tenantService = tenantService;
            this._tenantInfo = tenantInfo;
        }

        public Task<IActionResult> Create([FromBody] Tenant entity)
        {
            throw new NotImplementedException();
        }

        public Task<IActionResult> GetByObjectId(string objectId)
        {
            throw new NotImplementedException();
        }

        public Task<IActionResult> Query()
        {
            throw new NotImplementedException();
        }

        public Task<IActionResult> Update([FromBody] Tenant contentCollection)
        {
            throw new NotImplementedException();
        }
    }
}
