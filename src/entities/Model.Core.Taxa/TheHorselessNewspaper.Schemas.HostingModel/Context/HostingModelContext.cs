using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.HostingModel.DTO;
using TheHorselessNewspaper.Schemas.HostingModel.Entities;

/// <summary>
/// note this namespace corresponds with the partial class it implements, not this folder
/// </summary>
namespace TheHorselessNewspaper.Schemas.HostingModel.Entities
{
    /// <summary>
    /// as per 
    ///  - patterns for heritable custom DbContext
    ///     - https://github.com/dotnet/EntityFramework.Docs/issues/594
    ///  - support database per tenant
    ///     - as per Finbuckle MultiTenant https://www.finbuckle.com/MultiTenant/Docs/v6.5.1/EFCore#introduction
    /// </summary>
    public partial class THNLPHostingContext : DbContext
    {
        public THNLPHostingContext(DbContextOptions<THNLPHostingContext> options, TenantInfoDTO tenant)
        : base(options)
        {
        }

        protected THNLPHostingContext(DbContextOptions options, TenantInfoDTO tenant)
            : base(options)
        {
        }
    }
}
