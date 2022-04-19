using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.Json;

namespace HorselessNewspaper.Web.Core.ScopedServices.RestClients
{
    public partial interface IHorselessRestApiClient
    {
        public string BaseUrl { get; set; }
    }

    public partial class HorselessRestApiClient : IHorselessRestApiClient
    {
        /// <summary>
        /// avoid the nswag generated constructor
        /// that is unsuitable for dependency injection
        /// scenarios
        /// </summary>
        /// <param name="httpClient"></param>
        public HorselessRestApiClient(string baseUrl, System.Net.Http.HttpClient httpClient, IConfiguration configuration)
        {
            var configuredRestBaseUrl = configuration["RestApiBaseUrl"];
            BaseUrl = configuredRestBaseUrl;
            _httpClient = httpClient;
            _settings = new System.Lazy<System.Text.Json.JsonSerializerOptions>(CreateSerializerSettings);
        }
    }
}
