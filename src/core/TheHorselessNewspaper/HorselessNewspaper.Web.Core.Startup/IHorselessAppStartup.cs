


using System.Reflection;


using System.Text.Json.Serialization;

using Microsoft.AspNetCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;

namespace HorselessNewspaper.Web.Core.Startup
{
    public interface IHorselessAppStartup
    {
        /// <summary>
        /// support extensible startup 
        /// that encapsulates what's required
        /// to boot the cms
        /// 
        /// as per 
        /// https://www.infoworld.com/article/3646098/demystifying-the-program-and-startup-classes-in-aspnet-core.html
        /// </summary>
        IConfiguration Configuration { get; }

        void Configure(WebApplication app, IWebHostEnvironment env);
        void ConfigureServices(IServiceCollection services);
    }
}