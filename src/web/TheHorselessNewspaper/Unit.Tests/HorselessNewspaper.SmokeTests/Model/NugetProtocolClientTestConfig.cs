using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.SmokeTests.Model
{
    internal class NugetProtocolClientTestConfig
    {
        public string PackageCacheLocation { get; set; } = string.Empty;

        public string NugetPackageId { get; set; } = string.Empty;

        public string RepositoryUrl { get; set; } = string.Empty;

        public string UserName { get; set; } = string.Empty;

        public string Password { get; set; }  = string.Empty;

    }
}
