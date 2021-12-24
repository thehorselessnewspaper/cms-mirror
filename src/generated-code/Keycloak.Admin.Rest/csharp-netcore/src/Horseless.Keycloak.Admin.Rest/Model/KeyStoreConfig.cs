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
    /// KeyStoreConfig
    /// </summary>
    [DataContract(Name = "KeyStoreConfig")]
    public partial class KeyStoreConfig : IEquatable<KeyStoreConfig>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="KeyStoreConfig" /> class.
        /// </summary>
        /// <param name="format">format.</param>
        /// <param name="keyAlias">keyAlias.</param>
        /// <param name="keyPassword">keyPassword.</param>
        /// <param name="realmAlias">realmAlias.</param>
        /// <param name="realmCertificate">realmCertificate.</param>
        /// <param name="storePassword">storePassword.</param>
        public KeyStoreConfig(string format = default(string), string keyAlias = default(string), string keyPassword = default(string), string realmAlias = default(string), bool realmCertificate = default(bool), string storePassword = default(string))
        {
            this.Format = format;
            this.KeyAlias = keyAlias;
            this.KeyPassword = keyPassword;
            this.RealmAlias = realmAlias;
            this.RealmCertificate = realmCertificate;
            this.StorePassword = storePassword;
        }

        /// <summary>
        /// Gets or Sets Format
        /// </summary>
        [DataMember(Name = "format", EmitDefaultValue = false)]
        public string Format { get; set; }

        /// <summary>
        /// Gets or Sets KeyAlias
        /// </summary>
        [DataMember(Name = "keyAlias", EmitDefaultValue = false)]
        public string KeyAlias { get; set; }

        /// <summary>
        /// Gets or Sets KeyPassword
        /// </summary>
        [DataMember(Name = "keyPassword", EmitDefaultValue = false)]
        public string KeyPassword { get; set; }

        /// <summary>
        /// Gets or Sets RealmAlias
        /// </summary>
        [DataMember(Name = "realmAlias", EmitDefaultValue = false)]
        public string RealmAlias { get; set; }

        /// <summary>
        /// Gets or Sets RealmCertificate
        /// </summary>
        [DataMember(Name = "realmCertificate", EmitDefaultValue = true)]
        public bool RealmCertificate { get; set; }

        /// <summary>
        /// Gets or Sets StorePassword
        /// </summary>
        [DataMember(Name = "storePassword", EmitDefaultValue = false)]
        public string StorePassword { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class KeyStoreConfig {\n");
            sb.Append("  Format: ").Append(Format).Append("\n");
            sb.Append("  KeyAlias: ").Append(KeyAlias).Append("\n");
            sb.Append("  KeyPassword: ").Append(KeyPassword).Append("\n");
            sb.Append("  RealmAlias: ").Append(RealmAlias).Append("\n");
            sb.Append("  RealmCertificate: ").Append(RealmCertificate).Append("\n");
            sb.Append("  StorePassword: ").Append(StorePassword).Append("\n");
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
            return this.Equals(input as KeyStoreConfig);
        }

        /// <summary>
        /// Returns true if KeyStoreConfig instances are equal
        /// </summary>
        /// <param name="input">Instance of KeyStoreConfig to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(KeyStoreConfig input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Format == input.Format ||
                    (this.Format != null &&
                    this.Format.Equals(input.Format))
                ) && 
                (
                    this.KeyAlias == input.KeyAlias ||
                    (this.KeyAlias != null &&
                    this.KeyAlias.Equals(input.KeyAlias))
                ) && 
                (
                    this.KeyPassword == input.KeyPassword ||
                    (this.KeyPassword != null &&
                    this.KeyPassword.Equals(input.KeyPassword))
                ) && 
                (
                    this.RealmAlias == input.RealmAlias ||
                    (this.RealmAlias != null &&
                    this.RealmAlias.Equals(input.RealmAlias))
                ) && 
                (
                    this.RealmCertificate == input.RealmCertificate ||
                    this.RealmCertificate.Equals(input.RealmCertificate)
                ) && 
                (
                    this.StorePassword == input.StorePassword ||
                    (this.StorePassword != null &&
                    this.StorePassword.Equals(input.StorePassword))
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
                if (this.Format != null)
                {
                    hashCode = (hashCode * 59) + this.Format.GetHashCode();
                }
                if (this.KeyAlias != null)
                {
                    hashCode = (hashCode * 59) + this.KeyAlias.GetHashCode();
                }
                if (this.KeyPassword != null)
                {
                    hashCode = (hashCode * 59) + this.KeyPassword.GetHashCode();
                }
                if (this.RealmAlias != null)
                {
                    hashCode = (hashCode * 59) + this.RealmAlias.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.RealmCertificate.GetHashCode();
                if (this.StorePassword != null)
                {
                    hashCode = (hashCode * 59) + this.StorePassword.GetHashCode();
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