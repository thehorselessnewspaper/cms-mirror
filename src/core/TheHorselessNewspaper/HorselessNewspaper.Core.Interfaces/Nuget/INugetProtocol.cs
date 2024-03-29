﻿using HorselessNewspaper.Core.Interfaces.Model;
using NuGet.Configuration;
using NuGet.Versioning;
using NuGet.Packaging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Core.Interfaces.Nuget
{
    /// <summary>
    /// support authenticated feeds
    /// </summary>
    public interface INugetProtocolCredentials
    {
        public string UserName { get; set;  }

        public string Password { get; set; }
    }

    /// <summary>
    /// wrapper for the .net nuget client sdk
    /// 
    /// supports username/password authenticated feeds
    /// </summary>
    public interface INugetProtocol
    {
        public PackageSource GetNugetCredentials(Uri repositoryUri, INugetProtocolCredentials credentials);

        public Task<List<NuGetVersion>> ListPackageVersions(Uri repositoryUri, string nugetPackageId);
        public Task<List<NuGetVersion>> ListPackageVersions(Uri repositoryUri, string nugetPackageId, INugetProtocolCredentials credentials);

        public Task<NuGetVersion> PersistNugetTolocalFilesystem(Uri repositoryUri, string nugetPackageId, NuGetVersion nugetVersion, string folderPath);
        public Task<NuGetVersion> PersistNugetTolocalFilesystem(Uri repositoryUri, string nugetPackageId, NuGetVersion nugetVersion, string folderPath, INugetProtocolCredentials credentials);

        /// <summary>
        /// nugetFrameworkParseFolder supports
        ///  https://docs.microsoft.com/en-us/dotnet/standard/frameworks
        /// </summary>
        /// <param name="packageSources"></param>
        /// <param name="extensions"></param>
        /// <param name="nugetFrameworkParseFolder"></param>
        /// <param name="packageDirectory"></param>
        /// <returns></returns>
        public Task LoadExtensions(IEnumerable<PackageSource> packageSources, IEnumerable<IExtensionConfiguration> extensions, TargetedFramework nugetFrameworkParseFolder, string packageDirectory);

        /// <summary>
        /// introspoect a package and enumerate its dependencies
        /// </summary>
        /// <param name="filePathAndName"></param>
        /// <returns></returns>
        public Task<IEnumerable<PackageDependencyGroup>> GetPackageDependencies(string filePathAndName);
    }
}
