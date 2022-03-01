using Microsoft.AspNetCore.Mvc.Testing;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.HostingModel.Context;
using TheHorselessNewspaper.HostingModel.Entities.Query;
using TheHorselessNewspaper.Schemas.HostingModel.Context;
using Xunit;
using Microsoft.Extensions.DependencyInjection;

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
            var result = await queryProvider.Delete(entityId);
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