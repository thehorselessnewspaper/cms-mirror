using NuGet.Versioning;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.Interfaces
{
    /// <summary>
    /// wrapper for the .net nuget client sdk
    /// 
    /// supports username/password authenticated feeds
    /// </summary>
    public interface INugetProtocol
    {
        Task<List<NuGetVersion>> ListPackageVersions(Uri repositoryUri, string nugetPackageId, string userName = "", string password = "");

        Task<NuGetVersion> PersistNugetTolocalFilesystem(Uri repositoryUri, string nugetPackageId, NuGetVersion nugetVersion, string folderPath, string userName = "", string password = "");
    }
}
