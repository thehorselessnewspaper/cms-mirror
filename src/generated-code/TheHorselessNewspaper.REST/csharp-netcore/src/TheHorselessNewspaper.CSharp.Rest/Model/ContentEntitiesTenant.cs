/*
 * Horseless Content API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
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
using OpenAPIDateConverter = TheHorselessNewspaper.CSharp.Rest.Client.OpenAPIDateConverter;

namespace TheHorselessNewspaper.CSharp.Rest.Model
{
    /// <summary>
    /// ContentEntitiesTenant
    /// </summary>
    [DataContract(Name = "ContentEntitiesTenant")]
    public partial class ContentEntitiesTenant : IEquatable<ContentEntitiesTenant>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ContentEntitiesTenant" /> class.
        /// </summary>
        /// <param name="id">id.</param>
        /// <param name="displayName">displayName.</param>
        /// <param name="objectId">objectId.</param>
        /// <param name="isSoftDeleted">isSoftDeleted.</param>
        /// <param name="createdAt">createdAt.</param>
        /// <param name="accessControlEntries">accessControlEntries.</param>
        /// <param name="accounts">accounts.</param>
        /// <param name="contentCollections">contentCollections.</param>
        /// <param name="owners">owners.</param>
        /// <param name="isPublished">isPublished.</param>
        /// <param name="baseUrl">baseUrl.</param>
        /// <param name="tenantIdentifierStrategy">tenantIdentifierStrategy.</param>
        /// <param name="tenantIdentifier">tenantIdentifier.</param>
        /// <param name="timestamp">timestamp.</param>
        /// <param name="updatedAt">updatedAt.</param>
        public ContentEntitiesTenant(Guid id = default(Guid), string displayName = default(string), string objectId = default(string), bool? isSoftDeleted = default(bool?), DateTime? createdAt = default(DateTime?), List<ContentEntitiesAccessControlEntry> accessControlEntries = default(List<ContentEntitiesAccessControlEntry>), List<ContentEntitiesPrincipal> accounts = default(List<ContentEntitiesPrincipal>), List<ContentEntitiesContentCollection> contentCollections = default(List<ContentEntitiesContentCollection>), List<ContentEntitiesPrincipal> owners = default(List<ContentEntitiesPrincipal>), bool isPublished = default(bool), string baseUrl = default(string), ContentEntitiesTenantIdentifierStrategy tenantIdentifierStrategy = default(ContentEntitiesTenantIdentifierStrategy), string tenantIdentifier = default(string), byte[] timestamp = default(byte[]), DateTime? updatedAt = default(DateTime?))
        {
            this.Id = id;
            this.DisplayName = displayName;
            this.ObjectId = objectId;
            this.IsSoftDeleted = isSoftDeleted;
            this.CreatedAt = createdAt;
            this.AccessControlEntries = accessControlEntries;
            this.Accounts = accounts;
            this.ContentCollections = contentCollections;
            this.Owners = owners;
            this.IsPublished = isPublished;
            this.BaseUrl = baseUrl;
            this.TenantIdentifierStrategy = tenantIdentifierStrategy;
            this.TenantIdentifier = tenantIdentifier;
            this.Timestamp = timestamp;
            this.UpdatedAt = updatedAt;
        }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public Guid Id { get; set; }

        /// <summary>
        /// Gets or Sets DisplayName
        /// </summary>
        [DataMember(Name = "displayName", EmitDefaultValue = true)]
        public string DisplayName { get; set; }

        /// <summary>
        /// Gets or Sets ObjectId
        /// </summary>
        [DataMember(Name = "objectId", EmitDefaultValue = true)]
        public string ObjectId { get; set; }

        /// <summary>
        /// Gets or Sets IsSoftDeleted
        /// </summary>
        [DataMember(Name = "isSoftDeleted", EmitDefaultValue = true)]
        public bool? IsSoftDeleted { get; set; }

        /// <summary>
        /// Gets or Sets CreatedAt
        /// </summary>
        [DataMember(Name = "createdAt", EmitDefaultValue = true)]
        public DateTime? CreatedAt { get; set; }

        /// <summary>
        /// Gets or Sets AccessControlEntries
        /// </summary>
        [DataMember(Name = "accessControlEntries", EmitDefaultValue = true)]
        public List<ContentEntitiesAccessControlEntry> AccessControlEntries { get; set; }

        /// <summary>
        /// Gets or Sets Accounts
        /// </summary>
        [DataMember(Name = "accounts", EmitDefaultValue = true)]
        public List<ContentEntitiesPrincipal> Accounts { get; set; }

        /// <summary>
        /// Gets or Sets ContentCollections
        /// </summary>
        [DataMember(Name = "contentCollections", EmitDefaultValue = true)]
        public List<ContentEntitiesContentCollection> ContentCollections { get; set; }

        /// <summary>
        /// Gets or Sets Owners
        /// </summary>
        [DataMember(Name = "owners", EmitDefaultValue = true)]
        public List<ContentEntitiesPrincipal> Owners { get; set; }

        /// <summary>
        /// Gets or Sets IsPublished
        /// </summary>
        [DataMember(Name = "isPublished", EmitDefaultValue = true)]
        public bool IsPublished { get; set; }

        /// <summary>
        /// Gets or Sets BaseUrl
        /// </summary>
        [DataMember(Name = "baseUrl", EmitDefaultValue = true)]
        public string BaseUrl { get; set; }

        /// <summary>
        /// Gets or Sets TenantIdentifierStrategy
        /// </summary>
        [DataMember(Name = "tenantIdentifierStrategy", EmitDefaultValue = false)]
        public ContentEntitiesTenantIdentifierStrategy TenantIdentifierStrategy { get; set; }

        /// <summary>
        /// Gets or Sets TenantIdentifier
        /// </summary>
        [DataMember(Name = "tenantIdentifier", EmitDefaultValue = true)]
        public string TenantIdentifier { get; set; }

        /// <summary>
        /// Gets or Sets Timestamp
        /// </summary>
        [DataMember(Name = "timestamp", EmitDefaultValue = true)]
        public byte[] Timestamp { get; set; }

        /// <summary>
        /// Gets or Sets UpdatedAt
        /// </summary>
        [DataMember(Name = "updatedAt", EmitDefaultValue = true)]
        public DateTime? UpdatedAt { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ContentEntitiesTenant {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  DisplayName: ").Append(DisplayName).Append("\n");
            sb.Append("  ObjectId: ").Append(ObjectId).Append("\n");
            sb.Append("  IsSoftDeleted: ").Append(IsSoftDeleted).Append("\n");
            sb.Append("  CreatedAt: ").Append(CreatedAt).Append("\n");
            sb.Append("  AccessControlEntries: ").Append(AccessControlEntries).Append("\n");
            sb.Append("  Accounts: ").Append(Accounts).Append("\n");
            sb.Append("  ContentCollections: ").Append(ContentCollections).Append("\n");
            sb.Append("  Owners: ").Append(Owners).Append("\n");
            sb.Append("  IsPublished: ").Append(IsPublished).Append("\n");
            sb.Append("  BaseUrl: ").Append(BaseUrl).Append("\n");
            sb.Append("  TenantIdentifierStrategy: ").Append(TenantIdentifierStrategy).Append("\n");
            sb.Append("  TenantIdentifier: ").Append(TenantIdentifier).Append("\n");
            sb.Append("  Timestamp: ").Append(Timestamp).Append("\n");
            sb.Append("  UpdatedAt: ").Append(UpdatedAt).Append("\n");
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
            return this.Equals(input as ContentEntitiesTenant);
        }

        /// <summary>
        /// Returns true if ContentEntitiesTenant instances are equal
        /// </summary>
        /// <param name="input">Instance of ContentEntitiesTenant to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ContentEntitiesTenant input)
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
                    this.DisplayName == input.DisplayName ||
                    (this.DisplayName != null &&
                    this.DisplayName.Equals(input.DisplayName))
                ) && 
                (
                    this.ObjectId == input.ObjectId ||
                    (this.ObjectId != null &&
                    this.ObjectId.Equals(input.ObjectId))
                ) && 
                (
                    this.IsSoftDeleted == input.IsSoftDeleted ||
                    (this.IsSoftDeleted != null &&
                    this.IsSoftDeleted.Equals(input.IsSoftDeleted))
                ) && 
                (
                    this.CreatedAt == input.CreatedAt ||
                    (this.CreatedAt != null &&
                    this.CreatedAt.Equals(input.CreatedAt))
                ) && 
                (
                    this.AccessControlEntries == input.AccessControlEntries ||
                    this.AccessControlEntries != null &&
                    input.AccessControlEntries != null &&
                    this.AccessControlEntries.SequenceEqual(input.AccessControlEntries)
                ) && 
                (
                    this.Accounts == input.Accounts ||
                    this.Accounts != null &&
                    input.Accounts != null &&
                    this.Accounts.SequenceEqual(input.Accounts)
                ) && 
                (
                    this.ContentCollections == input.ContentCollections ||
                    this.ContentCollections != null &&
                    input.ContentCollections != null &&
                    this.ContentCollections.SequenceEqual(input.ContentCollections)
                ) && 
                (
                    this.Owners == input.Owners ||
                    this.Owners != null &&
                    input.Owners != null &&
                    this.Owners.SequenceEqual(input.Owners)
                ) && 
                (
                    this.IsPublished == input.IsPublished ||
                    this.IsPublished.Equals(input.IsPublished)
                ) && 
                (
                    this.BaseUrl == input.BaseUrl ||
                    (this.BaseUrl != null &&
                    this.BaseUrl.Equals(input.BaseUrl))
                ) && 
                (
                    this.TenantIdentifierStrategy == input.TenantIdentifierStrategy ||
                    (this.TenantIdentifierStrategy != null &&
                    this.TenantIdentifierStrategy.Equals(input.TenantIdentifierStrategy))
                ) && 
                (
                    this.TenantIdentifier == input.TenantIdentifier ||
                    (this.TenantIdentifier != null &&
                    this.TenantIdentifier.Equals(input.TenantIdentifier))
                ) && 
                (
                    this.Timestamp == input.Timestamp ||
                    (this.Timestamp != null &&
                    this.Timestamp.Equals(input.Timestamp))
                ) && 
                (
                    this.UpdatedAt == input.UpdatedAt ||
                    (this.UpdatedAt != null &&
                    this.UpdatedAt.Equals(input.UpdatedAt))
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
                if (this.DisplayName != null)
                {
                    hashCode = (hashCode * 59) + this.DisplayName.GetHashCode();
                }
                if (this.ObjectId != null)
                {
                    hashCode = (hashCode * 59) + this.ObjectId.GetHashCode();
                }
                if (this.IsSoftDeleted != null)
                {
                    hashCode = (hashCode * 59) + this.IsSoftDeleted.GetHashCode();
                }
                if (this.CreatedAt != null)
                {
                    hashCode = (hashCode * 59) + this.CreatedAt.GetHashCode();
                }
                if (this.AccessControlEntries != null)
                {
                    hashCode = (hashCode * 59) + this.AccessControlEntries.GetHashCode();
                }
                if (this.Accounts != null)
                {
                    hashCode = (hashCode * 59) + this.Accounts.GetHashCode();
                }
                if (this.ContentCollections != null)
                {
                    hashCode = (hashCode * 59) + this.ContentCollections.GetHashCode();
                }
                if (this.Owners != null)
                {
                    hashCode = (hashCode * 59) + this.Owners.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.IsPublished.GetHashCode();
                if (this.BaseUrl != null)
                {
                    hashCode = (hashCode * 59) + this.BaseUrl.GetHashCode();
                }
                if (this.TenantIdentifierStrategy != null)
                {
                    hashCode = (hashCode * 59) + this.TenantIdentifierStrategy.GetHashCode();
                }
                if (this.TenantIdentifier != null)
                {
                    hashCode = (hashCode * 59) + this.TenantIdentifier.GetHashCode();
                }
                if (this.Timestamp != null)
                {
                    hashCode = (hashCode * 59) + this.Timestamp.GetHashCode();
                }
                if (this.UpdatedAt != null)
                {
                    hashCode = (hashCode * 59) + this.UpdatedAt.GetHashCode();
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