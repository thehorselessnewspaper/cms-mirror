using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.Auth.Keycloak.Model
{

    public interface IKeycloakAuthOptions
    {
        public Uri OIDCLogoutUri { get; set; }
    }

    /// <summary>
    /// the intention is to here expose relatively harmless tuples
    /// like redirect urls for realms - suitable for login/logout
    /// integration with keycloak for example
    /// </summary>
    public class KeycloakAuthOptions : IKeycloakAuthOptions
    {
        #region Configuration["Keys"]
        // ouch how to enforce a nomenclature here for embedded magic strings
        // that must surface as a runtime introspectable list of feature toggles 
        // and runtime configuration settings
        public const string OIDCLogoutUriConfigKey = "Keycloak:OIDCLogoutUri";
        public const string AudienceConfigKey = "Keycloak:Audience";
        public const string AuthorityConfigKey = "Keycloak:Authority";
        public const string IssuerConfigKey = "Keycloak:SignoutRedirectUrl";
        public const string SignoutRedirectUrlConfigKey = "Keycloak:SignoutRedirectUrl";
        public const string RealmConfigKey = "Keycloak:Realm";
        public const string ClientIdConfigKey = "Keycloak:ClientId";
        public const string ClientSecretConfigKey = "Keycloak:ClientSecret";
        public const string MetaDataConfigKey = "Keycloak:ClientSecret";
        #endregion Configuration["Keys"]
        /// <summary>
        /// as per https://issues.redhat.com/browse/KEYCLOAK-3399?page=com.atlassian.jira.plugin.system.issuetabpanels%3Achangehistory-tabpanel
        /// </summary>
        public Uri OIDCLogoutUri { get; set; }
    }
}
