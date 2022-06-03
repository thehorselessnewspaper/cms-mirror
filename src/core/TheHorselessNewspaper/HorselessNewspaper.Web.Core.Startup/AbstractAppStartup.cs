
using System.Reflection;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;

namespace HorselessNewspaper.Web.Core.Startup
{
    /// <summary>
    /// support extensible startup 
    /// that encapsulates what's required
    /// to boot the cms
    /// 
    /// as per 
    /// https://www.infoworld.com/article/3646098/demystifying-the-program-and-startup-classes-in-aspnet-core.html
    /// </summary>
    public abstract class AbstractAppStartup : IHorselessAppStartup
    {
        #region required by the asp.net core framework
        public AbstractAppStartup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public virtual IConfiguration Configuration { get; }
        public abstract void ConfigureServices(IServiceCollection services);
        public abstract void Configure(WebApplication app, IWebHostEnvironment env);

        #endregion required by the asp.net core framework
    }
}