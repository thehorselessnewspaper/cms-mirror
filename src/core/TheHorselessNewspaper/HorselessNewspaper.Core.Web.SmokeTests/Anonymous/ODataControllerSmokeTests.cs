using Microsoft.AspNetCore.Mvc.Testing;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using ContentEntities = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using Xunit;
using TheHorselessNewspaper.HostingModel.DTO;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using Microsoft.Extensions.DependencyInjection;

namespace HorselessNewspaper.Core.Web.SmokeTests.Anonymous
{
    [Collection("DatabaseMutatingCollection")]
    public class ODataControllerSmokeTests : IClassFixture<BaseWebIntegrationTest>
    {
        private const string oDataResponseHeader = "application/json;odata.metadata=minimal;odata.streaming=true";
        BaseWebIntegrationTest _baseTest;
        public WebApplicationFactory<Program> application = null;
        public HttpClient client = null;

        public ODataControllerSmokeTests(BaseWebIntegrationTest data)
        {
            _baseTest = data;
            application = _baseTest.application;
            client = _baseTest.client;
        }

        [Fact]
        public async Task CanGetDefaultHtmlPage()
        {

            var response = await client.GetAsync("/");
            Assert.NotNull(response);

            response.EnsureSuccessStatusCode(); // Status Code 200-299
            Assert.Equal("text/html; charset=utf-8",
                response.Content.Headers.ContentType.ToString());
        }

        [Fact]
        public async Task CanQueryContentCollection()
        {
            HttpResponseMessage response = null;
            Exception ex = null;
            string responseContent = String.Empty;

            // arrange
            // insert a content collection

            try
            {
                using (var scope = application.Services.CreateScope())
                {
                    var insertQueryOperator = _baseTest.GetIQueryableContentModelOperator<IQueryableContentModelOperator<ContentEntities.ContentCollection>>(scope);
                    var insertResult = await insertQueryOperator.Create(
                        new ContentEntities.ContentCollection()
                        {
                            Id = Guid.NewGuid(),
                            CreatedAt = DateTime.UtcNow,
                            DisplayName = "Test Content Collection",
                            IsPublished = true,
                            IsSoftDeleted = false,
                            ObjectId = Guid.NewGuid().ToString(),
                            PublishedURL = "news"
                        }
                        );
                }

            }
            catch (Exception e)
            {

                ex = e;
            }

            Assert.Null(ex);

            try
            {
                client.DefaultRequestHeaders.Add("Accept", "application/json;odata.metadata=none");
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

                var contentCollection = JsonConvert.DeserializeObject<OData<List<ContentEntities.ContentCollection>>>(responseContent);
                Assert.NotNull(contentCollection);
                Assert.True(contentCollection.value.Count > 0);
            }
            catch (Exception e)
            {

                ex = e;
            }

            Assert.Null(ex);
        }
    }
}
