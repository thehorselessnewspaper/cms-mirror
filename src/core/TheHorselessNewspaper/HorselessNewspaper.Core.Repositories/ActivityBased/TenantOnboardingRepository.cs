using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace HorselessNewspaper.Core.Repositories.ActivityBased
{
    /// <summary>
    /// a repository to support workflow rather than unit of work
    /// </summary>
    public class TenantOnboardingRepository
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
    }
}
