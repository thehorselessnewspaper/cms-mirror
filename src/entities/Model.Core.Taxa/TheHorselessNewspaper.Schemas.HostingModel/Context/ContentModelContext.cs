using Microsoft.EntityFrameworkCore;
using TheHorselessNewspaper.Schemas.HostingModel.Entities;

/// <summary>
/// note this namespace corresponds with the partial class it implements, not this folder
/// </summary>
namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    /// <summary>
    /// as per 
    ///  - patterns for heritable custom DbContext
    ///     - https://github.com/dotnet/EntityFramework.Docs/issues/594
    ///  - support database per tenant
    ///     - as per Finbuckle MultiTenant https://www.finbuckle.com/MultiTenant/Docs/v6.5.1/EFCore#introduction
    /// </summary>
    internal partial class THLNPContentContext : DbContext
    {

        public THLNPContentContext(DbContextOptions<THLNPContentContext> options, TenantInfo tenant)
        : base(options)
        {
        }

        protected THLNPContentContext(DbContextOptions options, TenantInfo tenant)
        : base(options)
        {
              
        }
    }
}
