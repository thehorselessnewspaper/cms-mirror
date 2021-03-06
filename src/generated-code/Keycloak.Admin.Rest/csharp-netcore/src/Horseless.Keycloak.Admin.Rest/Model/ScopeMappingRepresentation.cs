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
    /// ScopeMappingRepresentation
    /// </summary>
    [DataContract(Name = "ScopeMappingRepresentation")]
    public partial class ScopeMappingRepresentation : IEquatable<ScopeMappingRepresentation>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ScopeMappingRepresentation" /> class.
        /// </summary>
        /// <param name="_client">_client.</param>
        /// <param name="clientScope">clientScope.</param>
        /// <param name="roles">roles.</param>
        /// <param name="self">self.</param>
        public ScopeMappingRepresentation(string _client = default(string), string clientScope = default(string), List<string> roles = default(List<string>), string self = default(string))
        {
            this._Client = _client;
            this.ClientScope = clientScope;
            this.Roles = roles;
            this.Self = self;
        }

        /// <summary>
        /// Gets or Sets _Client
        /// </summary>
        [DataMember(Name = "client", EmitDefaultValue = false)]
        public string _Client { get; set; }

        /// <summary>
        /// Gets or Sets ClientScope
        /// </summary>
        [DataMember(Name = "clientScope", EmitDefaultValue = false)]
        public string ClientScope { get; set; }

        /// <summary>
        /// Gets or Sets Roles
        /// </summary>
        [DataMember(Name = "roles", EmitDefaultValue = false)]
        public List<string> Roles { get; set; }

        /// <summary>
        /// Gets or Sets Self
        /// </summary>
        [DataMember(Name = "self", EmitDefaultValue = false)]
        public string Self { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ScopeMappingRepresentation {\n");
            sb.Append("  _Client: ").Append(_Client).Append("\n");
            sb.Append("  ClientScope: ").Append(ClientScope).Append("\n");
            sb.Append("  Roles: ").Append(Roles).Append("\n");
            sb.Append("  Self: ").Append(Self).Append("\n");
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
            return this.Equals(input as ScopeMappingRepresentation);
        }

        /// <summary>
        /// Returns true if ScopeMappingRepresentation instances are equal
        /// </summary>
        /// <param name="input">Instance of ScopeMappingRepresentation to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ScopeMappingRepresentation input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this._Client == input._Client ||
                    (this._Client != null &&
                    this._Client.Equals(input._Client))
                ) && 
                (
                    this.ClientScope == input.ClientScope ||
                    (this.ClientScope != null &&
                    this.ClientScope.Equals(input.ClientScope))
                ) && 
                (
                    this.Roles == input.Roles ||
                    this.Roles != null &&
                    input.Roles != null &&
                    this.Roles.SequenceEqual(input.Roles)
                ) && 
                (
                    this.Self == input.Self ||
                    (this.Self != null &&
                    this.Self.Equals(input.Self))
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
                if (this._Client != null)
                {
                    hashCode = (hashCode * 59) + this._Client.GetHashCode();
                }
                if (this.ClientScope != null)
                {
                    hashCode = (hashCode * 59) + this.ClientScope.GetHashCode();
                }
                if (this.Roles != null)
                {
                    hashCode = (hashCode * 59) + this.Roles.GetHashCode();
                }
                if (this.Self != null)
                {
                    hashCode = (hashCode * 59) + this.Self.GetHashCode();
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
