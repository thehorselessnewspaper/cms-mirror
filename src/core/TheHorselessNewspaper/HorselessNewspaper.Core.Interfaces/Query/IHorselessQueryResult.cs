using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Core.Interfaces.Query
{
    public interface IHorselessQueryResult<TPayload> where TPayload : new()
    {
        public string ETag { get; set; }
        public DateTime Timestamp { get; set; }
        public TPayload Payload { get; set; }
        public Int64 NextPage { get; set; }
        public Int64 PageSize { get; set; }
    }

}
