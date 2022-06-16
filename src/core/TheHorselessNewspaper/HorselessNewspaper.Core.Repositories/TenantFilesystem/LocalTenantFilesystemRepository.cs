using HorselessNewspaper.Core.Interfaces.Persistence;
using HorselessNewspaper.Web.Core.Configuration;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Primitives;
using System;
using System.IO;

using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HorselessNewspaper.Core.Interfaces.Knuth.TreeNodes;
using NuGet.Common;
using HorselessNewspaper.Core.Interfaces.Model.Knuth.TreeNodes;

namespace HorselessNewspaper.Core.Repositories.TenantFilesystem
{
    /// <summary>
    /// as per https://stackoverflow.com/questions/51520261/net-core-ifileprovider-getdirectorycontents-recursive-not-working
    /// </summary>
    public static class FileProviderExtensions
    {
        /// <summary>
        /// Searches for files matching some <paramref name="match"/>, and invokes <paramref name="process"/> on them.
        /// </summary>
        /// <param name="provider">File provider</param>
        /// <param name="directory">parent directory for the search, a relative path, leading slashes are ignored,
        /// use "" or "/" for starting at the root of <paramref name="provider"/></param>
        /// <param name="match">the match predicate, if this returns true the file is passed to <paramref name="process"/></param>
        /// <param name="process">this action is invoked on <paramref name="match"/>ing files </param>
        /// <param name="recursive">if true directories a</param>
        /// <returns>the number of files <paramref name="match"/>ed and <paramref name="process"/>ed</returns>
        public static int FindFiles(this IFileProvider provider, string directory, Predicate<IFileInfo> match, Action<IFileInfo> process, bool recursive = false)
        {
            var dirsToSearch = new Stack<string>();
            dirsToSearch.Push(directory);
            var count = 0;
            while (dirsToSearch.Count > 0)
            {
                var dir = dirsToSearch.Pop();
                foreach (var file in provider.GetDirectoryContents(dir))
                {
                    if (file.IsDirectory)
                    {
                        if (!recursive)
                            continue;

                        var relPath = Path.Join(dir, file.Name);
                        dirsToSearch.Push(relPath);
                    }
                    else
                    {
                        if (!match(file))
                            continue;

                        process(file);
                        count++;
                    }
                }
            }

            return count;
        }
    }
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
        IConfiguration Configuration;

        public string TenantFilesystemRoot { get; set; } = string.Empty;

        public bool IsInitializedFilesystemRoot { get; set; } = false;
        public string ProviderName { get; set; }
        public string ProviderDisplayName { get; set; }

