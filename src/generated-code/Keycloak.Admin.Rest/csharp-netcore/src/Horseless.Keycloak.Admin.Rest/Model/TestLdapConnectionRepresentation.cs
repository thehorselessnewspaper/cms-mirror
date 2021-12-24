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
    /// TestLdapConnectionRepresentation
    /// </summary>
    [DataContract(Name = "TestLdapConnectionRepresentation")]
    public partial class TestLdapConnectionRepresentation : IEquatable<TestLdapConnectionRepresentation>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TestLdapConnectionRepresentation" /> class.
        /// </summary>
        /// <param name="action">action.</param>
        /// <param name="authType">authType.</param>
        /// <param name="bindCredential">bindCredential.</param>
        /// <param name="bindDn">bindDn.</param>
        /// <param name="componentId">componentId.</param>
        /// <param name="connectionTimeout">connectionTimeout.</param>
        /// <param name="connectionUrl">connectionUrl.</param>
        /// <param name="startTls">startTls.</param>
        /// <param name="useTruststoreSpi">useTruststoreSpi.</param>
        public TestLdapConnectionRepresentation(string action = default(string), string authType = default(string), string bindCredential = default(string), string bindDn = default(string), string componentId = default(string), string connectionTimeout = default(string), string connectionUrl = default(string), string startTls = default(string), string useTruststoreSpi = default(string))
        {
            this.Action = action;
            this.AuthType = authType;
            this.BindCredential = bindCredential;
            this.BindDn = bindDn;
            this.ComponentId = componentId;
            this.ConnectionTimeout = connectionTimeout;
            this.ConnectionUrl = connectionUrl;
            this.StartTls = startTls;
            this.UseTruststoreSpi = useTruststoreSpi;
        }

        /// <summary>
        /// Gets or Sets Action
        /// </summary>
        [DataMember(Name = "action", EmitDefaultValue = false)]
        public string Action { get; set; }

        /// <summary>
        /// Gets or Sets AuthType
        /// </summary>
        [DataMember(Name = "authType", EmitDefaultValue = false)]
        public string AuthType { get; set; }

        /// <summary>
        /// Gets or Sets BindCredential
        /// </summary>
        [DataMember(Name = "bindCredential", EmitDefaultValue = false)]
        public string BindCredential { get; set; }

        /// <summary>
        /// Gets or Sets BindDn
        /// </summary>
        [DataMember(Name = "bindDn", EmitDefaultValue = false)]
        public string BindDn { get; set; }

        /// <summary>
        /// Gets or Sets ComponentId
        /// </summary>
        [DataMember(Name = "componentId", EmitDefaultValue = false)]
        public string ComponentId { get; set; }

        /// <summary>
        /// Gets or Sets ConnectionTimeout
        /// </summary>
        [DataMember(Name = "connectionTimeout", EmitDefaultValue = false)]
        public string ConnectionTimeout { get; set; }

        /// <summary>
        /// Gets or Sets ConnectionUrl
        /// </summary>
        [DataMember(Name = "connectionUrl", EmitDefaultValue = false)]
        public string ConnectionUrl { get; set; }

        /// <summary>
        /// Gets or Sets StartTls
        /// </summary>
        [DataMember(Name = "startTls", EmitDefaultValue = false)]
        public string StartTls { get; set; }

        /// <summary>
        /// Gets or Sets UseTruststoreSpi
        /// </summary>
        [DataMember(Name = "useTruststoreSpi", EmitDefaultValue = false)]
        public string UseTruststoreSpi { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class TestLdapConnectionRepresentation {\n");
            sb.Append("  Action: ").Append(Action).Append("\n");
            sb.Append("  AuthType: ").Append(AuthType).Append("\n");
            sb.Append("  BindCredential: ").Append(BindCredential).Append("\n");
            sb.Append("  BindDn: ").Append(BindDn).Append("\n");
            sb.Append("  ComponentId: ").Append(ComponentId).Append("\n");
            sb.Append("  ConnectionTimeout: ").Append(ConnectionTimeout).Append("\n");
            sb.Append("  ConnectionUrl: ").Append(ConnectionUrl).Append("\n");
            sb.Append("  StartTls: ").Append(StartTls).Append("\n");
            sb.Append("  UseTruststoreSpi: ").Append(UseTruststoreSpi).Append("\n");
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
            return this.Equals(input as TestLdapConnectionRepresentation);
        }

        /// <summary>
        /// Returns true if TestLdapConnectionRepresentation instances are equal
        /// </summary>
        /// <param name="input">Instance of TestLdapConnectionRepresentation to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(TestLdapConnectionRepresentation input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Action == input.Action ||
                    (this.Action != null &&
                    this.Action.Equals(input.Action))
                ) && 
                (
                    this.AuthType == input.AuthType ||
                    (this.AuthType != null &&
                    this.AuthType.Equals(input.AuthType))
                ) && 
                (
                    this.BindCredential == input.BindCredential ||
                    (this.BindCredential != null &&
                    this.BindCredential.Equals(input.BindCredential))
                ) && 
                (
                    this.BindDn == input.BindDn ||
                    (this.BindDn != null &&
                    this.BindDn.Equals(input.BindDn))
                ) && 
                (
                    this.ComponentId == input.ComponentId ||
                    (this.ComponentId != null &&
                    this.ComponentId.Equals(input.ComponentId))
                ) && 
                (
                    this.ConnectionTimeout == input.ConnectionTimeout ||
                    (this.ConnectionTimeout != null &&
                    this.ConnectionTimeout.Equals(input.ConnectionTimeout))
                ) && 
                (
                    this.ConnectionUrl == input.ConnectionUrl ||
                    (this.ConnectionUrl != null &&
                    this.ConnectionUrl.Equals(input.ConnectionUrl))
                ) && 
                (
                    this.StartTls == input.StartTls ||
                    (this.StartTls != null &&
                    this.StartTls.Equals(input.StartTls))
                ) && 
                (
                    this.UseTruststoreSpi == input.UseTruststoreSpi ||
                    (this.UseTruststoreSpi != null &&
                    this.UseTruststoreSpi.Equals(input.UseTruststoreSpi))
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
                if (this.Action != null)
                {
                    hashCode = (hashCode * 59) + this.Action.GetHashCode();
                }
                if (this.AuthType != null)
                {
                    hashCode = (hashCode * 59) + this.AuthType.GetHashCode();
                }
                if (this.BindCredential != null)
                {
                    hashCode = (hashCode * 59) + this.BindCredential.GetHashCode();
                }
                if (this.BindDn != null)
                {
                    hashCode = (hashCode * 59) + this.BindDn.GetHashCode();
                }
                if (this.ComponentId != null)
                {
                    hashCode = (hashCode * 59) + this.ComponentId.GetHashCode();
                }
                if (this.ConnectionTimeout != null)
                {
                    hashCode = (hashCode * 59) + this.ConnectionTimeout.GetHashCode();
                }
                if (this.ConnectionUrl != null)
                {
                    hashCode = (hashCode * 59) + this.ConnectionUrl.GetHashCode();
                }
                if (this.StartTls != null)
                {
                    hashCode = (hashCode * 59) + this.StartTls.GetHashCode();
                }
                if (this.UseTruststoreSpi != null)
                {
                    hashCode = (hashCode * 59) + this.UseTruststoreSpi.GetHashCode();
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