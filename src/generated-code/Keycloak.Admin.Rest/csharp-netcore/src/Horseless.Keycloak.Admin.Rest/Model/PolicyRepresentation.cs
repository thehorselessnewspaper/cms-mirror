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
    /// PolicyRepresentation
    /// </summary>
    [DataContract(Name = "PolicyRepresentation")]
    public partial class PolicyRepresentation : IEquatable<PolicyRepresentation>, IValidatableObject
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
        /// Defines Logic
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum LogicEnum
        {
            /// <summary>
            /// Enum POSITIVE for value: POSITIVE
            /// </summary>
            [EnumMember(Value = "POSITIVE")]
            POSITIVE = 1,

            /// <summary>
            /// Enum NEGATIVE for value: NEGATIVE
            /// </summary>
            [EnumMember(Value = "NEGATIVE")]
            NEGATIVE = 2

        }


        /// <summary>
        /// Gets or Sets Logic
        /// </summary>
        [DataMember(Name = "logic", EmitDefaultValue = false)]
        public LogicEnum? Logic { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="PolicyRepresentation" /> class.
        /// </summary>
        /// <param name="config">config.</param>
        /// <param name="decisionStrategy">decisionStrategy.</param>
        /// <param name="description">description.</param>
        /// <param name="id">id.</param>
        /// <param name="logic">logic.</param>
        /// <param name="name">name.</param>
        /// <param name="owner">owner.</param>
        /// <param name="policies">policies.</param>
        /// <param name="resources">resources.</param>
        /// <param name="resourcesData">resourcesData.</param>
        /// <param name="scopes">scopes.</param>
        /// <param name="scopesData">scopesData.</param>
        /// <param name="type">type.</param>
        public PolicyRepresentation(Dictionary<string, Object> config = default(Dictionary<string, Object>), DecisionStrategyEnum? decisionStrategy = default(DecisionStrategyEnum?), string description = default(string), string id = default(string), LogicEnum? logic = default(LogicEnum?), string name = default(string), string owner = default(string), List<string> policies = default(List<string>), List<string> resources = default(List<string>), List<ResourceRepresentation> resourcesData = default(List<ResourceRepresentation>), List<string> scopes = default(List<string>), List<ScopeRepresentation> scopesData = default(List<ScopeRepresentation>), string type = default(string))
        {
            this.Config = config;
            this.DecisionStrategy = decisionStrategy;
            this.Description = description;
            this.Id = id;
            this.Logic = logic;
            this.Name = name;
            this.Owner = owner;
            this.Policies = policies;
            this.Resources = resources;
            this.ResourcesData = resourcesData;
            this.Scopes = scopes;
            this.ScopesData = scopesData;
            this.Type = type;
        }

        /// <summary>
        /// Gets or Sets Config
        /// </summary>
        [DataMember(Name = "config", EmitDefaultValue = false)]
        public Dictionary<string, Object> Config { get; set; }

        /// <summary>
        /// Gets or Sets Description
        /// </summary>
        [DataMember(Name = "description", EmitDefaultValue = false)]
        public string Description { get; set; }

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
        /// Gets or Sets Owner
        /// </summary>
        [DataMember(Name = "owner", EmitDefaultValue = false)]
        public string Owner { get; set; }

        /// <summary>
        /// Gets or Sets Policies
        /// </summary>
        [DataMember(Name = "policies", EmitDefaultValue = false)]
        public List<string> Policies { get; set; }

        /// <summary>
        /// Gets or Sets Resources
        /// </summary>
        [DataMember(Name = "resources", EmitDefaultValue = false)]
        public List<string> Resources { get; set; }

        /// <summary>
        /// Gets or Sets ResourcesData
        /// </summary>
        [DataMember(Name = "resourcesData", EmitDefaultValue = false)]
        public List<ResourceRepresentation> ResourcesData { get; set; }

        /// <summary>
        /// Gets or Sets Scopes
        /// </summary>
        [DataMember(Name = "scopes", EmitDefaultValue = false)]
        public List<string> Scopes { get; set; }

        /// <summary>
        /// Gets or Sets ScopesData
        /// </summary>
        [DataMember(Name = "scopesData", EmitDefaultValue = false)]
        public List<ScopeRepresentation> ScopesData { get; set; }

        /// <summary>
        /// Gets or Sets Type
        /// </summary>
        [DataMember(Name = "type", EmitDefaultValue = false)]
        public string Type { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class PolicyRepresentation {\n");
            sb.Append("  Config: ").Append(Config).Append("\n");
            sb.Append("  DecisionStrategy: ").Append(DecisionStrategy).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Logic: ").Append(Logic).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Owner: ").Append(Owner).Append("\n");
            sb.Append("  Policies: ").Append(Policies).Append("\n");
            sb.Append("  Resources: ").Append(Resources).Append("\n");
            sb.Append("  ResourcesData: ").Append(ResourcesData).Append("\n");
            sb.Append("  Scopes: ").Append(Scopes).Append("\n");
            sb.Append("  ScopesData: ").Append(ScopesData).Append("\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
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
            return this.Equals(input as PolicyRepresentation);
        }

        /// <summary>
        /// Returns true if PolicyRepresentation instances are equal
        /// </summary>
        /// <param name="input">Instance of PolicyRepresentation to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(PolicyRepresentation input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Config == input.Config ||
                    this.Config != null &&
                    input.Config != null &&
                    this.Config.SequenceEqual(input.Config)
                ) && 
                (
                    this.DecisionStrategy == input.DecisionStrategy ||
                    this.DecisionStrategy.Equals(input.DecisionStrategy)
                ) && 
                (
                    this.Description == input.Description ||
                    (this.Description != null &&
                    this.Description.Equals(input.Description))
                ) && 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
                (
                    this.Logic == input.Logic ||
                    this.Logic.Equals(input.Logic)
                ) && 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.Owner == input.Owner ||
                    (this.Owner != null &&
                    this.Owner.Equals(input.Owner))
                ) && 
                (
                    this.Policies == input.Policies ||
                    this.Policies != null &&
                    input.Policies != null &&
                    this.Policies.SequenceEqual(input.Policies)
                ) && 
                (
                    this.Resources == input.Resources ||
                    this.Resources != null &&
                    input.Resources != null &&
                    this.Resources.SequenceEqual(input.Resources)
                ) && 
                (
                    this.ResourcesData == input.ResourcesData ||
                    this.ResourcesData != null &&
                    input.ResourcesData != null &&
                    this.ResourcesData.SequenceEqual(input.ResourcesData)
                ) && 
                (
                    this.Scopes == input.Scopes ||
                    this.Scopes != null &&
                    input.Scopes != null &&
                    this.Scopes.SequenceEqual(input.Scopes)
                ) && 
                (
                    this.ScopesData == input.ScopesData ||
                    this.ScopesData != null &&
                    input.ScopesData != null &&
                    this.ScopesData.SequenceEqual(input.ScopesData)
                ) && 
                (
                    this.Type == input.Type ||
                    (this.Type != null &&
                    this.Type.Equals(input.Type))
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
                if (this.Config != null)
                {
                    hashCode = (hashCode * 59) + this.Config.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.DecisionStrategy.GetHashCode();
                if (this.Description != null)
                {
                    hashCode = (hashCode * 59) + this.Description.GetHashCode();
                }
                if (this.Id != null)
                {
                    hashCode = (hashCode * 59) + this.Id.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.Logic.GetHashCode();
                if (this.Name != null)
                {
                    hashCode = (hashCode * 59) + this.Name.GetHashCode();
                }
                if (this.Owner != null)
                {
                    hashCode = (hashCode * 59) + this.Owner.GetHashCode();
                }
                if (this.Policies != null)
                {
                    hashCode = (hashCode * 59) + this.Policies.GetHashCode();
                }
                if (this.Resources != null)
                {
                    hashCode = (hashCode * 59) + this.Resources.GetHashCode();
                }
                if (this.ResourcesData != null)
                {
                    hashCode = (hashCode * 59) + this.ResourcesData.GetHashCode();
                }
                if (this.Scopes != null)
                {
                    hashCode = (hashCode * 59) + this.Scopes.GetHashCode();
                }
                if (this.ScopesData != null)
                {
                    hashCode = (hashCode * 59) + this.ScopesData.GetHashCode();
                }
                if (this.Type != null)
                {
                    hashCode = (hashCode * 59) + this.Type.GetHashCode();
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
