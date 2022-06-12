using HorselessNewspaper.Client.RabbitMQ.Model;
using HorselessNewspaper.Core.Interfaces.Model.QueueClient;
using HorselessNewspaper.Core.Interfaces.QueueClient;
using HorselessNewspaper.Web.Core.Configuration.Model.RabbitMQ;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using RabbitMQ.Client;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace HorselessNewspaper.Client.RabbitMQ
{
    public class HorselessRabbitMQClient : IHorselessQueueClient
    {
        private IModel _channel;
        ILogger<HorselessRabbitMQClient> _logger;

        public HorselessRabbitMQClient(IConfiguration configuration, ILogger<HorselessRabbitMQClient> logger)
        {
            _logger = logger;

            try
            {
                var options = new RabbitMQClientConfiguration();

                configuration.GetSection(nameof(RabbitMQClientConfiguration)).Bind(options);

                var factory = new ConnectionFactory()
                {
                    HostName = options.HostName,
                    UserName = options.UserName,
                    Password = options.Password,
                    Port = options.Port,
                    VirtualHost = options.VirtualHost
                };

                var connection = factory.CreateConnection();
                _channel = connection.CreateModel();

            }
            catch (Exception e)
            {
                logger.LogError($"{this.GetType().FullName} threw an exception on initialization {e.Message}");
            }
        }

        public async Task<IQueueClientPushResult> PushMessage<TPayload>(IQueueClientMessage<TPayload> message)
        {
            var result = new RabbitMQPushResult();
            try
            {
                _logger.LogTrace($"{this.GetType().FullName} is validating the message type");
                var queueMessage = message as RabbitMQMessage<TPayload>;

                _logger.LogTrace($"{this.GetType().FullName} has validated the message type");

                if (_channel != null)
                {
                    _logger.LogTrace($"{this.GetType().FullName} is initializing the send queue for queuename:{queueMessage.QueueName},  exchange:{queueMessage.Exchange}, routing-key: {queueMessage.RoutingKey}");
                    _channel.QueueDeclare(queue: queueMessage.QueueName,
                                                durable: queueMessage.IsDurable,
                                                exclusive: false,
                                                autoDelete: queueMessage.IsAutoDelete,
                                                arguments: queueMessage.Arguements);

                    string msgJson = JsonConvert.SerializeObject(message);
                    var body = Encoding.UTF8.GetBytes(msgJson);

                    _logger.LogTrace($"{this.GetType().FullName} is publishing the message");
                    _channel.BasicPublish(exchange: queueMessage.Exchange,
                                            routingKey: queueMessage.RoutingKey,
                                            basicProperties: null,
                                            body: body);

                    _logger.LogTrace($"{this.GetType().FullName} has published the message");
                    result.Success = true;
                }
                else
                {
                    _logger.LogError($"{this.GetType().FullName} does not have an initialized send channel");
                    throw new Exception("uninitialized rabbit mq client");
                }

            }
            catch (Exception e)
            {
                result.Success = false;
                _logger.LogError($"problem sending message {e.Message}");
            }

            return await Task.FromResult<RabbitMQPushResult>(result);
        }
    }
}