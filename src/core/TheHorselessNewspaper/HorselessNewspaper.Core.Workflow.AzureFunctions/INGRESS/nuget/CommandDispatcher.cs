using System;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Extensions.Logging;

namespace HorselessNewspaper.Core.Workflow.AzureFunctions
{
    public class CommandDispatcher
    {
        [FunctionName("CommandDispatcher")]
        public void Run([RabbitMQTrigger("CommandChannel",  ConnectionStringSetting = "horseless-nuget-ingress" )]string signal, ILogger log)
        {
            log.LogInformation($"C# Queue trigger function processed: {signal}");
        }
    }
}
