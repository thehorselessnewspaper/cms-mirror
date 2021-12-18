using HorselessNewspaper.Web.Core.Interfaces.Cache;
using HorselessNewspaper.Web.Core.Model.Cache;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.HostingModel.DTO;

namespace HorselessNewspaper.Web.Core.SingletonServices.Cache.Tenant.Mock
{
    public class MockTenantCache : IMockHorselessCacheProvider<Guid, TenantDTO>
    {
        public Task<Guid> HasMockedKey => throw new NotImplementedException();

        public Task<TenantDTO> HasMockedValue => throw new NotImplementedException();

        public Task<Guid> Evict(Guid key)
        {
            throw new NotImplementedException();
        }

        public Task<List<Guid>> Evict(Expression<Func<KeyValuePair<Guid, TenantDTO>, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public async Task<ICacheOperationResult<TenantDTO>> Get(Guid key)
        {
            var mockTenant = new TenantDTO()
            {
                Id = key,
                ObjectId = key.ToString(),
                // TenantDisplayName = "",
                IsSoftDeleted = false,
                RoutingDiscriminators = new List<RoutingDiscriminatorDTO>()
                { }
            };

            var result = new DefaultCacheOperationResult<TenantDTO>(true, mockTenant);

            return await Task.FromResult(result);
        }

        public Task<ICacheOperationResult<List<KeyValuePair<Guid, TenantDTO>>>> Get(Expression<Func<KeyValuePair<Guid, TenantDTO>, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Task<TenantDTO> Set(Guid key, TenantDTO value)
        {
            throw new NotImplementedException();
        }
    }
}
