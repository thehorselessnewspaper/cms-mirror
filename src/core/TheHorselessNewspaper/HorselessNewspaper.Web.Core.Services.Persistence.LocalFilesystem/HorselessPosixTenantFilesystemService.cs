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
    }
}
