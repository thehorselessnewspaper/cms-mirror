using HorselessNewspaper.Core.Repositories.TenantFilesystem;
using HorselessNewspaper.Web.Core.Services.Query.Controller.Content;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.FileProviders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;


namespace HorselessNewspaper.Web.Core.Services.Query.TenantFilesystem
{
    public class HorselessRBACTenantFilesystem : IHorselessRBACFilesystem
    {

        private readonly ITenantInfo _tenantInfo;
        IAuthorizationService authorizationService;

        public HorselessRBACTenantFilesystem(IAuthorizationService authorizationService, 
            IContentCollectionService<IQueryableContentModelOperator<ContentModel.Tenant>,
            ContentModel.Tenant> tenantEntityService, Finbuckle.MultiTenant.ITenantInfo tenantInfo,
            LocalTenantFilesystemRepository provider)
        {

        }

        public Task<IDirectoryContents> GetDirectoryContents(string subpath)
        {
            throw new NotImplementedException();
        }

        public Task<IFileInfo> GetFileInfo(string subpath)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Mount(string path)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Persist(string path, ICollection<IFormFile> files)
        {
            throw new NotImplementedException();
        }
    }
}
