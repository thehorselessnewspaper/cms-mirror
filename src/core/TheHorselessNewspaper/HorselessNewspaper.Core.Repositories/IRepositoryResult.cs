using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Core.Repositories
{
    public interface IRepositoryResult<T>
    {
        T? Payload { get; set; }
        bool OperationSuccessful { get; set; }
        
        DateTime UTCTimestamp { get; set; }
    }
}
