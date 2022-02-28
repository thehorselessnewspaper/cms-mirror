using System;
using Xunit;

namespace HorselessNewspaper.Core.Web.SmokeTests
{
    public class BaseWebIntegrationTest : IDisposable
    {
        public void Dispose()
        {

        }

        public BaseWebIntegrationTest()
        {
            TestSetup();
        }

        private void TestSetup()
        {

        }
    }
}