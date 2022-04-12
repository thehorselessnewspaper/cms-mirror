using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace HorselessNewspaper.Core.Repositories.TenantPrincipal
{
    public interface IContentModelTenantPrincipalRepository
    {
        Task<RepositoryResult<Principal>> GetPrincipal(string UPN, string email, string ISS, string aud);
    }
}