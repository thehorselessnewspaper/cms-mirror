using HorselessNewspaper.Core.Interfaces.Model.QueueClient;
using HorselessNewspaper.Core.Interfaces.QueueClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Client.RabbitMQ.Model
{
    public class RabbitMQMessage<TPayload> : IQueueClientMessage<TPayload>
    {
        public TPayload Payload { get; set; }
        public string QueueName { get; set; } = string.Empty;
        public string Exchange { get; set; } = string.Empty;
        public string RoutingKey { get; set; } = string.Empty;
        public bool IsDurable { get; set; }
        public bool IsAutoDelete { get; set; }
        public IDictionary<string, object> Arguements { get; set; }
    }



    public class RabbitMQPushResult : IQueueClientPushResult
    {
        public bool Success { get; set; }
    }
}
