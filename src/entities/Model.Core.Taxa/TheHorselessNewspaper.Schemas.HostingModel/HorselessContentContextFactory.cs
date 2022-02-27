using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.MultiTenant;
using TheHorselessNewspaper.Schemas.HostingModel.Context.MSSQL;

namespace TheHorselessNewspaper.HostingModel
{
    internal class FactorySchemaConfig
    {
        public string SqlServerConnectionString { get; set; }

    }

    internal class HorselessContentContextFactory : IDesignTimeDbContextFactory<MSSqlContentContext>
    {
        public MSSqlContentContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<MSSqlContentContext>();
            optionsBuilder.UseSqlServer("Data Source=blog.db");

            return new MSSqlContentContext(optionsBuilder.Options,
                new HorselessTenantInfo()
                {
                    ConnectionString = GetAppConfiguration().GetConnectionString("ContentModelConnection"),
                    Id = "6da806b8-f7ab-4e3a-8833-7e834a40e9d0",
                    Identifier = "6da806b8-f7ab-4e3a-8833-7e834a40e9d0",
                    Name = "the horseless phantom tenant"
                }, 
                GetAppConfiguration());
        }

        IConfiguration GetAppConfiguration()
        {
            var environmentName =
                      Environment.GetEnvironmentVariable(
                          "ASPNETCORE_ENVIRONMENT");

            var dir = Directory.GetParent(AppContext.BaseDirectory);

            if (EnvironmentName.Development.Equals(environmentName,
                StringComparison.OrdinalIgnoreCase))
            {
                var depth = 0;
                do
                    dir = dir.Parent;
                while (++depth < 5 && dir.Name != "bin");
                dir = dir.Parent;
            }

            var path = dir.FullName;

            var builder = new ConfigurationBuilder()
                    .SetBasePath(path)
                    .AddUserSecrets<FactorySchemaConfig>()
                    .AddJsonFile("appsettings.json")
                    .AddJsonFile($"appsettings.{environmentName}.json", true)
                    .AddEnvironmentVariables();

            return builder.Build();
        }
    }
}
