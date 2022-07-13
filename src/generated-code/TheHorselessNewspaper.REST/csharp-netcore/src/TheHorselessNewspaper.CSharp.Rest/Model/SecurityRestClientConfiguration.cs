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
    /// SecurityRestClientConfiguration
    /// </summary>
    [DataContract(Name = "SecurityRestClientConfiguration")]
    public partial class SecurityRestClientConfiguration : IEquatable<SecurityRestClientConfiguration>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="SecurityRestClientConfiguration" /> class.
        /// </summary>
        /// <param name="isClaimsIdentity">isClaimsIdentity.</param>
        /// <param name="accessToken">accessToken.</param>
        /// <param name="oDataEndpoint">oDataEndpoint.</param>
        /// <param name="rESTEndpoint">rESTEndpoint.</param>
        /// <param name="tenantIdentifier">tenantIdentifier.</param>
        public SecurityRestClientConfiguration(bool isClaimsIdentity = default(bool), string accessToken = default(string), string oDataEndpoint = default(string), string rESTEndpoint = default(string), string tenantIdentifier = default(string))
        {
            this.IsClaimsIdentity = isClaimsIdentity;
            this.AccessToken = accessToken;
            this.ODataEndpoint = oDataEndpoint;
            this.RESTEndpoint = rESTEndpoint;
            this.TenantIdentifier = tenantIdentifier;
        }

        /// <summary>
        /// Gets or Sets IsClaimsIdentity
        /// </summary>
        [DataMember(Name = "IsClaimsIdentity", EmitDefaultValue = true)]
        public bool IsClaimsIdentity { get; set; }

        /// <summary>
        /// Gets or Sets AccessToken
        /// </summary>
        [DataMember(Name = "AccessToken", EmitDefaultValue = true)]
        public string AccessToken { get; set; }

        /// <summary>
        /// Gets or Sets ODataEndpoint
        /// </summary>
        [DataMember(Name = "ODataEndpoint", EmitDefaultValue = true)]
        public string ODataEndpoint { get; set; }

        /// <summary>
        /// Gets or Sets RESTEndpoint
        /// </summary>
        [DataMember(Name = "RESTEndpoint", EmitDefaultValue = true)]
        public string RESTEndpoint { get; set; }

        /// <summary>
        /// Gets or Sets TenantIdentifier
        /// </summary>
        [DataMember(Name = "TenantIdentifier", EmitDefaultValue = true)]
        public string TenantIdentifier { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class SecurityRestClientConfiguration {\n");
            sb.Append("  IsClaimsIdentity: ").Append(IsClaimsIdentity).Append("\n");
            sb.Append("  AccessToken: ").Append(AccessToken).Append("\n");
            sb.Append("  ODataEndpoint: ").Append(ODataEndpoint).Append("\n");
            sb.Append("  RESTEndpoint: ").Append(RESTEndpoint).Append("\n");
            sb.Append("  TenantIdentifier: ").Append(TenantIdentifier).Append("\n");
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
            return this.Equals(input as SecurityRestClientConfiguration);
        }

        /// <summary>
        /// Returns true if SecurityRestClientConfiguration instances are equal
        /// </summary>
        /// <param name="input">Instance of SecurityRestClientConfiguration to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(SecurityRestClientConfiguration input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.IsClaimsIdentity == input.IsClaimsIdentity ||
                    this.IsClaimsIdentity.Equals(input.IsClaimsIdentity)
                ) && 
                (
                    this.AccessToken == input.AccessToken ||
                    (this.AccessToken != null &&
                    this.AccessToken.Equals(input.AccessToken))
                ) && 
                (
                    this.ODataEndpoint == input.ODataEndpoint ||
                    (this.ODataEndpoint != null &&
                    this.ODataEndpoint.Equals(input.ODataEndpoint))
                ) && 
                (
                    this.RESTEndpoint == input.RESTEndpoint ||
                    (this.RESTEndpoint != null &&
                    this.RESTEndpoint.Equals(input.RESTEndpoint))
                ) && 
                (
                    this.TenantIdentifier == input.TenantIdentifier ||
                    (this.TenantIdentifier != null &&
                    this.TenantIdentifier.Equals(input.TenantIdentifier))
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
                hashCode = (hashCode * 59) + this.IsClaimsIdentity.GetHashCode();
                if (this.AccessToken != null)
                {
                    hashCode = (hashCode * 59) + this.AccessToken.GetHashCode();
                }
                if (this.ODataEndpoint != null)
                {
                    hashCode = (hashCode * 59) + this.ODataEndpoint.GetHashCode();
                }
                if (this.RESTEndpoint != null)
                {
                    hashCode = (hashCode * 59) + this.RESTEndpoint.GetHashCode();
                }
                if (this.TenantIdentifier != null)
                {
                    hashCode = (hashCode * 59) + this.TenantIdentifier.GetHashCode();
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