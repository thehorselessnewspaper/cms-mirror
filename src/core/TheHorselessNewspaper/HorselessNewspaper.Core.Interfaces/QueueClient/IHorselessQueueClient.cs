using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HorselessNewspaper.Core.Interfaces.Model.QueueClient;

namespace HorselessNewspaper.Core.Interfaces.QueueClient
{
    public interface IQueueClientPushResult
    {
       public bool Success { get; set; }
    }

    /// <summary>
    /// support async queue client implementations 
    /// with arbitrary queue transport
    /// and arbitrary inputs and outputs
    /// </summary>
    /// <typeparam name="TMessage"></typeparam>
    public interface IHorselessQueueClient 
    {
        public Task<IQueueClientPushResult> PushMessage<TPayload>(IQueueClientMessage<TPayload> message);
    }
}
