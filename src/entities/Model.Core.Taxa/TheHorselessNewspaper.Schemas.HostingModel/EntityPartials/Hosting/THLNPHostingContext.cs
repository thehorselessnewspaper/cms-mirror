using Finbuckle.MultiTenant.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TheHorselessNewspaper.Schemas.HostingModel.HostingEntities
{
    internal partial class THLNPHostingContext : DbContext
    {
        partial void OnModelCreatingPartial(ModelBuilder builder)
        {

            // If necessary call the base class method.
            // Recommended to be called first.
            base.OnModelCreating(builder);

            // Configure all entity types marked with the [MultiTenant] data attribute
            builder.ConfigureMultiTenant();

            // Configure an entity type to be multitenant.
            builder.Entity<Finbuckle.MultiTenant.TenantInfo>().IsMultiTenant();




        }

    }
}
