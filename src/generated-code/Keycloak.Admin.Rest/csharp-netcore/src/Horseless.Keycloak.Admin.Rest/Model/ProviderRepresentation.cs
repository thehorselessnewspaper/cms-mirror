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
    /// ProviderRepresentation
    /// </summary>
    [DataContract(Name = "ProviderRepresentation")]
    public partial class ProviderRepresentation : IEquatable<ProviderRepresentation>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ProviderRepresentation" /> class.
        /// </summary>
        /// <param name="operationalInfo">operationalInfo.</param>
        /// <param name="order">order.</param>
        public ProviderRepresentation(Dictionary<string, Object> operationalInfo = default(Dictionary<string, Object>), int order = default(int))
        {
            this.OperationalInfo = operationalInfo;
            this.Order = order;
        }

        /// <summary>
        /// Gets or Sets OperationalInfo
        /// </summary>
        [DataMember(Name = "operationalInfo", EmitDefaultValue = false)]
        public Dictionary<string, Object> OperationalInfo { get; set; }

        /// <summary>
        /// Gets or Sets Order
        /// </summary>
        [DataMember(Name = "order", EmitDefaultValue = false)]
        public int Order { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ProviderRepresentation {\n");
            sb.Append("  OperationalInfo: ").Append(OperationalInfo).Append("\n");
            sb.Append("  Order: ").Append(Order).Append("\n");
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
            return this.Equals(input as ProviderRepresentation);
        }

        /// <summary>
        /// Returns true if ProviderRepresentation instances are equal
        /// </summary>
        /// <param name="input">Instance of ProviderRepresentation to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ProviderRepresentation input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.OperationalInfo == input.OperationalInfo ||
                    this.OperationalInfo != null &&
                    input.OperationalInfo != null &&
                    this.OperationalInfo.SequenceEqual(input.OperationalInfo)
                ) && 
                (
                    this.Order == input.Order ||
                    this.Order.Equals(input.Order)
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
                if (this.OperationalInfo != null)
                {
                    hashCode = (hashCode * 59) + this.OperationalInfo.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.Order.GetHashCode();
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
