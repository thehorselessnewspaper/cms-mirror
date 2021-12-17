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

        internal Task<ICacheOperationResult<TCacheValue>> Get(TCacheKey key);

        internal Task<TCacheValue> Set(TCacheKey key, TCacheValue value);

        internal Task<TCacheKey> Evict(TCacheKey key);

        internal Task<ICacheOperationResult<List<KeyValuePair<TCacheKey, TCacheValue>>>> Get(Expression<Func<KeyValuePair<TCacheKey, TCacheValue>, bool>> predicate);

        internal Task<List<TCacheKey>> Evict(Expression<Func<KeyValuePair<TCacheKey, TCacheValue>, bool>> predicate);

    }

    /// <summary>
    /// convenience mechanism that should have conditional compilation 
    /// </summary>
    /// <typeparam name="TCacheKey"></typeparam>
    /// <typeparam name="TCacheValue"></typeparam>
    public interface IMockHorselessCacheProvider<TCacheKey, TCacheValue> : IHorselessCacheProvider<TCacheKey, TCacheValue> where TCacheValue : new()
    {
        public Task<TCacheKey> HasMockedKey { get; }
        public Task<TCacheValue> HasMockedValue { get; }
    }
}
