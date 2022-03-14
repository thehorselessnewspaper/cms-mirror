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
    /// ODataODataSingletonInfo
    /// </summary>
    [DataContract(Name = "ODataODataSingletonInfo")]
    public partial class ODataODataSingletonInfo : IEquatable<ODataODataSingletonInfo>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ODataODataSingletonInfo" /> class.
        /// </summary>
        /// <param name="typeAnnotation">typeAnnotation.</param>
        /// <param name="url">url.</param>
        /// <param name="name">name.</param>
        /// <param name="title">title.</param>
        public ODataODataSingletonInfo(ODataODataTypeAnnotation typeAnnotation = default(ODataODataTypeAnnotation), string url = default(string), string name = default(string), string title = default(string))
        {
            this.TypeAnnotation = typeAnnotation;
            this.Url = url;
            this.Name = name;
            this.Title = title;
        }

        /// <summary>
        /// Gets or Sets TypeAnnotation
        /// </summary>
        [DataMember(Name = "typeAnnotation", EmitDefaultValue = false)]
        public ODataODataTypeAnnotation TypeAnnotation { get; set; }

        /// <summary>
        /// Gets or Sets Url
        /// </summary>
        [DataMember(Name = "url", EmitDefaultValue = true)]
        public string Url { get; set; }

        /// <summary>
        /// Gets or Sets Name
        /// </summary>
        [DataMember(Name = "name", EmitDefaultValue = true)]
        public string Name { get; set; }

        /// <summary>
        /// Gets or Sets Title
        /// </summary>
        [DataMember(Name = "title", EmitDefaultValue = true)]
        public string Title { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ODataODataSingletonInfo {\n");
            sb.Append("  TypeAnnotation: ").Append(TypeAnnotation).Append("\n");
            sb.Append("  Url: ").Append(Url).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Title: ").Append(Title).Append("\n");
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
            return this.Equals(input as ODataODataSingletonInfo);
        }

        /// <summary>
        /// Returns true if ODataODataSingletonInfo instances are equal
        /// </summary>
        /// <param name="input">Instance of ODataODataSingletonInfo to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ODataODataSingletonInfo input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.TypeAnnotation == input.TypeAnnotation ||
                    (this.TypeAnnotation != null &&
                    this.TypeAnnotation.Equals(input.TypeAnnotation))
                ) && 
                (
                    this.Url == input.Url ||
                    (this.Url != null &&
                    this.Url.Equals(input.Url))
                ) && 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.Title == input.Title ||
                    (this.Title != null &&
                    this.Title.Equals(input.Title))
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
                if (this.TypeAnnotation != null)
                {
                    hashCode = (hashCode * 59) + this.TypeAnnotation.GetHashCode();
                }
                if (this.Url != null)
                {
                    hashCode = (hashCode * 59) + this.Url.GetHashCode();
                }
                if (this.Name != null)
                {
                    hashCode = (hashCode * 59) + this.Name.GetHashCode();
                }
                if (this.Title != null)
                {
                    hashCode = (hashCode * 59) + this.Title.GetHashCode();
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
