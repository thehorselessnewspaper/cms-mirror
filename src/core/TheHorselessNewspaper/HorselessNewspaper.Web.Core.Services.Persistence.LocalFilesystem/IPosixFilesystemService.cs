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
        Task<IDirectoryContents> GetDirectoryContents(string subpath);
        Task<IFileInfo> GetFileInfo(string subpath);
        Task<MountLocalTenantFilesystemResult> Mount(bool createIfNotExists = false, params string[] pathSegments);
        Task<bool> Persist(string path, ICollection<IFormFile> files);
    }
}
