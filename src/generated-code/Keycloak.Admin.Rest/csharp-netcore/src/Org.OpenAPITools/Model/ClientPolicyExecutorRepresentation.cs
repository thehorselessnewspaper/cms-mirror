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
    /// ClientPolicyExecutorRepresentation
    /// </summary>
    [DataContract(Name = "ClientPolicyExecutorRepresentation")]
    public partial class ClientPolicyExecutorRepresentation : IEquatable<ClientPolicyExecutorRepresentation>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ClientPolicyExecutorRepresentation" /> class.
        /// </summary>
        /// <param name="configuration">configuration.</param>
        /// <param name="executor">executor.</param>
        public ClientPolicyExecutorRepresentation(JsonNode configuration = default(JsonNode), string executor = default(string))
        {
            this._Configuration = configuration;
            this.Executor = executor;
        }

        /// <summary>
        /// Gets or Sets _Configuration
        /// </summary>
        [DataMember(Name = "configuration", EmitDefaultValue = false)]
        public JsonNode _Configuration { get; set; }

        /// <summary>
        /// Gets or Sets Executor
        /// </summary>
        [DataMember(Name = "executor", EmitDefaultValue = false)]
        public string Executor { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ClientPolicyExecutorRepresentation {\n");
            sb.Append("  _Configuration: ").Append(_Configuration).Append("\n");
            sb.Append("  Executor: ").Append(Executor).Append("\n");
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
            return this.Equals(input as ClientPolicyExecutorRepresentation);
        }

        /// <summary>
        /// Returns true if ClientPolicyExecutorRepresentation instances are equal
        /// </summary>
        /// <param name="input">Instance of ClientPolicyExecutorRepresentation to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ClientPolicyExecutorRepresentation input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this._Configuration == input._Configuration ||
                    (this._Configuration != null &&
                    this._Configuration.Equals(input._Configuration))
                ) && 
                (
                    this.Executor == input.Executor ||
                    (this.Executor != null &&
                    this.Executor.Equals(input.Executor))
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
                if (this._Configuration != null)
                {
                    hashCode = (hashCode * 59) + this._Configuration.GetHashCode();
                }
                if (this.Executor != null)
                {
                    hashCode = (hashCode * 59) + this.Executor.GetHashCode();
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
