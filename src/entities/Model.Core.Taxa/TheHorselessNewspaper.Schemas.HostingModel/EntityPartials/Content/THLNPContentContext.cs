using Finbuckle.MultiTenant.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.MultiTenant;
using TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    /// <summary>
    /// dbcontext inheritance chain issues resolved as per
    /// - https://github.com/dotnet/efcore/issues/7533
    /// </summary>
    internal partial class THLNPContentContext : DbContext
    {
        private ILogger<THLNPContentContext> _logger;
        protected THLNPContentContext(DbContextOptions options)
            : base(options)
        {

        }


        partial void OnModelCreatingPartial(ModelBuilder builder)
        {

            // If necessary call the base class method.
            // Recommended to be called first.
            base.OnModelCreating(builder);

            // Configure all entity types marked with the [MultiTenant] data attribute
            builder.ConfigureMultiTenant();

            // Configure an entity type to be multitenant.
            // todo -- support not hardcoding this here
            builder.Entity<HorselessTenantInfo>().IsMultiTenant();

            //builder.Entity<ContentCollection>()
            //    .OwnsMany<Principal>(m => m.Owners)
            //    .WithOwner().HasForeignKey(k => k.Id);
            //builder.Entity<ContentCollection>()
            //    .OwnsMany<AccessControlEntry>(m => m.AccessControlList);


        }

    }
}
