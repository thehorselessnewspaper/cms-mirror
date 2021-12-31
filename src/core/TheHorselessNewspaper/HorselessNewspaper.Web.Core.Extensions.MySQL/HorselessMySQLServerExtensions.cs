using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using TheHorselessNewspaper.Schemas.HostingModel.Entities;

namespace HorselessNewspaper.Web.Core.Extensions.MySQL
{
    public static class HorselessMySQLServerExtensions
    {
        public static IServiceCollection UseHorselessMSSqlServer<TDbContext>(this IServiceCollection services, IConfiguration configuration, TDbContext dbContext) where TDbContext : DbContext 
        {
            // Replace with your connection string.
            var hostingModelConnectionString = configuration.GetConnectionString("MySQLServerHostingModelConnection");
            var contentModelConnectionString = configuration.GetConnectionString("MySQLServerContentModelConnection");

            // Replace with your server version and type.
            // Use 'MariaDbServerVersion' for MariaDB.
            // Alternatively, use 'ServerVersion.AutoDetect(connectionString)'.
            // For common usages, see pull request #1233.
            var hostingModelServerVersion = ServerVersion.AutoDetect(hostingModelConnectionString);
            var contentModelServerVersion = ServerVersion.AutoDetect(contentModelConnectionString);

            services.AddDbContext<TDbContext>(options =>
            {
                options.UseMySql(hostingModelConnectionString, hostingModelServerVersion);
                options.EnableDetailedErrors();
            });

            services.AddDbContext<THNLPContentContext>(options =>
            {
                options.UseMySql(contentModelConnectionString, contentModelServerVersion);
                options.EnableDetailedErrors();
            });

            return services;
        }
    }
}