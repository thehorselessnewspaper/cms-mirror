using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TheHorselessNewspaper.HostingModel.DTO
{
    /// <summary>
    /// handle highly variable responses from odata controllers
    /// with encapusulated nullable 
    /// - ProblemDetails properties
    /// - odata.context response with nullable Value property
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class OData<T>
    {
        [System.Text.Json.Serialization.JsonPropertyName("odata.context")]
        public string? Metadata { get; set; } = string.Empty;
        public T? value { get; set; }

        public string? type { get; set; }

        public string? title { get; set; }

        public string? status { get; set; }


        public string? detail { get; set; }


        public string? instance { get; set; }

    }
}
