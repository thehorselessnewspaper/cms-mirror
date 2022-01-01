using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using TheHorselessNewspaper.Schemas.HostingModel.Entities;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace HorselessNewspaper.Web.Core.Extensions.MSSQLServer
{
    /// <summary>
    /// don't do this due to use of dbcontext marked internal in a different assembly
    /// to prevent injection into controllers
    /// </summary>
    [Obsolete]
    public static class HorselessSQLServerExtensionsObsolete
    {
        public static IServiceCollection UseHorselessMSSqlServer(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<THNLPHostingContext>(options =>
            {
                options.UseSqlServer(configuration.GetConnectionString("HostingModelConnection"));
                options.EnableDetailedErrors();
            });

            services.AddDbContext<THNLPContentContext>(options =>
            {
                options.UseSqlServer(configuration.GetConnectionString("ContentModelConnection"));
                options.EnableDetailedErrors();
            });

            return services;
        }
    }
}