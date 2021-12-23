using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Core.Interfaces.Model
{
    public interface IExtensionConfiguration
    {
        public string Package { get; set; }
        public string Version { get; set; }
        public bool PreRelease { get; set; }
    }
}
