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
    /// Defines ContentEntitiesACEPermissionType
    /// </summary>
    [JsonConverter(typeof(StringEnumConverter))]
    public enum ContentEntitiesACEPermissionType
    {
        /// <summary>
        /// Enum PERMIT for value: PERMIT
        /// </summary>
        [EnumMember(Value = "PERMIT")]
        PERMIT = 1,

        /// <summary>
        /// Enum DENY for value: DENY
        /// </summary>
        [EnumMember(Value = "DENY")]
        DENY = 2

    }

}
