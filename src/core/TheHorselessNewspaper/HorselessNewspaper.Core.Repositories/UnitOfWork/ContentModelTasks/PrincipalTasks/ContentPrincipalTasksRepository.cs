using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using HorselessNewspaper.Web.Core.Services.Model.Extensions.Claim;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;

namespace HorselessNewspaper.Web.Core.UnitOfWork.ContentModelTasks.PrincipalTasks
{
    /// <summary>
    /// todo - revisit making this an internal class
    /// </summary>
    public class ContentPrincipalTasksRepository : IContentPrincipalTasksRepository
    {
        private ILogger<ContentPrincipalTasksRepository> logger;

        public IQueryableContentModelOperator<Principal> ContentModelPrincipalOperator { get; }

        public ContentPrincipalTasksRepository(ILogger<ContentPrincipalTasksRepository> logger,
            IQueryableContentModelOperator<ContentModel.Principal> contentModelPrincipalOperator,
            IQueryableContentModelOperator<ContentModel.Tenant> contentModelTenantOperator)
        {
            this.logger = logger;
            this.ContentModelPrincipalOperator = contentModelPrincipalOperator;

        }

        /// <summary>
        /// apply a strategy to find a principal
        /// by a list of claims
        /// </summary>
        /// <param name="claims"></param>
        /// <returns></returns>
        public async Task<UnitOfWorkResult<ContentModel.Principal>> GetPrincipal(IEnumerable<Claim> claims)
        {
            var upn = claims.Upn();
            var email = claims.Email();
            var iss = claims.Iss();
            var aud = claims.Aud();
            var preferredUserName = claims.PreferredUsername();
            var sub = claims.Sub();

            return await GetPrincipal(upn, email, iss, aud, preferredUserName, sub);
        }

        public async Task<UnitOfWorkResult<ContentModel.Principal>> GetPrincipal(string UPN, string email, string ISS, string aud, string preferredUserName, string sub)
        {
            var ret = new UnitOfWorkResult<ContentModel.Principal>();

            var principalMatcher = await ContentModelPrincipalOperator
                                .Read(w =>
                                    w.UPN.Equals(UPN)
                                    && w.Email.Equals(email)
                                    && w.Iss.Equals(ISS)
                                    && w.Aud.Equals(aud)
                                    && w.PreferredUserName.Equals(preferredUserName)
                                    && w.Sub.Equals(sub));

            var matchedPrincipals = principalMatcher.ToList(); 
            var matchedPrincipal = matchedPrincipals.FirstOrDefault();
            if (matchedPrincipal != null)
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

    }
}
