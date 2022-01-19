using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.Auth.Keycloak.Claims
{
    /// <summary>
    /// this seems like a good idea
    /// as per https://stackoverflow.com/questions/53702555/cant-access-roles-in-jwt-token-net-core/53817194#53817194
    /// 
    /// utility to be determined
    /// </summary>
    internal class HorselessKeycloakClaimsTransformer : IClaimsTransformation
    {
        ILogger<HorselessKeycloakClaimsTransformer> _logger;
        public HorselessKeycloakClaimsTransformer(ILogger<HorselessKeycloakClaimsTransformer> log)
        {
            _logger = log;
        }

        public Task<ClaimsPrincipal> TransformAsync(ClaimsPrincipal principal)
        {
            ClaimsPrincipal clonedPrincipal = principal.Clone();

            ClaimsIdentity clonedIdentity = (ClaimsIdentity)clonedPrincipal.Identity;
;

            /// TODO enable this by feature management
            // flatten realm_access because Microsoft identity model doesn't support nested claims
            // by map it to Microsoft identity model, because automatic JWT bearer token mapping already processed here
            if (clonedIdentity.IsAuthenticated && clonedPrincipal.HasClaim((claim) => claim.Type == "realm_access"))
            {

                var realmAccessClaim = clonedPrincipal.FindFirst((claim) => claim.Type == "realm_access");
                var realmAccessAsDict = JsonConvert.DeserializeObject<Dictionary<string, string[]>>(realmAccessClaim.Value);
                if (realmAccessAsDict["roles"] != null)
                {
                    foreach (var role in realmAccessAsDict["roles"])
                    {
                        clonedIdentity.AddClaim(new Claim(ClaimTypes.Role, role));
                    }
                }
            }
            
            /// TODO parameterize the claim value filtered here\
            /// enable by feature management
            if(clonedIdentity.IsAuthenticated && clonedPrincipal.HasClaim((claim) => claim.Value.ToLower().Contains("admin")))
            {
                _logger.LogDebug("user logged in with admin claim value");
            }

            return Task.FromResult(clonedPrincipal);
        }
    }
}
