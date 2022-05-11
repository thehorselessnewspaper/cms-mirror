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
    /// HostingEntitiesWebAPITenantInfo
    /// </summary>
    [DataContract(Name = "HostingEntitiesWebAPITenantInfo")]
    public partial class HostingEntitiesWebAPITenantInfo : IEquatable<HostingEntitiesWebAPITenantInfo>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="HostingEntitiesWebAPITenantInfo" /> class.
        /// </summary>
        /// <param name="accessControlEntries">accessControlEntries.</param>
        /// <param name="owners">owners.</param>
        /// <param name="timestamp">timestamp.</param>
        /// <param name="updatedAt">updatedAt.</param>
        /// <param name="id">id.</param>
        /// <param name="displayName">displayName.</param>
        /// <param name="objectId">objectId.</param>
        /// <param name="isSoftDeleted">isSoftDeleted.</param>
        /// <param name="createdAt">createdAt.</param>
        /// <param name="identifier">identifier.</param>
        /// <param name="name">name.</param>
        /// <param name="connectionString">connectionString.</param>
        /// <param name="webAPIBaseUrl">webAPIBaseUrl.</param>
        /// <param name="tenantInfoId">tenantInfoId.</param>
        /// <param name="tenantInfo">tenantInfo.</param>
        public HostingEntitiesWebAPITenantInfo(List<HostingEntitiesAccessControlEntry> accessControlEntries = default(List<HostingEntitiesAccessControlEntry>), List<HostingEntitiesPrincipal> owners = default(List<HostingEntitiesPrincipal>), byte[] timestamp = default(byte[]), DateTime? updatedAt = default(DateTime?), Guid id = default(Guid), string displayName = default(string), string objectId = default(string), bool? isSoftDeleted = default(bool?), DateTime? createdAt = default(DateTime?), string identifier = default(string), string name = default(string), string connectionString = default(string), string webAPIBaseUrl = default(string), Guid? tenantInfoId = default(Guid?), HostingEntitiesTenantInfo tenantInfo = default(HostingEntitiesTenantInfo))
        {
            this.AccessControlEntries = accessControlEntries;
            this.Owners = owners;
            this.Timestamp = timestamp;
            this.UpdatedAt = updatedAt;
            this.Id = id;
            this.DisplayName = displayName;
            this.ObjectId = objectId;
            this.IsSoftDeleted = isSoftDeleted;
            this.CreatedAt = createdAt;
            this.Identifier = identifier;
            this.Name = name;
            this.ConnectionString = connectionString;
            this.WebAPIBaseUrl = webAPIBaseUrl;
            this.TenantInfoId = tenantInfoId;
            this.TenantInfo = tenantInfo;
        }

        /// <summary>
        /// Gets or Sets AccessControlEntries
        /// </summary>
        [DataMember(Name = "accessControlEntries", EmitDefaultValue = true)]
        public List<HostingEntitiesAccessControlEntry> AccessControlEntries { get; set; }

        /// <summary>
        /// Gets or Sets Owners
        /// </summary>
        [DataMember(Name = "owners", EmitDefaultValue = true)]
        public List<HostingEntitiesPrincipal> Owners { get; set; }

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
        /// Gets or Sets Identifier
        /// </summary>
        [DataMember(Name = "identifier", EmitDefaultValue = true)]
        public string Identifier { get; set; }

        /// <summary>
        /// Gets or Sets Name
        /// </summary>
        [DataMember(Name = "name", EmitDefaultValue = true)]
        public string Name { get; set; }

        /// <summary>
        /// Gets or Sets ConnectionString
        /// </summary>
        [DataMember(Name = "connectionString", EmitDefaultValue = true)]
        public string ConnectionString { get; set; }

        /// <summary>
        /// Gets or Sets WebAPIBaseUrl
        /// </summary>
        [DataMember(Name = "webAPIBaseUrl", EmitDefaultValue = true)]
        public string WebAPIBaseUrl { get; set; }

        /// <summary>
        /// Gets or Sets TenantInfoId
        /// </summary>
        [DataMember(Name = "tenantInfoId", EmitDefaultValue = true)]
        public Guid? TenantInfoId { get; set; }

        /// <summary>
        /// Gets or Sets TenantInfo
        /// </summary>
        [DataMember(Name = "tenantInfo", EmitDefaultValue = false)]
        public HostingEntitiesTenantInfo TenantInfo { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class HostingEntitiesWebAPITenantInfo {\n");
            sb.Append("  AccessControlEntries: ").Append(AccessControlEntries).Append("\n");
            sb.Append("  Owners: ").Append(Owners).Append("\n");
            sb.Append("  Timestamp: ").Append(Timestamp).Append("\n");
            sb.Append("  UpdatedAt: ").Append(UpdatedAt).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  DisplayName: ").Append(DisplayName).Append("\n");
            sb.Append("  ObjectId: ").Append(ObjectId).Append("\n");
            sb.Append("  IsSoftDeleted: ").Append(IsSoftDeleted).Append("\n");
            sb.Append("  CreatedAt: ").Append(CreatedAt).Append("\n");
            sb.Append("  Identifier: ").Append(Identifier).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  ConnectionString: ").Append(ConnectionString).Append("\n");
            sb.Append("  WebAPIBaseUrl: ").Append(WebAPIBaseUrl).Append("\n");
            sb.Append("  TenantInfoId: ").Append(TenantInfoId).Append("\n");
            sb.Append("  TenantInfo: ").Append(TenantInfo).Append("\n");
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
            return this.Equals(input as HostingEntitiesWebAPITenantInfo);
        }

        /// <summary>
        /// Returns true if HostingEntitiesWebAPITenantInfo instances are equal
        /// </summary>
        /// <param name="input">Instance of HostingEntitiesWebAPITenantInfo to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(HostingEntitiesWebAPITenantInfo input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.AccessControlEntries == input.AccessControlEntries ||
                    this.AccessControlEntries != null &&
                    input.AccessControlEntries != null &&
                    this.AccessControlEntries.SequenceEqual(input.AccessControlEntries)
                ) && 
                (
                    this.Owners == input.Owners ||
                    this.Owners != null &&
                    input.Owners != null &&
                    this.Owners.SequenceEqual(input.Owners)
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
                ) && 
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
                    this.Identifier == input.Identifier ||
                    (this.Identifier != null &&
                    this.Identifier.Equals(input.Identifier))
                ) && 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.ConnectionString == input.ConnectionString ||
                    (this.ConnectionString != null &&
                    this.ConnectionString.Equals(input.ConnectionString))
                ) && 
                (
                    this.WebAPIBaseUrl == input.WebAPIBaseUrl ||
                    (this.WebAPIBaseUrl != null &&
                    this.WebAPIBaseUrl.Equals(input.WebAPIBaseUrl))
                ) && 
                (
                    this.TenantInfoId == input.TenantInfoId ||
                    (this.TenantInfoId != null &&
                    this.TenantInfoId.Equals(input.TenantInfoId))
                ) && 
                (
                    this.TenantInfo == input.TenantInfo ||
                    (this.TenantInfo != null &&
                    this.TenantInfo.Equals(input.TenantInfo))
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
                if (this.AccessControlEntries != null)
                {
                    hashCode = (hashCode * 59) + this.AccessControlEntries.GetHashCode();
                }
                if (this.Owners != null)
                {
                    hashCode = (hashCode * 59) + this.Owners.GetHashCode();
                }
                if (this.Timestamp != null)
                {
                    hashCode = (hashCode * 59) + this.Timestamp.GetHashCode();
                }
                if (this.UpdatedAt != null)
                {
                    hashCode = (hashCode * 59) + this.UpdatedAt.GetHashCode();
                }
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
                if (this.Identifier != null)
                {
                    hashCode = (hashCode * 59) + this.Identifier.GetHashCode();
                }
                if (this.Name != null)
                {
                    hashCode = (hashCode * 59) + this.Name.GetHashCode();
                }
                if (this.ConnectionString != null)
                {
                    hashCode = (hashCode * 59) + this.ConnectionString.GetHashCode();
                }
                if (this.WebAPIBaseUrl != null)
                {
                    hashCode = (hashCode * 59) + this.WebAPIBaseUrl.GetHashCode();
                }
                if (this.TenantInfoId != null)
                {
                    hashCode = (hashCode * 59) + this.TenantInfoId.GetHashCode();
                }
                if (this.TenantInfo != null)
                {
                    hashCode = (hashCode * 59) + this.TenantInfo.GetHashCode();
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
