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
    /// ResourceServerRepresentation
    /// </summary>
    [DataContract(Name = "ResourceServerRepresentation")]
    public partial class ResourceServerRepresentation : IEquatable<ResourceServerRepresentation>, IValidatableObject
    {
        /// <summary>
        /// Defines DecisionStrategy
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum DecisionStrategyEnum
        {
            /// <summary>
            /// Enum AFFIRMATIVE for value: AFFIRMATIVE
            /// </summary>
            [EnumMember(Value = "AFFIRMATIVE")]
            AFFIRMATIVE = 1,

            /// <summary>
            /// Enum UNANIMOUS for value: UNANIMOUS
            /// </summary>
            [EnumMember(Value = "UNANIMOUS")]
            UNANIMOUS = 2,

            /// <summary>
            /// Enum CONSENSUS for value: CONSENSUS
            /// </summary>
            [EnumMember(Value = "CONSENSUS")]
            CONSENSUS = 3

        }


        /// <summary>
        /// Gets or Sets DecisionStrategy
        /// </summary>
        [DataMember(Name = "decisionStrategy", EmitDefaultValue = false)]
        public DecisionStrategyEnum? DecisionStrategy { get; set; }
        /// <summary>
        /// Defines PolicyEnforcementMode
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum PolicyEnforcementModeEnum
        {
            /// <summary>
            /// Enum ENFORCING for value: ENFORCING
            /// </summary>
            [EnumMember(Value = "ENFORCING")]
            ENFORCING = 1,

            /// <summary>
            /// Enum PERMISSIVE for value: PERMISSIVE
            /// </summary>
            [EnumMember(Value = "PERMISSIVE")]
            PERMISSIVE = 2,

            /// <summary>
            /// Enum DISABLED for value: DISABLED
            /// </summary>
            [EnumMember(Value = "DISABLED")]
            DISABLED = 3

        }


        /// <summary>
        /// Gets or Sets PolicyEnforcementMode
        /// </summary>
        [DataMember(Name = "policyEnforcementMode", EmitDefaultValue = false)]
        public PolicyEnforcementModeEnum? PolicyEnforcementMode { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="ResourceServerRepresentation" /> class.
        /// </summary>
        /// <param name="allowRemoteResourceManagement">allowRemoteResourceManagement.</param>
        /// <param name="clientId">clientId.</param>
        /// <param name="decisionStrategy">decisionStrategy.</param>
        /// <param name="id">id.</param>
        /// <param name="name">name.</param>
        /// <param name="policies">policies.</param>
        /// <param name="policyEnforcementMode">policyEnforcementMode.</param>
        /// <param name="resources">resources.</param>
        /// <param name="scopes">scopes.</param>
        public ResourceServerRepresentation(bool allowRemoteResourceManagement = default(bool), string clientId = default(string), DecisionStrategyEnum? decisionStrategy = default(DecisionStrategyEnum?), string id = default(string), string name = default(string), List<PolicyRepresentation> policies = default(List<PolicyRepresentation>), PolicyEnforcementModeEnum? policyEnforcementMode = default(PolicyEnforcementModeEnum?), List<ResourceRepresentation> resources = default(List<ResourceRepresentation>), List<ScopeRepresentation> scopes = default(List<ScopeRepresentation>))
        {
            this.AllowRemoteResourceManagement = allowRemoteResourceManagement;
            this.ClientId = clientId;
            this.DecisionStrategy = decisionStrategy;
            this.Id = id;
            this.Name = name;
            this.Policies = policies;
            this.PolicyEnforcementMode = policyEnforcementMode;
            this.Resources = resources;
            this.Scopes = scopes;
        }

        /// <summary>
        /// Gets or Sets AllowRemoteResourceManagement
        /// </summary>
        [DataMember(Name = "allowRemoteResourceManagement", EmitDefaultValue = true)]
        public bool AllowRemoteResourceManagement { get; set; }

        /// <summary>
        /// Gets or Sets ClientId
        /// </summary>
        [DataMember(Name = "clientId", EmitDefaultValue = false)]
        public string ClientId { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// Gets or Sets Name
        /// </summary>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// Gets or Sets Policies
        /// </summary>
        [DataMember(Name = "policies", EmitDefaultValue = false)]
        public List<PolicyRepresentation> Policies { get; set; }

        /// <summary>
        /// Gets or Sets Resources
        /// </summary>
        [DataMember(Name = "resources", EmitDefaultValue = false)]
        public List<ResourceRepresentation> Resources { get; set; }

        /// <summary>
        /// Gets or Sets Scopes
        /// </summary>
        [DataMember(Name = "scopes", EmitDefaultValue = false)]
        public List<ScopeRepresentation> Scopes { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ResourceServerRepresentation {\n");
            sb.Append("  AllowRemoteResourceManagement: ").Append(AllowRemoteResourceManagement).Append("\n");
            sb.Append("  ClientId: ").Append(ClientId).Append("\n");
            sb.Append("  DecisionStrategy: ").Append(DecisionStrategy).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Policies: ").Append(Policies).Append("\n");
            sb.Append("  PolicyEnforcementMode: ").Append(PolicyEnforcementMode).Append("\n");
            sb.Append("  Resources: ").Append(Resources).Append("\n");
            sb.Append("  Scopes: ").Append(Scopes).Append("\n");
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
            return this.Equals(input as ResourceServerRepresentation);
        }

        /// <summary>
        /// Returns true if ResourceServerRepresentation instances are equal
        /// </summary>
        /// <param name="input">Instance of ResourceServerRepresentation to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ResourceServerRepresentation input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.AllowRemoteResourceManagement == input.AllowRemoteResourceManagement ||
                    this.AllowRemoteResourceManagement.Equals(input.AllowRemoteResourceManagement)
                ) && 
                (
                    this.ClientId == input.ClientId ||
                    (this.ClientId != null &&
                    this.ClientId.Equals(input.ClientId))
                ) && 
                (
                    this.DecisionStrategy == input.DecisionStrategy ||
                    this.DecisionStrategy.Equals(input.DecisionStrategy)
                ) && 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.Policies == input.Policies ||
                    this.Policies != null &&
                    input.Policies != null &&
                    this.Policies.SequenceEqual(input.Policies)
                ) && 
                (
                    this.PolicyEnforcementMode == input.PolicyEnforcementMode ||
                    this.PolicyEnforcementMode.Equals(input.PolicyEnforcementMode)
                ) && 
                (
                    this.Resources == input.Resources ||
                    this.Resources != null &&
                    input.Resources != null &&
                    this.Resources.SequenceEqual(input.Resources)
                ) && 
                (
                    this.Scopes == input.Scopes ||
                    this.Scopes != null &&
                    input.Scopes != null &&
                    this.Scopes.SequenceEqual(input.Scopes)
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
                hashCode = (hashCode * 59) + this.AllowRemoteResourceManagement.GetHashCode();
                if (this.ClientId != null)
                {
                    hashCode = (hashCode * 59) + this.ClientId.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.DecisionStrategy.GetHashCode();
                if (this.Id != null)
                {
                    hashCode = (hashCode * 59) + this.Id.GetHashCode();
                }
                if (this.Name != null)
                {
                    hashCode = (hashCode * 59) + this.Name.GetHashCode();
                }
                if (this.Policies != null)
                {
                    hashCode = (hashCode * 59) + this.Policies.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.PolicyEnforcementMode.GetHashCode();
                if (this.Resources != null)
                {
                    hashCode = (hashCode * 59) + this.Resources.GetHashCode();
                }
                if (this.Scopes != null)
                {
                    hashCode = (hashCode * 59) + this.Scopes.GetHashCode();
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
