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
using Microsoft.Extensions.Logging;

namespace TheHorselessNewspaper.HostingModel.Context.MSSQL
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
            ILoggerFactory dbLoggerFactory = LoggerFactory.Create(builder => { builder.AddConsole(); });

            // add dbcontext options for dependency injection
            var builder = new DbContextOptionsBuilder<MSSqlContentContext>();
            builder.EnableDetailedErrors();
            builder.EnableSensitiveDataLogging();

            try
            {
                builder.UseSqlServer(connectionString, options =>
                {
                    options.EnableRetryOnFailure();

                })
                    .UseLoggerFactory(dbLoggerFactory);

                services.AddSingleton(builder.Options);

                // add dbcontext for dependency injectoin
                services.AddTransient<IContentModelContext, MSSqlContentContext>();

                // register repository-like services that depend on dbcontext
                ModelOperatorExtensions.RegisterContentModelOperators(services);
            }
            catch (Exception e)
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
            ILoggerFactory dbLoggerFactory = LoggerFactory.Create(builder => { builder.AddConsole(); });

            builder.EnableDetailedErrors();
            builder.EnableSensitiveDataLogging();
            builder.UseSqlServer(connectionString, options =>
            {
                options.EnableRetryOnFailure();

            }).UseLoggerFactory(dbLoggerFactory); 
            services.AddSingleton(builder.Options);

            // add dbcontext for dependency injectoin
            services.AddTransient<IHostingModelContext, MSSQLHostingContext>();

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
