using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.SmokeTests
{
    /// <summary>
    /// wholly based on https://newbedev.com/how-to-unit-test-with-ilogger-in-asp-net-core
    /// </summary>
    internal static class HorselessILoggerFactory
    {
        public static ILogger<T> GetLogger<T>()
        {
            //var serviceProivder = new ServiceCollection()
            //    .AddLogging()
            //    .BuildServiceProvider();

            //var factory = serviceProivder.GetService<ILoggerFactory>();
            // var logger = factory.CreateLogger<T>();

            // wholly based on
            //  https://stackoverflow.com/questions/53690820/how-to-create-a-loggerfactory-with-a-consoleloggerprovider
            var loggerFactory = LoggerFactory.Create(builder =>
            {
                builder.AddFilter("Microsoft", LogLevel.Warning)
                       .AddFilter("System", LogLevel.Warning)
                       // .AddFilter("SampleApp.Program", LogLevel.Debug)
                       .AddConsole();
            });

            var logger = loggerFactory.CreateLogger<T>();
            return logger;
        }
    }
}
