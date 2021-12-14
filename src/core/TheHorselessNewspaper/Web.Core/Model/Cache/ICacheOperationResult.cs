using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.Model.Cache
{
    /// <summary>
    /// encapsulate the result of the cache operation
    /// separate from the cache values
    /// </summary>
    public interface ICacheOperationResult<T> where T : new()
    {
        public bool IsSuccess { get; set; }

        /// <summary>
        /// detect cached null values
        /// </summary>
        public bool IsNullPayload { get; }

        public T Payload  { get; set; }
    }
}
