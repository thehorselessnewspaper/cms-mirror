using Finbuckle.MultiTenant;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using NUnit.Framework;
using NUnit.Framework.Internal;
using System;
using System.Linq;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.Schemas.HostingModel.Context.MSSQL;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace Horseless.HostingModel.SmokeTests
{
    internal class SchemaTestsConfig
    {
        public string SqlServerConnextoinString { get; set; }

    }

    public class Tests
    {
        IConfiguration configuration;
        private IServiceCollection services;
        private WebApplication app;
        [SetUp]
        public void Setup()
        {
            var builder = WebApplication.CreateBuilder();
   

            builder.Configuration.AddUserSecrets<SchemaTestsConfig>();

            builder.Services
               .AddLogging(o =>
               {
                   o.AddConsole();
               })

               .BuildServiceProvider();

            builder.Services.AddMultiTenant<TenantInfo>()

            .WithInMemoryStore(options =>
                {
                    options.Tenants.Add(new TenantInfo()
                    {
                        ConnectionString = builder.Configuration.GetConnectionString("ContentModelConnection"),
                        Id = "6da806b8-f7ab-4e3a-8833-7e834a40e9d0",
                        Identifier = "6da806b8-f7ab-4e3a-8833-7e834a40e9d0",
                        Name = "the horseless phantom tenant"
                    });
                })
            .WithStaticStrategy("6da806b8-f7ab-4e3a-8833-7e834a40e9d0");

            builder.Services.UseHorselessContentModelMSSqlServer(builder.Configuration, builder.Configuration.GetConnectionString("ContentModelConnection"));
            builder.Services.UseHorselessHostingModelMSSqlServer(builder.Configuration, builder.Configuration.GetConnectionString("HostingModelConnection"));

            app = builder.Build();

        }

        [Test]
        public async Task FailsObjectIdConstraint()
        {
            var queryProvider = app.Services.GetRequiredService<IQueryableContentModelOperator<ContentModel.ContentCollection>>();
            Assert.ThrowsAsync(typeof(Exception), TestFailsObjectIdConstraint, "test failed due to entity inserted with null objectid");
            Assert.Pass();
        }

        [Test]
        public async Task PasseslsObjectIdConstraint()
        {
            var queryProvider = app.Services.GetRequiredService<IQueryableContentModelOperator<ContentModel.ContentCollection>>();
            Assert.ThrowsAsync(typeof(Exception), TestPassessObjectIdConstraint, "test failed due to entity not inserted with valid objectid");
            Assert.Pass();
        }



        async Task TestPassessObjectIdConstraint()
        {
            var queryProvider = app.Services.GetRequiredService<IQueryableContentModelOperator<ContentModel.ContentCollection>>();

            try
            {
                var result = await queryProvider.Create(new ContentModel.ContentCollection()
                {
                    Id = System.Guid.NewGuid(),
                    DisplayName = "Test",
                    CreatedAt = System.DateTime.UtcNow,
                    ObjectId = Guid.NewGuid().ToString()
                });
            }
            catch (Exception ex)
            {
                throw new Exception("failed to insert entity", ex);
            }
        }

        async Task TestFailsObjectIdConstraint()
        {
            var queryProvider = app.Services.GetRequiredService<IQueryableContentModelOperator<ContentModel.ContentCollection>>();

            try
            {
                var result = await queryProvider.Create(new ContentModel.ContentCollection()
                {
                    Id = System.Guid.NewGuid(),
                    DisplayName = "Test",
                    CreatedAt = System.DateTime.UtcNow
                });
            }
            catch (Exception ex)
            {
                throw new Exception("failed to insert entity", ex);
            }
        }
    }
}