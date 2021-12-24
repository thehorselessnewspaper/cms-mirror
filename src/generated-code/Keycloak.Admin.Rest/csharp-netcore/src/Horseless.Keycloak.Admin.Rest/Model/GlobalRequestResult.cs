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
    /// GlobalRequestResult
    /// </summary>
    [DataContract(Name = "GlobalRequestResult")]
    public partial class GlobalRequestResult : IEquatable<GlobalRequestResult>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GlobalRequestResult" /> class.
        /// </summary>
        /// <param name="failedRequests">failedRequests.</param>
        /// <param name="successRequests">successRequests.</param>
        public GlobalRequestResult(List<string> failedRequests = default(List<string>), List<string> successRequests = default(List<string>))
        {
            this.FailedRequests = failedRequests;
            this.SuccessRequests = successRequests;
        }

        /// <summary>
        /// Gets or Sets FailedRequests
        /// </summary>
        [DataMember(Name = "failedRequests", EmitDefaultValue = false)]
        public List<string> FailedRequests { get; set; }

        /// <summary>
        /// Gets or Sets SuccessRequests
        /// </summary>
        [DataMember(Name = "successRequests", EmitDefaultValue = false)]
        public List<string> SuccessRequests { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class GlobalRequestResult {\n");
            sb.Append("  FailedRequests: ").Append(FailedRequests).Append("\n");
            sb.Append("  SuccessRequests: ").Append(SuccessRequests).Append("\n");
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
            return this.Equals(input as GlobalRequestResult);
        }

        /// <summary>
        /// Returns true if GlobalRequestResult instances are equal
        /// </summary>
        /// <param name="input">Instance of GlobalRequestResult to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(GlobalRequestResult input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.FailedRequests == input.FailedRequests ||
                    this.FailedRequests != null &&
                    input.FailedRequests != null &&
                    this.FailedRequests.SequenceEqual(input.FailedRequests)
                ) && 
                (
                    this.SuccessRequests == input.SuccessRequests ||
                    this.SuccessRequests != null &&
                    input.SuccessRequests != null &&
                    this.SuccessRequests.SequenceEqual(input.SuccessRequests)
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
                if (this.FailedRequests != null)
                {
                    hashCode = (hashCode * 59) + this.FailedRequests.GetHashCode();
                }
                if (this.SuccessRequests != null)
                {
                    hashCode = (hashCode * 59) + this.SuccessRequests.GetHashCode();
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