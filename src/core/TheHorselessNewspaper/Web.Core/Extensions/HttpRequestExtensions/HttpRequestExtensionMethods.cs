using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.Extensions.HttpRequestExtensions
{
    /// <summary>
    /// useful httprequest extension methods
    /// </summary>
    public static class HttpRequestExtensionMethods
    {

        public static string GetFullHttpUrl(this HttpRequest request)

        {

            return new StringBuilder()

                 .Append(request.Scheme)

                 .Append("://")

                 .Append(request.Host)

                 .Append(request.PathBase)

                 .Append(request.Path)

                 .Append(request.QueryString)

                 .ToString();

        }
    }
}
