using Finbuckle.MultiTenant;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HorselessNewspaper.Web.Core.Services.Query.Controller.Content;
using TheHorselessNewspaper.HostingModel.MultiTenant;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using HorselessNewspaper.Web.Core.Services.Model.Extensions.Claim;
using Microsoft.AspNetCore.Http;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;

namespace HorselessNewspaper.Web.Core.Services.Query.Authorization.Contexts
{
    public interface IHorselessTenantContext
    {
        public ITenantInfo CurrentTenant { get; set; }

        public ICollection<ContentCollection> ContentCollections { get; set; }

        public ICollection<Principal> TenantUsers { get; set; }

        public ICollection<HorselessSession> TenantSessions { get; set; }
    }

    public class TenantContext : IHorselessTenantContext
    {
        private readonly IQueryableContentModelOperator<ContentCollection> contentCollectionServce;
        private readonly IQueryableContentModelOperator<Tenant> tenantCollectionService;
        private HttpContext CurrentHttpContext;

        public bool IsGlobalAdminUser
        {
            get
            {
                // curently a fuzzy match of claims profile
                // indicating a user who can log into any tenant
                var result = CurrentHttpContext.HasDevopsAdminClaims();
                return result;
            }
        }
        public ITenantInfo CurrentTenant { get; set; } = new HorselessTenantInfo();
        public ICollection<ContentCollection> ContentCollections { get; set; } = new List<ContentCollection>();
        public ICollection<Principal> TenantUsers
        {
            get
            {
                return new List<Principal>();

                //this.tenantCacheService.CurrentContentModelTenants
                //.Where(w => w.Id.Equals(this.CurrentTenant.Id))
                //.FirstOrDefault()
                //.Accounts.ToList();
            }
            set
            {
            }
        }
        public ICollection<HorselessSession> TenantSessions { get; set; }

        public TenantContext(
            //IQueryableContentModelOperator<ContentModel.ContentCollection> contentCollectionService,
            //IQueryableContentModelOperator<ContentModel.Tenant> tenantCollectionService,
            // TenantCacheService tenantCacheService,
            ITenantInfo currentTenant,
            IHttpContextAccessor ctxAccessor
            )
        {
            //this.contentCollectionServce = contentCollectionService;
            //this.tenantCollectionService = tenantCollectionService;
            CurrentTenant = currentTenant;
            // this.tenantCacheService = tenantCacheService;
            CurrentHttpContext = ctxAccessor.HttpContext;
        }


    }
}
