using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.FileProviders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Core.Interfaces.Persistence.FileFormPersistence
{
    public interface IHorselessFilePersistenceProvider : IHorselessPersistenceProvider, IFileProvider
    {
        public Task<bool> Persist(string path, ICollection<IFormFile> files);

    }
}
