using HorselessNewspaper.Core.Interfaces.Persistence;
using HorselessNewspaper.Web.Core.Configuration;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Primitives;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Core.Repositories.TenantFilesystem
{

    public class MountLocalTenantFilesystemResult
    {
        public bool IsInitialized { get; set; }
        public string FullPath { get; set; }
    }

    /// <summary>
    /// abstract the filesystem api with
    /// a tenant filesystem specific facade
    /// assuming a posix compliant filesystem
    /// 
    /// as per https://docs.microsoft.com/en-us/aspnet/core/mvc/models/file-uploads?view=aspnetcore-6.0
    /// </summary>
    public class LocalTenantFilesystemRepository : ITenantFilesystemRepository
    {

        private PhysicalFileProvider _filesystemProvider;
        private ILogger<LocalTenantFilesystemRepository> _logger;

        public string TenantFilesystemRoot { get; set; } = string.Empty;

        public bool IsInitializedFilesystemRoot { get; set; } = false;
        public string ProviderName { get; set; }
        public string ProviderDisplayName { get; set; }

        public LocalTenantFilesystemRepository(ILogger<LocalTenantFilesystemRepository> logger, IConfiguration configuration)
        {
            _logger = logger;
            try
            {

                TenantFilesystemRoot = configuration[HorselessConfigurationConstants.TenantFilesystemRoot];

                IsInitializedFilesystemRoot = true;
            }
            catch (Exception e)
            {
                IsInitializedFilesystemRoot = false;
                _logger.LogError($"{this.GetType().FullName} could not retrieve the tenant filesystem root path");
            }
        }

        /// <summary>
        /// returns initialization result
        /// </summary>
        /// <returns></returns>
        public async Task<MountLocalTenantFilesystemResult> Mount(string path) 
        {
            var ret = new MountLocalTenantFilesystemResult();
            if (IsInitializedFilesystemRoot)
            {
                var fullPath = Path.Combine(this.TenantFilesystemRoot, path);
                ret.FullPath = fullPath;

                _filesystemProvider = new PhysicalFileProvider(fullPath);

                ret.IsInitialized = true;
            }
            else
            {
                ret.IsInitialized = false;
            }

            return await Task.FromResult<MountLocalTenantFilesystemResult>(ret);
        }

        public IDirectoryContents GetDirectoryContents(string subpath)
        {
            IDirectoryContents ret;

            ret = _filesystemProvider.GetDirectoryContents(subpath);

            return ret;
        }

        public IFileInfo GetFileInfo(string subpath)
        {
            IFileInfo ret;

            ret = _filesystemProvider.GetFileInfo(subpath);

            return ret;
        }

     
        public IChangeToken Watch(string filter)
        {
            IChangeToken ret;

            ret = _filesystemProvider.Watch(filter);

            return ret;
        }

        /// <summary>
        /// support form upload
        /// combines path with this.TenantFilesystemRoot
        /// </summary>
        /// <param name="path"></param>
        /// <param name="files"></param>
        /// <returns></returns>
        public async Task<bool> Persist(string path, ICollection<IFormFile> files)
        {
            bool ret = false;
            var fullPath = Path.Combine(this.TenantFilesystemRoot, path);

            foreach (var formFile in files)
            {
                if (formFile.Length > 0)
                {
                    var filePath = Path.Combine(fullPath, Path.GetRandomFileName());

                    using (var stream = System.IO.File.Create(filePath))
                    {
                        await formFile.CopyToAsync(stream);
                    }
                }
            }

            return ret;
        }
    }
}
