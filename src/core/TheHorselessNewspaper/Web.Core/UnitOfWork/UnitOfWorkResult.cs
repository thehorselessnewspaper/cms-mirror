using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.UnitOfWork
{
    internal class UnitOfWorkResult<T> : IUnitOfWorkResult<T>
    {
        public UnitOfWorkResult()
        {
            UTCTimestamp = DateTime.UtcNow;
        }

        public T? Payload { get; set; }
        public bool OperationSuccessful { get; set; }
        public DateTime UTCTimestamp { get; set; }
    }

    internal interface IUnitOfWorkResult<T>
    {
        T Payload { get; set; }
        bool OperationSuccessful { get; set; }

        DateTime UTCTimestamp { get; set; }
    }
}
