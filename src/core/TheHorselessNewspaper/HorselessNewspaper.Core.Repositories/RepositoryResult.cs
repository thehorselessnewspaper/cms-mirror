using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Core.Repositories
{
    public class RepositoryResult<T> : IRepositoryResult<T>
    {
        public RepositoryResult()
        {
            UTCTimestamp = DateTime.UtcNow;
        }

        public T Payload { get; set; }
        public bool OperationSuccessful { get; set; }
        public DateTime UTCTimestamp { get; set; }
    }
}
