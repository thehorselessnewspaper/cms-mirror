using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.ScopedServices.RestClients.Also
{
    public partial class HorselessRestApiClientAlso : IHorselessRestApiClientAlso
    {
        protected static System.Text.Json.JsonSerializerOptions GenerateUpdateJosnSerializationSettings(System.Text.Json.JsonSerializerOptions settings)
        {
            var serializeOptions = new JsonSerializerOptions
            {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
                WriteIndented = true
            };

            return serializeOptions;
        }
    }
}
