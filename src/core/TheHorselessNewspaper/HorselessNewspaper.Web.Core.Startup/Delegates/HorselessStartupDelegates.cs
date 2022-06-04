using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.AspNetCore.HttpLogging;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.Startup.Delegates
{
    public delegate void ConfigureSharedContentDb(IServiceCollection services);

    public delegate void ConfigureSharedHostingDb(IServiceCollection services);

    public delegate void ConfigureRazorPages(IServiceCollection services);

    public delegate void ConfigureAuthenticationCookie(CookieAuthenticationOptions opts);
    public delegate void ConfigureCookiePolicy(CookiePolicyOptions opts);

    public delegate void ConfigureHttpLogging(HttpLoggingOptions opts);

    public delegate void ConfigureSession(SessionOptions opts);

    public delegate void ConfigureCors(CorsOptions opts);

    public delegate void ConfigureEndpointRouteBuilder(IEndpointRouteBuilder options);
    
    /// <summary>
    /// this class is merely travelling with the delegates
    /// examine removal
    /// </summary>
    internal class HorselessStartupDelegates
    {
        private HorselessStartupDelegates() { }
    }
}
