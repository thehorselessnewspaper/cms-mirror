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
    /// ManagementPermissionReference
    /// </summary>
    [DataContract(Name = "ManagementPermissionReference")]
    public partial class ManagementPermissionReference : IEquatable<ManagementPermissionReference>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ManagementPermissionReference" /> class.
        /// </summary>
        /// <param name="enabled">enabled.</param>
        /// <param name="resource">resource.</param>
        /// <param name="scopePermissions">scopePermissions.</param>
        public ManagementPermissionReference(bool enabled = default(bool), string resource = default(string), Dictionary<string, Object> scopePermissions = default(Dictionary<string, Object>))
        {
            this.Enabled = enabled;
            this.Resource = resource;
            this.ScopePermissions = scopePermissions;
        }

        /// <summary>
        /// Gets or Sets Enabled
        /// </summary>
        [DataMember(Name = "enabled", EmitDefaultValue = true)]
        public bool Enabled { get; set; }

        /// <summary>
        /// Gets or Sets Resource
        /// </summary>
        [DataMember(Name = "resource", EmitDefaultValue = false)]
        public string Resource { get; set; }

        /// <summary>
        /// Gets or Sets ScopePermissions
        /// </summary>
        [DataMember(Name = "scopePermissions", EmitDefaultValue = false)]
        public Dictionary<string, Object> ScopePermissions { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ManagementPermissionReference {\n");
            sb.Append("  Enabled: ").Append(Enabled).Append("\n");
            sb.Append("  Resource: ").Append(Resource).Append("\n");
            sb.Append("  ScopePermissions: ").Append(ScopePermissions).Append("\n");
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
            return this.Equals(input as ManagementPermissionReference);
        }

        /// <summary>
        /// Returns true if ManagementPermissionReference instances are equal
        /// </summary>
        /// <param name="input">Instance of ManagementPermissionReference to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ManagementPermissionReference input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Enabled == input.Enabled ||
                    this.Enabled.Equals(input.Enabled)
                ) && 
                (
                    this.Resource == input.Resource ||
                    (this.Resource != null &&
                    this.Resource.Equals(input.Resource))
                ) && 
                (
                    this.ScopePermissions == input.ScopePermissions ||
                    this.ScopePermissions != null &&
                    input.ScopePermissions != null &&
                    this.ScopePermissions.SequenceEqual(input.ScopePermissions)
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
                hashCode = (hashCode * 59) + this.Enabled.GetHashCode();
                if (this.Resource != null)
                {
                    hashCode = (hashCode * 59) + this.Resource.GetHashCode();
                }
                if (this.ScopePermissions != null)
                {
                    hashCode = (hashCode * 59) + this.ScopePermissions.GetHashCode();
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
