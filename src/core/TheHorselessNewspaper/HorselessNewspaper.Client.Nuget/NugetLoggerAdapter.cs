using LoggerNS = NuGet.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using System.Reflection.Emit;
using NuGet.Protocol.Plugins;

namespace HorselessNewspaper.Client.Nuget
{
    /// <summary>
    /// a null loging adapter to satisfy Nuget SDK
    /// </summary>
    public class NugetLoggerAdapter : LoggerNS.ILogger
    {
        private readonly Microsoft.Extensions.Logging.ILogger<NugetLoader> _logger;

        private  NugetLoggerAdapter()
        {

        }


        public NugetLoggerAdapter(Microsoft.Extensions.Logging.ILogger<NugetLoader> logger)
        {

            _logger = logger;

        }

        public void Log(LoggerNS.LogLevel level, string data)
        {
            var newLevel = GetLevel(level);
            if (_logger != null)
            {
                _logger.Log(newLevel, data);
            }

        }


        public void Log(LoggerNS.ILogMessage message)
        {
            var newLevel = GetLevel(message.Level);
            if (_logger != null)
            {
                _logger.Log(newLevel, message.Message); ;
            }
        }

        public async Task LogAsync(LoggerNS.LogLevel level, string data)
        {
            var newLevel = GetLevel(level);
            var nullAsync = await Task.FromResult<string>("");

            if (_logger != null)
            {
                _logger.Log(newLevel, data);
                return;
            }
            else
            {
                return;
            }
        }

        public async Task LogAsync(LoggerNS.ILogMessage message)
        {
            var newLevel = GetLevel(message.Level);
            var nullAsync = await Task.FromResult<string>("");

            if (_logger != null)
            {
                _logger.Log(newLevel, message.Message);
                return;
            }
            else
            {
                return;
            }
        }

        public void LogDebug(string data)
        {

            if (_logger != null)
            {
                _logger.LogDebug(data); ;
            }
        }

        public void LogError(string data)
        {

            if (_logger != null)
            {
                _logger.LogError(data); ;
            }
        }

        public void LogInformation(string data)
        {

            if (_logger != null)
            {
                _logger.LogInformation(data); ;
            }
        }

        public void LogInformationSummary(string data)
        {

            if (_logger != null)
            {
                _logger.LogInformation(data); ;
            }
        }

        public void LogMinimal(string data)
        {

            if (_logger != null)
            {
                _logger.LogInformation(data); ;
            }
        }

        public void LogVerbose(string data)
        {

            if (_logger != null)
            {
                _logger.LogInformation(data); ;
            }
        }

        public void LogWarning(string data)
        {

            if (_logger != null)
            {
                _logger.LogWarning(data); ;
            }
        }

        /// <summary>
        /// here we do some actual loglevel adptation
        /// warning - pii leakage risk upon incorrect interpretation
        /// naievely
        /// </summary>
        /// <param name="level"></param>
        /// <returns></returns>
        /// <exception cref="NotImplementedException"></exception>
        private Microsoft.Extensions.Logging.LogLevel GetLevel(LoggerNS.LogLevel level)
        {
            Microsoft.Extensions.Logging.LogLevel ret = Microsoft.Extensions.Logging.LogLevel.Debug;

            return ret;
        }

    }
}
