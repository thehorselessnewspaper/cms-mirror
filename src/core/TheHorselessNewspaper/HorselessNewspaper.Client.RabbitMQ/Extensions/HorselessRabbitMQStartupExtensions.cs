using HorselessNewspaper.Core.Interfaces.QueueClient;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Client.RabbitMQ.Extensions
{
    public static class HorselessRabbitMQStartupExtensions
    {
        /// <summary>
        /// register the integral core rabbit mq client singleton
        /// </summary>
        /// <param name="services"></param>
        /// <returns></returns>
        public static IServiceCollection AddHorselessRabbitMQClient(this IServiceCollection services)
        {

            services.AddSingleton<IHorselessRabbitMQClient, HorselessRabbitMQClient>();

            return services;
        }
    }
}
