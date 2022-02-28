using Microsoft.AspNetCore.Mvc.Testing;
using System;
using System.Net.Http;
using Xunit;

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
    }
}