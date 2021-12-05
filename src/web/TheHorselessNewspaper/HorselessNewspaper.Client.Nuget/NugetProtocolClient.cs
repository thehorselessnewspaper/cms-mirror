using HorselessNewspaper.Core.Interfaces.Nuget;
using NuGet.Versioning;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Client.Nuget
{
    /// <summary>
    /// supports asset deployment and management via nuget package
    /// </summary>
    public class NugetProtocolClient : INugetProtocol
    {
        public async Task<List<NuGetVersion>> ListPackageVersions(Uri repositoryUri, string nugetPackageId, string userName = "", string password = "")
        {
            return await Task.FromResult(new List<NuGetVersion>());
        }

        public async Task<NuGetVersion> PersistNugetTolocalFilesystem(Uri repositoryUri, string nugetPackageId, NuGetVersion nugetVersion, string folderPath, string userName = "", string password = "")
        {
            return await Task.FromResult(new NuGetVersion(""));
        }
    }
}
