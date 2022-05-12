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
    /// ContentEntitiesPrincipalClaim
    /// </summary>
    [DataContract(Name = "ContentEntitiesPrincipalClaim")]
    public partial class ContentEntitiesPrincipalClaim : IEquatable<ContentEntitiesPrincipalClaim>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ContentEntitiesPrincipalClaim" /> class.
        /// </summary>
        /// <param name="id">id.</param>
        /// <param name="claimType">claimType.</param>
        /// <param name="claimValue">claimValue.</param>
        /// <param name="claimValueType">claimValueType.</param>
        /// <param name="claimIssuer">claimIssuer.</param>
        /// <param name="principalClaimContainerId">principalClaimContainerId.</param>
        /// <param name="principalClaimContainer">principalClaimContainer.</param>
        public ContentEntitiesPrincipalClaim(Guid id = default(Guid), string claimType = default(string), string claimValue = default(string), string claimValueType = default(string), string claimIssuer = default(string), Guid? principalClaimContainerId = default(Guid?), ContentEntitiesPrincipalClaimContainer principalClaimContainer = default(ContentEntitiesPrincipalClaimContainer))
        {
            this.Id = id;
            this.ClaimType = claimType;
            this.ClaimValue = claimValue;
            this.ClaimValueType = claimValueType;
            this.ClaimIssuer = claimIssuer;
            this.PrincipalClaimContainerId = principalClaimContainerId;
            this.PrincipalClaimContainer = principalClaimContainer;
        }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public Guid Id { get; set; }

        /// <summary>
        /// Gets or Sets ClaimType
        /// </summary>
        [DataMember(Name = "claimType", EmitDefaultValue = true)]
        public string ClaimType { get; set; }

        /// <summary>
        /// Gets or Sets ClaimValue
        /// </summary>
        [DataMember(Name = "claimValue", EmitDefaultValue = true)]
        public string ClaimValue { get; set; }

        /// <summary>
        /// Gets or Sets ClaimValueType
        /// </summary>
        [DataMember(Name = "claimValueType", EmitDefaultValue = true)]
        public string ClaimValueType { get; set; }

        /// <summary>
        /// Gets or Sets ClaimIssuer
        /// </summary>
        [DataMember(Name = "claimIssuer", EmitDefaultValue = true)]
        public string ClaimIssuer { get; set; }

        /// <summary>
        /// Gets or Sets PrincipalClaimContainerId
        /// </summary>
        [DataMember(Name = "principalClaimContainerId", EmitDefaultValue = true)]
        public Guid? PrincipalClaimContainerId { get; set; }

        /// <summary>
        /// Gets or Sets PrincipalClaimContainer
        /// </summary>
        [DataMember(Name = "principalClaimContainer", EmitDefaultValue = false)]
        public ContentEntitiesPrincipalClaimContainer PrincipalClaimContainer { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ContentEntitiesPrincipalClaim {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  ClaimType: ").Append(ClaimType).Append("\n");
            sb.Append("  ClaimValue: ").Append(ClaimValue).Append("\n");
            sb.Append("  ClaimValueType: ").Append(ClaimValueType).Append("\n");
            sb.Append("  ClaimIssuer: ").Append(ClaimIssuer).Append("\n");
            sb.Append("  PrincipalClaimContainerId: ").Append(PrincipalClaimContainerId).Append("\n");
            sb.Append("  PrincipalClaimContainer: ").Append(PrincipalClaimContainer).Append("\n");
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
            return this.Equals(input as ContentEntitiesPrincipalClaim);
        }

        /// <summary>
        /// Returns true if ContentEntitiesPrincipalClaim instances are equal
        /// </summary>
        /// <param name="input">Instance of ContentEntitiesPrincipalClaim to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ContentEntitiesPrincipalClaim input)
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
                    this.ClaimType == input.ClaimType ||
                    (this.ClaimType != null &&
                    this.ClaimType.Equals(input.ClaimType))
                ) && 
                (
                    this.ClaimValue == input.ClaimValue ||
                    (this.ClaimValue != null &&
                    this.ClaimValue.Equals(input.ClaimValue))
                ) && 
                (
                    this.ClaimValueType == input.ClaimValueType ||
                    (this.ClaimValueType != null &&
                    this.ClaimValueType.Equals(input.ClaimValueType))
                ) && 
                (
                    this.ClaimIssuer == input.ClaimIssuer ||
                    (this.ClaimIssuer != null &&
                    this.ClaimIssuer.Equals(input.ClaimIssuer))
                ) && 
                (
                    this.PrincipalClaimContainerId == input.PrincipalClaimContainerId ||
                    (this.PrincipalClaimContainerId != null &&
                    this.PrincipalClaimContainerId.Equals(input.PrincipalClaimContainerId))
                ) && 
                (
                    this.PrincipalClaimContainer == input.PrincipalClaimContainer ||
                    (this.PrincipalClaimContainer != null &&
                    this.PrincipalClaimContainer.Equals(input.PrincipalClaimContainer))
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
                if (this.ClaimType != null)
                {
                    hashCode = (hashCode * 59) + this.ClaimType.GetHashCode();
                }
                if (this.ClaimValue != null)
                {
                    hashCode = (hashCode * 59) + this.ClaimValue.GetHashCode();
                }
                if (this.ClaimValueType != null)
                {
                    hashCode = (hashCode * 59) + this.ClaimValueType.GetHashCode();
                }
                if (this.ClaimIssuer != null)
                {
                    hashCode = (hashCode * 59) + this.ClaimIssuer.GetHashCode();
                }
                if (this.PrincipalClaimContainerId != null)
                {
                    hashCode = (hashCode * 59) + this.PrincipalClaimContainerId.GetHashCode();
                }
                if (this.PrincipalClaimContainer != null)
                {
                    hashCode = (hashCode * 59) + this.PrincipalClaimContainer.GetHashCode();
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