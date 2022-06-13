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
        LocalTenantFilesystemRepository _provider;
        ILogger<HorselessPosixTenantFilesystemService> _logger;

        public HorselessPosixTenantFilesystemService(LocalTenantFilesystemRepository provider, ILogger<HorselessPosixTenantFilesystemService> logger)
        {
            this._provider = provider;
            this._logger = logger;
        }

        public async Task<bool> Mount(string path)
        {
            var ret = false;

            var mountResult = await _provider.Mount(path);

            return false;
        }

        public Task<IDirectoryContents> GetDirectoryContents(string subpath)
        {
            return Task.FromResult<IDirectoryContents>( _provider.GetDirectoryContents(subpath));
        }

        public Task<IFileInfo> GetFileInfo(string subpath)
        {
            IFileInfo ret;

            ret = _provider.GetFileInfo(subpath);

            return Task.FromResult<IFileInfo>(ret);
        }

        public async Task<bool> Persist(string path, ICollection<IFormFile> files)
        {
            bool ret = false;

            ret = await _provider.Persist(path, files);

            return ret;
        }
    }
}
