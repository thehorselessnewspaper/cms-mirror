using HorselessNewspaper.Core.Interfaces.Nuget;
using NuGet.Common;
using NuGet.Configuration;
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

            var packageSource = new PackageSource(repositoryUri.AbsoluteUri)
            {
                Credentials = new PackageSourceCredential(
                    source: repositoryUri.AbsolutePath,
                    username: credentials.UserName,
                    passwordText: credentials.Password,
                    isPasswordClearText: true,
                    validAuthenticationTypesText: null)
            };

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


        public Task<NuGetVersion> PersistNugetTolocalFilesystem(Uri repositoryUri, string nugetPackageId, NuGetVersion nugetVersion, string folderPath)
        {
            throw new NotImplementedException();
        }

        public Task<NuGetVersion> PersistNugetTolocalFilesystem(Uri repositoryUri, string nugetPackageId, NuGetVersion nugetVersion, string folderPath, INugetProtocolCredentials credentials)
        {
            throw new NotImplementedException();
        }
    }
}
