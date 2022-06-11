using System;
using System.Text;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Extensions.Logging;
using RabbitMQ.Client.Events;

namespace HorselessNewspaper.Core.Workflow.AzureFunctions
{
    public class CommandDispatcher
    {
        [FunctionName("CommandDispatcher")]
        public void Run([RabbitMQTrigger("CommandChannel", ConnectionStringSetting = "localrabbit")] BasicDeliverEventArgs arg, ILogger log)
        {
            log.LogInformation($"C# Queue trigger function processed message from exchange: {arg.Exchange}");

            log.LogInformation($"C# Queue trigger function routing key: {arg.RoutingKey}");

            log.LogInformation($"C# Queue trigger function body: {Encoding.UTF8.GetString(arg.Body)}");

            log.LogInformation($"C# Queue trigger function cosumer tag: {arg.ConsumerTag}");

            log.LogInformation($"C# Queue trigger function delivery tag: {arg.DeliveryTag}");
        }
    }
}
