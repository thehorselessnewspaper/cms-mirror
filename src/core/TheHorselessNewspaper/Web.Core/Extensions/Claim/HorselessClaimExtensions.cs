using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.Extensions.Claim
{
    public static class HorselessClaimExtensions
    {
        /// <summary>
        /// implicit use assumes claime value Admin
        /// 
        /// todo - support providing a list of Claim/Value expectations
        /// </summary>
        /// <param name="httpContext"></param>
        /// <param name="validAdminClaims"></param>
        /// <returns></returns>
        public static bool HasAdminClaimValues(this HttpContext httpContext, List<string>? validAdminClaims = null)
        {
            bool ret = false;

            var claims = httpContext.User.Identities.FirstOrDefault().Claims.ToList();
            if (GetIsMustHandleProvidedClaimValues(httpContext, validAdminClaims))
            {
                var claimValues = claims.Select(s => s.Value).ToList();
                var q = claimValues.Where(w => validAdminClaims.Contains(w)).ToList();
                if(q.Any())
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

        private static bool GetIsMustHandleProvidedClaimValues(HttpContext httpContext, List<string>? validAdminClaims)
        {
            return httpContext.User.Claims.Any() == true && validAdminClaims != null;
        }
    }
}
