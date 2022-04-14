using Finbuckle.MultiTenant;
using HorselessNewspaper.Web.Core.HostedServices.Cache.TenantCache;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.HostingModel.MultiTenant;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using HorselessNewspaper.Web.Core.Extensions.ClaimExtensions;
using Microsoft.AspNetCore.Http;

namespace HorselessNewspaper.Web.Core.ScopedServices.Contexts
{
    public interface IHorselessTenantContext
    {
        public Finbuckle.MultiTenant.ITenantInfo CurrentTenant { get; set; }

        public ICollection<ContentModel.ContentCollection> ContentCollections { get; set; }

        public ICollection<ContentModel.Principal> TenantUsers { get; set; }

        public ICollection<ContentModel.HorselessSession> TenantSessions { get; set; }
    }

    internal class TenantContext : IHorselessTenantContext
    {
        private readonly IQueryableContentModelOperator<ContentCollection> contentCollectionServce;
        private readonly IQueryableContentModelOperator<Tenant> tenantCollectionService;
        private readonly TenantCacheService tenantCacheService;
        private HttpContext CurrentHttpContext;

        public bool IsGlobalAdminUser
        {
            get
            {
                // curently a fuzzy match of claims profile
                // indicating a user who can log into any tenant
                var result = this.CurrentHttpContext.HasDevopsAdminClaims();
                return result;
            }
        }
        public Finbuckle.MultiTenant.ITenantInfo CurrentTenant { get; set; } = new HorselessTenantInfo();
        public ICollection<ContentModel.ContentCollection> ContentCollections { get; set; } = new List<ContentModel.ContentCollection>();
        public ICollection<ContentModel.Principal> TenantUsers
        {
            get
            {
                return
                    this.tenantCacheService.CurrentContentModelTenants
                    .Where(w => w.Id.Equals(this.CurrentTenant.Id))
                    .FirstOrDefault()
                    .Accounts.ToList();
            }
            set
            {
            }
        }
        public ICollection<ContentModel.HorselessSession> TenantSessions { get; set; }

        public TenantContext(
            //IQueryableContentModelOperator<ContentModel.ContentCollection> contentCollectionService,
            //IQueryableContentModelOperator<ContentModel.Tenant> tenantCollectionService,
            TenantCacheService tenantCacheService,
            ITenantInfo currentTenant,
            IHttpContextAccessor ctxAccessor
            )
        {
            //this.contentCollectionServce = contentCollectionService;
            //this.tenantCollectionService = tenantCollectionService;
            this.CurrentTenant = currentTenant;
            this.tenantCacheService = tenantCacheService;
            this.CurrentHttpContext = ctxAccessor.HttpContext;
        }


    }
}
