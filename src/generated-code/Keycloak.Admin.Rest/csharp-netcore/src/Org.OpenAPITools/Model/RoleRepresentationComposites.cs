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
using OpenAPIDateConverter = Org.OpenAPITools.Client.OpenAPIDateConverter;

namespace Org.OpenAPITools.Model
{
    /// <summary>
    /// RoleRepresentationComposites
    /// </summary>
    [DataContract(Name = "RoleRepresentation-Composites")]
    public partial class RoleRepresentationComposites : IEquatable<RoleRepresentationComposites>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="RoleRepresentationComposites" /> class.
        /// </summary>
        /// <param name="_client">_client.</param>
        /// <param name="realm">realm.</param>
        public RoleRepresentationComposites(Dictionary<string, Object> _client = default(Dictionary<string, Object>), List<string> realm = default(List<string>))
        {
            this._Client = _client;
            this.Realm = realm;
        }

        /// <summary>
        /// Gets or Sets _Client
        /// </summary>
        [DataMember(Name = "client", EmitDefaultValue = false)]
        public Dictionary<string, Object> _Client { get; set; }

        /// <summary>
        /// Gets or Sets Realm
        /// </summary>
        [DataMember(Name = "realm", EmitDefaultValue = false)]
        public List<string> Realm { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class RoleRepresentationComposites {\n");
            sb.Append("  _Client: ").Append(_Client).Append("\n");
            sb.Append("  Realm: ").Append(Realm).Append("\n");
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
            return this.Equals(input as RoleRepresentationComposites);
        }

        /// <summary>
        /// Returns true if RoleRepresentationComposites instances are equal
        /// </summary>
        /// <param name="input">Instance of RoleRepresentationComposites to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(RoleRepresentationComposites input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this._Client == input._Client ||
                    this._Client != null &&
                    input._Client != null &&
                    this._Client.SequenceEqual(input._Client)
                ) && 
                (
                    this.Realm == input.Realm ||
                    this.Realm != null &&
                    input.Realm != null &&
                    this.Realm.SequenceEqual(input.Realm)
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
                if (this.Realm != null)
                {
                    hashCode = (hashCode * 59) + this.Realm.GetHashCode();
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
