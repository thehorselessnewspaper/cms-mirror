using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.Model.Cache
{
    public class DefaultCacheOperationResult<T> : ICacheOperationResult<T> where T : new()
    {
        public DefaultCacheOperationResult()
        {
            this.Payload = new T();
        }

        public DefaultCacheOperationResult(bool isSuccess, T payload)
        {
            this.IsSuccess = isSuccess;
            this.Payload = payload;
        }

        public bool IsSuccess { get; set; }
        public bool IsNullPayload
        {
            get
            {
                return this.Payload == null;
            }
        }

        public T Payload { get; set; }
    }
}
