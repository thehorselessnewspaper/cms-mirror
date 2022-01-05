using Microsoft.Extensions.DependencyInjection;
using NUnit.Framework;
using NUnit.Framework.Internal;
using System;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Finbuckle.MultiTenant;
using Finbuckle.MultiTenant.EntityFrameworkCore;
using Microsoft.AspNetCore.Builder;
using Finbuckle.MultiTenant;
using HorselessNewspaper.Web.Core.Extensions;
using HorselessNewspaper.Web.Core.Extensions.Hosting;
using TheHorselessNewspaper.Schemas.HostingModel.Context.MSSQL;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
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
        [SetUp]
        public void Setup()
        {
            var builder = WebApplication.CreateBuilder();
            configuration = new ConfigurationBuilder()
                .AddUserSecrets<SchemaTestsConfig>()
                .Build();

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



            builder.Services.UseHorselessContentModelMSSqlServer(builder.Configuration);
            builder.Services.UseHorselessHostingModelMSSqlServer(builder.Configuration);

            var app = builder.Build();
        }

        [Test]
        public void Test1()
        {
            Assert.Pass();

            IQueryableContentModelOperator<ContentModel.ContentCollection> ctx;
        }
    }
}