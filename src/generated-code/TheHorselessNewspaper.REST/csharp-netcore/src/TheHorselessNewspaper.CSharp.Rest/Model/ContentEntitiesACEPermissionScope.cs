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
    /// Defines ContentEntitiesACEPermissionScope
    /// </summary>
    [JsonConverter(typeof(StringEnumConverter))]
    public enum ContentEntitiesACEPermissionScope
    {
        /// <summary>
        /// Enum SITE for value: SITE
        /// </summary>
        [EnumMember(Value = "SITE")]
        SITE = 1,

        /// <summary>
        /// Enum TENANT for value: TENANT
        /// </summary>
        [EnumMember(Value = "TENANT")]
        TENANT = 2,

        /// <summary>
        /// Enum OWNER for value: OWNER
        /// </summary>
        [EnumMember(Value = "OWNER")]
        OWNER = 3,

        /// <summary>
        /// Enum ROLE for value: ROLE
        /// </summary>
        [EnumMember(Value = "ROLE")]
        ROLE = 4,

        /// <summary>
        /// Enum GROUP for value: GROUP
        /// </summary>
        [EnumMember(Value = "GROUP")]
        GROUP = 5,

        /// <summary>
        /// Enum WORKFLOW for value: WORKFLOW
        /// </summary>
        [EnumMember(Value = "WORKFLOW")]
        WORKFLOW = 6,

        /// <summary>
        /// Enum ANONYMOUS for value: ANONYMOUS
        /// </summary>
        [EnumMember(Value = "ANONYMOUS")]
        ANONYMOUS = 7,

        /// <summary>
        /// Enum EVERYONE for value: EVERYONE
        /// </summary>
        [EnumMember(Value = "EVERYONE")]
        EVERYONE = 8

    }

}
