using Microsoft.AspNetCore.Mvc.Testing;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using HorselessNewspaper.Web.Core.Services.Query.Controller.Content;
using TheHorselessNewspaper.HostingModel.Context;


using Xunit;
using Microsoft.Extensions.DependencyInjection;
using TheHorselessNewspaper.HostingModel.MultiTenant;
using TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
using Finbuckle.MultiTenant;

namespace HorselessNewspaper.Core.Web.SmokeTests
{
    public class BaseWebIntegrationTest : IDisposable
    {
        public WebApplicationFactory<Program> application = null;
        public HttpClient client = null;

        public void Dispose()
        {

        }

        public BaseWebIntegrationTest()
        {
            TestSetup();
        }

        private void TestSetup()
        {
            application = new WebApplicationFactory<Program>()
            .WithWebHostBuilder(builder =>
            {
                // ... Configure test services
                builder.ConfigureServices(async builder =>
                {
                    builder.AddTransient<ITenantInfo, HorselessTenantInfo>(f =>
                    {
                    return new HorselessTenantInfo(
                    new TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.TenantInfo()
                    {
                        // ConnectionString = configuration.GetConnectionString("ContentModelConnection"),
                        Id = Guid.Parse("6da806b8-f7ab-4e3a-8833-7e834a40e9d0"),
                        Identifier = "6da806b8-f7ab-4e3a-8833-7e834a40e9d0",
                        Name = "the Management",
                        ObjectId = "236324b8-278e-4372-9d06-13c40aabd8b2",
                        CreatedAt = DateTime.UtcNow,
                        DisplayName = "the management tenant"
                    }
                    );
                });
                        


                });
            });

            client = application.CreateClient();

        }

        public T GetIQueryableContentModelOperator<T>(IServiceScope scope) where T : notnull
        {

            var queryProvider = scope.ServiceProvider.GetRequiredService<T>();
            return queryProvider;
        }

        public T GetIQueryableHostingModelOperator<T>(IServiceScope scope) where T : notnull
        {
            var queryProvider = scope.ServiceProvider.GetRequiredService<T>();
            return queryProvider;
        }



        protected async Task<T> CreateEntity<T>(T entity, IServiceScope scope) where T : class, IContentRowLevelSecured
        {
            var queryProvider = this.GetIQueryableContentModelOperator<IQueryableContentModelOperator<T>>(scope);
            var result = await queryProvider.Create(entity);
            return result;
        }

        protected async Task<T> CreateHostingEntity<T>(T entity, IServiceScope scope) where T : class, IHostingRowLevelSecured
        {
            var queryProvider = this.GetIQueryableHostingModelOperator<IQueryableHostingModelOperator<T>>(scope);
            var result = await queryProvider.Create(entity);
            return result;
        }

        protected async Task<T> Update<T>(T entity, IServiceScope scope) where T : class, IContentRowLevelSecured
        {
            var queryProvider = this.GetIQueryableContentModelOperator<IQueryableContentModelOperator<T>>(scope);
            var result = await queryProvider.Update(entity);
            return result;
        }

        protected async Task<T> UpdateHostingEntity<T>(T entity, IServiceScope scope) where T : class, IHostingRowLevelSecured
        {
            var queryProvider = this.GetIQueryableHostingModelOperator<IQueryableHostingModelOperator<T>>(scope);
            var result = await queryProvider.Update(entity);
            return result;
        }

        protected async Task<IQueryable<T>> Read<T>(IServiceScope scope) where T : class, IContentRowLevelSecured
        {
            var queryProvider = this.GetIQueryableContentModelOperator<IQueryableContentModelOperator<T>>(scope);
            var result = await queryProvider.Read();
            return result;
        }

        protected async Task<IQueryable<T>> ReadHostingEntity<T>(IServiceScope scope) where T : class, IHostingRowLevelSecured
        {
            var queryProvider = this.GetIQueryableHostingModelOperator<IQueryableHostingModelOperator<T>>(scope);
            var result = await queryProvider.Read();
            return result;
        }


        protected async Task<T> Delete<T>(string entityId, IServiceScope scope) where T : class, IContentRowLevelSecured
        {
            var queryProvider = this.GetIQueryableContentModelOperator<IQueryableContentModelOperator<T>>(scope);
            var result = await queryProvider.DeleteByObjectId(entityId);
            return result;
        }

        protected async Task<IEnumerable<T>> Delete<T>(Expression<Func<T, bool>> query, IServiceScope scope, bool softDelete = true, bool whatIf = true) where T : class, IContentRowLevelSecured
        {
            var queryProvider = this.GetIQueryableContentModelOperator<IQueryableContentModelOperator<T>>(scope);
            var result = await queryProvider.Delete(query, false, false); ;
            return result;
        }

    }
}