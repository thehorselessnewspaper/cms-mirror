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
        public bool IsMountSuccess { get; set; }
        public string FullPath { get; set; }

        public DirectoryInfo CreatedDirectory { get; set; }
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

                var configPath = configuration[HorselessConfigurationConstants.TenantFilesystemRoot];
                string sanitizedPath = SanitizeConfigRoot(configPath);

                TenantFilesystemRoot = sanitizedPath;

                IsInitializedFilesystemRoot = true;

                this.ProviderDisplayName = "POSIX Filsystem";
                this.ProviderName = this.GetType().FullName;
            }
            catch (Exception e)
            {
                IsInitializedFilesystemRoot = false;
                _logger.LogError($"{this.GetType().FullName} could not retrieve the tenant filesystem root path");
            }
        }

        public string SanitizeConfigRoot(string configPath)
        {
            var ret = String.Empty;
            
            if(configPath.StartsWith(Path.DirectorySeparatorChar))
            {
                ret = configPath;
            }
            else
            {
                ret = Path.DirectorySeparatorChar + configPath;
            }

            return ret;
        }


        /// <summary>
        /// non-destructive directory create 
        /// fills sparse filesystem trees 
        /// as per https://docs.microsoft.com/en-us/dotnet/api/system.io.directory.createdirectory?view=net-6.0
        /// </summary>
        /// <param name="subPath"></param>
        /// <returns></returns>
        public async Task<DirectoryInfo> CreateDirectoryIfNotExists(string subPath)
        {
            DirectoryInfo ret = new DirectoryInfo("");

            var chrootPath = this.GetChrootedPath(subPath);
            ret = Directory.CreateDirectory(chrootPath);


            return await Task.FromResult<DirectoryInfo>(ret);
        }

        private string GetChrootedPath(string subPath)
        {
            return Path.Join(this.TenantFilesystemRoot, subPath);
        }

        /// <summary>
        /// mount a path
        /// path is appended to root path 
        /// configured in environment and used by this repository
        /// 
        /// implements create if not exists semantics
        /// </summary>
        /// <returns></returns>
        public async Task<MountLocalTenantFilesystemResult> Mount( bool createPathIfNotExists = false, params string[] pathSegments) 
        {
            var ret = new MountLocalTenantFilesystemResult();
            var subPath = await GetOSNormalizedPath(pathSegments);

            if (IsInitializedFilesystemRoot)
            {
                if(createPathIfNotExists)
                {
                    var dirExists = await this.DirectoryExists(subPath);
                    if(!dirExists)
                    {
                        _logger.LogTrace($"{this.GetType().FullName} creating sub path {subPath}");
                        var createResult = Directory.CreateDirectory(subPath);

                        ret.CreatedDirectory = createResult;
                       

                    }
                }

                try
                {
                    var fullPath = Path.Combine(this.TenantFilesystemRoot, subPath);
                    ret.FullPath = fullPath;

                    _filesystemProvider = new PhysicalFileProvider(fullPath);

                    ret.IsMountSuccess = true;
                }
                catch (Exception e)
                {
                    _logger.LogError($"problem mounting posix filesystem {e.Message}");
                    ret.IsMountSuccess = false;
                    return ret;
                }
            }
            else
            {
                ret.IsMountSuccess = false;
            }

            return await Task.FromResult<MountLocalTenantFilesystemResult>(ret);
        }

        public async Task<bool> DirectoryExists(string subPath)
        {
            var ret = false;

            var fullPath = Path.Join(this.TenantFilesystemRoot, subPath);

            _logger.LogTrace($"{this.GetType().FullName} testing directory path {fullPath}");
            ret = Directory.Exists(fullPath);

            _logger.LogTrace($"{this.GetType().FullName} tested directory path {fullPath}: {ret}");

            return await Task.FromResult<bool>(ret);
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

        public async Task<string> Persist(string path, string fileName, byte[] data, bool isShouldOverwrite)
        {
            var ret = fileName;

            return ret;
        }

        /// <summary>
        /// construct a full os normalized path string
        /// accounting for the chroot path
        /// </summary>
        /// <param name="pathSegments"></param>
        /// <returns></returns>
        public async Task<string> GetOSNormalizedPath(params string[] pathSegments)
        {
            var ret = string.Empty;


            List<string> parameters = new List<string>();
            parameters.Add(this.TenantFilesystemRoot);
            parameters.AddRange(pathSegments.ToList());
            var paramArray = parameters.ToArray();

            ret = Path.Join(paramArray);

            return await Task.FromResult<string>(ret);
        }
    }
}
