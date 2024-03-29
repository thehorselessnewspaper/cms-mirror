﻿using HorselessNewspaper.Client.Nuget.Model;
using HorselessNewspaper.Core.Interfaces.Model;
using Microsoft.Extensions.DependencyModel;
using Microsoft.Extensions.Logging;
using NuGet.Common;
using LoggerNS = NuGet.Common;
using NuGet.Configuration;
using NuGet.Frameworks;
using NuGet.Packaging;
using NuGet.Packaging.Core;
using NuGet.Packaging.Signing;
using NuGet.Protocol.Core.Types;
using NuGet.Resolver;
using NuGet.Versioning;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NuGet.Protocol;

namespace HorselessNewspaper.Client.Nuget
{
    public interface INugetLoader
    {
        public Task LoadExtensions(IEnumerable<PackageSource> packageSources, IEnumerable<ExtensionConfiguration> extensions, string nugetFrameworkParseFolder, string packageDirectory);
    }



    /// <summary>
    /// wholly based on 
    ///     https://github.com/autostep/AutoStep.Extensions
    ///     https://gist.githubusercontent.com/alistairjevans/4de1dccfb7288e0460b7b04f9a700a04/raw/68b3750f8bb438ff458586a42f43f8c153f83bd0/nugetpackageload.cs
    /// </summary>
    public class NugetLoader : INugetLoader
    {
        private NugetLoader()
{
}

        public NugetLoader(LoggerNS.ILogger nugetLoggerAdapter)
        {
            this.nugetLogger = nugetLoggerAdapter; 
        }

        LoggerNS.ILogger nugetLogger;

        public async Task LoadExtensions(IEnumerable<PackageSource> packageSources, IEnumerable<ExtensionConfiguration> extensions, string nugetFrameworkParseFolder, string packageDirectory)
        {
            // Define a source provider, with nuget, plus my own feed.P
            // as per list of new PackageSource("https://api.nuget.org/v3/index.json"),
            var sourceProvider = new PackageSourceProvider(NullSettings.Instance, packageSources);

            // Establish the source repository provider; the available providers come from our custom settings.
            var sourceRepositoryProvider = new SourceRepositoryProvider(sourceProvider, Repository.Provider.GetCoreV3());

            // Get the list of repositories.
            var repositories = sourceRepositoryProvider.GetRepositories();



            // My extension configuration:
            //var extensions = new[]
            //{
            //    new ExtensionConfiguration
            //    {
            //        Package = "AutoStep.Web",
            //        PreRelease = true // Allow pre-release versions.
            //    }
            //};

            // Replace this with a proper cancellation token.
            var tokenSource2 = new CancellationTokenSource();
            var cancellationToken = tokenSource2.Token;
            await LoadExtensions(extensions, nugetFrameworkParseFolder, packageDirectory, sourceRepositoryProvider, repositories, cancellationToken);
        }

        public async Task LoadExtensions(IEnumerable<ExtensionConfiguration> extensions, string nugetFrameworkParseFolder, string packageDirectory, SourceRepositoryProvider sourceRepositoryProvider, IEnumerable<SourceRepository> repositories, CancellationToken cancellationToken)
        {
            // Disposable source cache.
            using var sourceCacheContext = new SourceCacheContext();
            sourceCacheContext.GeneratedTempFolder = packageDirectory; // + "\\cache";
            // The framework we're using.
            var targetFramework = NuGetFramework.ParseFolder(nugetFrameworkParseFolder);

            this.nugetLogger.LogInformation($"targetting framework {targetFramework}");

            var allPackages = new HashSet<SourcePackageDependencyInfo>();

            var dependencyContext = DependencyContext.Default;

            foreach (var ext in extensions)
            {
                var packageIdentity = await GetPackageIdentity(ext, sourceCacheContext, repositories, cancellationToken);

                if (packageIdentity is null)
                {
                    throw new InvalidOperationException($"Cannot find package {ext.Package}.");
                }

                await GetPackageDependencies(packageIdentity, sourceCacheContext, targetFramework, repositories, dependencyContext, allPackages, cancellationToken);
            }

            var packagesToInstall = GetPackagesToInstall(sourceRepositoryProvider, extensions, allPackages);

            // Path.Combine(Environment.CurrentDirectory, ".extensions")
            var nugetSettings = Settings.LoadDefaultSettings(packageDirectory);

            await InstallPackages(sourceCacheContext, packagesToInstall, packageDirectory, nugetSettings, cancellationToken);
        }

