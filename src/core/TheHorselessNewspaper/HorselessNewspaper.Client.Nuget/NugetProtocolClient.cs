using HorselessNewspaper.Core.Interfaces.Nuget;
using NuGet.Common;
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

        public async Task<List<NuGetVersion>> ListPackageVersions(Uri repositoryUri, string nugetPackageId)
        {
            ILogger logger = NullLogger.Instance;
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
            ILogger logger = NullLogger.Instance;
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
            ILogger logger = NullLogger.Instance;
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

            Console.WriteLine($"Downloaded package {packageId} {packageVersion}");

            using PackageArchiveReader packageReader = new PackageArchiveReader(packageStream);
            NuspecReader nuspecReader = await packageReader.GetNuspecReaderAsync(cancellationToken);

            Console.WriteLine($"Tags: {nuspecReader.GetTags()}");
            Console.WriteLine($"Description: {nuspecReader.GetDescription()}");

            return await Task.FromResult<NuGetVersion>(nugetVersion);
        }

        public async Task<NuGetVersion> PersistNugetTolocalFilesystem(Uri repositoryUri, string nugetPackageId, NuGetVersion nugetVersion, string folderPath, INugetProtocolCredentials credentials)
        {
            ILogger logger = NullLogger.Instance;
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

            Console.WriteLine($"Downloaded package {packageId} {packageVersion}");

            using PackageArchiveReader packageReader = new PackageArchiveReader(packageStream);
            NuspecReader nuspecReader = await packageReader.GetNuspecReaderAsync(cancellationToken);

            Console.WriteLine($"Tags: {nuspecReader.GetTags()}");
            Console.WriteLine($"Description: {nuspecReader.GetDescription()}");

            return await Task.FromResult<NuGetVersion>(nugetVersion);
        }
    }
}
