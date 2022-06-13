using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.Services.Persistence.LocalFilesystem
{
    public interface IPosixFilesystemService
    {
        Task<bool> Mount(string path);
    }
}