        private async Task<PackageIdentity> GetPackageIdentity(
          ExtensionConfiguration extConfig, SourceCacheContext cache, 
          IEnumerable<SourceRepository> repositories, CancellationToken cancelToken)
        {
            // Go through each repository.
            // If a repository contains only pre-release packages (e.g. AutoStep CI), and 
            // the configuration doesn't permit pre-release versions,
            // the search will look at other ones (e.g. NuGet).
            foreach (var sourceRepository in repositories)
            {
                // Get a 'resource' from the repository.
                var findPackageResource = await sourceRepository.GetResourceAsync<FindPackageByIdResource>();

                // Get the list of all available versions of the package in the repository.
                var allVersions = await findPackageResource.GetAllVersionsAsync(extConfig.Package, cache, nugetLogger, cancelToken);

                NuGetVersion selected;

                // Have we specified a version range?
                if (extConfig.Version != null)
                {
                    if (!VersionRange.TryParse(extConfig.Version, out var range))
                    {
                        throw new InvalidOperationException("Invalid version range provided.");
                    }

                    // Find the best package version match for the range.
                    // Consider pre-release versions, but only if the extension is configured to use them.
                    var bestVersion = range.FindBestMatch(allVersions.Where(v => extConfig.PreRelease || !v.IsPrerelease));

                    selected = bestVersion;
                }
                else
                {
                    // No version; choose the latest, allow pre-release if configured.
                    selected = allVersions.LastOrDefault(v => v.IsPrerelease == extConfig.PreRelease);
                }

                if (selected is object)
                {
                    return new PackageIdentity(extConfig.Package, selected);
                }
            }

            return null;
        }


        private async Task<List<NuGetVersion>> ListPackageVersions(Uri repositoryUri, string nugetPackageId)
        {
            LoggerNS.ILogger logger = this.nugetLogger; // NullLogger.Instance;
            CancellationToken cancellationToken = CancellationToken.None;

            SourceCacheContext cache = new SourceCacheContext();
            SourceRepository repository = Repository.Factory.GetCoreV3(repositoryUri.AbsoluteUri);
            FindPackageByIdResource resource = await repository.GetResourceAsync<FindPackageByIdResource>();

            IEnumerable<NuGetVersion> versions = await resource.GetAllVersionsAsync(
                nugetPackageId,
                cache,
                logger,
                cancellationToken);

            return new List<NuGetVersion>(versions);
        }

        private async Task GetPackageDependencies(PackageIdentity package, SourceCacheContext cacheContext, NuGetFramework framework, IEnumerable<SourceRepository> repositories, DependencyContext hostDependencies,
                                              ISet<SourcePackageDependencyInfo> availablePackages, CancellationToken cancelToken)
        {
            // Don't recurse over a package we've already seen.
            if (availablePackages.Contains(package))
            {

                this.nugetLogger.LogInformation($"resolving dependencies: ignoring dependency {package.Id}");
                return;
            }

            foreach (var sourceRepository in repositories)
            {
                // Get the dependency info for the package.
                var dependencyInfoResource = await sourceRepository.GetResourceAsync<DependencyInfoResource>();
                SourcePackageDependencyInfo dependencyInfo = null;

                try
                {

                    this.nugetLogger.LogInformation($"resolving dependencies: not ignoring dependency {package.Id}");

                    this.nugetLogger.LogInformation($"resolving dependencies: cache context {cacheContext.GeneratedTempFolder}");

                    //// probe the repository for this package before trying to resolve 
                    var repoHasVersions = await this.ListPackageVersions(sourceRepository.PackageSource.SourceUri, package.Id);
                    this.nugetLogger.LogInformation($"resolving dependencies: probing for {package.Id} at {sourceRepository.PackageSource.SourceUri}");

                    if (repoHasVersions == null || repoHasVersions.Count == 0)
                    {
                        this.nugetLogger.LogInformation($"resolving dependencies: no version found for {package.Id} at {sourceRepository.PackageSource.SourceUri}");
                        continue;
                    }
                    else
                    {
                        this.nugetLogger.LogInformation($"resolving dependencies: found version found for {package.Id} at {sourceRepository.PackageSource.SourceUri}");

                    }

                    dependencyInfo = await dependencyInfoResource.ResolvePackage(
                        package,
                        framework, 
                        cacheContext,
                        this.nugetLogger,
                        cancelToken);

                    this.nugetLogger.LogInformation($"resolving dependencies: complete {package.Id}");
                }
                catch
                {

                    this.nugetLogger.LogError($"resolving dependencies: exception for dependency {package.Id}: Message ");
                    continue;
                }

                // No info for the package in this repository.
                if (dependencyInfo == null)
                {

                    this.nugetLogger.LogInformation($"resolving dependencies: null dependency {package.Id}");
                    continue;
                }


                this.nugetLogger.LogInformation($"filtering dependency info {package.Id}");
                // Filter the dependency info.
                // Don't bring in any dependencies that are provided by the host.
                var actualSourceDep = new SourcePackageDependencyInfo(
                    dependencyInfo.Id,
                    dependencyInfo.Version,
                    dependencyInfo.Dependencies.Where(dep => !DependencySuppliedByHost(hostDependencies, dep)), // beware a behaviour flag on DependencySuppliedByHost with a default false here 
                    dependencyInfo.Listed,
                    dependencyInfo.Source);


                this.nugetLogger.LogInformation($"resolving dependencies: filtered dependencies {package.Id}");
                availablePackages.Add(actualSourceDep);

                // Recurse through each package.
                foreach (var dependency in actualSourceDep.Dependencies)
                {

                    this.nugetLogger.LogInformation($"resolving dependencies of dependencies: package = {package.Id}, dependency = {dependency.Id}");
                    await GetPackageDependencies(
                        new PackageIdentity(dependency.Id, dependency.VersionRange.MinVersion),
                        cacheContext,
                        framework,
                        repositories,
                        hostDependencies,
                        availablePackages,
                        cancelToken);
                }

                break;
            }
        }

