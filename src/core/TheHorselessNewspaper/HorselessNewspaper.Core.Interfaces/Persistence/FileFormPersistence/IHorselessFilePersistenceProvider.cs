using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.FileProviders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Core.Interfaces.Persistence.FileFormPersistence
{
    public interface IHorselessFilePersistenceProvider : IHorselessPersistenceProvider // , IFileProvider
    {
        string TenantFilesystemRoot { get; set; }
        bool IsInitializedFilesystemRoot { get; set; }

        Task<IDirectoryContents> GetDirectoryContents(params string[] pathSegments);
        Task<IFileInfo> GetFileInfo(string fileName, params string[] pathSegments);
        public Task<bool> Persist(ICollection<IFormFile> files, bool isShouldOverwrite = false, params string[] pathSegments);
        public Task<string> Persist(string fileName, byte[] data, bool isShouldOverwrite=false, params string[] pathSegments);
        public Task<string> Persist(string fileName, string data, bool isShouldOverwrite = false, params string[] pathSegments);

        public Task<byte[]> LoadAsByteArray(params string[] pathSegments);
        public Task<string> LoadAsString(params string[] pathSegments);
    }
}
