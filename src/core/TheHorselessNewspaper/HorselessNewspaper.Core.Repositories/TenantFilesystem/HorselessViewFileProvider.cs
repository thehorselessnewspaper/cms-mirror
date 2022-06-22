using Finbuckle.MultiTenant;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Primitives;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace HorselessNewspaper.Core.Repositories.TenantFilesystem
{
    public class HorselessViewTenantFilesystemRepository : IFileProvider
    {

        IQueryableContentModelOperator<HorselessView> _horselessViewQueryOperator;
        ITenantInfo _tenant;
        HttpContextAccessor _httpContextAccessor;
        IDistributedCache _cache;
        ILogger<HorselessViewTenantFilesystemRepository> _logger;

        public HorselessViewTenantFilesystemRepository(HttpContextAccessor httpContextAccessor,
            ITenantInfo tenant,
            IQueryableContentModelOperator<HorselessView> horselessViewQueryOperator,
            IDistributedCache cache,
            ILogger<HorselessViewTenantFilesystemRepository> logger)
        {
            this._httpContextAccessor = httpContextAccessor;
            this._tenant = tenant;
            this._cache = cache;
            this._logger = logger;
            this._horselessViewQueryOperator = horselessViewQueryOperator;
        }

        public IDirectoryContents GetDirectoryContents(string subpath)
        {
            throw new NotImplementedException();
        }

        public IFileInfo GetFileInfo(string subpath)
        {
            throw new NotImplementedException();
        }

        public IChangeToken Watch(string filter)
        {
            throw new NotImplementedException();
        }
    }
}
