﻿using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using TheHorselessNewspaper.Schemas.HostingModel.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query.ContentCollections;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;

namespace TheHorselessNewspaper.Schemas.HostingModel.Context.MSSQL
{
    /// <summary>
    /// consumers of the dbcontext added here are expected to be marked public
    /// but the dbcontexts themselves are internal
    /// </summary>
    public static class HorselessSQLServerExtensions
    {
        public static IServiceCollection UseHorselessContentModelMSSqlServer(this IServiceCollection services, IConfiguration configuration)
        {

            var builder = new DbContextOptionsBuilder<MSSqlContentContext>();
            builder.UseSqlServer(configuration.GetConnectionString("ContentModelConnection"));
            services.AddSingleton<DbContextOptions<MSSqlContentContext>>(builder.Options);
            services.AddScoped<IContentModelContext, MSSqlContentContext>();
            services.AddScoped<IQueryableContentModelOperator<ContentCollection>, ContentCollectionQueries>();
            //services.AddDbContext<MSSqlContentContext>(options =>
            //{
            //    options.UseSqlServer(configuration.GetConnectionString("ContentModelConnection"));

            //    options.EnableDetailedErrors();
            //});

            return services;

        }

        public static IServiceCollection UseHorselessHostingModelMSSqlServer(this IServiceCollection services, IConfiguration configuration)
        {

            services.AddDbContext<MSSQLHostingContext>(options =>
            {
                string connectionString = configuration.GetConnectionString("HostingModelConnection");
                options.UseSqlServer(connectionString);
                options.EnableDetailedErrors();
            });

            return services;
        }
    }
}
