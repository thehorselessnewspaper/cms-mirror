using HorselessNewspaper.Core.Interfaces.Model;
using HorselessNewspaper.Core.Interfaces.Nuget;
// using Microsoft.Extensions.Logging;
using NuGet.Common;
using LoggerNS = NuGet.Common;
using NuGet.Configuration;
using NuGet.Packaging;
using NuGet.Protocol;
using NuGet.Protocol.Core.Types;
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
        // because nuget processing is xml tree parsing
        // and injecting a logger is weird apparently
        Microsoft.Extensions.Logging.ILogger<NugetProtocolClient> _logger;
        LoggerNS.ILogger _nugetLogger;

        INugetLoader nugetLoader;

        private NugetProtocolClient()
        { }

        public NugetProtocolClient
            (Microsoft.Extensions.Logging.ILogger<NugetProtocolClient> logger,
            LoggerNS.ILogger nugetLogger,
            INugetLoader loader)
        {
            this._logger = logger;
            nugetLoader = loader;
            this._nugetLogger = nugetLogger;
        }

        public async Task<List<NuGetVersion>> ListPackageVersions(Uri repositoryUri, string nugetPackageId)
        {
            ILogger logger = _nugetLogger; // NullLogger.Instance;
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

        public async Task<List<NuGetVersion>> ListPackageVersions(Uri repositoryUri, string nugetPackageId, INugetProtocolCredentials credentials)
        {
            ILogger logger = _nugetLogger; // NullLogger.Instance;
            CancellationToken cancellationToken = CancellationToken.None;
            SourceCacheContext cache = new SourceCacheContext();

            PackageSource packageSource = GetNugetCredentials(repositoryUri, credentials);

            // If the `SourceRepository` is created with a `PackageSource`, the rest of APIs will consume the credentials attached to `PackageSource.Credentials`.
            SourceRepository repository = Repository.Factory.GetCoreV3(packageSource);

            FindPackageByIdResource resources = await repository.GetResourceAsync<FindPackageByIdResource>();

            IEnumerable<NuGetVersion> versions = await resources.GetAllVersionsAsync(
                nugetPackageId,
                cache,
                logger,
                cancellationToken);


            return new List<NuGetVersion>(versions);
        }

        public PackageSource GetNugetCredentials(Uri repositoryUri, INugetProtocolCredentials credentials)
        {
            return new PackageSource(repositoryUri.AbsoluteUri)
            {
                Credentials = new PackageSourceCredential(
                    source: repositoryUri.AbsoluteUri,
                    username: credentials.UserName,
                    passwordText: credentials.Password,
                    isPasswordClearText: true,
                    validAuthenticationTypesText: null)
            };
        }

        public async Task<NuGetVersion> PersistNugetTolocalFilesystem(Uri repositoryUri, string nugetPackageId, NuGetVersion nugetVersion, string folderPath)
        {
            ILogger logger = _nugetLogger; // NullLogger.Instance;
            CancellationToken cancellationToken = CancellationToken.None;

            SourceCacheContext cache = new SourceCacheContext();
            SourceRepository repository = Repository.Factory.GetCoreV3(repositoryUri.AbsoluteUri);
            FindPackageByIdResource resource = await repository.GetResourceAsync<FindPackageByIdResource>();

            string packageId = nugetPackageId;
            NuGetVersion packageVersion = nugetVersion;

            using FileStream packageStream = File.Open(folderPath, FileMode.OpenOrCreate);
            await resource.CopyNupkgToStreamAsync(
                packageId,
                packageVersion,
                packageStream,
                cache,
                logger,
                cancellationToken);

            logger.LogInformation($"Downloaded package {packageId} {packageVersion}");

            using PackageArchiveReader packageReader = new PackageArchiveReader(packageStream);
            NuspecReader nuspecReader = await packageReader.GetNuspecReaderAsync(cancellationToken);

            logger.LogInformation($"Tags: {nuspecReader.GetTags()}");
            logger.LogInformation($"Description: {nuspecReader.GetDescription()}");

            return await Task.FromResult<NuGetVersion>(nugetVersion);
        }

        public async Task<NuGetVersion> PersistNugetTolocalFilesystem(Uri repositoryUri, string nugetPackageId, NuGetVersion nugetVersion, string folderPath, INugetProtocolCredentials credentials)
        {
            ILogger logger = _nugetLogger; // NullLogger.Instance;
            CancellationToken cancellationToken = CancellationToken.None;

            SourceCacheContext cache = new SourceCacheContext();
            PackageSource packageSource = GetNugetCredentials(repositoryUri, credentials);

            SourceRepository repository = Repository.Factory.GetCoreV3(packageSource);
            FindPackageByIdResource resource = await repository.GetResourceAsync<FindPackageByIdResource>();

            string packageId = nugetPackageId;
            NuGetVersion packageVersion = nugetVersion;

            using FileStream packageStream = File.Open(folderPath + packageId + ".dll", FileMode.OpenOrCreate);
            await resource.CopyNupkgToStreamAsync(
                packageId,
                packageVersion,
                packageStream,
                cache,
                logger,
                cancellationToken);

            logger.LogInformation($"Downloaded package {packageId} {packageVersion}");

            using PackageArchiveReader packageReader = new PackageArchiveReader(packageStream);
            NuspecReader nuspecReader = await packageReader.GetNuspecReaderAsync(cancellationToken);

            logger.LogInformation($"Tags: {nuspecReader.GetTags()}");
            logger.LogInformation($"Description: {nuspecReader.GetDescription()}");

            return await Task.FromResult<NuGetVersion>(nugetVersion);
        }


        /// <summary>
        /// load a nuget package and its dependencies
        ///  for a specific supported .net (core) target framework
        ///  from a set of nuget sdk package sources
        ///    preauthenticated if necessary
        ///  materialize in the specified folder
        /// wholly based on 
        ///     https://github.com/autostep/AutoStep.Extensions
        ///     https://gist.githubusercontent.com/alistairjevans/4de1dccfb7288e0460b7b04f9a700a04/raw/68b3750f8bb438ff458586a42f43f8c153f83bd0/nugetpackageload.cs
        /// </summary>
        /// <param name="packageSources"></param>
        /// <param name="extensions"></param>
        /// <param name="nugetFrameworkParseFolder"></param>
        /// <param name="packageDirectory"></param>
        /// <returns></returns>
        public async Task LoadExtensions(IEnumerable<PackageSource> packageSources, IEnumerable<IExtensionConfiguration> extensions, TargetedFramework nugetFrameworkParseFolder, string packageDirectory)
        {

            foreach(var source in packageSources)
            {
                this._nugetLogger.LogInformation($"loading from package source {source.SourceUri.AbsoluteUri}");
            }

            // Define a source provider, with nuget, plus my own feed.
            // as per list of new PackageSource("https://api.nuget.org/v3/index.json"),
            var sourceProvider = new PackageSourceProvider(NullSettings.Instance, packageSources);

            // Establish the source repository provider; the available providers come from our custom settings.
            var sourceRepositoryProvider = new SourceRepositoryProvider(sourceProvider, Repository.Provider.GetCoreV3());

            // Get the list of repositories.
            var repositories = sourceRepositoryProvider.GetRepositories();

            // Replace this with a proper cancellation token.
            var cancellationToken = CancellationToken.None;

            var extensionConfigurations = new List<ExtensionConfiguration>();
            foreach(var extension in extensions)
            {
                this._nugetLogger.LogInformation($"loading {extension.Package}, {extension.Version} for target framework {nugetFrameworkParseFolder.Value}");
                extensionConfigurations.Add(new ExtensionConfiguration()
                {
                    Package = extension.Package,
                    PreRelease = extension.PreRelease,
                    Version = extension.Version
                });
            }

            nugetLoader.LoadExtensions(packageSources, extensionConfigurations, nugetFrameworkParseFolder.Value, packageDirectory);    

        }

        public async Task LoadExtensions(IEnumerable<PackageSource> packageSources, 
                IEnumerable<IExtensionConfiguration> extensions, 
                TargetedFramework nugetFrameworkParseFolder, 
                string packageDirectory, INugetProtocolCredentials credentials)
        {

            foreach(var source in packageSources)
            {
                this._nugetLogger.LogInformation($"loading from package source {source.SourceUri.AbsoluteUri}");
            }

            // Define a source provider, with nuget, plus my own feed.
            // as per list of new PackageSource("https://api.nuget.org/v3/index.json"),
            var sourceProvider = new PackageSourceProvider(NullSettings.Instance, packageSources);

            // Establish the source repository provider; the available providers come from our custom settings.
            var sourceRepositoryProvider = new SourceRepositoryProvider(sourceProvider, Repository.Provider.GetCoreV3());

            // Get the list of repositories.
            var repositories = sourceRepositoryProvider.GetRepositories();

            // Replace this with a proper cancellation token.
            var cancellationToken = CancellationToken.None;

            var extensionConfigurations = new List<ExtensionConfiguration>();
            foreach(var extension in extensions)
            {
                this._nugetLogger.LogInformation($"loading {extension.Package}, {extension.Version} for target framework {nugetFrameworkParseFolder.Value}");
                extensionConfigurations.Add(new ExtensionConfiguration()
                {
                    Package = extension.Package,
                    PreRelease = extension.PreRelease,
                    Version = extension.Version
                });
            }

            nugetLoader.LoadExtensions(packageSources, extensionConfigurations, nugetFrameworkParseFolder.Value, packageDirectory);    

        }

       
    }
}
