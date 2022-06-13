using HorselessNewspaper.Web.Core.Services.Persistence.LocalFilesystem;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.Extensions.DependencyInjection;
using System.Threading.Tasks;
using Xunit;

namespace HorselessNewspaper.Core.Web.SmokeTests.Filesystem
{
    [Collection("FilesystemProviderCollection")]
    public class FilesystemProviderSmokeTests :  IClassFixture<BaseWebIntegrationTest>
    {
        BaseWebIntegrationTest _baseTest;
        public WebApplicationFactory<Program> application = null;

        public FilesystemProviderSmokeTests(BaseWebIntegrationTest baseTest)
        {
            _baseTest = baseTest;
            application = _baseTest.application;

        }

        [Fact]
        public async Task CanEnumerateAssetRoot()
        {
            using (var scope = application.Services.CreateScope())
            {
                ITenantInfo tenant = scope.ServiceProvider.GetRequiredService<ITenantInfo>();
                IPosixFilesystemService fileSystemService = scope.ServiceProvider.GetRequiredService<IPosixFilesystemService>();

                // mount should fail on uninitialized filesystem
                // due to invalid path
                var mountResult = await fileSystemService.Mount(createIfNotExists: false, "");
                Assert.NotNull(mountResult);
                Assert.False(mountResult.IsMountSuccess);

                // create a folder
                var validMountResult = await fileSystemService.Mount(createIfNotExists: false, "tenants");

                var getContentsResult = await fileSystemService.GetDirectoryContents(".");
                Assert.NotNull(getContentsResult);
            }
        }
    }
}
