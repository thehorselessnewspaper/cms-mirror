using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using TheHorselessNewspaper.Schemas.HostingModel.DTO;
using TheHorselessNewspaper.Schemas.HostingModel.Entities;
using Microsoft.EntityFrameworkCore;

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
    public partial class THNLPContentContext : DbContext
    {

        public THNLPContentContext(DbContextOptions<THNLPContentContext> options, TenantInfoDTO tenant)
        : base(options)
        {
        }

        protected THNLPContentContext(DbContextOptions options, TenantInfoDTO tenant)
        : base(options)
        {
              
        }
    }
}
