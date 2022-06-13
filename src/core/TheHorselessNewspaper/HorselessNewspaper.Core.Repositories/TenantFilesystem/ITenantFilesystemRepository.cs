using HorselessNewspaper.Core.Interfaces.Persistence.FileFormPersistence;

namespace HorselessNewspaper.Core.Repositories.TenantFilesystem
{
    public interface ITenantFilesystemRepository : IHorselessFilePersistenceProvider
    {
        Task<MountLocalTenantFilesystemResult> Mount(string path);
    }
}
