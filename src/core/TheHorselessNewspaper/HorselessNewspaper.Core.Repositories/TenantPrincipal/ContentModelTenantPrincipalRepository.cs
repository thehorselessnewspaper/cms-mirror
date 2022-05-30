using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using HostingModel = TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using System.Security.Claims;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.HostingModel.HostingEntities.Query;

namespace HorselessNewspaper.Core.Repositories.TenantPrincipal
{
    public class ContentModelTenantPrincipalRepository : IContentModelTenantPrincipalRepository
    {
        public ContentModelTenantPrincipalRepository(ILogger<ContentModelTenantPrincipalRepository> logger,
            IQueryableContentModelOperator<ContentModel.Principal> contentModelPrincipalOperator,
            IQueryableContentModelOperator<ContentModel.Tenant> contentModelTenantOperator,
            IQueryableHostingModelOperator<HostingModel.Tenant> hostingModelTenantOperator)
        {
            this.logger = logger;
            this.ContentModelPrincipalOperator = contentModelPrincipalOperator;
            this.ContentModelTenantOperator = contentModelTenantOperator;
            this.HostingModelTenantOperator = hostingModelTenantOperator;
        }

        public async Task<RepositoryResult<ContentModel.Principal>> GetPrincipal(string UPN, string email, string ISS, string aud)
        {
            var ret = new RepositoryResult<ContentModel.Principal>();

            var principalMatcher = await ContentModelPrincipalOperator
                                .Read(w => 
                                    w.UPN.Equals(UPN, StringComparison.OrdinalIgnoreCase)
                                    && w.Email.Equals(email, StringComparison.OrdinalIgnoreCase)
                                    && w.Iss.Equals(ISS, StringComparison.OrdinalIgnoreCase) 
                                    && w.Aud.Equals(aud, StringComparison.OrdinalIgnoreCase));

            var matchedPrincipal = principalMatcher.First();
            if(matchedPrincipal != null)
            {
                ret.Payload = matchedPrincipal;
                ret.OperationSuccessful = true;
            }
            else
            {
                ret.OperationSuccessful = false;
            }

            return ret;
        }

        public ILogger<ContentModelTenantPrincipalRepository> logger { get; }
        public IQueryableContentModelOperator<Principal> ContentModelPrincipalOperator { get; }
        public IQueryableContentModelOperator<Tenant> ContentModelTenantOperator { get; }
        public IQueryableHostingModelOperator<HostingModel.Tenant> HostingModelTenantOperator { get; }
    }
}
