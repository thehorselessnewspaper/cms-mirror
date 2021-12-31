using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using TheHorselessNewspaper.Schemas.HostingModel.Entities;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace HorselessNewspaper.Web.Core.Extensions.MSSQLServer
{
    public static class HorselessSQLServerExtensions
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