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

namespace HorselessNewspaper.Core.Web.SmokeTests.Anonymous
{
    public class RESTControllerSmokeTests : IClassFixture<BaseWebIntegrationTest>
    {
        private const string oDataResponseHeader = "application/json;odata.metadata=minimal;odata.streaming=true";
        BaseWebIntegrationTest _baseTest;
        public WebApplicationFactory<Program> application = null;
        public HttpClient client = null;
        HostingModel.Tenant testHostingModelTenant = new HostingModel.Tenant();

        public RESTControllerSmokeTests(BaseWebIntegrationTest data)
        {
            _baseTest = data;
            application = _baseTest.application;
            client = _baseTest.client;


            testHostingModelTenant = GetNewHostingModelTenant();
        }

        [Fact]
        public async Task CanCreateHostingTenant()
        {
            HttpResponseMessage response = null;
            Exception ex = null;
            string responseContent = String.Empty;


            try
            {
                client.DefaultRequestHeaders.Add("Accept", "application/json;odata.metadata=none");

                var route = RESTHostingModelControllerStrings.API_HORSELESSHOSTINGMODEL_TENANT + "/CREATE";
                var postRequest = new HttpRequestMessage(HttpMethod.Post, route)
                {
                    Content = GetNewHostingModelTenantAsJsonContent(testHostingModelTenant)
                };

                var postResponse = await client.SendAsync(postRequest);

                Assert.NotNull(postResponse);


                response = await client.GetAsync("/HorselessContent/ContentCollection/?$top=10&");
                Assert.NotNull(response);

                response.EnsureSuccessStatusCode(); // Status Code 200-299
                //Assert.Equal(oDataResponseHeader,
                //    response.Content.Headers.ContentType.ToString());

                responseContent = await response.Content.ReadAsStringAsync();

            }
            catch (Exception e)
            {
                ex = e;
            }

            Assert.Null(ex);


            Assert.NotNull(responseContent);
            try
            {

                var contentCollection = JsonConvert.DeserializeObject<OData<List<HostingModel.Tenant>>>(responseContent);
                Assert.NotNull(contentCollection);
                Assert.True(contentCollection.value.Count > 0);
            }
            catch (Exception e)
            {

                ex = e;
            }

            Assert.Null(ex);
        }

        private JsonContent GetNewHostingModelTenantAsJsonContent(HostingModel.Tenant tenant)
        {
            return JsonContent.Create( tenant);
        }

        private HostingModel.Tenant GetNewHostingModelTenant()
        {
            return new HostingModel.Tenant()
            {
                Id = Guid.NewGuid(),
                CreatedAt = DateTime.UtcNow,
                DisplayName = "Test Tenant - Can Create Hosting Tenant",
                IsSoftDeleted = false,
                ObjectId = Guid.NewGuid().ToString()
            };
        }
    }
}
