using HorselessNewspaper.Core.Interfaces.Knuth.TreeNodes;
using HorselessNewspaper.Core.Interfaces.Model.Knuth.TreeNodes;
using HorselessNewspaper.Core.Repositories.TenantFilesystem;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.FileProviders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.Services.Persistence.LocalFilesystem
{
    /// <summary>
    /// a filesystem api 
    /// that implies posix semantics
    /// </summary>
    public interface IPosixFilesystemService
    {
        public Task<bool> DirectoryExists(params string[] pathSegments);
        public Task<IDirectoryContents> GetDirectoryContents(params string[] pathSegments);
        public Task<IFileInfo> GetFileInfo(string fileName, params string[] pathSegments);
        public Task<MountLocalTenantFilesystemResult> Mount(bool createIfNotExists = false, params string[] pathSegments);
        public Task<bool> Persist(ICollection<IFormFile> files, bool isShouldOverwrite = false, params string[] pathSegments);
        public Task<string> Persist(string fileName, byte[] data, bool isShouldOverwrite = false, params string[] pathSegments);
        public Task<string> Persist(string fileName, string data, bool isShouldOverwrite = false, params string[] pathSegments);

        public Task<byte[]> LoadAsByteArray(string fileName, params string[] pathSegments);
        public Task<string> LoadAsString(string fileName, params string[] pathSegments);
        public Task<bool> RenderFilesystemTree();
        public Task<bool> RenderFilesystemTree(IEnumerable<HorselessTreeNode<string>> filesystemTree);
        public Task<bool> RenderFilesystemTree(IEnumerable<HorselessFilesystemTreeNode<string>> filesystemTree);
        public Task<IEnumerable<IFileInfo>> FindFiles(Predicate<IFileInfo> fileMatcherPredicate, bool recursive = false, params string[] pathSegments);
    }
}
