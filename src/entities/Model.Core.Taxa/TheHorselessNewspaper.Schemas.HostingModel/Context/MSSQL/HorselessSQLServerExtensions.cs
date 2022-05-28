using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query.ContentCollections;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.HostingModel.Context;

namespace TheHorselessNewspaper.Schemas.HostingModel.Context.MSSQL
{
    /// <summary>
    /// consumers of the dbcontext added here are expected to be marked public
    /// but the dbcontexts themselves are internal
    /// </summary>
    public static class HorselessSQLServerExtensions
    {
        /// <summary>
        /// globally enables mssql server, pass global connection string
        /// </summary>
        /// <param name="services"></param>
        /// <param name="configuration"></param>
        /// <param name="connectionString"></param>
        /// <returns></returns>
        public static IServiceCollection UseHorselessContentModelMSSqlServer(this IServiceCollection services, IConfiguration configuration, string connectionString)
        {

            // add dbcontext options for dependency injection
            var builder = new DbContextOptionsBuilder<MSSqlContentContext>();
            builder.EnableDetailedErrors();
            builder.EnableSensitiveDataLogging();

            try
            {
                builder.UseSqlServer(connectionString, options =>
                {
                    options.EnableRetryOnFailure();
                   
                });

                services.AddSingleton<DbContextOptions<MSSqlContentContext>>(builder.Options);

                // add dbcontext for dependency injectoin
                services.AddScoped<IContentModelContext, MSSqlContentContext>();

                // register repository-like services that depend on dbcontext
                ModelOperatorExtensions.RegisterContentModelOperators(services);
            }
            catch(Exception e)
            {
                int i = 0;
            }
              
            return services;

        }


        /// <summary>
        /// globally enables mssql server, pass global connection string
        /// 
        /// registers query service
        /// </summary>
        /// <param name="services"></param>
        /// <param name="configuration"></param>
        /// <param name="connectionString"></param>
        /// <returns></returns>
        public static IServiceCollection UseHorselessHostingModelMSSqlServer(this IServiceCollection services, IConfiguration configuration, string connectionString)
        {
            var builder = new DbContextOptionsBuilder<MSSQLHostingContext>();
            builder.EnableDetailedErrors();
            builder.EnableSensitiveDataLogging();
            builder.UseSqlServer(connectionString, options =>
            {
                options.EnableRetryOnFailure();

            });
            services.AddSingleton<DbContextOptions<MSSQLHostingContext>>(builder.Options);

            // add dbcontext for dependency injectoin
            services.AddScoped<IHostingModelContext, MSSQLHostingContext>();

            //services.AddDbContext<MSSQLHostingContext>(options =>
            //{
            //    string connectionString = configuration.GetConnectionString("HostingModelConnection");
            //    options.UseSqlServer(connectionString);
            //    options.EnableDetailedErrors();
            //});

            ModelOperatorExtensions.RegisterHostingModelOperator(services);
            return services;
        }
    }
}
