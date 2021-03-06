using Finbuckle.MultiTenant;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using NUnit.Framework;
using NUnit.Framework.Internal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.HostingModel.Context;
using TheHorselessNewspaper.HostingModel.Entities.Query;
using TheHorselessNewspaper.HostingModel.MultiTenant;
using TheHorselessNewspaper.Schemas.HostingModel.Context;
using TheHorselessNewspaper.Schemas.HostingModel.Context.MSSQL;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using HostingEntities = TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;

namespace Horseless.HostingModel.SmokeTests
{
    internal class SchemaTestsConfig
    {
        public string SqlServerConnextoinString { get; set; }

    }

    public abstract class Tests
    {
        protected IConfiguration configuration;
        protected IServiceCollection services;
        protected WebApplication app;
        [SetUp]
        public async Task Setup()
        {
            var builder = WebApplication.CreateBuilder();


            builder.Configuration.AddUserSecrets<SchemaTestsConfig>();

            builder.Services
               .AddLogging(o =>
               {
                   o.AddConsole();
               })

               .BuildServiceProvider();

            builder.Services.AddMultiTenant<HorselessTenantInfo>()


            #region testing tenant setup
            .WithInMemoryStore(options =>
                {
                    options.Tenants.Add(new HorselessTenantInfo()
                    {
                        ConnectionString = builder.Configuration.GetConnectionString("ContentModelConnection"),
                        Id = "6da806b8-f7ab-4e3a-8833-7e834a40e9d0",
                        Identifier = "6da806b8-f7ab-4e3a-8833-7e834a40e9d0",
                        Name = "the horseless phantom tenant"
                    });
                })
            .WithStaticStrategy("6da806b8-f7ab-4e3a-8833-7e834a40e9d0");

            // for bootstrappingduring testing only
            builder.Services.AddSingleton<ITenantInfo>(new HorselessTenantInfo()
            {
                ConnectionString = builder.Configuration.GetConnectionString("ContentModelConnection"),
                Id = "6da806b8-f7ab-4e3a-8833-7e834a40e9d0",
                Identifier = "6da806b8-f7ab-4e3a-8833-7e834a40e9d0",
                Name = "the horseless phantom tenant"
            });

            #endregion testing tenant setup


            builder.Services.UseHorselessContentModelMSSqlServer(builder.Configuration, builder.Configuration.GetConnectionString("ContentModelConnection"));
            builder.Services.UseHorselessHostingModelMSSqlServer(builder.Configuration, builder.Configuration.GetConnectionString("HostingModelConnection"));

            app = builder.Build();
            var theContentOperator = GetIQueryableContentModelOperator<IQueryableContentModelOperator<ContentModel.ContentCollection>>();
            await theContentOperator.ResetDb();

            var theHostingOperator = GetIQueryableContentModelOperator<IQueryableHostingModelOperator<HostingEntities.Tenant>>();
            await theHostingOperator.ResetDb();
            int i = 0;
        }

        [Test]
        public async Task FailsObjectIdConstraint()
        {
            /// TODO should objectId be not null???
            Assert.DoesNotThrowAsync(TestPassWithNullObjectId, "test failed due to entity inserted with null objectid");
            Assert.Pass();
        }

        public T GetIQueryableContentModelOperator<T>() where T : notnull
        {
            var queryProvider = app.Services.GetRequiredService<T>();
            return queryProvider;
        }

        public T GetIQueryableHostingModelOperator<T>() where T : notnull
        {
            var queryProvider = app.Services.GetRequiredService<T>();
            return queryProvider;
        }

        [Test]
        public async Task PasseslsObjectIdConstraint()
        {
            var queryProvider = app.Services.GetRequiredService<IQueryableContentModelOperator<ContentModel.ContentCollection>>();
            Assert.DoesNotThrowAsync(TestPassessObjectIdConstraint, "test failed due to entity not inserted with null objectid");
            Assert.Pass();
        }


        protected async Task<T> CreateEntity<T>(T entity) where T : class, IContentRowLevelSecured
        {
            var queryProvider = this.GetIQueryableContentModelOperator<IQueryableContentModelOperator<T>>();
            var result = await queryProvider.Create(entity);
            return result;
        }

        protected async Task<T> CreateHostingEntity<T>(T entity) where T : class, IHostingRowLevelSecured
        {
            var queryProvider = this.GetIQueryableHostingModelOperator<IQueryableHostingModelOperator<T>>();
            var result = await queryProvider.Create(entity);

            return result;
        }

