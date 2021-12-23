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
    /// PartialImportRepresentation
    /// </summary>
    [DataContract(Name = "PartialImportRepresentation")]
    public partial class PartialImportRepresentation : IEquatable<PartialImportRepresentation>, IValidatableObject
    {
        /// <summary>
        /// Defines Policy
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum PolicyEnum
        {
            /// <summary>
            /// Enum SKIP for value: SKIP
            /// </summary>
            [EnumMember(Value = "SKIP")]
            SKIP = 1,

            /// <summary>
            /// Enum OVERWRITE for value: OVERWRITE
            /// </summary>
            [EnumMember(Value = "OVERWRITE")]
            OVERWRITE = 2,

            /// <summary>
            /// Enum FAIL for value: FAIL
            /// </summary>
            [EnumMember(Value = "FAIL")]
            FAIL = 3

        }


        /// <summary>
        /// Gets or Sets Policy
        /// </summary>
        [DataMember(Name = "policy", EmitDefaultValue = false)]
        public PolicyEnum? Policy { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="PartialImportRepresentation" /> class.
        /// </summary>
        /// <param name="clients">clients.</param>
        /// <param name="groups">groups.</param>
        /// <param name="identityProviders">identityProviders.</param>
        /// <param name="ifResourceExists">ifResourceExists.</param>
        /// <param name="policy">policy.</param>
        /// <param name="roles">roles.</param>
        /// <param name="users">users.</param>
        public PartialImportRepresentation(List<ClientRepresentation> clients = default(List<ClientRepresentation>), List<GroupRepresentation> groups = default(List<GroupRepresentation>), List<IdentityProviderRepresentation> identityProviders = default(List<IdentityProviderRepresentation>), string ifResourceExists = default(string), PolicyEnum? policy = default(PolicyEnum?), RolesRepresentation roles = default(RolesRepresentation), List<UserRepresentation> users = default(List<UserRepresentation>))
        {
            this.Clients = clients;
            this.Groups = groups;
            this.IdentityProviders = identityProviders;
            this.IfResourceExists = ifResourceExists;
            this.Policy = policy;
            this.Roles = roles;
            this.Users = users;
        }

        /// <summary>
        /// Gets or Sets Clients
        /// </summary>
        [DataMember(Name = "clients", EmitDefaultValue = false)]
        public List<ClientRepresentation> Clients { get; set; }

        /// <summary>
        /// Gets or Sets Groups
        /// </summary>
        [DataMember(Name = "groups", EmitDefaultValue = false)]
        public List<GroupRepresentation> Groups { get; set; }

        /// <summary>
        /// Gets or Sets IdentityProviders
        /// </summary>
        [DataMember(Name = "identityProviders", EmitDefaultValue = false)]
        public List<IdentityProviderRepresentation> IdentityProviders { get; set; }

        /// <summary>
        /// Gets or Sets IfResourceExists
        /// </summary>
        [DataMember(Name = "ifResourceExists", EmitDefaultValue = false)]
        public string IfResourceExists { get; set; }

        /// <summary>
        /// Gets or Sets Roles
        /// </summary>
        [DataMember(Name = "roles", EmitDefaultValue = false)]
        public RolesRepresentation Roles { get; set; }

        /// <summary>
        /// Gets or Sets Users
        /// </summary>
        [DataMember(Name = "users", EmitDefaultValue = false)]
        public List<UserRepresentation> Users { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class PartialImportRepresentation {\n");
            sb.Append("  Clients: ").Append(Clients).Append("\n");
            sb.Append("  Groups: ").Append(Groups).Append("\n");
            sb.Append("  IdentityProviders: ").Append(IdentityProviders).Append("\n");
            sb.Append("  IfResourceExists: ").Append(IfResourceExists).Append("\n");
            sb.Append("  Policy: ").Append(Policy).Append("\n");
            sb.Append("  Roles: ").Append(Roles).Append("\n");
            sb.Append("  Users: ").Append(Users).Append("\n");
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
            return this.Equals(input as PartialImportRepresentation);
        }

        /// <summary>
        /// Returns true if PartialImportRepresentation instances are equal
        /// </summary>
        /// <param name="input">Instance of PartialImportRepresentation to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(PartialImportRepresentation input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Clients == input.Clients ||
                    this.Clients != null &&
                    input.Clients != null &&
                    this.Clients.SequenceEqual(input.Clients)
                ) && 
                (
                    this.Groups == input.Groups ||
                    this.Groups != null &&
                    input.Groups != null &&
                    this.Groups.SequenceEqual(input.Groups)
                ) && 
                (
                    this.IdentityProviders == input.IdentityProviders ||
                    this.IdentityProviders != null &&
                    input.IdentityProviders != null &&
                    this.IdentityProviders.SequenceEqual(input.IdentityProviders)
                ) && 
                (
                    this.IfResourceExists == input.IfResourceExists ||
                    (this.IfResourceExists != null &&
                    this.IfResourceExists.Equals(input.IfResourceExists))
                ) && 
                (
                    this.Policy == input.Policy ||
                    this.Policy.Equals(input.Policy)
                ) && 
                (
                    this.Roles == input.Roles ||
                    (this.Roles != null &&
                    this.Roles.Equals(input.Roles))
                ) && 
                (
                    this.Users == input.Users ||
                    this.Users != null &&
                    input.Users != null &&
                    this.Users.SequenceEqual(input.Users)
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
                if (this.Clients != null)
                {
                    hashCode = (hashCode * 59) + this.Clients.GetHashCode();
                }
                if (this.Groups != null)
                {
                    hashCode = (hashCode * 59) + this.Groups.GetHashCode();
                }
                if (this.IdentityProviders != null)
                {
                    hashCode = (hashCode * 59) + this.IdentityProviders.GetHashCode();
                }
                if (this.IfResourceExists != null)
                {
                    hashCode = (hashCode * 59) + this.IfResourceExists.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.Policy.GetHashCode();
                if (this.Roles != null)
                {
                    hashCode = (hashCode * 59) + this.Roles.GetHashCode();
                }
                if (this.Users != null)
                {
                    hashCode = (hashCode * 59) + this.Users.GetHashCode();
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
