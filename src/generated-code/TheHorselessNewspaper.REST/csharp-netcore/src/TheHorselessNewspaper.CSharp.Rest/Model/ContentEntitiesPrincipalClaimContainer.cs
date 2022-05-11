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
    /// ContentEntitiesPrincipalClaimContainer
    /// </summary>
    [DataContract(Name = "ContentEntitiesPrincipalClaimContainer")]
    public partial class ContentEntitiesPrincipalClaimContainer : IEquatable<ContentEntitiesPrincipalClaimContainer>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ContentEntitiesPrincipalClaimContainer" /> class.
        /// </summary>
        /// <param name="id">id.</param>
        /// <param name="objectId">objectId.</param>
        /// <param name="displayName">displayName.</param>
        /// <param name="principalClaim">principalClaim.</param>
        /// <param name="principalId">principalId.</param>
        /// <param name="principal">principal.</param>
        public ContentEntitiesPrincipalClaimContainer(Guid id = default(Guid), string objectId = default(string), string displayName = default(string), List<ContentEntitiesPrincipalClaim> principalClaim = default(List<ContentEntitiesPrincipalClaim>), Guid? principalId = default(Guid?), ContentEntitiesPrincipal principal = default(ContentEntitiesPrincipal))
        {
            this.Id = id;
            this.ObjectId = objectId;
            this.DisplayName = displayName;
            this.PrincipalClaim = principalClaim;
            this.PrincipalId = principalId;
            this.Principal = principal;
        }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public Guid Id { get; set; }

        /// <summary>
        /// Gets or Sets ObjectId
        /// </summary>
        [DataMember(Name = "objectId", EmitDefaultValue = true)]
        public string ObjectId { get; set; }

        /// <summary>
        /// Gets or Sets DisplayName
        /// </summary>
        [DataMember(Name = "displayName", EmitDefaultValue = true)]
        public string DisplayName { get; set; }

        /// <summary>
        /// Gets or Sets PrincipalClaim
        /// </summary>
        [DataMember(Name = "principalClaim", EmitDefaultValue = true)]
        public List<ContentEntitiesPrincipalClaim> PrincipalClaim { get; set; }

        /// <summary>
        /// Gets or Sets PrincipalId
        /// </summary>
        [DataMember(Name = "principalId", EmitDefaultValue = true)]
        public Guid? PrincipalId { get; set; }

        /// <summary>
        /// Gets or Sets Principal
        /// </summary>
        [DataMember(Name = "principal", EmitDefaultValue = false)]
        public ContentEntitiesPrincipal Principal { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ContentEntitiesPrincipalClaimContainer {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  ObjectId: ").Append(ObjectId).Append("\n");
            sb.Append("  DisplayName: ").Append(DisplayName).Append("\n");
            sb.Append("  PrincipalClaim: ").Append(PrincipalClaim).Append("\n");
            sb.Append("  PrincipalId: ").Append(PrincipalId).Append("\n");
            sb.Append("  Principal: ").Append(Principal).Append("\n");
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
            return this.Equals(input as ContentEntitiesPrincipalClaimContainer);
        }

        /// <summary>
        /// Returns true if ContentEntitiesPrincipalClaimContainer instances are equal
        /// </summary>
        /// <param name="input">Instance of ContentEntitiesPrincipalClaimContainer to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ContentEntitiesPrincipalClaimContainer input)
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
                    this.ObjectId == input.ObjectId ||
                    (this.ObjectId != null &&
                    this.ObjectId.Equals(input.ObjectId))
                ) && 
                (
                    this.DisplayName == input.DisplayName ||
                    (this.DisplayName != null &&
                    this.DisplayName.Equals(input.DisplayName))
                ) && 
                (
                    this.PrincipalClaim == input.PrincipalClaim ||
                    this.PrincipalClaim != null &&
                    input.PrincipalClaim != null &&
                    this.PrincipalClaim.SequenceEqual(input.PrincipalClaim)
                ) && 
                (
                    this.PrincipalId == input.PrincipalId ||
                    (this.PrincipalId != null &&
                    this.PrincipalId.Equals(input.PrincipalId))
                ) && 
                (
                    this.Principal == input.Principal ||
                    (this.Principal != null &&
                    this.Principal.Equals(input.Principal))
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
                if (this.ObjectId != null)
                {
                    hashCode = (hashCode * 59) + this.ObjectId.GetHashCode();
                }
                if (this.DisplayName != null)
                {
                    hashCode = (hashCode * 59) + this.DisplayName.GetHashCode();
                }
                if (this.PrincipalClaim != null)
                {
                    hashCode = (hashCode * 59) + this.PrincipalClaim.GetHashCode();
                }
                if (this.PrincipalId != null)
                {
                    hashCode = (hashCode * 59) + this.PrincipalId.GetHashCode();
                }
                if (this.Principal != null)
                {
                    hashCode = (hashCode * 59) + this.Principal.GetHashCode();
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
