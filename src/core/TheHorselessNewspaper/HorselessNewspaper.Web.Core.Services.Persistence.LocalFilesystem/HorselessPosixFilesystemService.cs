using HorselessNewspaper.Core.Repositories.TenantFilesystem;
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
    public class HorselessPosixFilesystemService : IPosixFilesystemService
    {
        LocalTenantFilesystemProvider _provider;
        ILogger<HorselessPosixFilesystemService> _logger;

        public HorselessPosixFilesystemService(LocalTenantFilesystemProvider provider, ILogger<HorselessPosixFilesystemService> logger)
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

        public IDirectoryContents GetDirectoryContents(string subpath)
        {
            return _provider.GetDirectoryContents(subpath);
        }

    }
}
