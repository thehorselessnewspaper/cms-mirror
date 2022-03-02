using Finbuckle.MultiTenant;
using HorselessNewspaper.Web.Core.Interfaces.Cache;
using HorselessNewspaper.Web.Core.Model.Cache;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using HostingEntities = TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
using ContentEntities = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace HorselessNewspaper.Web.Core.SingletonServices.Cache.Tenant
{

    /// <summary>
    /// simple singleton-safe tenant cache implementation suitable for 
    /// dependency injection into asp.net core di consumers
    /// </summary>
    public class DefaultTenantCache : IHorselessCacheProvider<Guid, ContentEntities.Tenant>
    {
        public DefaultTenantCache()
        {
            Tenants = new System.Collections.Concurrent.ConcurrentDictionary<Guid, ContentEntities.Tenant>();

        }
        public System.Collections.Concurrent.ConcurrentDictionary<Guid, ContentEntities.Tenant> Tenants { get; set; }

        public async Task<int> Count()
        {
            return await Task.FromResult<int>(Tenants.Count);
        }

        public async Task<Guid> Evict(Guid key)
        {
 
            var operationResult = await Get(key);
           
            if (operationResult.IsSuccess)
            {
                var payload = operationResult.Payload;
                var result = Tenants.TryRemove(key, out payload);
            }

            return await Task.FromResult(key);
        }

        public async Task<List<Guid>> Evict(Expression<Func<KeyValuePair<Guid, ContentEntities.Tenant>, bool>> predicate)
        {
            var evicted = new List<Guid>();
            var filteredList = Tenants.AsQueryable().Where(predicate).ToList();
            foreach (var filteredItem in filteredList)
            {
                var result = Tenants.TryRemove(filteredItem);
                if (result)
                {
                    evicted.Add(filteredItem.Key);
                }
            }

            return await Task.FromResult(evicted);
        }

        public async Task<ICacheOperationResult<ContentEntities.Tenant>> Get(Guid key)
        {
            var operationResult = new DefaultCacheOperationResult<ContentEntities.Tenant>();

            var value = default(ContentEntities.Tenant);
            var result = Tenants.TryGetValue(key, out value);

            operationResult.IsSuccess = result;
            operationResult.Payload = value;

            return await Task.FromResult(operationResult);
        }

        public async Task<ICacheOperationResult<List<KeyValuePair<Guid, ContentEntities.Tenant>>>> Get(Expression<Func<KeyValuePair<Guid, ContentEntities.Tenant>, bool>> predicate)
        {
            var operationResult = new DefaultCacheOperationResult<List<KeyValuePair<Guid, ContentEntities.Tenant>>>();

            var filteredList = Tenants.AsQueryable().Where(predicate).ToList();
            operationResult.Payload = filteredList;
            operationResult.IsSuccess = true;

            return await Task.FromResult(operationResult);
        }

        public async Task<ContentEntities.Tenant> Set(Guid key, ContentEntities.Tenant value)
        {
            var result = this.Tenants.TryAdd(key, value);

            return await Task.FromResult(value);
        }
    }
}