        protected async Task<T> Update<T>(T entity, List<string> targetProperties = null) where T : class, IContentRowLevelSecured
        {
            var queryProvider = this.GetIQueryableContentModelOperator<IQueryableContentModelOperator<T>>();
            var result = await queryProvider.Update(entity, targetProperties);
            return result;
        }

        protected async Task<T> UpdateHostingEntity<T>(T entity, List<string> targetProperties = null) where T : class, IHostingRowLevelSecured
        {
            var queryProvider = this.GetIQueryableHostingModelOperator<IQueryableHostingModelOperator<T>>();
            var result = await queryProvider.Update(entity, targetProperties);
            return result;
        }

        protected async Task<IQueryable<T>> Read<T>() where T : class, IContentRowLevelSecured
        {
            var queryProvider = this.GetIQueryableContentModelOperator<IQueryableContentModelOperator<T>>();
            var result = await queryProvider.Read();
            return result;
        }


        protected async Task<IQueryable<T>> ReadHostingEntity<T>() where T : class, IHostingRowLevelSecured
        {

            var queryProvider = this.GetIQueryableHostingModelOperator<IQueryableHostingModelOperator<T>>();
            var result = await queryProvider.Read();
            return result;
        }

        protected async Task<IQueryable<T>> ReadHostingEntity<T>(Expression<Func<T, bool>> query, List<string> includeClauses) where T : class, IHostingRowLevelSecured
        {

            var queryProvider = this.GetIQueryableHostingModelOperator<IQueryableHostingModelOperator<T>>();
            var result = await queryProvider.Read(query, includeClauses);
            return result;
        }

        protected async Task<IEnumerable<T>> ReadHostingEntityAsEnumerable<T>(Expression<Func<T, bool>> query, List<string> includeClauses) where T : class, IHostingRowLevelSecured
        {

            var queryProvider = this.GetIQueryableHostingModelOperator<IQueryableHostingModelOperator<T>>();
            var result = await queryProvider.ReadAsEnumerable(query, includeClauses);
            return result;
        }

        protected async Task<IEnumerable<T>> ReadContentEntityAsEnumerable<T>(Expression<Func<T, bool>> query, List<string> includeClauses) where T : class, IContentRowLevelSecured
        {

            var queryProvider = this.GetIQueryableContentModelOperator<IQueryableContentModelOperator<T>>();
            var result = await queryProvider.ReadAsEnumerable(query, includeClauses);
            return result;
        }

        protected async Task<T> Delete<T>(string entityId) where T : class, IContentRowLevelSecured
        {
            var queryProvider = this.GetIQueryableContentModelOperator<IQueryableContentModelOperator<T>>();
            var result = await queryProvider.Delete(entityId);
            return result;
        }

        protected async Task<IEnumerable<T>> Delete<T>(Expression<Func<T, bool>> query, bool softDelete = true, bool whatIf = true) where T : class, IContentRowLevelSecured
        {

            var queryProvider = this.GetIQueryableContentModelOperator<IQueryableContentModelOperator<T>>();

            // sideband test of database creation logic
            await queryProvider.EnsureDbExists();
            var result = await queryProvider.Delete(query, false, false); ;
            return result;
        }

        protected ContentModel.ContentCollection GetNewContentCollection()
        {
            return new ContentModel.ContentCollection()
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTime.UtcNow,
                DisplayName = $"test created",
                IsSoftDeleted = false,
                IsPublished = false,
                ObjectId = Guid.NewGuid().ToString(),
                AccessControlEntries = new List<ContentModel.AccessControlEntry>()
                {
                    new ContentModel.AccessControlEntry()
                    {
                        Id = Guid.NewGuid(),
                        CreatedAt = DateTime.UtcNow,
                        DisplayName = $"test created",
                        IsSoftDeleted = false,
                        ObjectId = Guid.NewGuid().ToString(),
                        Scope = ContentModel.ACEPermissionScope.EVERYONE,
                        Permission = ContentModel.ACEPermission.READ,
                        PermissionType = ContentModel.ACEPermissionType.DENY
                        
                    }
                }
            };
        }

        protected async Task TestPassessObjectIdConstraint()
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

        protected async Task TestPassWithNullObjectId()
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