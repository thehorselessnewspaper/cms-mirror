﻿using HorselessNewspaper.Core.Interfaces.Constants.ControllerRouteStrings;
using Microsoft.AspNetCore.Mvc.Testing;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Json;
using System.Security.Policy;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.DTO;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using HostingModel = TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
using Xunit;
using TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.HostingModel.Entities.Query;
using Microsoft.Extensions.DependencyInjection;
using System.Linq;

namespace HorselessNewspaper.Core.Web.SmokeTests.Anonymous
{
    [Collection("DatabaseMutatingCollection")]
    public class RESTControllerSmokeTests : IClassFixture<BaseWebIntegrationTest>
    {
        private const string oDataResponseHeader = "application/json;odata.metadata=minimal;odata.streaming=true";
        BaseWebIntegrationTest _baseTest;
        public WebApplicationFactory<Program> application = null;
        public HttpClient client = null;
        HostingModel.Tenant testHostingModelTenant = new HostingModel.Tenant();
        private HostingModel.TenantInfo testHostingModelTenantInfo;
        IServiceProvider serviceProvider = null;

        public RESTControllerSmokeTests(BaseWebIntegrationTest data)
        {
            _baseTest = data;
            application = _baseTest.application;
            client = _baseTest.client;

            testHostingModelTenant = GetNewHostingModelTenant();
            testHostingModelTenantInfo = GetNewHostingModelTenantInfo();

            serviceProvider = application.Services;

        }

        [Fact]
        public async Task CanCreateHostingTenant()
        {
            HttpResponseMessage response = null;
            Exception ex = null;
            string responseContent = String.Empty;

            using (IServiceScope scope = serviceProvider.CreateScope())
            {
                var theContentOperator = _baseTest.GetIQueryableContentModelOperator<IQueryableContentModelOperator<ContentModel.Tenant>>(scope);
                await theContentOperator.ResetDb();

                var theHostingOperator = _baseTest.GetIQueryableHostingModelOperator<IQueryableHostingModelOperator<HostingModel.Tenant>>(scope);
                await theHostingOperator.ResetDb();

                try
                {
                    // arrange
                    client.DefaultRequestHeaders.Add("Accept", "application/json;odata.metadata=none");
                    testHostingModelTenant.TenantInfos.Add(testHostingModelTenantInfo);

                    var route = RESTHostingModelControllerStrings.API_HORSELESSHOSTINGMODEL_TENANT + "/CREATE";
                    
                    var postRequest = new HttpRequestMessage(HttpMethod.Post, route)
                    {
                        Content = GetJsonContent(testHostingModelTenant)
                    };

                    // act
                    var postResponse = await client.SendAsync(postRequest);

                    Assert.NotNull(postResponse);

                    IQueryable<HostingModel.Tenant> hostingTenantsReadResult = await theHostingOperator.Read();
                    Assert.NotNull(hostingTenantsReadResult);

                    var tenantCount = hostingTenantsReadResult.ToList().Count();
                    Assert.True(tenantCount == 1);

                    Assert.True(hostingTenantsReadResult.First().Id == testHostingModelTenant.Id);

                    // here because we can post a tenant to the hosting model tenant endpoint
                    // add a tenantinfo 

 

                    Assert.Null(ex);


                }
                catch (Exception e)
                {
                    ex = e;
                }


                // TODO
                // pause test
                // wait for tenant approval
                // to propragate 

                for (int i = 0; i < 50; i++)
                {
                    await Task.Delay(1200);
                }

                Assert.Null(ex);

            }
        }

        private JsonContent GetJsonContent<T>(T content)
        {
            return JsonContent.Create(content);
        }

        private HostingModel.Tenant GetNewHostingModelTenant()
        {
            return new HostingModel.Tenant()
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTime.UtcNow,
                DisplayName = "Test Tenant - Can Create Hosting Tenant",
                IsSoftDeleted = false,
                ObjectId = Guid.NewGuid().ToString(),
                Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks)
            };
        }

        private HostingModel.TenantInfo GetNewHostingModelTenantInfo()
        {
            return new HostingModel.TenantInfo()
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTime.UtcNow,
                DisplayName = "Test Tenant - Can Create Hosting Tenant",
                IsSoftDeleted = false,
                ObjectId = Guid.NewGuid().ToString(),
                ConnectionString = "server=test.server.com;security=none;",
                Identifier = "TestTenant",
                Name = "Test Tenant Name",
                TenantBaseUrl = "http://localhost/TestTenant"
            };
        }
    }
}
