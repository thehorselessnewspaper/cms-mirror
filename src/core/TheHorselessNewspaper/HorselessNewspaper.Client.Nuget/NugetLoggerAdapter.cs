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
        // TODO ouch the adapter is hardcoded for specific ILogger<T>
        public Microsoft.Extensions.Logging.ILogger<NugetLoader> NugetLoaderlogger { get; set; }


        private  NugetLoggerAdapter()
        {

        }


        public NugetLoggerAdapter(
            Microsoft.Extensions.Logging.ILogger<NugetLoader> nugetLoaderLogger)
        {

            NugetLoaderlogger = nugetLoaderLogger;
        }

        public void Log(LoggerNS.LogLevel level, string data)
        {
            var newLevel = GetLevel(level);
            if (NugetLoaderlogger != null)
            {
                NugetLoaderlogger.Log(newLevel, data);
            }

        }


        public void Log(LoggerNS.ILogMessage message)
        {
            var newLevel = GetLevel(message.Level);
            if (NugetLoaderlogger != null)
            {
                NugetLoaderlogger.Log(newLevel, message.Message); ;
            }
        }

        public async Task LogAsync(LoggerNS.LogLevel level, string data)
        {
            var newLevel = GetLevel(level);
            var nullAsync = await Task.FromResult<string>("");

            if (NugetLoaderlogger != null)
            {
                NugetLoaderlogger.Log(newLevel, data);
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

            if (NugetLoaderlogger != null)
            {
                NugetLoaderlogger.Log(newLevel, message.Message);
                return;
            }
            else
            {
                return;
            }
        }

        public void LogDebug(string data)
        {

            if (NugetLoaderlogger != null)
            {
                NugetLoaderlogger.LogDebug(data); ;
            }
        }

        public void LogError(string data)
        {

            if (NugetLoaderlogger != null)
            {
                NugetLoaderlogger.LogError(data); ;
            }
        }

        public void LogInformation(string data)
        {

            if (NugetLoaderlogger != null)
            {
                NugetLoaderlogger.LogInformation(data); ;
            }
        }

        public void LogInformationSummary(string data)
        {

            if (NugetLoaderlogger != null)
            {
                NugetLoaderlogger.LogInformation(data); ;
            }
        }

        public void LogMinimal(string data)
        {

            if (NugetLoaderlogger != null)
            {
                NugetLoaderlogger.LogInformation(data); ;
            }
        }

        public void LogVerbose(string data)
        {

            if (NugetLoaderlogger != null)
            {
                NugetLoaderlogger.LogInformation(data); ;
            }
        }

        public void LogWarning(string data)
        {

            if (NugetLoaderlogger != null)
            {
                NugetLoaderlogger.LogWarning(data); ;
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
