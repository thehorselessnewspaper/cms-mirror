using HorselessNewspaper.Core.Interfaces.Knuth.TreeNodes;
using HorselessNewspaper.Core.Interfaces.Model.Knuth.TreeNodes;
using HorselessNewspaper.Core.Interfaces.Persistence.FileFormPersistence;

namespace HorselessNewspaper.Core.Repositories.TenantFilesystem
{
    public interface ITenantFilesystemRepository : IHorselessFilePersistenceProvider
    {
        Task<MountLocalTenantFilesystemResult> Mount(bool createPathIfNotExists = false, params string[] pathSegments);
        Task<bool> DirectoryExists(params string[] pathSegments);

        Task<string> GetOSNormalizedPath(params string[] pathSegments);
        public Task<bool> RenderFilesystemTree(IEnumerable<HorselessTreeNode<string>> filesystemTree);
        public Task<bool> RenderFilesystemTree(IEnumerable<HorselessFilesystemTreeNode<string>> filesystemTree);
    }
}
