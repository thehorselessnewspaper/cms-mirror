using HorselessNewspaper.Core.Interfaces.Knuth.TreeNodes;
using HorselessNewspaper.Web.Core.Services.Persistence.LocalFilesystem;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.Extensions.DependencyInjection;
using System.Collections.Generic;
using System.Threading.Tasks;
using Xunit;
using HorselessNewspaper.Core.Repositories.TenantFilesystem;

namespace HorselessNewspaper.Core.Web.SmokeTests.Filesystem
{
    [Collection("FilesystemProviderCollection")]
    public class FilesystemProviderSmokeTests :  IClassFixture<BaseWebIntegrationTest>
    {
        BaseWebIntegrationTest _baseTest;
        public WebApplicationFactory<Program> application = null;
        List<IEnumerable<IHorselessTreeNode<string>>> testFilesystem = new List<IEnumerable<IHorselessTreeNode<string>>>();

         public FilesystemProviderSmokeTests(BaseWebIntegrationTest baseTest)
        {
            _baseTest = baseTest;
            application = _baseTest.application;

            // prepare a tenant filesystem tree
            IHorselessTreeNode<string> testNode = new HorselessTreeNode<string>("assetroot");
            IEnumerable<IHorselessTreeNode<string>> testChildren = new List<IHorselessTreeNode<string>>()
            {
                        new HorselessTreeNode<string>("images")
                        {
                            Children = new List<IHorselessTreeNode<string>>
                            {
                                new HorselessTreeNode<string>("tenants")
                                {
                                    Children = new List<IHorselessTreeNode<string>>
                                    {
                                        new HorselessTreeNode<string>("default")
                                        {
                                            Children = new List<IHorselessTreeNode<string>>
                                            {
                                                new HorselessTreeNode<string>("users")
                                            }
                                        }
                                    }
                                }
                            }
                        },

                        new HorselessTreeNode<string>("nugets")
                        {
                            Children = new List<IHorselessTreeNode<string>>
                            {
                                new HorselessTreeNode<string>("tenants")
                                {
                                    Children = new List<IHorselessTreeNode<string>>
                                    {
                                        new HorselessTreeNode<string>("default")
                                        {
                                            Children = new List<IHorselessTreeNode<string>>
                                            {
                                                new HorselessTreeNode<string>("users")
                                            }
                                        }
                                    }
                                }
                            }
                        }
            };
            testFilesystem.Add(testChildren);

        }

        /// <summary>
        /// exercise integration of tree collections
        /// in fileystem operations
        /// </summary>
        /// <returns></returns>
        [Fact]
        
        public async Task CanEnumerateAssetRoot()
        {
            using (var scope = application.Services.CreateScope())
            {
                ITenantInfo tenant = scope.ServiceProvider.GetRequiredService<ITenantInfo>();
                IPosixFilesystemService fileSystemService = scope.ServiceProvider.GetRequiredService<IPosixFilesystemService>();

                // mount will fail on uninitialized filesystem config path
                // due to invalid path
                var mountResult = await fileSystemService.Mount(createIfNotExists: false, "");
                Assert.NotNull(mountResult);
                Assert.True(mountResult.IsMountSuccess);

                // create a folder
                var validMountResult = await fileSystemService.Mount(createIfNotExists: true, "images", "tenants");

                Assert.NotNull(validMountResult);
                Assert.True(validMountResult.IsMountSuccess);
                Assert.True(validMountResult.CreatedDirectory.Exists);
                var getContentsResult = await fileSystemService.GetDirectoryContents(".");
                Assert.NotNull(getContentsResult);
            }
        }

        [Fact]
        public async Task CanRenderTenantFilesystem()
        {
            using (var scope = application.Services.CreateScope())
            {
                ITenantInfo tenant = scope.ServiceProvider.GetRequiredService<ITenantInfo>();
                IPosixFilesystemService fileSystemService = scope.ServiceProvider.GetRequiredService<IPosixFilesystemService>();

                // mount will fail on uninitialized filesystem config path
                // due to invalid path

                foreach(var subTree in this.testFilesystem)
                {
                    var createResult = await fileSystemService.RenderFilesystemTree(subTree);
                    Assert.NotNull(createResult);
                }


                // test a folder exists
                var validMountResult = await fileSystemService.Mount(createIfNotExists: false, "images", "tenants");

                Assert.NotNull(validMountResult);
                Assert.True(validMountResult.IsMountSuccess);
                Assert.True(validMountResult.CreatedDirectory == null, "failed to mount existing folder");

                var mountResult = await fileSystemService.Mount(createIfNotExists: false, "images");
                Assert.NotNull(mountResult);
                Assert.True(mountResult.IsMountSuccess);


                var getContentsResult = await fileSystemService.DirectoryExists("images", "tenants");
                Assert.True(getContentsResult);


                mountResult = await fileSystemService.Mount(createIfNotExists: false, "images");
                string testJson = @"{""property"": ""value""}";

                var persistResult = await fileSystemService.Persist("testjson.json", testJson, true, "images", "tenants");
                Assert.NotNull(persistResult);

                var fileInfo = await fileSystemService.GetFileInfo("testjson.json", "images", "tenants");
                Assert.True(fileInfo.Exists);

                var dirContents = await fileSystemService.GetDirectoryContents("images", "tenants");

                var newMountResult = await fileSystemService.Mount(createIfNotExists: false, "images");

                var loadResult = await fileSystemService.LoadAsString("testjson.json", "tenants");
                Assert.NotNull(loadResult);


                var contentsResult = await fileSystemService.FindFiles(f => f.Name.Contains("json"), true, "images");
                Assert.NotNull(contentsResult);
            }
        }
    }
}
