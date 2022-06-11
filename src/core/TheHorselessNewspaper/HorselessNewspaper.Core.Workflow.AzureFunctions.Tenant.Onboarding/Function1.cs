using System;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Extensions.Logging;

namespace HorselessNewspaper.Core.Workflow.AzureFunctions.Tenant.Onboarding
{
    public class Function1
    {
        [FunctionName("Function1")]
        public void Run([RabbitMQTrigger("CommandChannel", ConnectionStringSetting = "CriticalRabbitMQ")]string myQueueItem, ILogger log)
        {
            log.LogInformation($"C# Queue trigger function processed: {myQueueItem}");
        }
    }
}
