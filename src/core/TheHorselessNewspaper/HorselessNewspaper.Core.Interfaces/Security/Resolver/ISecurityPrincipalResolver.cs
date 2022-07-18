using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HorselessNewspaper.Core.Interfaces.Model.HttpContextFeatureModels;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace HorselessNewspaper.Core.Interfaces.Security.Resolver
{
    public interface ISecurityPrincipalResolver
    {
        public Task<Tenant> EnsureTenant();
        public Task<string> GetClientCredentialsGrantToken();

        /// <summary>
        /// get principal from current (Http) context
        /// and/or database match against claims
        /// and other evidence
        /// </summary>
        /// <returns></returns>
        public Task<Principal> GetCurrentPrincipal();

        public Task<bool> EnsureCanResoleCurrentTenant();

        public Task<IHorselessHttpSessionFeature<HorselessSession>> GetCurrentSessionForPrincipal(Principal targetPrincipal);
    }
}
