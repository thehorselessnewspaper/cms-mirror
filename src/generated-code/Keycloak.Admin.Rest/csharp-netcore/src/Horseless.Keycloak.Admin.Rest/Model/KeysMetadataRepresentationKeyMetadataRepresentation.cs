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
    /// KeysMetadataRepresentationKeyMetadataRepresentation
    /// </summary>
    [DataContract(Name = "KeysMetadataRepresentation-KeyMetadataRepresentation")]
    public partial class KeysMetadataRepresentationKeyMetadataRepresentation : IEquatable<KeysMetadataRepresentationKeyMetadataRepresentation>, IValidatableObject
    {
        /// <summary>
        /// Defines Use
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum UseEnum
        {
            /// <summary>
            /// Enum SIG for value: SIG
            /// </summary>
            [EnumMember(Value = "SIG")]
            SIG = 1,

            /// <summary>
            /// Enum ENC for value: ENC
            /// </summary>
            [EnumMember(Value = "ENC")]
            ENC = 2

        }


        /// <summary>
        /// Gets or Sets Use
        /// </summary>
        [DataMember(Name = "use", EmitDefaultValue = false)]
        public UseEnum? Use { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="KeysMetadataRepresentationKeyMetadataRepresentation" /> class.
        /// </summary>
        /// <param name="algorithm">algorithm.</param>
        /// <param name="certificate">certificate.</param>
        /// <param name="kid">kid.</param>
        /// <param name="providerId">providerId.</param>
        /// <param name="providerPriority">providerPriority.</param>
        /// <param name="publicKey">publicKey.</param>
        /// <param name="status">status.</param>
        /// <param name="type">type.</param>
        /// <param name="use">use.</param>
        public KeysMetadataRepresentationKeyMetadataRepresentation(string algorithm = default(string), string certificate = default(string), string kid = default(string), string providerId = default(string), long providerPriority = default(long), string publicKey = default(string), string status = default(string), string type = default(string), UseEnum? use = default(UseEnum?))
        {
            this.Algorithm = algorithm;
            this.Certificate = certificate;
            this.Kid = kid;
            this.ProviderId = providerId;
            this.ProviderPriority = providerPriority;
            this.PublicKey = publicKey;
            this.Status = status;
            this.Type = type;
            this.Use = use;
        }

        /// <summary>
        /// Gets or Sets Algorithm
        /// </summary>
        [DataMember(Name = "algorithm", EmitDefaultValue = false)]
        public string Algorithm { get; set; }

        /// <summary>
        /// Gets or Sets Certificate
        /// </summary>
        [DataMember(Name = "certificate", EmitDefaultValue = false)]
        public string Certificate { get; set; }

        /// <summary>
        /// Gets or Sets Kid
        /// </summary>
        [DataMember(Name = "kid", EmitDefaultValue = false)]
        public string Kid { get; set; }

        /// <summary>
        /// Gets or Sets ProviderId
        /// </summary>
        [DataMember(Name = "providerId", EmitDefaultValue = false)]
        public string ProviderId { get; set; }

        /// <summary>
        /// Gets or Sets ProviderPriority
        /// </summary>
        [DataMember(Name = "providerPriority", EmitDefaultValue = false)]
        public long ProviderPriority { get; set; }

        /// <summary>
        /// Gets or Sets PublicKey
        /// </summary>
        [DataMember(Name = "publicKey", EmitDefaultValue = false)]
        public string PublicKey { get; set; }

        /// <summary>
        /// Gets or Sets Status
        /// </summary>
        [DataMember(Name = "status", EmitDefaultValue = false)]
        public string Status { get; set; }

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
            sb.Append("class KeysMetadataRepresentationKeyMetadataRepresentation {\n");
            sb.Append("  Algorithm: ").Append(Algorithm).Append("\n");
            sb.Append("  Certificate: ").Append(Certificate).Append("\n");
            sb.Append("  Kid: ").Append(Kid).Append("\n");
            sb.Append("  ProviderId: ").Append(ProviderId).Append("\n");
            sb.Append("  ProviderPriority: ").Append(ProviderPriority).Append("\n");
            sb.Append("  PublicKey: ").Append(PublicKey).Append("\n");
            sb.Append("  Status: ").Append(Status).Append("\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
            sb.Append("  Use: ").Append(Use).Append("\n");
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
            return this.Equals(input as KeysMetadataRepresentationKeyMetadataRepresentation);
        }

        /// <summary>
        /// Returns true if KeysMetadataRepresentationKeyMetadataRepresentation instances are equal
        /// </summary>
        /// <param name="input">Instance of KeysMetadataRepresentationKeyMetadataRepresentation to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(KeysMetadataRepresentationKeyMetadataRepresentation input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Algorithm == input.Algorithm ||
                    (this.Algorithm != null &&
                    this.Algorithm.Equals(input.Algorithm))
                ) && 
                (
                    this.Certificate == input.Certificate ||
                    (this.Certificate != null &&
                    this.Certificate.Equals(input.Certificate))
                ) && 
                (
                    this.Kid == input.Kid ||
                    (this.Kid != null &&
                    this.Kid.Equals(input.Kid))
                ) && 
                (
                    this.ProviderId == input.ProviderId ||
                    (this.ProviderId != null &&
                    this.ProviderId.Equals(input.ProviderId))
                ) && 
                (
                    this.ProviderPriority == input.ProviderPriority ||
                    this.ProviderPriority.Equals(input.ProviderPriority)
                ) && 
                (
                    this.PublicKey == input.PublicKey ||
                    (this.PublicKey != null &&
                    this.PublicKey.Equals(input.PublicKey))
                ) && 
                (
                    this.Status == input.Status ||
                    (this.Status != null &&
                    this.Status.Equals(input.Status))
                ) && 
                (
                    this.Type == input.Type ||
                    (this.Type != null &&
                    this.Type.Equals(input.Type))
                ) && 
                (
                    this.Use == input.Use ||
                    this.Use.Equals(input.Use)
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
                if (this.Algorithm != null)
                {
                    hashCode = (hashCode * 59) + this.Algorithm.GetHashCode();
                }
                if (this.Certificate != null)
                {
                    hashCode = (hashCode * 59) + this.Certificate.GetHashCode();
                }
                if (this.Kid != null)
                {
                    hashCode = (hashCode * 59) + this.Kid.GetHashCode();
                }
                if (this.ProviderId != null)
                {
                    hashCode = (hashCode * 59) + this.ProviderId.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.ProviderPriority.GetHashCode();
                if (this.PublicKey != null)
                {
                    hashCode = (hashCode * 59) + this.PublicKey.GetHashCode();
                }
                if (this.Status != null)
                {
                    hashCode = (hashCode * 59) + this.Status.GetHashCode();
                }
                if (this.Type != null)
                {
                    hashCode = (hashCode * 59) + this.Type.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.Use.GetHashCode();
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