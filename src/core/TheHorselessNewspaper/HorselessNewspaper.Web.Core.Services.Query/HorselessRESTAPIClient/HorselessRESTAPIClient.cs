using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.Services.Query.HorselessRESTAPIClient
{

    public partial interface IHorselessRESTAPIClient
    {
        public string AuthorizationHeaderToken { get; set; }
    }

    /// <summary>
    /// extensions to NWAG generated c# rest client
    /// </summary>
    public partial class HorselessRESTAPIClient : IHorselessRESTAPIClient
    {
        public string AuthorizationHeaderToken { get; set; }

        partial void PrepareRequest(System.Net.Http.HttpClient client, System.Net.Http.HttpRequestMessage request, string url)
        {
            var tokenHeader = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", AuthorizationHeaderToken);
            request.Headers.Authorization = tokenHeader;
        }

        partial void PrepareRequest(System.Net.Http.HttpClient client, System.Net.Http.HttpRequestMessage request, System.Text.StringBuilder urlBuilder)
        {
            var tokenHeader = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", AuthorizationHeaderToken);
            request.Headers.Authorization = tokenHeader;
        }

        partial void UpdateJsonSerializerSettings(System.Text.Json.JsonSerializerOptions settings)
        {
            settings.MaxDepth = 1024;
            settings.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.Preserve;
        }
    }
}
