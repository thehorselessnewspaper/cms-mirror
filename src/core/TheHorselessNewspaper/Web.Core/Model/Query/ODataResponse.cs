using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.Model.Query
{
    /// <summary>
    /// odata response dto
    /// as per https://stackoverflow.com/questions/26820275/how-to-deserialize-odata-json
    /// 
    /// requires no odata metadata fields in source json as per
    /// client.DefaultRequestHeaders.Add("Accept", "application/json;odata.metadata=none");
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class ODataResponse<T>
    {

        public ODataResponse() { }

        [JsonPropertyName("value")]
        public T Value { get; set; }
    }
}
