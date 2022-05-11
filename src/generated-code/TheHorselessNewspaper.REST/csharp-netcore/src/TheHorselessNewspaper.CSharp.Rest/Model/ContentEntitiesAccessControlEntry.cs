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
    /// ContentEntitiesAccessControlEntry
    /// </summary>
    [DataContract(Name = "ContentEntitiesAccessControlEntry")]
    public partial class ContentEntitiesAccessControlEntry : IEquatable<ContentEntitiesAccessControlEntry>, IValidatableObject
    {

        /// <summary>
        /// Gets or Sets Scope
        /// </summary>
        [DataMember(Name = "scope", EmitDefaultValue = false)]
        public ContentEntitiesACEPermissionScope? Scope { get; set; }

        /// <summary>
        /// Gets or Sets Permission
        /// </summary>
        [DataMember(Name = "permission", EmitDefaultValue = false)]
        public ContentEntitiesACEPermission? Permission { get; set; }

        /// <summary>
        /// Gets or Sets PermissionType
        /// </summary>
        [DataMember(Name = "permissionType", EmitDefaultValue = false)]
        public ContentEntitiesACEPermissionType? PermissionType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="ContentEntitiesAccessControlEntry" /> class.
        /// </summary>
        /// <param name="id">id.</param>
        /// <param name="displayName">displayName.</param>
        /// <param name="objectId">objectId.</param>
        /// <param name="isSoftDeleted">isSoftDeleted.</param>
        /// <param name="createdAt">createdAt.</param>
        /// <param name="isActive">isActive.</param>
        /// <param name="accessControlEntries">accessControlEntries.</param>
        /// <param name="owners">owners.</param>
        /// <param name="subjectAccessControlEntries">subjectAccessControlEntries.</param>
        /// <param name="subjectHorselessSessions">subjectHorselessSessions.</param>
        /// <param name="subjectPrincipals">subjectPrincipals.</param>
        /// <param name="subjectTenants">subjectTenants.</param>
        /// <param name="scope">scope.</param>
        /// <param name="permission">permission.</param>
        /// <param name="permissionType">permissionType.</param>
        /// <param name="timestamp">timestamp.</param>
        /// <param name="updatedAt">updatedAt.</param>
        public ContentEntitiesAccessControlEntry(Guid id = default(Guid), string displayName = default(string), string objectId = default(string), bool? isSoftDeleted = default(bool?), DateTime? createdAt = default(DateTime?), bool? isActive = default(bool?), List<ContentEntitiesAccessControlEntry> accessControlEntries = default(List<ContentEntitiesAccessControlEntry>), List<ContentEntitiesPrincipal> owners = default(List<ContentEntitiesPrincipal>), List<ContentEntitiesAccessControlEntry> subjectAccessControlEntries = default(List<ContentEntitiesAccessControlEntry>), List<ContentEntitiesHorselessSession> subjectHorselessSessions = default(List<ContentEntitiesHorselessSession>), List<ContentEntitiesPrincipal> subjectPrincipals = default(List<ContentEntitiesPrincipal>), List<ContentEntitiesTenant> subjectTenants = default(List<ContentEntitiesTenant>), ContentEntitiesACEPermissionScope? scope = default(ContentEntitiesACEPermissionScope?), ContentEntitiesACEPermission? permission = default(ContentEntitiesACEPermission?), ContentEntitiesACEPermissionType? permissionType = default(ContentEntitiesACEPermissionType?), byte[] timestamp = default(byte[]), DateTime? updatedAt = default(DateTime?))
        {
            this.Id = id;
            this.DisplayName = displayName;
            this.ObjectId = objectId;
            this.IsSoftDeleted = isSoftDeleted;
            this.CreatedAt = createdAt;
            this.IsActive = isActive;
            this.AccessControlEntries = accessControlEntries;
            this.Owners = owners;
            this.SubjectAccessControlEntries = subjectAccessControlEntries;
            this.SubjectHorselessSessions = subjectHorselessSessions;
            this.SubjectPrincipals = subjectPrincipals;
            this.SubjectTenants = subjectTenants;
            this.Scope = scope;
            this.Permission = permission;
            this.PermissionType = permissionType;
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
        /// Gets or Sets IsActive
        /// </summary>
        [DataMember(Name = "isActive", EmitDefaultValue = true)]
        public bool? IsActive { get; set; }

        /// <summary>
        /// Gets or Sets AccessControlEntries
        /// </summary>
        [DataMember(Name = "accessControlEntries", EmitDefaultValue = true)]
        public List<ContentEntitiesAccessControlEntry> AccessControlEntries { get; set; }

        /// <summary>
        /// Gets or Sets Owners
        /// </summary>
        [DataMember(Name = "owners", EmitDefaultValue = true)]
        public List<ContentEntitiesPrincipal> Owners { get; set; }

        /// <summary>
        /// Gets or Sets SubjectAccessControlEntries
        /// </summary>
        [DataMember(Name = "subjectAccessControlEntries", EmitDefaultValue = true)]
        public List<ContentEntitiesAccessControlEntry> SubjectAccessControlEntries { get; set; }

        /// <summary>
        /// Gets or Sets SubjectHorselessSessions
        /// </summary>
        [DataMember(Name = "subjectHorselessSessions", EmitDefaultValue = true)]
        public List<ContentEntitiesHorselessSession> SubjectHorselessSessions { get; set; }

        /// <summary>
        /// Gets or Sets SubjectPrincipals
        /// </summary>
        [DataMember(Name = "subjectPrincipals", EmitDefaultValue = true)]
        public List<ContentEntitiesPrincipal> SubjectPrincipals { get; set; }

        /// <summary>
        /// Gets or Sets SubjectTenants
        /// </summary>
        [DataMember(Name = "subjectTenants", EmitDefaultValue = true)]
        public List<ContentEntitiesTenant> SubjectTenants { get; set; }

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
            sb.Append("class ContentEntitiesAccessControlEntry {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  DisplayName: ").Append(DisplayName).Append("\n");
            sb.Append("  ObjectId: ").Append(ObjectId).Append("\n");
            sb.Append("  IsSoftDeleted: ").Append(IsSoftDeleted).Append("\n");
            sb.Append("  CreatedAt: ").Append(CreatedAt).Append("\n");
            sb.Append("  IsActive: ").Append(IsActive).Append("\n");
            sb.Append("  AccessControlEntries: ").Append(AccessControlEntries).Append("\n");
            sb.Append("  Owners: ").Append(Owners).Append("\n");
            sb.Append("  SubjectAccessControlEntries: ").Append(SubjectAccessControlEntries).Append("\n");
            sb.Append("  SubjectHorselessSessions: ").Append(SubjectHorselessSessions).Append("\n");
            sb.Append("  SubjectPrincipals: ").Append(SubjectPrincipals).Append("\n");
            sb.Append("  SubjectTenants: ").Append(SubjectTenants).Append("\n");
            sb.Append("  Scope: ").Append(Scope).Append("\n");
            sb.Append("  Permission: ").Append(Permission).Append("\n");
            sb.Append("  PermissionType: ").Append(PermissionType).Append("\n");
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
            return this.Equals(input as ContentEntitiesAccessControlEntry);
        }

        /// <summary>
        /// Returns true if ContentEntitiesAccessControlEntry instances are equal
        /// </summary>
        /// <param name="input">Instance of ContentEntitiesAccessControlEntry to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ContentEntitiesAccessControlEntry input)
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
                    this.IsActive == input.IsActive ||
                    (this.IsActive != null &&
                    this.IsActive.Equals(input.IsActive))
                ) && 
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
                    this.SubjectAccessControlEntries == input.SubjectAccessControlEntries ||
                    this.SubjectAccessControlEntries != null &&
                    input.SubjectAccessControlEntries != null &&
                    this.SubjectAccessControlEntries.SequenceEqual(input.SubjectAccessControlEntries)
                ) && 
                (
                    this.SubjectHorselessSessions == input.SubjectHorselessSessions ||
                    this.SubjectHorselessSessions != null &&
                    input.SubjectHorselessSessions != null &&
                    this.SubjectHorselessSessions.SequenceEqual(input.SubjectHorselessSessions)
                ) && 
                (
                    this.SubjectPrincipals == input.SubjectPrincipals ||
                    this.SubjectPrincipals != null &&
                    input.SubjectPrincipals != null &&
                    this.SubjectPrincipals.SequenceEqual(input.SubjectPrincipals)
                ) && 
                (
                    this.SubjectTenants == input.SubjectTenants ||
                    this.SubjectTenants != null &&
                    input.SubjectTenants != null &&
                    this.SubjectTenants.SequenceEqual(input.SubjectTenants)
                ) && 
                (
                    this.Scope == input.Scope ||
                    this.Scope.Equals(input.Scope)
                ) && 
                (
                    this.Permission == input.Permission ||
                    this.Permission.Equals(input.Permission)
                ) && 
                (
                    this.PermissionType == input.PermissionType ||
                    this.PermissionType.Equals(input.PermissionType)
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
                if (this.IsActive != null)
                {
                    hashCode = (hashCode * 59) + this.IsActive.GetHashCode();
                }
                if (this.AccessControlEntries != null)
                {
                    hashCode = (hashCode * 59) + this.AccessControlEntries.GetHashCode();
                }
                if (this.Owners != null)
                {
                    hashCode = (hashCode * 59) + this.Owners.GetHashCode();
                }
                if (this.SubjectAccessControlEntries != null)
                {
                    hashCode = (hashCode * 59) + this.SubjectAccessControlEntries.GetHashCode();
                }
                if (this.SubjectHorselessSessions != null)
                {
                    hashCode = (hashCode * 59) + this.SubjectHorselessSessions.GetHashCode();
                }
                if (this.SubjectPrincipals != null)
                {
                    hashCode = (hashCode * 59) + this.SubjectPrincipals.GetHashCode();
                }
                if (this.SubjectTenants != null)
                {
                    hashCode = (hashCode * 59) + this.SubjectTenants.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.Scope.GetHashCode();
                hashCode = (hashCode * 59) + this.Permission.GetHashCode();
                hashCode = (hashCode * 59) + this.PermissionType.GetHashCode();
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
