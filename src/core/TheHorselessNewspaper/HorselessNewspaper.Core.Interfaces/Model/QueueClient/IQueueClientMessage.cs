using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Core.Interfaces.Model.QueueClient
{
    public interface IQueueClientMessage
    {
        public string QueueName { get; set; }

        public bool IsDurable { get; set; }

        public bool IsAutoDelete { get; set; }
    }

    public interface IQueueClientMessage<TPayload> : IQueueClientMessage
    {
        public TPayload Payload { get; set; }
    }
}
