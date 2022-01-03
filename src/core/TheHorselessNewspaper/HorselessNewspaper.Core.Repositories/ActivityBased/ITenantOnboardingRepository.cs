using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace HorselessNewspaper.Core.Repositories.ActivityBased
{
    public interface ITenantOnboardingRepository
    {
        Task<RepositoryResult<IEnumerable<ContentCollection>>> FindContentCollections(Expression<Func<ContentCollection, bool>> expression, int offset, int pageSize, int pageCount);
        Task<RepositoryResult<IEnumerable<JSONAsset>>> FindJSONAsset(Expression<Func<JSONAsset, bool>> expression, int offset, int pageSize, int pageCount);
        Task<RepositoryResult<IEnumerable<MIMEType>>> FindMIMEType(Expression<Func<MIMEType, bool>> expression, int offset, int pageSize, int pageCount);
        Task<RepositoryResult<IEnumerable<FilesystemAsset>>> FindFilesystemAsset(Expression<Func<FilesystemAsset, bool>> expression, int offset, int pageSize, int pageCount);
        Task<RepositoryResult<IEnumerable<Tenant>>> FindTenants(Expression<Func<Tenant, bool>> expression, int offset, int pageSize, int pageCount);
        Task<RepositoryResult<ContentCollection>> GetContentCollection(Guid tenantId, Guid tenantCollectionId);
        Task<RepositoryResult<FilesystemAsset>> GetFilesystemAsset(Guid tenantId, Guid filesystemAssetId);
        Task<RepositoryResult<JSONAsset>> GetJSONAsset(Guid tenantId, Guid jsonAssetId);
        Task<RepositoryResult<MIMEType>> GetMIMEType(Guid tenantId, Guid mimeTypeId);
        Task<RepositoryResult<Tenant>> GetTenant(Guid tenantId);
        Task<RepositoryResult<ContentCollection>> NewContentCollection(Guid Tenantid, ContentCollection collection);
        Task<RepositoryResult<FilesystemAsset>> NewFilesystemAsset(Guid tenantId, FilesystemAsset content, Guid? parentMimeContentId = null);
        Task<RepositoryResult<JSONAsset>> NewJSONAsset(Guid tenantId, JSONAsset content, Guid? parentMimeContentId = null);
        Task<RepositoryResult<MIMEType>> NewMIMEType(Guid tenantId, MIMEType content, Guid? parentMimeContentId = null);
        Task<RepositoryResult<Tenant>> NewTenant(Guid Tenantid, Tenant tenant);
    }
}
