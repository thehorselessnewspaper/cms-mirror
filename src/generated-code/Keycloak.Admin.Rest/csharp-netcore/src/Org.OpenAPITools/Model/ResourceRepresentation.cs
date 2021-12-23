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
    /// ResourceRepresentation
    /// </summary>
    [DataContract(Name = "ResourceRepresentation")]
    public partial class ResourceRepresentation : IEquatable<ResourceRepresentation>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ResourceRepresentation" /> class.
        /// </summary>
        /// <param name="id">id.</param>
        /// <param name="attributes">attributes.</param>
        /// <param name="displayName">displayName.</param>
        /// <param name="iconUri">iconUri.</param>
        /// <param name="name">name.</param>
        /// <param name="ownerManagedAccess">ownerManagedAccess.</param>
        /// <param name="scopes">scopes.</param>
        /// <param name="type">type.</param>
        /// <param name="uris">uris.</param>
        public ResourceRepresentation(string id = default(string), Dictionary<string, Object> attributes = default(Dictionary<string, Object>), string displayName = default(string), string iconUri = default(string), string name = default(string), bool ownerManagedAccess = default(bool), List<ScopeRepresentation> scopes = default(List<ScopeRepresentation>), string type = default(string), List<string> uris = default(List<string>))
        {
            this.Id = id;
            this.Attributes = attributes;
            this.DisplayName = displayName;
            this.IconUri = iconUri;
            this.Name = name;
            this.OwnerManagedAccess = ownerManagedAccess;
            this.Scopes = scopes;
            this.Type = type;
            this.Uris = uris;
        }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// Gets or Sets Attributes
        /// </summary>
        [DataMember(Name = "attributes", EmitDefaultValue = false)]
        public Dictionary<string, Object> Attributes { get; set; }

        /// <summary>
        /// Gets or Sets DisplayName
        /// </summary>
        [DataMember(Name = "displayName", EmitDefaultValue = false)]
        public string DisplayName { get; set; }

        /// <summary>
        /// Gets or Sets IconUri
        /// </summary>
        [DataMember(Name = "icon_uri", EmitDefaultValue = false)]
        public string IconUri { get; set; }

        /// <summary>
        /// Gets or Sets Name
        /// </summary>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// Gets or Sets OwnerManagedAccess
        /// </summary>
        [DataMember(Name = "ownerManagedAccess", EmitDefaultValue = true)]
        public bool OwnerManagedAccess { get; set; }

        /// <summary>
        /// Gets or Sets Scopes
        /// </summary>
        [DataMember(Name = "scopes", EmitDefaultValue = false)]
        public List<ScopeRepresentation> Scopes { get; set; }

        /// <summary>
        /// Gets or Sets Type
        /// </summary>
        [DataMember(Name = "type", EmitDefaultValue = false)]
        public string Type { get; set; }

        /// <summary>
        /// Gets or Sets Uris
        /// </summary>
        [DataMember(Name = "uris", EmitDefaultValue = false)]
        public List<string> Uris { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ResourceRepresentation {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Attributes: ").Append(Attributes).Append("\n");
            sb.Append("  DisplayName: ").Append(DisplayName).Append("\n");
            sb.Append("  IconUri: ").Append(IconUri).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  OwnerManagedAccess: ").Append(OwnerManagedAccess).Append("\n");
            sb.Append("  Scopes: ").Append(Scopes).Append("\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
            sb.Append("  Uris: ").Append(Uris).Append("\n");
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
            return this.Equals(input as ResourceRepresentation);
        }

        /// <summary>
        /// Returns true if ResourceRepresentation instances are equal
        /// </summary>
        /// <param name="input">Instance of ResourceRepresentation to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ResourceRepresentation input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
                (
                    this.Attributes == input.Attributes ||
                    this.Attributes != null &&
                    input.Attributes != null &&
                    this.Attributes.SequenceEqual(input.Attributes)
                ) && 
                (
                    this.DisplayName == input.DisplayName ||
                    (this.DisplayName != null &&
                    this.DisplayName.Equals(input.DisplayName))
                ) && 
                (
                    this.IconUri == input.IconUri ||
                    (this.IconUri != null &&
                    this.IconUri.Equals(input.IconUri))
                ) && 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.OwnerManagedAccess == input.OwnerManagedAccess ||
                    this.OwnerManagedAccess.Equals(input.OwnerManagedAccess)
                ) && 
                (
                    this.Scopes == input.Scopes ||
                    this.Scopes != null &&
                    input.Scopes != null &&
                    this.Scopes.SequenceEqual(input.Scopes)
                ) && 
                (
                    this.Type == input.Type ||
                    (this.Type != null &&
                    this.Type.Equals(input.Type))
                ) && 
                (
                    this.Uris == input.Uris ||
                    this.Uris != null &&
                    input.Uris != null &&
                    this.Uris.SequenceEqual(input.Uris)
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
                if (this.Id != null)
                {
                    hashCode = (hashCode * 59) + this.Id.GetHashCode();
                }
                if (this.Attributes != null)
                {
                    hashCode = (hashCode * 59) + this.Attributes.GetHashCode();
                }
                if (this.DisplayName != null)
                {
                    hashCode = (hashCode * 59) + this.DisplayName.GetHashCode();
                }
                if (this.IconUri != null)
                {
                    hashCode = (hashCode * 59) + this.IconUri.GetHashCode();
                }
                if (this.Name != null)
                {
                    hashCode = (hashCode * 59) + this.Name.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.OwnerManagedAccess.GetHashCode();
                if (this.Scopes != null)
                {
                    hashCode = (hashCode * 59) + this.Scopes.GetHashCode();
                }
                if (this.Type != null)
                {
                    hashCode = (hashCode * 59) + this.Type.GetHashCode();
                }
                if (this.Uris != null)
                {
                    hashCode = (hashCode * 59) + this.Uris.GetHashCode();
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
