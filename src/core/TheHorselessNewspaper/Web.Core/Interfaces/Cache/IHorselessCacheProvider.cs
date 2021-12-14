using HorselessNewspaper.Web.Core.Model.Cache;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.HostingModel.DTO;

namespace HorselessNewspaper.Web.Core.Interfaces.Cache
{
    /// <summary>
    /// specifies a general cache interface
    /// for use in web applications 
    /// </summary>
    public interface IHorselessCacheProvider<TCacheKey, TCacheValue> where TCacheValue : new()
    {

        public Task<ICacheOperationResult<TCacheValue>> Get(TCacheKey key);

        public Task<TCacheValue> Set(TCacheKey key, TCacheValue value);

        public Task<TCacheKey> Evict(TCacheKey key);

        public Task<ICacheOperationResult<List<KeyValuePair<TCacheKey, TCacheValue>>>> Get(Expression<Func<KeyValuePair<TCacheKey, TCacheValue>, bool>> predicate);

        public Task<List<TCacheKey>> Evict(Expression<Func<KeyValuePair<TCacheKey, TCacheValue>, bool>> predicate);

    }
}
