using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Finbuckle.MultiTenant;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using HostingModel = TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using TheHorselessNewspaper.HostingModel.Context;
using TheHorselessNewspaper.HostingModel.Entities.Query;
using TheHorselessNewspaper.Schemas.HostingModel.Context;
using System.Security.Claims;

namespace HorselessNewspaper.Web.Core.Extensions.ClaimExtensions
{
    public static class HorselessClaimExtensions
    {
        public static string Aud(this IEnumerable<Claim> claims)
        {
            var ret = string.Empty;
            var matchedClaim = claims.Where(w => w.Type == "aud").ToList();
            ret = matchedClaim.FirstOrDefault().Value;
            return ret;
        }

        public static string Iss(this IEnumerable<Claim> claims)
        {
            var ret = string.Empty;
            var matchedClaim = claims.Where(w => w.Type == "iss").ToList();
            ret = matchedClaim.FirstOrDefault().Value;
            return ret;
        }

        public static string Sub(this IEnumerable<Claim> claims)
        {
            var ret = string.Empty;
            var matchedClaim = claims.Where(w => w.Type == ClaimTypes.NameIdentifier).ToList();
            ret = matchedClaim.FirstOrDefault().Value;
            return ret;
        }

        public static string Upn(this IEnumerable<Claim> claims)
        {
            var ret = string.Empty;
            var matchedClaim = claims.Where(w => w.Type == ClaimTypes.Upn).ToList();
            ret = matchedClaim.FirstOrDefault().Value;
            return ret;
        }

        public static string Email(this IEnumerable<Claim> claims)
        {
            var ret = string.Empty;
            var matchedClaim = claims.Where(w => w.Type == ClaimTypes.Email).ToList();
            ret = matchedClaim.FirstOrDefault().Value;
            return ret;
        }

        public static string PreferredUsername(this IEnumerable<Claim> claims)
        {
            var ret = string.Empty;
            var matchedClaim = claims.Where(w => w.Type == "preferred_username").ToList();
            ret = matchedClaim.FirstOrDefault().Value;
            return ret;
        }

        /// <summary>
        /// implicit use assumes claime value Admin
        /// 
        /// todo - support providing a list of Claim/Value expectations
        /// </summary>
        /// <param name="httpContext"></param>
        /// <param name="validAdminClaims"></param>
        /// <returns></returns>
        public static bool HasDevopsAdminClaims(this HttpContext httpContext, List<string>? validAdminClaims = null)
        {
            bool ret = false;

            var claims = httpContext.User.Identities.FirstOrDefault().Claims.ToList();
            if (GetIsMustHandleProvidedClaimValues(httpContext, validAdminClaims))
            {
                var claimValues = claims.Select(s => s.Value).ToList();
                var q = claimValues.Where(w => validAdminClaims.Contains(w)).ToList();
                if (q.Any())
                {
                    ret = true;
                }

            }
            else if (claims.Any())
            {
                // todo - centralize claim name/type/issuer                
                var hasAdminClaims = httpContext.User.HasClaim((claim) => claim.Value.ToLower().Contains("admin"));
                ret = hasAdminClaims;
            }


            return ret;
        }

        public static async Task<bool> IsTenantOwner(this HttpContext httpContext, ITenantInfo currentTenant, IConfiguration configuration, IServiceProvider serviceProvider)
        {
            bool ret = false;
            try
            {
                if (!httpContext.User.Identity.IsAuthenticated)
                {
                    return false;
                }

                var sub = httpContext.User.Claims.FirstOrDefault().Subject.Name;
                var iss = httpContext.User.Claims.FirstOrDefault().Issuer;

                using (var scope = serviceProvider.CreateScope())
                {
                    var tenantQuery = GetQueryForContentEntity<ContentModel.Tenant>(scope);
                    var tenantQueryResult = await tenantQuery.Read(r => r.Id.Equals(currentTenant.Id));
                    ret = tenantQueryResult.Where(w => w.Owners.Where(o => o.Sub.Equals(sub) && o.Iss.Equals(iss)).Any()).Any();
                }

            }
            catch (Exception e)
            {
                ret = false;
            }
            return ret;
        }

        public static IQueryableHostingModelOperator<T> GetQueryForHostingEntity<T>(IServiceScope scope)
           where T : class, IHostingRowLevelSecured
        {
            return scope.ServiceProvider.GetRequiredService<IQueryableHostingModelOperator<T>>();
        }

        public static IQueryableContentModelOperator<T> GetQueryForContentEntity<T>(IServiceScope scope)
        where T : class, IContentRowLevelSecured
        {
            return scope.ServiceProvider.GetRequiredService<IQueryableContentModelOperator<T>>();
        }


        private static bool GetIsMustHandleProvidedClaimValues(HttpContext httpContext, List<string>? validAdminClaims)
        {
            return httpContext.User.Claims.Any() == true && validAdminClaims != null;
        }
    }
}
