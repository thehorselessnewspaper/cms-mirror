using HorselessNewspaper.Web.Core.Interfaces;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.HostingModel.DTO;

namespace HorselessNewspaper.Web.Core.SingletonServices.Tenant
{

    /// <summary>
    /// simple singleton-safe tenant cache implementation suitable for 
    /// dependency injection into asp.net core di consumers
    /// </summary>
    public class DefaultTenantCache : IHorselessCacheProvider<Guid, TenantDTO>
    {
        public DefaultTenantCache()
        {
            Tenants = new System.Collections.Concurrent.ConcurrentDictionary<Guid, TenantDTO>();

        }
        public System.Collections.Concurrent.ConcurrentDictionary<Guid, TenantDTO> Tenants { get; set; }

        public async Task<Guid> Evict(Guid key)
        {
            TenantDTO value = new TenantDTO();
            var currentValue = await this.Get(key);
            var result = Tenants.TryRemove(key, out currentValue);
            return await Task.FromResult<Guid>(key);
        }

        public async Task<List<Guid>> Evict(Expression<Func<KeyValuePair<Guid, TenantDTO>, bool>> predicate)
        {
            var evicted = new List<Guid>();
            var filteredList = this.Tenants.AsQueryable().Where(predicate).ToList();
            foreach (var filteredItem in filteredList)
            {
                var result = Tenants.TryRemove(filteredItem);
                if (result)
                {
                    evicted.Add(filteredItem.Key);
                }
            }

            return await Task.FromResult<List<Guid>>(evicted);
        }

        public async Task<TenantDTO> Get(Guid key)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<TenantDTO>> Get(Expression<Func<TenantDTO, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public async Task<TenantDTO> Set(Guid key, TenantDTO value)
        {
            throw new NotImplementedException();
        }
    }
}
