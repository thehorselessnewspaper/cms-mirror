using HorselessNewspaper.Core.Interfaces.Persistence.FileFormPersistence;

namespace HorselessNewspaper.Core.Repositories.TenantFilesystem
{
    public interface ITenantFilesystemRepository : IHorselessFilePersistenceProvider
    {
        Task<MountLocalTenantFilesystemResult> Mount(bool createPathIfNotExists = false, params string[] pathSegments);
        Task<bool> DirectoryExists(params string[] pathSegments);

        Task<string> GetOSNormalizedPath(params string[] pathSegments);
    }
}
