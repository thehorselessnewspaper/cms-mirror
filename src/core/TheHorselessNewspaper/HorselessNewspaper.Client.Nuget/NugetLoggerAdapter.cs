using NuGet.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace HorselessNewspaper.Client.Nuget
{
    /// <summary>
    /// a null loging adapter to satisfy Nuget SDK
    /// </summary>
    public class NugetLoggerAdapter : ILogger
    {
        private readonly Microsoft.Extensions.Logging.ILogger<NugetLoggerAdapter> _logger;

        public NugetLoggerAdapter()
        {

        }

        public NugetLoggerAdapter(Microsoft.Extensions.Logging.ILogger<NugetLoggerAdapter> logger)
        {
            _logger = logger;
           
        }

        public void Log(LogLevel level, string data)
        {
            var newLevel = GetLevel(level);
           
        }


        public void Log(ILogMessage message)
        {
 
        }

        public async Task<string> NullAsync()
        {
            return await Task.FromResult("");
        }

        public async Task LogAsync(LogLevel level, string data)
        {
            await NullAsync();
            return;
        }

        public async Task LogAsync(ILogMessage message)
        {
            await NullAsync();
            return;
        }

        public void LogDebug(string data)
        {

        }

        public void LogError(string data)
        {

        }

        public void LogInformation(string data)
        {
 
        }

        public void LogInformationSummary(string data)
        {
 
        }

        public void LogMinimal(string data)
        {
 
        }

        public void LogVerbose(string data)
        {

        }

        public void LogWarning(string data)
        {

        }
        
        /// <summary>
        /// here we do some actual loglevel adptation
        /// warning - pii leakage risk upon incorrect interpretation
        /// naievely
        /// </summary>
        /// <param name="level"></param>
        /// <returns></returns>
        /// <exception cref="NotImplementedException"></exception>
        private Microsoft.Extensions.Logging.LogLevel GetLevel(LogLevel level)
        {
            Microsoft.Extensions.Logging.LogLevel ret = Microsoft.Extensions.Logging.LogLevel.Debug;

            return ret;
        }

    }
}
