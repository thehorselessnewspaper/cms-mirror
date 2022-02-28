using Microsoft.AspNetCore.Mvc.Testing;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using Xunit;

namespace HorselessNewspaper.Core.Web.SmokeTests.Anonymous
{
    public class ODataControllerSmokeTests : IClassFixture<BaseWebIntegrationTest>
    {
        BaseWebIntegrationTest _baseTest;

        public ODataControllerSmokeTests(BaseWebIntegrationTest data)
        {
            _baseTest = data;
        }

        [Fact]
        public async Task HelloWorldTest()
        {
            var application = new WebApplicationFactory<Program>()
                .WithWebHostBuilder(builder =>
                {
                    // ... Configure test services
                });

            var client = application.CreateClient();
            //...

            var response = await client.GetAsync("/");
            Assert.NotNull(response);

            response.EnsureSuccessStatusCode(); // Status Code 200-299
            Assert.Equal("text/html; charset=utf-8",
                response.Content.Headers.ContentType.ToString());
        }

        [Fact]
        public async Task CanQueryContentCollection()
        {
            var application = new WebApplicationFactory<Program>()
                .WithWebHostBuilder(builder =>
                {
                    // ... Configure test services
                });

            var client = application.CreateClient();
            //...

            HttpResponseMessage response = null;
            Exception ex = null;
            string responseContent = String.Empty;

            try
            {

                response = await client.GetAsync("/HorselessContent/ContentCollection/Query");
                Assert.NotNull(response);

                response.EnsureSuccessStatusCode(); // Status Code 200-299
                Assert.Equal("application/json; charset=utf-8",
                    response.Content.Headers.ContentType.ToString());

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

                var contentCollection = JsonConvert.DeserializeObject<List<ContentCollection>>(responseContent);
                Assert.NotNull(contentCollection);
                Assert.True(contentCollection.Count > 0);
            }
            catch (Exception e)
            {

                ex = e;
            }

            Assert.Null(ex);
        }
    }
}
