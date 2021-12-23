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
    /// CredentialRepresentation
    /// </summary>
    [DataContract(Name = "CredentialRepresentation")]
    public partial class CredentialRepresentation : IEquatable<CredentialRepresentation>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CredentialRepresentation" /> class.
        /// </summary>
        /// <param name="createdDate">createdDate.</param>
        /// <param name="credentialData">credentialData.</param>
        /// <param name="id">id.</param>
        /// <param name="priority">priority.</param>
        /// <param name="secretData">secretData.</param>
        /// <param name="temporary">temporary.</param>
        /// <param name="type">type.</param>
        /// <param name="userLabel">userLabel.</param>
        /// <param name="value">value.</param>
        public CredentialRepresentation(long createdDate = default(long), string credentialData = default(string), string id = default(string), int priority = default(int), string secretData = default(string), bool temporary = default(bool), string type = default(string), string userLabel = default(string), string value = default(string))
        {
            this.CreatedDate = createdDate;
            this.CredentialData = credentialData;
            this.Id = id;
            this.Priority = priority;
            this.SecretData = secretData;
            this.Temporary = temporary;
            this.Type = type;
            this.UserLabel = userLabel;
            this.Value = value;
        }

        /// <summary>
        /// Gets or Sets CreatedDate
        /// </summary>
        [DataMember(Name = "createdDate", EmitDefaultValue = false)]
        public long CreatedDate { get; set; }

        /// <summary>
        /// Gets or Sets CredentialData
        /// </summary>
        [DataMember(Name = "credentialData", EmitDefaultValue = false)]
        public string CredentialData { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// Gets or Sets Priority
        /// </summary>
        [DataMember(Name = "priority", EmitDefaultValue = false)]
        public int Priority { get; set; }

        /// <summary>
        /// Gets or Sets SecretData
        /// </summary>
        [DataMember(Name = "secretData", EmitDefaultValue = false)]
        public string SecretData { get; set; }

        /// <summary>
        /// Gets or Sets Temporary
        /// </summary>
        [DataMember(Name = "temporary", EmitDefaultValue = true)]
        public bool Temporary { get; set; }

        /// <summary>
        /// Gets or Sets Type
        /// </summary>
        [DataMember(Name = "type", EmitDefaultValue = false)]
        public string Type { get; set; }

        /// <summary>
        /// Gets or Sets UserLabel
        /// </summary>
        [DataMember(Name = "userLabel", EmitDefaultValue = false)]
        public string UserLabel { get; set; }

        /// <summary>
        /// Gets or Sets Value
        /// </summary>
        [DataMember(Name = "value", EmitDefaultValue = false)]
        public string Value { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CredentialRepresentation {\n");
            sb.Append("  CreatedDate: ").Append(CreatedDate).Append("\n");
            sb.Append("  CredentialData: ").Append(CredentialData).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Priority: ").Append(Priority).Append("\n");
            sb.Append("  SecretData: ").Append(SecretData).Append("\n");
            sb.Append("  Temporary: ").Append(Temporary).Append("\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
            sb.Append("  UserLabel: ").Append(UserLabel).Append("\n");
            sb.Append("  Value: ").Append(Value).Append("\n");
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
            return this.Equals(input as CredentialRepresentation);
        }

        /// <summary>
        /// Returns true if CredentialRepresentation instances are equal
        /// </summary>
        /// <param name="input">Instance of CredentialRepresentation to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(CredentialRepresentation input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.CreatedDate == input.CreatedDate ||
                    this.CreatedDate.Equals(input.CreatedDate)
                ) && 
                (
                    this.CredentialData == input.CredentialData ||
                    (this.CredentialData != null &&
                    this.CredentialData.Equals(input.CredentialData))
                ) && 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
                (
                    this.Priority == input.Priority ||
                    this.Priority.Equals(input.Priority)
                ) && 
                (
                    this.SecretData == input.SecretData ||
                    (this.SecretData != null &&
                    this.SecretData.Equals(input.SecretData))
                ) && 
                (
                    this.Temporary == input.Temporary ||
                    this.Temporary.Equals(input.Temporary)
                ) && 
                (
                    this.Type == input.Type ||
                    (this.Type != null &&
                    this.Type.Equals(input.Type))
                ) && 
                (
                    this.UserLabel == input.UserLabel ||
                    (this.UserLabel != null &&
                    this.UserLabel.Equals(input.UserLabel))
                ) && 
                (
                    this.Value == input.Value ||
                    (this.Value != null &&
                    this.Value.Equals(input.Value))
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
                hashCode = (hashCode * 59) + this.CreatedDate.GetHashCode();
                if (this.CredentialData != null)
                {
                    hashCode = (hashCode * 59) + this.CredentialData.GetHashCode();
                }
                if (this.Id != null)
                {
                    hashCode = (hashCode * 59) + this.Id.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.Priority.GetHashCode();
                if (this.SecretData != null)
                {
                    hashCode = (hashCode * 59) + this.SecretData.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.Temporary.GetHashCode();
                if (this.Type != null)
                {
                    hashCode = (hashCode * 59) + this.Type.GetHashCode();
                }
                if (this.UserLabel != null)
                {
                    hashCode = (hashCode * 59) + this.UserLabel.GetHashCode();
                }
                if (this.Value != null)
                {
                    hashCode = (hashCode * 59) + this.Value.GetHashCode();
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
