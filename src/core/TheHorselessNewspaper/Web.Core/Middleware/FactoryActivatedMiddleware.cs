using Microsoft.AspNetCore.Http;
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
    public class FactoryActivatedMiddleware : IMiddleware
    {

        public FactoryActivatedMiddleware()
        {
 
        }

        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            var keyValue = context.Request.Query["key"];

            if (!string.IsNullOrWhiteSpace(keyValue))
            {

            }

            await next(context);
        }
    }
}
