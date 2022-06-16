using HorselessNewspaper.Core.Interfaces.Knuth.TreeNodes;
using HorselessNewspaper.Web.Core.Services.Persistence.LocalFilesystem;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.Extensions.DependencyInjection;
using System.Collections.Generic;
using System.Threading.Tasks;
using Xunit;
using HorselessNewspaper.Core.Repositories.TenantFilesystem;
using Microsoft.Extensions.FileProviders;
using HorselessNewspaper.Core.Interfaces.Model.Knuth.TreeNodes;
using System.IO;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace HorselessNewspaper.Core.Web.SmokeTests.Filesystem
{
    [Collection("FilesystemProviderCollection")]
    public class FilesystemProviderSmokeTests : IClassFixture<BaseWebIntegrationTest>
    {
        private const string testFileName = "testjson.json";
        string testJson = @"{""property"": ""value""}";

        BaseWebIntegrationTest _baseTest;
        public WebApplicationFactory<Program> application = null;
        List<IEnumerable<HorselessTreeNode<string>>> testFilesystem = new List<IEnumerable<HorselessTreeNode<string>>>();

        // the fact is this list is populated with a descendant of IHorselessTreeNode<T>

        List<IEnumerable<HorselessFilesystemTreeNode<string>>> treeNodeFilesystem = new List<IEnumerable<HorselessFilesystemTreeNode<string>>>();

        public FilesystemProviderSmokeTests(BaseWebIntegrationTest baseTest)
        {
            _baseTest = baseTest;
            application = _baseTest.application;

            #region of polymorphic magical reality
            // prepare a tenant filesystem tree
            var testNode = new HorselessTreeNode<string>("assetroot");
            // prepare a tenant filesystem tree that inherits from HorselessTreeNode
            var testTreeNode = new HorselessFilesystemTreeNode<string>("assetroot");

            // prepare child nodes
            IEnumerable<HorselessTreeNode<string>> testChildren = new List<HorselessTreeNode<string>>()
            {
                        new HorselessTreeNode<string>("images")
                        {
                            Children = new List<HorselessTreeNode<string>>
                            {
                                new HorselessTreeNode<string>("tenants")
                                {
                                    Children = new List<HorselessTreeNode<string>>
                                    {
                                        new HorselessTreeNode<string>("default")
                                        {
                                            Children = new List<HorselessTreeNode<string>>
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
                            Children = new List<HorselessTreeNode<string>>
                            {
                                new HorselessTreeNode<string>("tenants")
                                {
                                    Children = new List<HorselessTreeNode<string>>
                                    {
                                        new HorselessTreeNode<string>("default")
                                        {
                                            Children = new List<HorselessTreeNode<string>>
                                            {
                                                new HorselessTreeNode<string>("users")
                                            }
                                        }
                                    }
                                }
                            }
                        }
            };
            // prepare derived child nodes
            IEnumerable<HorselessFilesystemTreeNode<string>> testTreeNodeChildren = new List<HorselessFilesystemTreeNode<string>>()
            {
                        new HorselessFilesystemTreeNode<string>("tenants")
                        {
                            WellKnownNode = HorselessFilesystemNodeIdentifier.TenantsRoot,
                            Children = new List<IHorselessFilesystemTreeNode<string>>
                            {
                                new HorselessFilesystemTreeNode<string>("default")
                                {
                                    WellKnownNode = HorselessFilesystemNodeIdentifier.DefaultTenantRoot,
                                    Children = new List<IHorselessFilesystemTreeNode<string>>
                                    {
                                        new HorselessFilesystemTreeNode<string>("media")
                                        {
                                            WellKnownNode = HorselessFilesystemNodeIdentifier.DefaultTenantMediaRoot,
                                            Children = new List<IHorselessFilesystemTreeNode<string>>
                                            {
                                                new HorselessFilesystemTreeNode<string>("images"){WellKnownNode = HorselessFilesystemNodeIdentifier.DefaultTenantAudioRoot},
                                                new HorselessFilesystemTreeNode<string>("video"){WellKnownNode = HorselessFilesystemNodeIdentifier.DefaultTenantVideoRoot},
                                                new HorselessFilesystemTreeNode<string>("audio"){WellKnownNode = HorselessFilesystemNodeIdentifier.DefaultTenantAudioRoot},
                                                new HorselessFilesystemTreeNode<string>("blobs"){WellKnownNode = HorselessFilesystemNodeIdentifier.DefaultTenantBlobRoot},
                                                new HorselessFilesystemTreeNode<string>("nugets"){WellKnownNode = HorselessFilesystemNodeIdentifier.DefaultTenantNugetRoot}
                                            },

                                        },
                                        new HorselessFilesystemTreeNode<string>("users")
                                        {
                                            WellKnownNode = HorselessFilesystemNodeIdentifier.DefaultTenantUsersRoot,
                                            Children = new List<IHorselessFilesystemTreeNode<string>>()
                                            {
                                               new HorselessFilesystemTreeNode<string>("anonymous")
                                                {
                                                    WellKnownNode = HorselessFilesystemNodeIdentifier.DefaultTenantAnonymousUser,
                                                    Children = new List<IHorselessFilesystemTreeNode<string>>
                                                    {
                                                        new HorselessFilesystemTreeNode<string>("media")
                                                        {
                                                            WellKnownNode = HorselessFilesystemNodeIdentifier.MediaUsersRoot,
                                                            Children = new List<IHorselessFilesystemTreeNode<string>>
                                                            {
                                                                new HorselessFilesystemTreeNode<string>("images"){WellKnownNode = HorselessFilesystemNodeIdentifier.ImagesUsersRoot},
                                                                new HorselessFilesystemTreeNode<string>("video"){WellKnownNode = HorselessFilesystemNodeIdentifier.VideoUsersRoot},
                                                                new HorselessFilesystemTreeNode<string>("audio"){WellKnownNode = HorselessFilesystemNodeIdentifier.AudioUsersRoot},
                                                                new HorselessFilesystemTreeNode<string>("blobs"){WellKnownNode = HorselessFilesystemNodeIdentifier.BlobUsersRoot},
                                                                new HorselessFilesystemTreeNode<string>("nugets"){WellKnownNode = HorselessFilesystemNodeIdentifier.NugetUsersRoot}
                                                            }

                                                        }
                                                    }
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        }
            };

            // attach children to a tree an a derived type tree
            testFilesystem.Add(testChildren);
            treeNodeFilesystem.Add(testTreeNodeChildren);

            #endregion of polymorphic magical reality
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

                foreach (var subTree in this.testFilesystem)
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

                // validate the ability to save json strings


                var persistResult = await fileSystemService.Persist(testFileName, testJson, true, "images", "tenants");
                Assert.NotNull(persistResult);

                // validate the ability to locate a fileinfo directly
                var fileInfo = await fileSystemService.GetFileInfo(testFileName, "images", "tenants");
                Assert.True(fileInfo.Exists);

                // validate the ability to enumerate folder contents
                var dirContents = await fileSystemService.GetDirectoryContents("images", "tenants");
                Assert.NotNull(dirContents);
                Assert.True(dirContents.Exists);

                // validate the ability to load a saved string
                var loadResult = await fileSystemService.LoadAsString(testFileName, "images", "tenants");
                Assert.NotNull(loadResult);
                Assert.True(loadResult.Equals(testJson));

                var contentsResult = await fileSystemService.FindFiles(f => f.Name.Contains("json"), true, "images");
                Assert.NotNull(contentsResult);
                List<IFileInfo> resultList = new List<IFileInfo>(contentsResult);
                Assert.True(resultList.Count == 1);
                var payload = resultList.Find(f => f.Exists);
                Assert.True(payload != null);
                Assert.True(payload.Name.Equals(testFileName));
            }
        }

        [Fact]
        public async Task CanMaterializeJsonFilemTreeModel()
        {
            using (var scope = application.Services.CreateScope())
            {
                ITenantInfo tenant = scope.ServiceProvider.GetRequiredService<ITenantInfo>();
                IPosixFilesystemService fileSystemService = scope.ServiceProvider.GetRequiredService<IPosixFilesystemService>();

                // render the test filesystem
                foreach (var subTree in this.treeNodeFilesystem)
                {
                    var createResult = await fileSystemService.RenderFilesystemTree(subTree);
                    Assert.NotNull(createResult);
                }

                var options = new JsonSerializerOptions
                {
                    IgnoreReadOnlyProperties = true,
                    ReferenceHandler = ReferenceHandler.Preserve,
                    WriteIndented = true,
                    Converters ={
                        new JsonStringEnumConverter()
                    }

                };


                var resultList = new List<IEnumerable<HorselessFilesystemTreeNode<string>>>(treeNodeFilesystem);
                var ms = new MemoryStream();
                JsonSerializer.Serialize<List<IEnumerable<HorselessFilesystemTreeNode<string>>>>(ms, treeNodeFilesystem, options);
                ms.Position = 0;

                StreamReader sr = new StreamReader(ms);
                string jsonString = sr.ReadToEnd();

                var mountResult = await fileSystemService.Mount(createIfNotExists: false, "images");

                // validate the ability to save json strings


                var persistResult = await fileSystemService.Persist("treenodefilesystem.json", jsonString, true, "images", "tenants");
                var loadResult = await fileSystemService.LoadAsString("treenodefilesystem.json", "images", "tenants");

                Assert.True(loadResult == jsonString);
            }
        }
    }
}
