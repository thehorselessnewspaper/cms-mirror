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
    /// MappingsRepresentation
    /// </summary>
    [DataContract(Name = "MappingsRepresentation")]
    public partial class MappingsRepresentation : IEquatable<MappingsRepresentation>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="MappingsRepresentation" /> class.
        /// </summary>
        /// <param name="clientMappings">clientMappings.</param>
        /// <param name="realmMappings">realmMappings.</param>
        public MappingsRepresentation(Dictionary<string, Object> clientMappings = default(Dictionary<string, Object>), List<RoleRepresentation> realmMappings = default(List<RoleRepresentation>))
        {
            this.ClientMappings = clientMappings;
            this.RealmMappings = realmMappings;
        }

        /// <summary>
        /// Gets or Sets ClientMappings
        /// </summary>
        [DataMember(Name = "clientMappings", EmitDefaultValue = false)]
        public Dictionary<string, Object> ClientMappings { get; set; }

        /// <summary>
        /// Gets or Sets RealmMappings
        /// </summary>
        [DataMember(Name = "realmMappings", EmitDefaultValue = false)]
        public List<RoleRepresentation> RealmMappings { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class MappingsRepresentation {\n");
            sb.Append("  ClientMappings: ").Append(ClientMappings).Append("\n");
            sb.Append("  RealmMappings: ").Append(RealmMappings).Append("\n");
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
            return this.Equals(input as MappingsRepresentation);
        }

        /// <summary>
        /// Returns true if MappingsRepresentation instances are equal
        /// </summary>
        /// <param name="input">Instance of MappingsRepresentation to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(MappingsRepresentation input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.ClientMappings == input.ClientMappings ||
                    this.ClientMappings != null &&
                    input.ClientMappings != null &&
                    this.ClientMappings.SequenceEqual(input.ClientMappings)
                ) && 
                (
                    this.RealmMappings == input.RealmMappings ||
                    this.RealmMappings != null &&
                    input.RealmMappings != null &&
                    this.RealmMappings.SequenceEqual(input.RealmMappings)
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
                if (this.ClientMappings != null)
                {
                    hashCode = (hashCode * 59) + this.ClientMappings.GetHashCode();
                }
                if (this.RealmMappings != null)
                {
                    hashCode = (hashCode * 59) + this.RealmMappings.GetHashCode();
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