        public LocalTenantFilesystemRepository(ILogger<LocalTenantFilesystemRepository> logger, IConfiguration configuration)
        {
            _logger = logger;
            try
            {
                Configuration = configuration;
                string sanitizedPath = GetConfiguredFilesystemRootPath();

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

        public string GetConfiguredFilesystemRootPath()
        {
            var configPath = Configuration[HorselessConfigurationConstants.TenantFilesystemRoot];
            string sanitizedPath = SanitizeConfigRoot(configPath);
            return sanitizedPath;
        }

        private string SanitizeConfigRoot(string configPath)
        {
            var ret = String.Empty;

            if (configPath.StartsWith(Path.DirectorySeparatorChar))
            {
                ret = configPath;
            }
            else
            {
                ret = Path.DirectorySeparatorChar + configPath;
            }

            return ret;
        }
        private string GetChrootedPath(string subPath)
        {
            return Path.Join(this.TenantFilesystemRoot, subPath);
        }

        /// <summary>
        /// non-destructive directory create 
        /// fills sparse filesystem trees 
        /// as per https://docs.microsoft.com/en-us/dotnet/api/system.io.directory.createdirectory?view=net-6.0
        /// </summary>
        /// <param name="subPath"></param>
        /// <returns></returns>
        public async Task<DirectoryInfo> CreateDirectoryIfNotExists(params string[] pathSegments)
        {


            var chrootPath = await GetOSNormalizedPath(pathSegments);
            var ret = Directory.CreateDirectory(chrootPath);


            return await Task.FromResult<DirectoryInfo>(ret);
        }



        /// <summary>
        /// mount a path
        /// path is appended to root path 
        /// configured in environment and used by this repository
        /// 
        /// implements create if not exists semantics
        /// </summary>
        /// <returns></returns>
        public async Task<MountLocalTenantFilesystemResult> Mount(bool createPathIfNotExists = false, params string[] pathSegments)
        {
            var ret = new MountLocalTenantFilesystemResult();
            var subPath = await GetOSNormalizedPath(pathSegments);

            if (IsInitializedFilesystemRoot)
            {
                if (createPathIfNotExists)
                {
                    var dirExists = await this.DirectoryExists(subPath);
                    if (!dirExists)
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

        public async Task<bool> DirectoryExists(params string[] pathSegments)
        {
            var ret = false;

            var fullPath = await GetOSNormalizedPath(pathSegments);

            _logger.LogTrace($"{this.GetType().FullName} testing directory path {fullPath}");
            ret = Directory.Exists(fullPath);

            _logger.LogTrace($"{this.GetType().FullName} tested directory path {fullPath}: {ret}");

            return await Task.FromResult<bool>(ret);
        }

        /// <summary>
        /// as per
        /// https://stackoverflow.com/questions/51520261/net-core-ifileprovider-getdirectorycontents-recursive-not-working
        /// </summary>
        /// <param name="fileMatcherPredicate"></param>
        /// <param name="recursive"></param>
        /// <param name="pathSegments"></param>
        /// <returns></returns>
        public async Task<IEnumerable<IFileInfo>> FindFiles(Predicate<IFileInfo> fileMatcherPredicate, bool recursive = false, params string[] pathSegments)
        {
            var ret = new List<IFileInfo>();
            var path = await GetOSNormalizedPath(pathSegments);

            var subPath = await GetOSNormalizedPath(string.Empty);
            PhysicalFileProvider provider = new PhysicalFileProvider(subPath);

            provider.FindFiles(
                directory: string.Empty,
                match: fileMatcherPredicate,
                process: ret.Add,
                recursive: recursive
                );
            return ret;
        }

        public async Task<IDirectoryContents> GetDirectoryContents(params string[] pathSegments)
        {
            IDirectoryContents ret;
            var subPath = await GetOSNormalizedPath(pathSegments);
            PhysicalFileProvider provider = new PhysicalFileProvider(subPath);

            ret = provider.GetDirectoryContents(String.Empty);

            return ret;
        }

        public async Task<IFileInfo> GetFileInfo(string fileName, params string[] pathSegments)
        {
            IFileInfo ret;

            var mountResult = await Mount(false, pathSegments);

            var fullPath = await GetOSNormalizedPath(fileName);

            ret = _filesystemProvider.GetFileInfo(fileName);

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
        public async Task<bool> Persist(ICollection<IFormFile> files, bool isShouldOverwrite = false, params string[] pathSegments)
        {
            bool ret = false;
            var fullPath = await GetOSNormalizedPath(pathSegments); // Path.Combine(this.TenantFilesystemRoot, path);

            foreach (var formFile in files)
            {
                if (formFile.Length > 0)
                {
                    var filePath = Path.Join(fullPath, Path.GetRandomFileName());

                    using (var stream = System.IO.File.Create(filePath))
                    {
                        await formFile.CopyToAsync(stream);
                    }
                }
            }

            return ret;
        }

        /// <summary>
        /// as per https://docs.microsoft.com/en-us/dotnet/api/system.io.file.create?view=net-6.0
        /// </summary>
        /// <param name="fileName"></param>
        /// <param name="data"></param>
        /// <param name="isShouldOverwrite"></param>
        /// <param name="pathSegments"></param>
        /// <returns></returns>
        public async Task<string> Persist(string fileName, byte[] data, bool isShouldOverwrite = false, params string[] pathSegments)
        {
            var ret = fileName;

            if (data != null && data.Length > 0)
            {
                var fullPath = await GetOSNormalizedPath(fileName, pathSegments);
                var targetExists = File.Exists(fullPath);

                if (isShouldOverwrite || !targetExists)
                {
                    using (FileStream fs = File.Create(fullPath))
                    {
                        fs.Write(data, 0, data.Length);
                    }
                }
            }


            return ret;
        }

        public async Task<string> Persist(string fileName, string data, bool isShouldOverwrite = false, params string[] pathSegments)
        {
            var ret = fileName;

            if (data != null && data.Length > 0)
            {
                var fullPath = await GetOSNormalizedPath(fileName, pathSegments);
                var targetExists = File.Exists(fullPath);

                if (isShouldOverwrite || !targetExists)
                {
                    using (StreamWriter outputFile = new StreamWriter(fullPath))
                    {
                        await outputFile.WriteAsync(data);
                    }
                }

            }


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

        public async Task<string> GetOSNormalizedPath(string fileName, params string[] pathSegments)
        {
            var ret = string.Empty;


            List<string> parameters = new List<string>();
            parameters.Add(this.TenantFilesystemRoot);
            parameters.AddRange(pathSegments.ToList());
            parameters.Add(fileName);
            var paramArray = parameters.ToArray();

            ret = Path.Join(paramArray);

            return await Task.FromResult<string>(ret);
        }

        /// <summary>
        /// requires a filename as the terminus of the path
        /// </summary>
        /// <param name="pathSegments"></param>
        /// <returns></returns>
        public async Task<byte[]> LoadAsByteArray(string fileName, params string[] pathSegments)
        {
            byte[] ret = new byte[1];

            var fullPath = await GetOSNormalizedPath(pathSegments);
            ret = await File.ReadAllBytesAsync(fullPath);

            return await Task.FromResult<byte[]>(ret);
        }

        /// <summary>
        /// requires a filename as the terminus of the path
        /// </summary>
        /// <param name="pathSegments"></param>
        /// <returns></returns>
        public async Task<string> LoadAsString(string fileName, params string[] pathSegments)
        {
            string ret = string.Empty;

            var fullPath = await GetOSNormalizedPath(fileName, pathSegments);
            ret = await File.ReadAllTextAsync(fullPath);

            return await Task.FromResult<string>(ret);
        }

        /// <summary>
        /// expects a list of parent nodes
        /// meant to be attached to the 
        /// chroot parent node maintained by 
        /// this repository
        /// </summary>
        /// <param name="filesystemTree"></param>
        /// <returns></returns>
        public async Task<bool> RenderFilesystemTree(IEnumerable<HorselessTreeNode<string>> filesystemTree)
        {
            var ret = true;
            foreach (var node in filesystemTree)
            {
                try
                {
                    // compute lineage
                    node.Render();

                    // compute paths
                    var paths = node.ComputePaths(node, n => n.Children);
                    foreach (var subPath in paths)
                    {
                        var mountList = subPath.Select(s => s.Payload).ToArray();
                        var newFolder = await this.CreateDirectoryIfNotExists(mountList);
                        _logger.LogInformation($"{this.GetType().FullName} has created a new folder {newFolder.FullName}");
                    }
                }
                catch (Exception e)
                {
                    // fail silent
                    _logger.LogError($"{this.GetType().FullName} threw an exception materializing filesystem tree: {e.Message}");
                    ret = false;
                }
            }

            return ret;

        }

        public async Task<bool> RenderFilesystemTree(IEnumerable<HorselessFilesystemTreeNode<string>> filesystemTree)
        {
            var ret = true;
            foreach (IHorselessFilesystemTreeNode<string> node in filesystemTree)
            {
                try
                {
                    // compute lineage
                    node.Render();

                    // compute paths
                    var paths = node.ComputePaths(node, n => n.Children);
                    foreach (var subPath in paths)
                    {
                        var mountList = subPath.Select(s => s.Payload).ToArray();
                        var newFolder = await this.CreateDirectoryIfNotExists(mountList);
                        _logger.LogInformation($"{this.GetType().FullName} has created a new folder {newFolder.FullName}");
                    }
                }
                catch (Exception e)
                {
                    // fail silent
                    _logger.LogError($"{this.GetType().FullName} threw an exception materializing filesystem tree: {e.Message}");
                    ret = false;
                }
            }

            return ret;

        }
    }


}
