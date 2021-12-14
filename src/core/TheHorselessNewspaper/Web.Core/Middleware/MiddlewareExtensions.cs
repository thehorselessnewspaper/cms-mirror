using Microsoft.AspNetCore.Builder;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.Middleware
{
    /// <summary>
    /// as per 
    /// https://github.com/dotnet/AspNetCore.Docs/blob/main/aspnetcore/fundamentals/middleware/extensibility/samples/3.x/MiddlewareExtensibilitySample/Middleware/FactoryActivatedMiddleware.cs#L10
    /// </summary>
    public static class MiddlewareExtensions
    {

        public static IApplicationBuilder UseFactoryActivatedMiddleware(
            this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<FactoryActivatedMiddleware>();
        }
    }
}
