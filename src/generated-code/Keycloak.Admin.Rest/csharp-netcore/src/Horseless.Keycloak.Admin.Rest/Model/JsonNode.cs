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
    /// JsonNode
    /// </summary>
    [DataContract(Name = "JsonNode")]
    public partial class JsonNode : IEquatable<JsonNode>, IValidatableObject
    {
        /// <summary>
        /// Defines NodeType
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum NodeTypeEnum
        {
            /// <summary>
            /// Enum ARRAY for value: ARRAY
            /// </summary>
            [EnumMember(Value = "ARRAY")]
            ARRAY = 1,

            /// <summary>
            /// Enum BINARY for value: BINARY
            /// </summary>
            [EnumMember(Value = "BINARY")]
            BINARY = 2,

            /// <summary>
            /// Enum BOOLEAN for value: BOOLEAN
            /// </summary>
            [EnumMember(Value = "BOOLEAN")]
            BOOLEAN = 3,

            /// <summary>
            /// Enum MISSING for value: MISSING
            /// </summary>
            [EnumMember(Value = "MISSING")]
            MISSING = 4,

            /// <summary>
            /// Enum NULL for value: NULL
            /// </summary>
            [EnumMember(Value = "NULL")]
            NULL = 5,

            /// <summary>
            /// Enum NUMBER for value: NUMBER
            /// </summary>
            [EnumMember(Value = "NUMBER")]
            NUMBER = 6,

            /// <summary>
            /// Enum OBJECT for value: OBJECT
            /// </summary>
            [EnumMember(Value = "OBJECT")]
            OBJECT = 7,

            /// <summary>
            /// Enum POJO for value: POJO
            /// </summary>
            [EnumMember(Value = "POJO")]
            POJO = 8,

            /// <summary>
            /// Enum STRING for value: STRING
            /// </summary>
            [EnumMember(Value = "STRING")]
            STRING = 9

        }


        /// <summary>
        /// Gets or Sets NodeType
        /// </summary>
        [DataMember(Name = "nodeType", EmitDefaultValue = false)]
        public NodeTypeEnum? NodeType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="JsonNode" /> class.
        /// </summary>
        /// <param name="array">array.</param>
        /// <param name="bigDecimal">bigDecimal.</param>
        /// <param name="bigInteger">bigInteger.</param>
        /// <param name="binary">binary.</param>
        /// <param name="boolean">boolean.</param>
        /// <param name="containerNode">containerNode.</param>
        /// <param name="_double">_double.</param>
        /// <param name="empty">empty.</param>
        /// <param name="_float">_float.</param>
        /// <param name="floatingPointNumber">floatingPointNumber.</param>
        /// <param name="_int">_int.</param>
        /// <param name="integralNumber">integralNumber.</param>
        /// <param name="_long">_long.</param>
        /// <param name="missingNode">missingNode.</param>
        /// <param name="nodeType">nodeType.</param>
        /// <param name="_null">_null.</param>
        /// <param name="number">number.</param>
        /// <param name="_object">_object.</param>
        /// <param name="pojo">pojo.</param>
        /// <param name="_short">_short.</param>
        /// <param name="textual">textual.</param>
        /// <param name="valueNode">valueNode.</param>
        public JsonNode(bool array = default(bool), bool bigDecimal = default(bool), bool bigInteger = default(bool), bool binary = default(bool), bool boolean = default(bool), bool containerNode = default(bool), bool _double = default(bool), bool empty = default(bool), bool _float = default(bool), bool floatingPointNumber = default(bool), bool _int = default(bool), bool integralNumber = default(bool), bool _long = default(bool), bool missingNode = default(bool), NodeTypeEnum? nodeType = default(NodeTypeEnum?), bool _null = default(bool), bool number = default(bool), bool _object = default(bool), bool pojo = default(bool), bool _short = default(bool), bool textual = default(bool), bool valueNode = default(bool))
        {
            this.Array = array;
            this.BigDecimal = bigDecimal;
            this.BigInteger = bigInteger;
            this.Binary = binary;
            this.Boolean = boolean;
            this.ContainerNode = containerNode;
            this.Double = _double;
            this.Empty = empty;
            this.Float = _float;
            this.FloatingPointNumber = floatingPointNumber;
            this.Int = _int;
            this.IntegralNumber = integralNumber;
            this.Long = _long;
            this.MissingNode = missingNode;
            this.NodeType = nodeType;
            this.Null = _null;
            this.Number = number;
            this.Object = _object;
            this.Pojo = pojo;
            this.Short = _short;
            this.Textual = textual;
            this.ValueNode = valueNode;
        }

        /// <summary>
        /// Gets or Sets Array
        /// </summary>
        [DataMember(Name = "array", EmitDefaultValue = true)]
        public bool Array { get; set; }

        /// <summary>
        /// Gets or Sets BigDecimal
        /// </summary>
        [DataMember(Name = "bigDecimal", EmitDefaultValue = true)]
        public bool BigDecimal { get; set; }

        /// <summary>
        /// Gets or Sets BigInteger
        /// </summary>
        [DataMember(Name = "bigInteger", EmitDefaultValue = true)]
        public bool BigInteger { get; set; }

        /// <summary>
        /// Gets or Sets Binary
        /// </summary>
        [DataMember(Name = "binary", EmitDefaultValue = true)]
        public bool Binary { get; set; }

        /// <summary>
        /// Gets or Sets Boolean
        /// </summary>
        [DataMember(Name = "boolean", EmitDefaultValue = true)]
        public bool Boolean { get; set; }

        /// <summary>
        /// Gets or Sets ContainerNode
        /// </summary>
        [DataMember(Name = "containerNode", EmitDefaultValue = true)]
        public bool ContainerNode { get; set; }

        /// <summary>
        /// Gets or Sets Double
        /// </summary>
        [DataMember(Name = "double", EmitDefaultValue = true)]
        public bool Double { get; set; }

        /// <summary>
        /// Gets or Sets Empty
        /// </summary>
        [DataMember(Name = "empty", EmitDefaultValue = true)]
        public bool Empty { get; set; }

        /// <summary>
        /// Gets or Sets Float
        /// </summary>
        [DataMember(Name = "float", EmitDefaultValue = true)]
        public bool Float { get; set; }

        /// <summary>
        /// Gets or Sets FloatingPointNumber
        /// </summary>
        [DataMember(Name = "floatingPointNumber", EmitDefaultValue = true)]
        public bool FloatingPointNumber { get; set; }

        /// <summary>
        /// Gets or Sets Int
        /// </summary>
        [DataMember(Name = "int", EmitDefaultValue = true)]
        public bool Int { get; set; }

        /// <summary>
        /// Gets or Sets IntegralNumber
        /// </summary>
        [DataMember(Name = "integralNumber", EmitDefaultValue = true)]
        public bool IntegralNumber { get; set; }

        /// <summary>
        /// Gets or Sets Long
        /// </summary>
        [DataMember(Name = "long", EmitDefaultValue = true)]
        public bool Long { get; set; }

        /// <summary>
        /// Gets or Sets MissingNode
        /// </summary>
        [DataMember(Name = "missingNode", EmitDefaultValue = true)]
        public bool MissingNode { get; set; }

        /// <summary>
        /// Gets or Sets Null
        /// </summary>
        [DataMember(Name = "null", EmitDefaultValue = true)]
        public bool Null { get; set; }

        /// <summary>
        /// Gets or Sets Number
        /// </summary>
        [DataMember(Name = "number", EmitDefaultValue = true)]
        public bool Number { get; set; }

        /// <summary>
        /// Gets or Sets Object
        /// </summary>
        [DataMember(Name = "object", EmitDefaultValue = true)]
        public bool Object { get; set; }

        /// <summary>
        /// Gets or Sets Pojo
        /// </summary>
        [DataMember(Name = "pojo", EmitDefaultValue = true)]
        public bool Pojo { get; set; }

        /// <summary>
        /// Gets or Sets Short
        /// </summary>
        [DataMember(Name = "short", EmitDefaultValue = true)]
        public bool Short { get; set; }

        /// <summary>
        /// Gets or Sets Textual
        /// </summary>
        [DataMember(Name = "textual", EmitDefaultValue = true)]
        public bool Textual { get; set; }

        /// <summary>
        /// Gets or Sets ValueNode
        /// </summary>
        [DataMember(Name = "valueNode", EmitDefaultValue = true)]
        public bool ValueNode { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class JsonNode {\n");
            sb.Append("  Array: ").Append(Array).Append("\n");
            sb.Append("  BigDecimal: ").Append(BigDecimal).Append("\n");
            sb.Append("  BigInteger: ").Append(BigInteger).Append("\n");
            sb.Append("  Binary: ").Append(Binary).Append("\n");
            sb.Append("  Boolean: ").Append(Boolean).Append("\n");
            sb.Append("  ContainerNode: ").Append(ContainerNode).Append("\n");
            sb.Append("  Double: ").Append(Double).Append("\n");
            sb.Append("  Empty: ").Append(Empty).Append("\n");
            sb.Append("  Float: ").Append(Float).Append("\n");
            sb.Append("  FloatingPointNumber: ").Append(FloatingPointNumber).Append("\n");
            sb.Append("  Int: ").Append(Int).Append("\n");
            sb.Append("  IntegralNumber: ").Append(IntegralNumber).Append("\n");
            sb.Append("  Long: ").Append(Long).Append("\n");
            sb.Append("  MissingNode: ").Append(MissingNode).Append("\n");
            sb.Append("  NodeType: ").Append(NodeType).Append("\n");
            sb.Append("  Null: ").Append(Null).Append("\n");
            sb.Append("  Number: ").Append(Number).Append("\n");
            sb.Append("  Object: ").Append(Object).Append("\n");
            sb.Append("  Pojo: ").Append(Pojo).Append("\n");
            sb.Append("  Short: ").Append(Short).Append("\n");
            sb.Append("  Textual: ").Append(Textual).Append("\n");
            sb.Append("  ValueNode: ").Append(ValueNode).Append("\n");
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
            return this.Equals(input as JsonNode);
        }

        /// <summary>
        /// Returns true if JsonNode instances are equal
        /// </summary>
        /// <param name="input">Instance of JsonNode to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(JsonNode input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Array == input.Array ||
                    this.Array.Equals(input.Array)
                ) && 
                (
                    this.BigDecimal == input.BigDecimal ||
                    this.BigDecimal.Equals(input.BigDecimal)
                ) && 
                (
                    this.BigInteger == input.BigInteger ||
                    this.BigInteger.Equals(input.BigInteger)
                ) && 
                (
                    this.Binary == input.Binary ||
                    this.Binary.Equals(input.Binary)
                ) && 
                (
                    this.Boolean == input.Boolean ||
                    this.Boolean.Equals(input.Boolean)
                ) && 
                (
                    this.ContainerNode == input.ContainerNode ||
                    this.ContainerNode.Equals(input.ContainerNode)
                ) && 
                (
                    this.Double == input.Double ||
                    this.Double.Equals(input.Double)
                ) && 
                (
                    this.Empty == input.Empty ||
                    this.Empty.Equals(input.Empty)
                ) && 
                (
                    this.Float == input.Float ||
                    this.Float.Equals(input.Float)
                ) && 
                (
                    this.FloatingPointNumber == input.FloatingPointNumber ||
                    this.FloatingPointNumber.Equals(input.FloatingPointNumber)
                ) && 
                (
                    this.Int == input.Int ||
                    this.Int.Equals(input.Int)
                ) && 
                (
                    this.IntegralNumber == input.IntegralNumber ||
                    this.IntegralNumber.Equals(input.IntegralNumber)
                ) && 
                (
                    this.Long == input.Long ||
                    this.Long.Equals(input.Long)
                ) && 
                (
                    this.MissingNode == input.MissingNode ||
                    this.MissingNode.Equals(input.MissingNode)
                ) && 
                (
                    this.NodeType == input.NodeType ||
                    this.NodeType.Equals(input.NodeType)
                ) && 
                (
                    this.Null == input.Null ||
                    this.Null.Equals(input.Null)
                ) && 
                (
                    this.Number == input.Number ||
                    this.Number.Equals(input.Number)
                ) && 
                (
                    this.Object == input.Object ||
                    this.Object.Equals(input.Object)
                ) && 
                (
                    this.Pojo == input.Pojo ||
                    this.Pojo.Equals(input.Pojo)
                ) && 
                (
                    this.Short == input.Short ||
                    this.Short.Equals(input.Short)
                ) && 
                (
                    this.Textual == input.Textual ||
                    this.Textual.Equals(input.Textual)
                ) && 
                (
                    this.ValueNode == input.ValueNode ||
                    this.ValueNode.Equals(input.ValueNode)
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
                hashCode = (hashCode * 59) + this.Array.GetHashCode();
                hashCode = (hashCode * 59) + this.BigDecimal.GetHashCode();
                hashCode = (hashCode * 59) + this.BigInteger.GetHashCode();
                hashCode = (hashCode * 59) + this.Binary.GetHashCode();
                hashCode = (hashCode * 59) + this.Boolean.GetHashCode();
                hashCode = (hashCode * 59) + this.ContainerNode.GetHashCode();
                hashCode = (hashCode * 59) + this.Double.GetHashCode();
                hashCode = (hashCode * 59) + this.Empty.GetHashCode();
                hashCode = (hashCode * 59) + this.Float.GetHashCode();
                hashCode = (hashCode * 59) + this.FloatingPointNumber.GetHashCode();
                hashCode = (hashCode * 59) + this.Int.GetHashCode();
                hashCode = (hashCode * 59) + this.IntegralNumber.GetHashCode();
                hashCode = (hashCode * 59) + this.Long.GetHashCode();
                hashCode = (hashCode * 59) + this.MissingNode.GetHashCode();
                hashCode = (hashCode * 59) + this.NodeType.GetHashCode();
                hashCode = (hashCode * 59) + this.Null.GetHashCode();
                hashCode = (hashCode * 59) + this.Number.GetHashCode();
                hashCode = (hashCode * 59) + this.Object.GetHashCode();
                hashCode = (hashCode * 59) + this.Pojo.GetHashCode();
                hashCode = (hashCode * 59) + this.Short.GetHashCode();
                hashCode = (hashCode * 59) + this.Textual.GetHashCode();
                hashCode = (hashCode * 59) + this.ValueNode.GetHashCode();
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
