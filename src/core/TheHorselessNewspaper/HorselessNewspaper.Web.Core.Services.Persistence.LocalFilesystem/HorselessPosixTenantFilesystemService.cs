using HorselessNewspaper.Core.Interfaces.Knuth.TreeNodes;
using HorselessNewspaper.Core.Interfaces.Model.Knuth.TreeNodes;
using HorselessNewspaper.Core.Repositories.TenantFilesystem;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.Services.Persistence.LocalFilesystem
{
    /// <summary>
    /// support common posix filesystem operations
    /// and operations specific to tenant filesystem
    /// uploads and enumeratin
    /// </summary>
    public class HorselessPosixTenantFilesystemService : IPosixFilesystemService
    {
        ITenantFilesystemRepository _provider;
        ILogger<HorselessPosixTenantFilesystemService> _logger;

        public HorselessPosixTenantFilesystemService(ITenantFilesystemRepository provider, ILogger<HorselessPosixTenantFilesystemService> logger)
        {
            this._provider = provider;
            this._logger = logger;
        }

        public async Task<MountLocalTenantFilesystemResult> Mount(bool createIfNotExist = false, params string[] pathSegments)
        {
            MountLocalTenantFilesystemResult ret = new MountLocalTenantFilesystemResult();


            var mountResult = await _provider.Mount(createIfNotExist, pathSegments);
            ret = mountResult;
            return ret;
        }

        public async Task<IDirectoryContents> GetDirectoryContents(params string[] pathSegments)
        {
            return await _provider.GetDirectoryContents(pathSegments);
        }

        public async Task<IFileInfo> GetFileInfo(string fileName, params string[] pathSegments)
        {
            IFileInfo ret;

            ret = await _provider.GetFileInfo(fileName, pathSegments);

            return ret;
        }

        public async Task<bool> Persist(ICollection<IFormFile> files, bool isShouldOverwrite = false, params string[] pathSegments)
        {
            bool ret = false;

            ret = await _provider.Persist(files, isShouldOverwrite, pathSegments);

            return ret;
        }

        public async Task<string> Persist(string fileName, string data, bool isShouldOverwrite = false, params string[] pathSegments)
        {
            return await _provider.Persist(fileName, data, isShouldOverwrite, pathSegments);
        }

        public async Task<string> Persist(string fileName, byte[] data, bool isShouldOverwrite = false, params string[] pathSegments)
        {
            return await _provider.Persist(fileName, data, isShouldOverwrite, pathSegments);
        }

        public async Task<byte[]> LoadAsByteArray(string fileName, params string[] pathSegments)
        {
            return await _provider.LoadAsByteArray(fileName, pathSegments);
        }

        public async Task<string> LoadAsString(string fileName, params string[] pathSegments)
        {
            return await _provider.LoadAsString(fileName, pathSegments);
        }


        /// <summary>
        /// render the filesystem tree
        /// </summary>
        /// <param name="filesystemTree"></param>
        /// <returns></returns>
        public async Task<bool> RenderFilesystemTree(IEnumerable<HorselessTreeNode<string>> filesystemTree)
        {
            return await _provider.RenderFilesystemTree(filesystemTree);
        }

        public async Task<bool> RenderFilesystemTree(IEnumerable<HorselessFilesystemTreeNode<string>> filesystemTree)
        {
            return await _provider.RenderFilesystemTree(filesystemTree);
        }

        public async Task<bool> DirectoryExists(params string[] pathSegments)
        {
            return await _provider.DirectoryExists(pathSegments);
        }

        public async Task<IEnumerable<IFileInfo>> FindFiles(Predicate<IFileInfo> fileMatcherPredicate, bool recursive = false, params string[] pathSegments)
        {
            return await _provider.FindFiles(fileMatcherPredicate, recursive, pathSegments);
        }

        /// <summary>
        /// render the default tenant filesystem
        /// </summary>
        /// <returns></returns>
  
        public async Task<bool> RenderFilesystemTree()
        {

            bool ret  = true;
            List<IEnumerable<HorselessFilesystemTreeNode<string>>> treeNodeFilesystem = new List<IEnumerable<HorselessFilesystemTreeNode<string>>>();
            // prepare derived child nodes
            IEnumerable<HorselessFilesystemTreeNode<string>> defaultTreenodeChildren = new List<HorselessFilesystemTreeNode<string>>()
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

            treeNodeFilesystem.Add(defaultTreenodeChildren);
            foreach(var subtree in treeNodeFilesystem)
            {
                var insertResult = await this.RenderFilesystemTree(subtree);
                if(insertResult == false)
                {
                    ret = false;
                };
            }


            return ret;
        }
    }
}
