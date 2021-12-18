using HorselessNewspaper.Core.Interfaces.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.Model.Query
{
    public class DefaultQueryResult<TPayload> : IHorselessQueryResult<TPayload> where TPayload : new()
    {
        public string ETag { get; set; }
        public DateTime Timestamp { get; set; }
        public TPayload Payload { get; set; }
        public long NextPage { get; set; }
        public long PageSize { get; set; }
    }
}
