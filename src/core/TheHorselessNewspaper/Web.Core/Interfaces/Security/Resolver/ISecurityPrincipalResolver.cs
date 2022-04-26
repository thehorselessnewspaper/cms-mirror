using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace HorselessNewspaper.Web.Core.Interfaces.Security.Resolver
{
    public interface ISecurityPrincipalResolver
    {
        Task<Tenant> EnsureTenant();
        Task<string> GetClientCredentialsGrantToken();

        /// <summary>
        /// get principal from current (Http) context
        /// and/or database match against claims
        /// and other evidence
        /// </summary>
        /// <returns></returns>
        public Task<Principal> GetCurrentPrincipal();

        public Task<bool> EnsureCanResoleCurrentTenant();

    }
}
