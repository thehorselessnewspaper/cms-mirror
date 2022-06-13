using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.FileProviders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.Services.Query.TenantFilesystem
{
    public interface IHorselessRBACFilesystem
    {

        Task<IDirectoryContents> GetDirectoryContents(string subpath);
        Task<IFileInfo> GetFileInfo(string subpath);
        Task<bool> Mount(string path);
        Task<bool> Persist(string path, ICollection<IFormFile> files);
    }
}
