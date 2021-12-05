using HorselessNewspaper.Core.Interfaces.Nuget;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Client.Nuget.Model
{

    public interface INugetProtocolClientConfig
    {
        bool IsAnonymous { get; set; }
        string NugetPackageId { get; set; }
        string PackageCacheLocation { get; set; }
        string RepositoryUrl { get; set; }
    }

    public class NugetProtocolCredentials : INugetProtocolCredentials
    {
        public string UserName { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }


    /// <summary>
    /// configuration model for Nuget Client
    /// </summary>
    public class NugetProtocolClientConfig : INugetProtocolClientConfig
    {

        public Boolean IsAnonymous { get; set; } = true;

        public string PackageCacheLocation { get; set; } = string.Empty;

        public string NugetPackageId { get; set; } = string.Empty;

        public string RepositoryUrl { get; set; } = string.Empty;

        INugetProtocolCredentials Credentials { get; set; } = new NugetProtocolCredentials();
    }
}
