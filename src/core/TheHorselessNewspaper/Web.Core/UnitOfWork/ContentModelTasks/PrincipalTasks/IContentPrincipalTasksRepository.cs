using System.Security.Claims;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace HorselessNewspaper.Web.Core.UnitOfWork.ContentModelTasks.PrincipalTasks
{
    internal interface IContentPrincipalTasksRepository
    {
        Task<UnitOfWorkResult<Principal>> GetPrincipal(string UPN, string email, string ISS, string aud, string preferredUserName, string sub);
        Task<UnitOfWorkResult<Principal>> GetPrincipal(IEnumerable<Claim> claims);
    }
}