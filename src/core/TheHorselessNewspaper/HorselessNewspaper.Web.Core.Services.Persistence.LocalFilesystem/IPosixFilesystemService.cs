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
    public interface IPosixFilesystemService
    {
        Task<IDirectoryContents> GetDirectoryContents(params string[] pathSegments);
        Task<IFileInfo> GetFileInfo(string fileName, params string[] pathSegments);
        Task<MountLocalTenantFilesystemResult> Mount(bool createIfNotExists = false, params string[] pathSegments);
        public Task<bool> Persist(ICollection<IFormFile> files, bool isShouldOverwrite = false, params string[] pathSegments);
        public Task<string> Persist(string fileName, byte[] data, bool isShouldOverwrite = false, params string[] pathSegments);
        public Task<string> Persist(string fileName, string data, bool isShouldOverwrite = false, params string[] pathSegments);

        public Task<byte[]> LoadAsByteArray(string fileName, params string[] pathSegments);
        public Task<string> LoadAsString(string fileName, params string[] pathSegments);
    }
}
