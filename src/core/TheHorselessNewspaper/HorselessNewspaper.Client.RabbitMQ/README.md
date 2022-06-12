# Rabbit MQ Client

this client is meant to be registered in dependency injection as a singleton

IServiceCollection consumers may inject it and on initialization it expects
available configuration options as per RabbitMQClientConfiguration

configuration options consumed in the constructor as per https://programmer.ink/think/the-right-way-to-use-rabbitmq-in-net-core.html

```
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
```