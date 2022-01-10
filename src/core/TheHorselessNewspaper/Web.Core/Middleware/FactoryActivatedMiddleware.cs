using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
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

        /// <summary>
        /// incredibly you can inject services here
        /// </summary>
        /// <param name="context"></param>
        /// <param name="next"></param>
        /// <returns></returns>
        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            // do something like as follows
        //    var keyValue = context.Request.Query["key"];

        //    if (!string.IsNullOrWhiteSpace(keyValue))
        //    {

        //    }

        //    // Assume this is the roles
        //    List<Claim> claims = new List<Claim>
        //{
        //    new Claim(ClaimTypes.Name, "John"),
        //    new Claim(ClaimTypes.Email, "john@someemail.com")
        //};

        //    foreach (KeyValuePair<string, string[]> tenantRole in _tenantRoles)
        //    {
        //        claims.AddRange(tenantRole.Value.Select(x => new Claim(ClaimTypes.Role, $"{tenantRole.Key}:{x}".ToLower())));
        //    }

        //    // Note: You need these for the AuthorizeAttribute.Roles    
        //    claims.AddRange(_tenantRoles.SelectMany(x => x.Value)
        //        .Select(x => new Claim(ClaimTypes.Role, x.ToLower())));

        //    context.User = new System.Security.Claims.ClaimsPrincipal(new ClaimsIdentity(claims,
        //        "Bearer"));


            await next(context);
        }
    }
}
