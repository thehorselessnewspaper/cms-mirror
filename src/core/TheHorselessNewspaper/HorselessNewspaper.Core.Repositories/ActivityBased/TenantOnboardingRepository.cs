// ouch - we've taken a dependencyhere on entity framework core ina  repository
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace HorselessNewspaper.Core.Repositories.ActivityBased
{
    /// <summary>
    /// a repository to support workflow rather than unit of work
    /// </summary>
    public class TenantOnboardingRepository : ITenantOnboardingRepository
    {
        private THNLPContentContext ContentContext { get; set; }
        public TenantOnboardingRepository(THNLPContentContext ctx)
        {
            this.ContentContext = ctx;
        }
        public async Task<RepositoryResult<Tenant>> NewTenant(Guid Tenantid, Tenant tenant)
        {
            var operationResult = await this.ContentContext.Tenants.AddAsync(tenant);
            var count = await this.ContentContext.SaveChangesAsync();
            var result = new
            RepositoryResult<Tenant>()
                    {
                        OperationSuccessful = count > 0,
                        Payload = tenant,
                        UTCTimestamp = DateTime.UtcNow
                    };

            return result;
        }

        public async Task<RepositoryResult<Tenant>> GetTenant(Guid tenantId)
        {
            var queryResult = await ContentContext.Set<Tenant>().FindAsync(tenantId);
            var result = new
               RepositoryResult<Tenant>()
            {
                OperationSuccessful = queryResult != null,
                Payload = queryResult,
                UTCTimestamp = DateTime.UtcNow
            };

            return result;
        }

        public async Task<RepositoryResult<IEnumerable<Tenant>>> FindTenants(Expression<Func<Tenant, bool>> expression, int offset, int pageSize, int pageCount)
        {
            var queryResult = await ContentContext.Set<Tenant>().Where(expression).ToListAsync();
            var result = new
                RepositoryResult<IEnumerable<Tenant>>()
            {
                OperationSuccessful = queryResult != null && queryResult.Any(),
                Payload = queryResult,
                UTCTimestamp = DateTime.UtcNow
            }
            ;
            return result;
        }

        public async Task<RepositoryResult<ContentCollection>> NewContentCollection(Guid Tenantid, ContentCollection collection)
        {
            var result = new RepositoryResult<ContentCollection>();
            if (this.ContentContext.Tenants.Where(w => w.Id == Tenantid).Any())
            {
                var tenant = this.ContentContext.Tenants.Where(w => w.Id == Tenantid).FirstOrDefault();

                tenant.ContentCollections.Add(collection);
                var count = await this.ContentContext.SaveChangesAsync();
                result = new RepositoryResult<ContentCollection>()
                {
                    OperationSuccessful = count > 0,
                    Payload = collection,
                    UTCTimestamp = DateTime.UtcNow
                };
            }
            else
            {
                result.OperationSuccessful = false;
                result.UTCTimestamp = DateTime.UtcNow;
            }

            return result;
        }
        public async Task<RepositoryResult<ContentCollection>> GetContentCollection(Guid tenantId, Guid tenantCollectionId)
        {
            throw new NotImplementedException();
        }

        public async Task<RepositoryResult<IEnumerable<ContentCollection>>> FindContentCollections(Expression<Func<ContentCollection, bool>> expression, int offset, int pageSize, int pageCount)
        {
            throw new NotImplementedException();
        }


        public async Task<RepositoryResult<MimeContent>> NewMimeContent(Guid tenantId, MimeContent content, Guid? parentContentCollectionId = null)
        {
            throw new NotImplementedException();
        }

        public async Task<RepositoryResult<MimeContent>> GetMimeContent(Guid tenantId, Guid mimeContentId)
        {
            throw new NotImplementedException();
        }

        public async Task<RepositoryResult<IEnumerable<MimeContent>>> FindMimeContent(Expression<Func<MimeContent, bool>> expression, int offset, int pageSize, int pageCount)
        {
            throw new NotImplementedException();
        }


        public async Task<RepositoryResult<MIMEType>> NewMIMEType(Guid tenantId, MIMEType content, Guid? parentMimeContentId = null)
        {
            throw new NotImplementedException();
        }

        public async Task<RepositoryResult<MIMEType>> GetMIMEType(Guid tenantId, Guid mimeTypeId)
        {
            throw new NotImplementedException();
        }

        public async Task<RepositoryResult<IEnumerable<MIMEType>>> FindMIMEType(Expression<Func<MIMEType, bool>> expression, int offset, int pageSize, int pageCount)
        {
            throw new NotImplementedException();
        }

        public async Task<RepositoryResult<FilesystemAsset>> NewFilesystemAsset(Guid tenantId, FilesystemAsset content, Guid? parentMimeContentId = null)
        {
            throw new NotImplementedException();
        }

        public async Task<RepositoryResult<FilesystemAsset>> GetFilesystemAsset(Guid tenantId, Guid filesystemAssetId)
        {
            throw new NotImplementedException();
        }

        public async Task<RepositoryResult<IEnumerable<FilesystemAsset>>> FindFilesystemAsset(Expression<Func<FilesystemAsset, bool>> expression, int offset, int pageSize, int pageCount)
        {
            throw new NotImplementedException();
        }


        public async Task<RepositoryResult<JSONAsset>> NewJSONAsset(Guid tenantId, JSONAsset content, Guid? parentMimeContentId = null)
        {
            throw new NotImplementedException();
        }

        public async Task<RepositoryResult<JSONAsset>> GetJSONAsset(Guid tenantId, Guid jsonAssetId)
        {
            throw new NotImplementedException();
        }

        public async Task<RepositoryResult<IEnumerable<JSONAsset>>> FindJSONAsset(Expression<Func<JSONAsset, bool>> expression, int offset, int pageSize, int pageCount)
        {
            throw new NotImplementedException();
        }

    }
}
