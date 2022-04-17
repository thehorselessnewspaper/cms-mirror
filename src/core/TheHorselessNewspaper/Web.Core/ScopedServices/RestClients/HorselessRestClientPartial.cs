using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.ScopedServices.RestClients
{
    public partial interface IHorselessRestApiClient
    {
        public string BaseUrl { get; set; }
    }

    public partial class HorselessRestApiClient
    {
        /// <summary>
        /// avoid the nswag generated constructor
        /// that is unsuitable for dependency injection
        /// scenarios
        /// </summary>
        /// <param name="httpClient"></param>
        public HorselessRestApiClient(System.Net.Http.HttpClient httpClient, IConfiguration configuration)
        {
            var configuredRestBaseUrl = configuration["RestApiBaseUrl"];
            BaseUrl = configuredRestBaseUrl;
            _httpClient = httpClient;
            _settings = new System.Lazy<Newtonsoft.Json.JsonSerializerSettings>(() =>
            {
                var settings = new Newtonsoft.Json.JsonSerializerSettings();
                UpdateJsonSerializerSettings(settings);
                return settings;
            });
        }
    }
}
