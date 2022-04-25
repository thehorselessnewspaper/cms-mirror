using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.Constants
{
    public static class CoreFeatureFlags
    {
        public const string TenantAdminUI = "TenantAdminUI";
        public const string ContentEditorUI = "ContentEditorUI";
        public const string KeycloakSecurityPrincipalResolver = "KeycloakSecurityPrincipalResolver";
        public const string KeycloakClientCredentialsGrantProvider = "KeycloakClientCredentialsGrantProvider";
    }
}
