using HorselessNewspaper.Core.Interfaces.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Client.Nuget.Model
{
    public class ExtensionConfiguration : IExtensionConfiguration
    {
        public string Package { get; set; }
        public string Version { get; set; }
        public bool PreRelease { get; set; }
    }
}
