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
    /// UserFederationProviderRepresentation
    /// </summary>
    [DataContract(Name = "UserFederationProviderRepresentation")]
    public partial class UserFederationProviderRepresentation : IEquatable<UserFederationProviderRepresentation>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UserFederationProviderRepresentation" /> class.
        /// </summary>
        /// <param name="changedSyncPeriod">changedSyncPeriod.</param>
        /// <param name="config">config.</param>
        /// <param name="displayName">displayName.</param>
        /// <param name="fullSyncPeriod">fullSyncPeriod.</param>
        /// <param name="id">id.</param>
        /// <param name="lastSync">lastSync.</param>
        /// <param name="priority">priority.</param>
        /// <param name="providerName">providerName.</param>
        public UserFederationProviderRepresentation(int changedSyncPeriod = default(int), Dictionary<string, Object> config = default(Dictionary<string, Object>), string displayName = default(string), int fullSyncPeriod = default(int), string id = default(string), int lastSync = default(int), int priority = default(int), string providerName = default(string))
        {
            this.ChangedSyncPeriod = changedSyncPeriod;
            this.Config = config;
            this.DisplayName = displayName;
            this.FullSyncPeriod = fullSyncPeriod;
            this.Id = id;
            this.LastSync = lastSync;
            this.Priority = priority;
            this.ProviderName = providerName;
        }

        /// <summary>
        /// Gets or Sets ChangedSyncPeriod
        /// </summary>
        [DataMember(Name = "changedSyncPeriod", EmitDefaultValue = false)]
        public int ChangedSyncPeriod { get; set; }

        /// <summary>
        /// Gets or Sets Config
        /// </summary>
        [DataMember(Name = "config", EmitDefaultValue = false)]
        public Dictionary<string, Object> Config { get; set; }

        /// <summary>
        /// Gets or Sets DisplayName
        /// </summary>
        [DataMember(Name = "displayName", EmitDefaultValue = false)]
        public string DisplayName { get; set; }

        /// <summary>
        /// Gets or Sets FullSyncPeriod
        /// </summary>
        [DataMember(Name = "fullSyncPeriod", EmitDefaultValue = false)]
        public int FullSyncPeriod { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// Gets or Sets LastSync
        /// </summary>
        [DataMember(Name = "lastSync", EmitDefaultValue = false)]
        public int LastSync { get; set; }

        /// <summary>
        /// Gets or Sets Priority
        /// </summary>
        [DataMember(Name = "priority", EmitDefaultValue = false)]
        public int Priority { get; set; }

        /// <summary>
        /// Gets or Sets ProviderName
        /// </summary>
        [DataMember(Name = "providerName", EmitDefaultValue = false)]
        public string ProviderName { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class UserFederationProviderRepresentation {\n");
            sb.Append("  ChangedSyncPeriod: ").Append(ChangedSyncPeriod).Append("\n");
            sb.Append("  Config: ").Append(Config).Append("\n");
            sb.Append("  DisplayName: ").Append(DisplayName).Append("\n");
            sb.Append("  FullSyncPeriod: ").Append(FullSyncPeriod).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  LastSync: ").Append(LastSync).Append("\n");
            sb.Append("  Priority: ").Append(Priority).Append("\n");
            sb.Append("  ProviderName: ").Append(ProviderName).Append("\n");
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
            return this.Equals(input as UserFederationProviderRepresentation);
        }

        /// <summary>
        /// Returns true if UserFederationProviderRepresentation instances are equal
        /// </summary>
        /// <param name="input">Instance of UserFederationProviderRepresentation to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(UserFederationProviderRepresentation input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.ChangedSyncPeriod == input.ChangedSyncPeriod ||
                    this.ChangedSyncPeriod.Equals(input.ChangedSyncPeriod)
                ) && 
                (
                    this.Config == input.Config ||
                    this.Config != null &&
                    input.Config != null &&
                    this.Config.SequenceEqual(input.Config)
                ) && 
                (
                    this.DisplayName == input.DisplayName ||
                    (this.DisplayName != null &&
                    this.DisplayName.Equals(input.DisplayName))
                ) && 
                (
                    this.FullSyncPeriod == input.FullSyncPeriod ||
                    this.FullSyncPeriod.Equals(input.FullSyncPeriod)
                ) && 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
                (
                    this.LastSync == input.LastSync ||
                    this.LastSync.Equals(input.LastSync)
                ) && 
                (
                    this.Priority == input.Priority ||
                    this.Priority.Equals(input.Priority)
                ) && 
                (
                    this.ProviderName == input.ProviderName ||
                    (this.ProviderName != null &&
                    this.ProviderName.Equals(input.ProviderName))
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
                hashCode = (hashCode * 59) + this.ChangedSyncPeriod.GetHashCode();
                if (this.Config != null)
                {
                    hashCode = (hashCode * 59) + this.Config.GetHashCode();
                }
                if (this.DisplayName != null)
                {
                    hashCode = (hashCode * 59) + this.DisplayName.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.FullSyncPeriod.GetHashCode();
                if (this.Id != null)
                {
                    hashCode = (hashCode * 59) + this.Id.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.LastSync.GetHashCode();
                hashCode = (hashCode * 59) + this.Priority.GetHashCode();
                if (this.ProviderName != null)
                {
                    hashCode = (hashCode * 59) + this.ProviderName.GetHashCode();
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