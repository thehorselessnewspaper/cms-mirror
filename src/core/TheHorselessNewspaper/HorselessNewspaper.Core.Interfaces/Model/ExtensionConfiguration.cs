using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Core.Interfaces.Model
{
    /// <summary>
    /// support nuget target framework specification 
    /// as per 
    ///  https://docs.microsoft.com/en-us/dotnet/standard/frameworks
    /// </summary>
    public class TargetedFramework
    {
        private TargetedFramework() { }

        public TargetedFramework(string value)
        {
            Value = value; 
        }

        /// <summary>
        /// TODO prevent setting any but the list specified as constants here
        /// </summary>
        public string Value { get; set; } = string.Empty;

        public const string NET60 = "net6.0";
        public const string NET50 = "net5.0";
        public const string NETCoreApp31 = "netcoreapp3.1";
    }

  
    public interface IExtensionConfiguration
    {
        public string Package { get; set; }
        public string Version { get; set; }
        public bool PreRelease { get; set; }
    }
}
