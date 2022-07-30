using HorselessNewspaper.Core.Interfaces.Constants.ControllerRouteStrings;
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
using HorselessNewspaper.Web.Core.Services.Query.Controller.Content;

using Microsoft.Extensions.DependencyInjection;
using System.Linq;
using HorselessNewspaper.Web.Core.Model.Security;
using HorselessNewspaper.Core.Interfaces.Security.Resolver;
using HorselessNewspaper.Web.Core.Services.Model.REST.Security;
using Microsoft.Extensions.Hosting;

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
        public async Task CanGetClientConfigurationForDefaultTenant()
        {
            // arrange
            HttpResponseMessage response = null;
            Exception ex = null;
            string responseContent = String.Empty;
            var route = RESTHostingModelControllerStrings.API_HORSELESSHOSTINGMODEL_TENANT + "/HostingEntitiesTenantCreate";

            // use generated rest client
            // var restClient = serviceProvider.GetRequiredService<IHorselessRESTAPIClient>();
            // post bad request to a valid route 
            // without sending client config endpoint
            // control channel commands
            // expect no client configuration returned
            var postRequest = new HttpRequestMessage(HttpMethod.Post, route)
            {
                Content = GetJsonContent(testHostingModelTenant)
            };


            // act
            var postResponse = await client.SendAsync(postRequest);

            // validate

            Assert.NotNull(postResponse);
            Exception serializationException = null;

            try
            {
                RestClientConfiguration clientConfig = JsonConvert.DeserializeObject<RestClientConfiguration>(await postResponse.Content.ReadAsStringAsync());
                Assert.True(clientConfig == null, "client config overrode a route and was invoked without endpoint command");

                Assert.True(clientConfig.AccessToken == null || clientConfig.AccessToken == String.Empty, "client config endpoint issued access token to unauthenticated user");
            }
            catch(Exception e)
            {
                serializationException = e;
            }

            Assert.True(serializationException != null, $"client configuration endpoint command channel failure: endpoint returned response in absence of control channel commands: {serializationException.Message}");



            try
            {
                postRequest = new HttpRequestMessage(HttpMethod.Post, route)
                {
                    Content = GetJsonContent(testHostingModelTenant)
                };

                // get an auth token
                var principalResolver = this.serviceProvider.GetRequiredService<ISecurityPrincipalResolver>();
                string token = await principalResolver.GetClientCredentialsGrantToken();
                Assert.True(token != null && token != String.Empty);

                client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);

                // amend arrangement
                // add control channel messages
                // for clientconfiguration endpoint
                postRequest.Headers.Add("RestClientConfigurationEndpoint", "get");

                // act
                postResponse = await client.SendAsync(postRequest);

                // validate

                Assert.NotNull(postResponse);
                serializationException = null;

                RestClientConfiguration clientConfig = JsonConvert.DeserializeObject<RestClientConfiguration>(await postResponse.Content.ReadAsStringAsync());
                Assert.True(clientConfig != null, "client config endpoint did not respond");

                Assert.True(clientConfig.AccessToken != null && clientConfig.AccessToken != String.Empty, "client config endpoint did not trust the bearer token");

                Assert.True(clientConfig.TenantIdentifier != null && clientConfig.TenantIdentifier != String.Empty, "client config failed tenant resolution");
            }
            catch (Exception e)
            {
                serializationException = e;
            }

            int i = 0;

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

                    var route = RESTHostingModelControllerStrings.API_HORSELESSHOSTINGMODEL_TENANT + "/HostingEntitiesTenantCreate";
                    //testHostingModelTenantInfo.TenantId = testHostingModelTenant.Id;
                    // testHostingModelTenant.Accounts.Add();
                    var testAccount = new Principal()
                    {
                        //Id= Guid.NewGuid(),
                        ObjectId = Guid.NewGuid().ToString(),
                        DisplayName = "principal@tenant.com",
                        CreatedAt = DateTime.UtcNow,
                        Iss = "https://isuer.tenant.com",
                        Aud = "client-application",
                        Sub = "oauth-sub"
                    };

                    //testHostingModelTenantInfo.WebAPITenantInfos.Add(new WebAPITenantInfo()
                    //{
                    //    //Id = Guid.NewGuid(),
                    //    CreatedAt = DateTime.UtcNow,
                    //    DisplayName = testHostingModelTenant.DisplayName,
                    //    ConnectionString = testHostingModelTenantInfo.ConnectionString,
                    //    Identifier = testHostingModelTenantInfo.Identifier,
                    //    Name = testHostingModelTenantInfo.Name,
                    //    IsSoftDeleted = false,
                    //    ObjectId = Guid.NewGuid().ToString(),
                    //    //TenantInfoId = testHostingModelTenantInfo.Id,
                    //    WebAPIBaseUrl = "/webapi/url"
                    //});

                    //testHostingModelTenant.TenantInfos.Add(testHostingModelTenantInfo);

                    var tenantJson = GetJsonContent(testHostingModelTenant);

                    //var postRequest = new HttpRequestMessage(HttpMethod.Post, route)
                    //{
                    //    Content = tenantJson
                    //};

                    // act
                    var postResponse = await client.PostAsJsonAsync(route, tenantJson.Value.ToString()); // await client.SendAsync(postRequest);

                    Assert.NotNull(postResponse);

                    var hostingTenantsReadResult = await theHostingOperator.ReadAsEnumerable(w => w.IsSoftDeleted != true && w.TenantIdentifier.Equals(testHostingModelTenant.TenantIdentifier),
                        new List<string>() { nameof(HostingModel.Tenant.Owners), nameof(HostingModel.Tenant.Accounts), nameof(HostingModel.Tenant.TenantInfos) },
                        pageCount: 2, pageNumber: 1, pageSize: 5);

                    Assert.NotNull(hostingTenantsReadResult);

                    var readResultAslist = hostingTenantsReadResult.ToList();
                    var tenantCount = readResultAslist.Count();
                    Assert.True(tenantCount == 1);

                    Assert.True(readResultAslist.First().TenantIdentifier == testHostingModelTenant.TenantIdentifier);

                    var insertResult = readResultAslist.First();
                    Assert.True(insertResult.TenantInfos.Count > 0);


                    // var relatedItemInsertResult = await theHostingOperator.InsertRelatedEntity(post)

                    // here because we can post a tenant to the hosting model tenant endpoint
                    // add a tenantinfo 

                    // arrange
                    // add the existing tenant to the new tenantinfo

                    Assert.Null(ex);


                }
                catch (Exception e)
                {
                    ex = e;
                    Assert.Null(ex);
                }


                // TODO
                // pause test
                // wait for tenant approval
                // to propragate 

                //for (int i = 0; i < 50; i++)
                //{
                //    await Task.Delay(1200);
                //}

                Assert.Null(ex);

            }
        }

        private JsonContent GetJsonContent<T>(T content)
        {
            return JsonContent.Create<T>(content, options: new System.Text.Json.JsonSerializerOptions()
            {
                MaxDepth = 1,
                ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.Preserve
            });
        }

        private HostingModel.Tenant GetNewHostingModelTenant()
        {
            return new HostingModel.Tenant()
            {
                //Id = Guid.NewGuid(),
                CreatedAt = DateTime.UtcNow,
                DisplayName = "Test Tenant - Can Create Hosting Tenant",
                IsSoftDeleted = false,
                IsPublished = false,
                TenantIdentifier = "TestTenantIdentifier",
                DeploymentState = TenantDeploymentWorkflowState.PendingApproval,
                ObjectId = Guid.NewGuid().ToString(),
                Timestamp = BitConverter.GetBytes(DateTime.UtcNow.Ticks)
            };
        }

        private HostingModel.TenantInfo GetNewHostingModelTenantInfo()
        {
            return new HostingModel.TenantInfo()
            {
                //Id = Guid.NewGuid(),
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
