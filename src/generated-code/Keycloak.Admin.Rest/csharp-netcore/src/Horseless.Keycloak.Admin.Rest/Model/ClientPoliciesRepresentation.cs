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
    /// ClientPoliciesRepresentation
    /// </summary>
    [DataContract(Name = "ClientPoliciesRepresentation")]
    public partial class ClientPoliciesRepresentation : IEquatable<ClientPoliciesRepresentation>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ClientPoliciesRepresentation" /> class.
        /// </summary>
        /// <param name="policies">policies.</param>
        public ClientPoliciesRepresentation(List<ClientPolicyRepresentation> policies = default(List<ClientPolicyRepresentation>))
        {
            this.Policies = policies;
        }

        /// <summary>
        /// Gets or Sets Policies
        /// </summary>
        [DataMember(Name = "policies", EmitDefaultValue = false)]
        public List<ClientPolicyRepresentation> Policies { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ClientPoliciesRepresentation {\n");
            sb.Append("  Policies: ").Append(Policies).Append("\n");
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
            return this.Equals(input as ClientPoliciesRepresentation);
        }

        /// <summary>
        /// Returns true if ClientPoliciesRepresentation instances are equal
        /// </summary>
        /// <param name="input">Instance of ClientPoliciesRepresentation to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ClientPoliciesRepresentation input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Policies == input.Policies ||
                    this.Policies != null &&
                    input.Policies != null &&
                    this.Policies.SequenceEqual(input.Policies)
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
                if (this.Policies != null)
                {
                    hashCode = (hashCode * 59) + this.Policies.GetHashCode();
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