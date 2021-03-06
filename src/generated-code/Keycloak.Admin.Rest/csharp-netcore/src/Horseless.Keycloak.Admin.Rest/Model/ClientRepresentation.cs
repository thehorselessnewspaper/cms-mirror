/*
 * Keycloak Admin REST API
 *
 * This is a REST API reference for the Keycloak Admin
 *
 * The version of the OpenAPI document: 1
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.IO;
using System.Runtime.Serialization;
using System.Text;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = Horseless.Keycloak.Admin.Rest.Client.OpenAPIDateConverter;

namespace Horseless.Keycloak.Admin.Rest.Model
{
    /// <summary>
    /// ClientRepresentation
    /// </summary>
    [DataContract(Name = "ClientRepresentation")]
    public partial class ClientRepresentation : IEquatable<ClientRepresentation>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ClientRepresentation" /> class.
        /// </summary>
        /// <param name="access">access.</param>
        /// <param name="adminUrl">adminUrl.</param>
        /// <param name="alwaysDisplayInConsole">alwaysDisplayInConsole.</param>
        /// <param name="attributes">attributes.</param>
        /// <param name="authenticationFlowBindingOverrides">authenticationFlowBindingOverrides.</param>
        /// <param name="authorizationServicesEnabled">authorizationServicesEnabled.</param>
        /// <param name="authorizationSettings">authorizationSettings.</param>
        /// <param name="baseUrl">baseUrl.</param>
        /// <param name="bearerOnly">bearerOnly.</param>
        /// <param name="clientAuthenticatorType">clientAuthenticatorType.</param>
        /// <param name="clientId">clientId.</param>
        /// <param name="consentRequired">consentRequired.</param>
        /// <param name="defaultClientScopes">defaultClientScopes.</param>
        /// <param name="description">description.</param>
        /// <param name="directAccessGrantsEnabled">directAccessGrantsEnabled.</param>
        /// <param name="enabled">enabled.</param>
        /// <param name="frontchannelLogout">frontchannelLogout.</param>
        /// <param name="fullScopeAllowed">fullScopeAllowed.</param>
        /// <param name="id">id.</param>
        /// <param name="implicitFlowEnabled">implicitFlowEnabled.</param>
        /// <param name="name">name.</param>
        /// <param name="nodeReRegistrationTimeout">nodeReRegistrationTimeout.</param>
        /// <param name="notBefore">notBefore.</param>
        /// <param name="oauth2DeviceAuthorizationGrantEnabled">oauth2DeviceAuthorizationGrantEnabled.</param>
        /// <param name="optionalClientScopes">optionalClientScopes.</param>
        /// <param name="origin">origin.</param>
        /// <param name="protocol">protocol.</param>
        /// <param name="protocolMappers">protocolMappers.</param>
        /// <param name="publicClient">publicClient.</param>
        /// <param name="redirectUris">redirectUris.</param>
        /// <param name="registeredNodes">registeredNodes.</param>
        /// <param name="registrationAccessToken">registrationAccessToken.</param>
        /// <param name="rootUrl">rootUrl.</param>
        /// <param name="secret">secret.</param>
        /// <param name="serviceAccountsEnabled">serviceAccountsEnabled.</param>
        /// <param name="standardFlowEnabled">standardFlowEnabled.</param>
        /// <param name="surrogateAuthRequired">surrogateAuthRequired.</param>
        /// <param name="webOrigins">webOrigins.</param>
        public ClientRepresentation(Dictionary<string, Object> access = default(Dictionary<string, Object>), string adminUrl = default(string), bool alwaysDisplayInConsole = default(bool), Dictionary<string, Object> attributes = default(Dictionary<string, Object>), Dictionary<string, Object> authenticationFlowBindingOverrides = default(Dictionary<string, Object>), bool authorizationServicesEnabled = default(bool), ResourceServerRepresentation authorizationSettings = default(ResourceServerRepresentation), string baseUrl = default(string), bool bearerOnly = default(bool), string clientAuthenticatorType = default(string), string clientId = default(string), bool consentRequired = default(bool), List<string> defaultClientScopes = default(List<string>), string description = default(string), bool directAccessGrantsEnabled = default(bool), bool enabled = default(bool), bool frontchannelLogout = default(bool), bool fullScopeAllowed = default(bool), string id = default(string), bool implicitFlowEnabled = default(bool), string name = default(string), int nodeReRegistrationTimeout = default(int), int notBefore = default(int), bool oauth2DeviceAuthorizationGrantEnabled = default(bool), List<string> optionalClientScopes = default(List<string>), string origin = default(string), string protocol = default(string), List<ProtocolMapperRepresentation> protocolMappers = default(List<ProtocolMapperRepresentation>), bool publicClient = default(bool), List<string> redirectUris = default(List<string>), Dictionary<string, Object> registeredNodes = default(Dictionary<string, Object>), string registrationAccessToken = default(string), string rootUrl = default(string), string secret = default(string), bool serviceAccountsEnabled = default(bool), bool standardFlowEnabled = default(bool), bool surrogateAuthRequired = default(bool), List<string> webOrigins = default(List<string>))
        {
            this.Access = access;
            this.AdminUrl = adminUrl;
            this.AlwaysDisplayInConsole = alwaysDisplayInConsole;
            this.Attributes = attributes;
            this.AuthenticationFlowBindingOverrides = authenticationFlowBindingOverrides;
            this.AuthorizationServicesEnabled = authorizationServicesEnabled;
            this.AuthorizationSettings = authorizationSettings;
            this.BaseUrl = baseUrl;
            this.BearerOnly = bearerOnly;
            this.ClientAuthenticatorType = clientAuthenticatorType;
            this.ClientId = clientId;
            this.ConsentRequired = consentRequired;
            this.DefaultClientScopes = defaultClientScopes;
            this.Description = description;
            this.DirectAccessGrantsEnabled = directAccessGrantsEnabled;
            this.Enabled = enabled;
            this.FrontchannelLogout = frontchannelLogout;
            this.FullScopeAllowed = fullScopeAllowed;
            this.Id = id;
            this.ImplicitFlowEnabled = implicitFlowEnabled;
            this.Name = name;
            this.NodeReRegistrationTimeout = nodeReRegistrationTimeout;
            this.NotBefore = notBefore;
            this.Oauth2DeviceAuthorizationGrantEnabled = oauth2DeviceAuthorizationGrantEnabled;
            this.OptionalClientScopes = optionalClientScopes;
            this.Origin = origin;
            this.Protocol = protocol;
            this.ProtocolMappers = protocolMappers;
            this.PublicClient = publicClient;
            this.RedirectUris = redirectUris;
            this.RegisteredNodes = registeredNodes;
            this.RegistrationAccessToken = registrationAccessToken;
            this.RootUrl = rootUrl;
            this.Secret = secret;
            this.ServiceAccountsEnabled = serviceAccountsEnabled;
            this.StandardFlowEnabled = standardFlowEnabled;
            this.SurrogateAuthRequired = surrogateAuthRequired;
            this.WebOrigins = webOrigins;
        }

        /// <summary>
        /// Gets or Sets Access
        /// </summary>
        [DataMember(Name = "access", EmitDefaultValue = false)]
        public Dictionary<string, Object> Access { get; set; }

        /// <summary>
        /// Gets or Sets AdminUrl
        /// </summary>
        [DataMember(Name = "adminUrl", EmitDefaultValue = false)]
        public string AdminUrl { get; set; }

        /// <summary>
        /// Gets or Sets AlwaysDisplayInConsole
        /// </summary>
        [DataMember(Name = "alwaysDisplayInConsole", EmitDefaultValue = true)]
        public bool AlwaysDisplayInConsole { get; set; }

        /// <summary>
        /// Gets or Sets Attributes
        /// </summary>
        [DataMember(Name = "attributes", EmitDefaultValue = false)]
        public Dictionary<string, Object> Attributes { get; set; }

        /// <summary>
        /// Gets or Sets AuthenticationFlowBindingOverrides
        /// </summary>
        [DataMember(Name = "authenticationFlowBindingOverrides", EmitDefaultValue = false)]
        public Dictionary<string, Object> AuthenticationFlowBindingOverrides { get; set; }

        /// <summary>
        /// Gets or Sets AuthorizationServicesEnabled
        /// </summary>
        [DataMember(Name = "authorizationServicesEnabled", EmitDefaultValue = true)]
        public bool AuthorizationServicesEnabled { get; set; }

        /// <summary>
        /// Gets or Sets AuthorizationSettings
        /// </summary>
        [DataMember(Name = "authorizationSettings", EmitDefaultValue = false)]
        public ResourceServerRepresentation AuthorizationSettings { get; set; }

        /// <summary>
        /// Gets or Sets BaseUrl
        /// </summary>
        [DataMember(Name = "baseUrl", EmitDefaultValue = false)]
        public string BaseUrl { get; set; }

        /// <summary>
        /// Gets or Sets BearerOnly
        /// </summary>
        [DataMember(Name = "bearerOnly", EmitDefaultValue = true)]
        public bool BearerOnly { get; set; }

        /// <summary>
        /// Gets or Sets ClientAuthenticatorType
        /// </summary>
        [DataMember(Name = "clientAuthenticatorType", EmitDefaultValue = false)]
        public string ClientAuthenticatorType { get; set; }

        /// <summary>
        /// Gets or Sets ClientId
        /// </summary>
        [DataMember(Name = "clientId", EmitDefaultValue = false)]
        public string ClientId { get; set; }

        /// <summary>
        /// Gets or Sets ConsentRequired
        /// </summary>
        [DataMember(Name = "consentRequired", EmitDefaultValue = true)]
        public bool ConsentRequired { get; set; }

        /// <summary>
        /// Gets or Sets DefaultClientScopes
        /// </summary>
        [DataMember(Name = "defaultClientScopes", EmitDefaultValue = false)]
        public List<string> DefaultClientScopes { get; set; }

        /// <summary>
        /// Gets or Sets Description
        /// </summary>
        [DataMember(Name = "description", EmitDefaultValue = false)]
        public string Description { get; set; }

        /// <summary>
        /// Gets or Sets DirectAccessGrantsEnabled
        /// </summary>
        [DataMember(Name = "directAccessGrantsEnabled", EmitDefaultValue = true)]
        public bool DirectAccessGrantsEnabled { get; set; }

        /// <summary>
        /// Gets or Sets Enabled
        /// </summary>
        [DataMember(Name = "enabled", EmitDefaultValue = true)]
        public bool Enabled { get; set; }

        /// <summary>
        /// Gets or Sets FrontchannelLogout
        /// </summary>
        [DataMember(Name = "frontchannelLogout", EmitDefaultValue = true)]
        public bool FrontchannelLogout { get; set; }

        /// <summary>
        /// Gets or Sets FullScopeAllowed
        /// </summary>
        [DataMember(Name = "fullScopeAllowed", EmitDefaultValue = true)]
        public bool FullScopeAllowed { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// Gets or Sets ImplicitFlowEnabled
        /// </summary>
        [DataMember(Name = "implicitFlowEnabled", EmitDefaultValue = true)]
        public bool ImplicitFlowEnabled { get; set; }

        /// <summary>
        /// Gets or Sets Name
        /// </summary>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// Gets or Sets NodeReRegistrationTimeout
        /// </summary>
        [DataMember(Name = "nodeReRegistrationTimeout", EmitDefaultValue = false)]
        public int NodeReRegistrationTimeout { get; set; }

        /// <summary>
        /// Gets or Sets NotBefore
        /// </summary>
        [DataMember(Name = "notBefore", EmitDefaultValue = false)]
        public int NotBefore { get; set; }

        /// <summary>
        /// Gets or Sets Oauth2DeviceAuthorizationGrantEnabled
        /// </summary>
        [DataMember(Name = "oauth2DeviceAuthorizationGrantEnabled", EmitDefaultValue = true)]
        public bool Oauth2DeviceAuthorizationGrantEnabled { get; set; }

        /// <summary>
        /// Gets or Sets OptionalClientScopes
        /// </summary>
        [DataMember(Name = "optionalClientScopes", EmitDefaultValue = false)]
        public List<string> OptionalClientScopes { get; set; }

        /// <summary>
        /// Gets or Sets Origin
        /// </summary>
        [DataMember(Name = "origin", EmitDefaultValue = false)]
        public string Origin { get; set; }

        /// <summary>
        /// Gets or Sets Protocol
        /// </summary>
        [DataMember(Name = "protocol", EmitDefaultValue = false)]
        public string Protocol { get; set; }

        /// <summary>
        /// Gets or Sets ProtocolMappers
        /// </summary>
        [DataMember(Name = "protocolMappers", EmitDefaultValue = false)]
        public List<ProtocolMapperRepresentation> ProtocolMappers { get; set; }

        /// <summary>
        /// Gets or Sets PublicClient
        /// </summary>
        [DataMember(Name = "publicClient", EmitDefaultValue = true)]
        public bool PublicClient { get; set; }

        /// <summary>
        /// Gets or Sets RedirectUris
        /// </summary>
        [DataMember(Name = "redirectUris", EmitDefaultValue = false)]
        public List<string> RedirectUris { get; set; }

        /// <summary>
        /// Gets or Sets RegisteredNodes
        /// </summary>
        [DataMember(Name = "registeredNodes", EmitDefaultValue = false)]
        public Dictionary<string, Object> RegisteredNodes { get; set; }

        /// <summary>
        /// Gets or Sets RegistrationAccessToken
        /// </summary>
        [DataMember(Name = "registrationAccessToken", EmitDefaultValue = false)]
        public string RegistrationAccessToken { get; set; }

        /// <summary>
        /// Gets or Sets RootUrl
        /// </summary>
        [DataMember(Name = "rootUrl", EmitDefaultValue = false)]
        public string RootUrl { get; set; }

        /// <summary>
        /// Gets or Sets Secret
        /// </summary>
        [DataMember(Name = "secret", EmitDefaultValue = false)]
        public string Secret { get; set; }

        /// <summary>
        /// Gets or Sets ServiceAccountsEnabled
        /// </summary>
        [DataMember(Name = "serviceAccountsEnabled", EmitDefaultValue = true)]
        public bool ServiceAccountsEnabled { get; set; }

        /// <summary>
        /// Gets or Sets StandardFlowEnabled
        /// </summary>
        [DataMember(Name = "standardFlowEnabled", EmitDefaultValue = true)]
        public bool StandardFlowEnabled { get; set; }

        /// <summary>
        /// Gets or Sets SurrogateAuthRequired
        /// </summary>
        [DataMember(Name = "surrogateAuthRequired", EmitDefaultValue = true)]
        public bool SurrogateAuthRequired { get; set; }

        /// <summary>
        /// Gets or Sets WebOrigins
        /// </summary>
        [DataMember(Name = "webOrigins", EmitDefaultValue = false)]
        public List<string> WebOrigins { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ClientRepresentation {\n");
            sb.Append("  Access: ").Append(Access).Append("\n");
            sb.Append("  AdminUrl: ").Append(AdminUrl).Append("\n");
            sb.Append("  AlwaysDisplayInConsole: ").Append(AlwaysDisplayInConsole).Append("\n");
            sb.Append("  Attributes: ").Append(Attributes).Append("\n");
            sb.Append("  AuthenticationFlowBindingOverrides: ").Append(AuthenticationFlowBindingOverrides).Append("\n");
            sb.Append("  AuthorizationServicesEnabled: ").Append(AuthorizationServicesEnabled).Append("\n");
            sb.Append("  AuthorizationSettings: ").Append(AuthorizationSettings).Append("\n");
            sb.Append("  BaseUrl: ").Append(BaseUrl).Append("\n");
            sb.Append("  BearerOnly: ").Append(BearerOnly).Append("\n");
            sb.Append("  ClientAuthenticatorType: ").Append(ClientAuthenticatorType).Append("\n");
            sb.Append("  ClientId: ").Append(ClientId).Append("\n");
            sb.Append("  ConsentRequired: ").Append(ConsentRequired).Append("\n");
            sb.Append("  DefaultClientScopes: ").Append(DefaultClientScopes).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  DirectAccessGrantsEnabled: ").Append(DirectAccessGrantsEnabled).Append("\n");
            sb.Append("  Enabled: ").Append(Enabled).Append("\n");
            sb.Append("  FrontchannelLogout: ").Append(FrontchannelLogout).Append("\n");
            sb.Append("  FullScopeAllowed: ").Append(FullScopeAllowed).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  ImplicitFlowEnabled: ").Append(ImplicitFlowEnabled).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  NodeReRegistrationTimeout: ").Append(NodeReRegistrationTimeout).Append("\n");
            sb.Append("  NotBefore: ").Append(NotBefore).Append("\n");
            sb.Append("  Oauth2DeviceAuthorizationGrantEnabled: ").Append(Oauth2DeviceAuthorizationGrantEnabled).Append("\n");
            sb.Append("  OptionalClientScopes: ").Append(OptionalClientScopes).Append("\n");
            sb.Append("  Origin: ").Append(Origin).Append("\n");
            sb.Append("  Protocol: ").Append(Protocol).Append("\n");
            sb.Append("  ProtocolMappers: ").Append(ProtocolMappers).Append("\n");
            sb.Append("  PublicClient: ").Append(PublicClient).Append("\n");
            sb.Append("  RedirectUris: ").Append(RedirectUris).Append("\n");
            sb.Append("  RegisteredNodes: ").Append(RegisteredNodes).Append("\n");
            sb.Append("  RegistrationAccessToken: ").Append(RegistrationAccessToken).Append("\n");
            sb.Append("  RootUrl: ").Append(RootUrl).Append("\n");
            sb.Append("  Secret: ").Append(Secret).Append("\n");
            sb.Append("  ServiceAccountsEnabled: ").Append(ServiceAccountsEnabled).Append("\n");
            sb.Append("  StandardFlowEnabled: ").Append(StandardFlowEnabled).Append("\n");
            sb.Append("  SurrogateAuthRequired: ").Append(SurrogateAuthRequired).Append("\n");
            sb.Append("  WebOrigins: ").Append(WebOrigins).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, Newtonsoft.Json.Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as ClientRepresentation);
        }

        /// <summary>
        /// Returns true if ClientRepresentation instances are equal
        /// </summary>
        /// <param name="input">Instance of ClientRepresentation to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ClientRepresentation input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Access == input.Access ||
                    this.Access != null &&
                    input.Access != null &&
                    this.Access.SequenceEqual(input.Access)
                ) && 
                (
                    this.AdminUrl == input.AdminUrl ||
                    (this.AdminUrl != null &&
                    this.AdminUrl.Equals(input.AdminUrl))
                ) && 
                (
                    this.AlwaysDisplayInConsole == input.AlwaysDisplayInConsole ||
                    this.AlwaysDisplayInConsole.Equals(input.AlwaysDisplayInConsole)
                ) && 
                (
                    this.Attributes == input.Attributes ||
                    this.Attributes != null &&
                    input.Attributes != null &&
                    this.Attributes.SequenceEqual(input.Attributes)
                ) && 
                (
                    this.AuthenticationFlowBindingOverrides == input.AuthenticationFlowBindingOverrides ||
                    this.AuthenticationFlowBindingOverrides != null &&
                    input.AuthenticationFlowBindingOverrides != null &&
                    this.AuthenticationFlowBindingOverrides.SequenceEqual(input.AuthenticationFlowBindingOverrides)
                ) && 
                (
                    this.AuthorizationServicesEnabled == input.AuthorizationServicesEnabled ||
                    this.AuthorizationServicesEnabled.Equals(input.AuthorizationServicesEnabled)
                ) && 
                (
                    this.AuthorizationSettings == input.AuthorizationSettings ||
                    (this.AuthorizationSettings != null &&
                    this.AuthorizationSettings.Equals(input.AuthorizationSettings))
                ) && 
                (
                    this.BaseUrl == input.BaseUrl ||
                    (this.BaseUrl != null &&
                    this.BaseUrl.Equals(input.BaseUrl))
                ) && 
                (
                    this.BearerOnly == input.BearerOnly ||
                    this.BearerOnly.Equals(input.BearerOnly)
                ) && 
                (
                    this.ClientAuthenticatorType == input.ClientAuthenticatorType ||
                    (this.ClientAuthenticatorType != null &&
                    this.ClientAuthenticatorType.Equals(input.ClientAuthenticatorType))
                ) && 
                (
                    this.ClientId == input.ClientId ||
                    (this.ClientId != null &&
                    this.ClientId.Equals(input.ClientId))
                ) && 
                (
                    this.ConsentRequired == input.ConsentRequired ||
                    this.ConsentRequired.Equals(input.ConsentRequired)
                ) && 
                (
                    this.DefaultClientScopes == input.DefaultClientScopes ||
                    this.DefaultClientScopes != null &&
                    input.DefaultClientScopes != null &&
                    this.DefaultClientScopes.SequenceEqual(input.DefaultClientScopes)
                ) && 
                (
                    this.Description == input.Description ||
                    (this.Description != null &&
                    this.Description.Equals(input.Description))
                ) && 
                (
                    this.DirectAccessGrantsEnabled == input.DirectAccessGrantsEnabled ||
                    this.DirectAccessGrantsEnabled.Equals(input.DirectAccessGrantsEnabled)
                ) && 
                (
                    this.Enabled == input.Enabled ||
                    this.Enabled.Equals(input.Enabled)
                ) && 
                (
                    this.FrontchannelLogout == input.FrontchannelLogout ||
                    this.FrontchannelLogout.Equals(input.FrontchannelLogout)
                ) && 
                (
                    this.FullScopeAllowed == input.FullScopeAllowed ||
                    this.FullScopeAllowed.Equals(input.FullScopeAllowed)
                ) && 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
                (
                    this.ImplicitFlowEnabled == input.ImplicitFlowEnabled ||
                    this.ImplicitFlowEnabled.Equals(input.ImplicitFlowEnabled)
                ) && 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.NodeReRegistrationTimeout == input.NodeReRegistrationTimeout ||
                    this.NodeReRegistrationTimeout.Equals(input.NodeReRegistrationTimeout)
                ) && 
                (
                    this.NotBefore == input.NotBefore ||
                    this.NotBefore.Equals(input.NotBefore)
                ) && 
                (
                    this.Oauth2DeviceAuthorizationGrantEnabled == input.Oauth2DeviceAuthorizationGrantEnabled ||
                    this.Oauth2DeviceAuthorizationGrantEnabled.Equals(input.Oauth2DeviceAuthorizationGrantEnabled)
                ) && 
                (
                    this.OptionalClientScopes == input.OptionalClientScopes ||
                    this.OptionalClientScopes != null &&
                    input.OptionalClientScopes != null &&
                    this.OptionalClientScopes.SequenceEqual(input.OptionalClientScopes)
                ) && 
                (
                    this.Origin == input.Origin ||
                    (this.Origin != null &&
                    this.Origin.Equals(input.Origin))
                ) && 
                (
                    this.Protocol == input.Protocol ||
                    (this.Protocol != null &&
                    this.Protocol.Equals(input.Protocol))
                ) && 
                (
                    this.ProtocolMappers == input.ProtocolMappers ||
                    this.ProtocolMappers != null &&
                    input.ProtocolMappers != null &&
                    this.ProtocolMappers.SequenceEqual(input.ProtocolMappers)
                ) && 
                (
                    this.PublicClient == input.PublicClient ||
                    this.PublicClient.Equals(input.PublicClient)
                ) && 
                (
                    this.RedirectUris == input.RedirectUris ||
                    this.RedirectUris != null &&
                    input.RedirectUris != null &&
                    this.RedirectUris.SequenceEqual(input.RedirectUris)
                ) && 
                (
                    this.RegisteredNodes == input.RegisteredNodes ||
                    this.RegisteredNodes != null &&
                    input.RegisteredNodes != null &&
                    this.RegisteredNodes.SequenceEqual(input.RegisteredNodes)
                ) && 
                (
                    this.RegistrationAccessToken == input.RegistrationAccessToken ||
                    (this.RegistrationAccessToken != null &&
                    this.RegistrationAccessToken.Equals(input.RegistrationAccessToken))
                ) && 
                (
                    this.RootUrl == input.RootUrl ||
                    (this.RootUrl != null &&
                    this.RootUrl.Equals(input.RootUrl))
                ) && 
                (
                    this.Secret == input.Secret ||
                    (this.Secret != null &&
                    this.Secret.Equals(input.Secret))
                ) && 
                (
                    this.ServiceAccountsEnabled == input.ServiceAccountsEnabled ||
                    this.ServiceAccountsEnabled.Equals(input.ServiceAccountsEnabled)
                ) && 
                (
                    this.StandardFlowEnabled == input.StandardFlowEnabled ||
                    this.StandardFlowEnabled.Equals(input.StandardFlowEnabled)
                ) && 
                (
                    this.SurrogateAuthRequired == input.SurrogateAuthRequired ||
                    this.SurrogateAuthRequired.Equals(input.SurrogateAuthRequired)
                ) && 
                (
                    this.WebOrigins == input.WebOrigins ||
                    this.WebOrigins != null &&
                    input.WebOrigins != null &&
                    this.WebOrigins.SequenceEqual(input.WebOrigins)
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.Access != null)
                {
                    hashCode = (hashCode * 59) + this.Access.GetHashCode();
                }
                if (this.AdminUrl != null)
                {
                    hashCode = (hashCode * 59) + this.AdminUrl.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.AlwaysDisplayInConsole.GetHashCode();
                if (this.Attributes != null)
                {
                    hashCode = (hashCode * 59) + this.Attributes.GetHashCode();
                }
                if (this.AuthenticationFlowBindingOverrides != null)
                {
                    hashCode = (hashCode * 59) + this.AuthenticationFlowBindingOverrides.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.AuthorizationServicesEnabled.GetHashCode();
                if (this.AuthorizationSettings != null)
                {
                    hashCode = (hashCode * 59) + this.AuthorizationSettings.GetHashCode();
                }
                if (this.BaseUrl != null)
                {
                    hashCode = (hashCode * 59) + this.BaseUrl.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.BearerOnly.GetHashCode();
                if (this.ClientAuthenticatorType != null)
                {
                    hashCode = (hashCode * 59) + this.ClientAuthenticatorType.GetHashCode();
                }
                if (this.ClientId != null)
                {
                    hashCode = (hashCode * 59) + this.ClientId.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.ConsentRequired.GetHashCode();
                if (this.DefaultClientScopes != null)
                {
                    hashCode = (hashCode * 59) + this.DefaultClientScopes.GetHashCode();
                }
                if (this.Description != null)
                {
                    hashCode = (hashCode * 59) + this.Description.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.DirectAccessGrantsEnabled.GetHashCode();
                hashCode = (hashCode * 59) + this.Enabled.GetHashCode();
                hashCode = (hashCode * 59) + this.FrontchannelLogout.GetHashCode();
                hashCode = (hashCode * 59) + this.FullScopeAllowed.GetHashCode();
                if (this.Id != null)
                {
                    hashCode = (hashCode * 59) + this.Id.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.ImplicitFlowEnabled.GetHashCode();
                if (this.Name != null)
                {
                    hashCode = (hashCode * 59) + this.Name.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.NodeReRegistrationTimeout.GetHashCode();
                hashCode = (hashCode * 59) + this.NotBefore.GetHashCode();
                hashCode = (hashCode * 59) + this.Oauth2DeviceAuthorizationGrantEnabled.GetHashCode();
                if (this.OptionalClientScopes != null)
                {
                    hashCode = (hashCode * 59) + this.OptionalClientScopes.GetHashCode();
                }
                if (this.Origin != null)
                {
                    hashCode = (hashCode * 59) + this.Origin.GetHashCode();
                }
                if (this.Protocol != null)
                {
                    hashCode = (hashCode * 59) + this.Protocol.GetHashCode();
                }
                if (this.ProtocolMappers != null)
                {
                    hashCode = (hashCode * 59) + this.ProtocolMappers.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.PublicClient.GetHashCode();
                if (this.RedirectUris != null)
                {
                    hashCode = (hashCode * 59) + this.RedirectUris.GetHashCode();
                }
                if (this.RegisteredNodes != null)
                {
                    hashCode = (hashCode * 59) + this.RegisteredNodes.GetHashCode();
                }
                if (this.RegistrationAccessToken != null)
                {
                    hashCode = (hashCode * 59) + this.RegistrationAccessToken.GetHashCode();
                }
                if (this.RootUrl != null)
                {
                    hashCode = (hashCode * 59) + this.RootUrl.GetHashCode();
                }
                if (this.Secret != null)
                {
                    hashCode = (hashCode * 59) + this.Secret.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.ServiceAccountsEnabled.GetHashCode();
                hashCode = (hashCode * 59) + this.StandardFlowEnabled.GetHashCode();
                hashCode = (hashCode * 59) + this.SurrogateAuthRequired.GetHashCode();
                if (this.WebOrigins != null)
                {
                    hashCode = (hashCode * 59) + this.WebOrigins.GetHashCode();
                }
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        public IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}