        private bool DependencySuppliedByHost(DependencyContext hostDependencies, PackageDependency dep)
        {
            if (RuntimeProvidedPackages.IsPackageProvidedByRuntime(dep.Id))
            {

                this.nugetLogger.LogInformation($"resolving dependencies: ignoring dependency provided by runtime {dep.Id}");
                return true;
            }

            // See if a runtime library with the same ID as the package is available in the host's runtime libraries.
            var runtimeLib = hostDependencies.RuntimeLibraries.FirstOrDefault(r => r.Name == dep.Id);

            if (runtimeLib is object)
            {
                // What version of the library is the host using?
                var parsedLibVersion = NuGetVersion.Parse(runtimeLib.Version);

                this.nugetLogger.LogInformation($"resolving dependencies: runtime resolved {runtimeLib.Name} dependency version {parsedLibVersion.ToFullString()} at path {runtimeLib.Path}");
                if (parsedLibVersion.IsPrerelease)
                {
                    // Always use pre-release versions from the host, otherwise it becomes
                    // a nightmare to develop across multiple active versions.
                    this.nugetLogger.LogInformation($"resolving dependencies: runtime resolved {runtimeLib.Name} dependency version is prelease: {parsedLibVersion.ToFullString()}");

                    return true;
                }
                else
                {
                    // Does the host version satisfy the version range of the requested package?
                    // If so, we can provide it; otherwise, we cannot.
                    this.nugetLogger.LogInformation($"resolving dependencies: runtime resolved {runtimeLib.Name} dependency satisfies required version {parsedLibVersion.ToFullString()}");

                    return dep.VersionRange.Satisfies(parsedLibVersion);
                }
            }

            return false;
        }


        private async Task InstallPackages(SourceCacheContext sourceCacheContext,
                                           IEnumerable<SourcePackageDependencyInfo> packagesToInstall, string rootPackagesDirectory,
                                           ISettings nugetSettings, CancellationToken cancellationToken)
        {
            this.nugetLogger.LogInformation($"installing packages");
            this.nugetLogger.LogInformation($"installing packages to directory {rootPackagesDirectory}");
            var packagePathResolver = new PackagePathResolver(rootPackagesDirectory, true);
            var packageExtractionContext = new PackageExtractionContext(
                PackageSaveMode.Defaultv3,
                XmlDocFileSaveMode.Skip,
                ClientPolicyContext.GetClientPolicy(nugetSettings, nugetLogger),
                nugetLogger);



            foreach (var package in packagesToInstall)
            {
                var downloadResource = await package.Source.GetResourceAsync<DownloadResource>(cancellationToken);
                DownloadResourceResult downloadResult;

                try
                {
                    // Download the package (might come from the shared package cache).
                        downloadResult = await downloadResource.GetDownloadResourceResultAsync(
                        package,
                        new PackageDownloadContext(sourceCacheContext),
                        SettingsUtility.GetGlobalPackagesFolder(nugetSettings),
                        nugetLogger,
                        cancellationToken);
                }
                catch(Exception ex)
                {
                    throw ex;
                }

                try
                {
                    // Extract the package into the target directory.
                    await PackageExtractor.ExtractPackageAsync(
                        downloadResult.PackageSource,
                        downloadResult.PackageStream,
                        packagePathResolver,
                        packageExtractionContext,
                        cancellationToken);
                }
                catch(Exception ex)
                {
                    throw ex;
                }
            }
        }

        private IEnumerable<SourcePackageDependencyInfo> GetPackagesToInstall(SourceRepositoryProvider sourceRepositoryProvider,
                                                                               IEnumerable<ExtensionConfiguration> extensions,
                                                                              HashSet<SourcePackageDependencyInfo> allPackages)
        {
            // Create a package resolver context (this is used to help figure out which actual package versions to install).
            var resolverContext = new PackageResolverContext(
                   DependencyBehavior.Lowest,
                   extensions.Select(x => x.Package),
                   Enumerable.Empty<string>(),
                   Enumerable.Empty<PackageReference>(),
                   Enumerable.Empty<PackageIdentity>(),
                   allPackages,
                   sourceRepositoryProvider.GetRepositories().Select(s => s.PackageSource),
                   nugetLogger);

            var resolver = new PackageResolver();

            // Work out the actual set of packages to install.
            var packagesToInstall = resolver.Resolve(resolverContext, CancellationToken.None)
                                            .Select(p => allPackages.Single(x => PackageIdentityComparer.Default.Equals(x, p)));
            return packagesToInstall;
        }

    } // class

} // namespace
