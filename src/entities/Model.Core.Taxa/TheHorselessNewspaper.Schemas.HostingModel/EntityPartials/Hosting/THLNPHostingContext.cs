using Finbuckle.MultiTenant.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.Context.Extensions;

namespace TheHorselessNewspaper.Schemas.HostingModel.HostingEntities
{
    internal partial class THLNPHostingContext : DbContext
    {
        public Guid ContextInstanceId { get; set; } = Guid.NewGuid();

        partial void OnModelCreatingPartial(ModelBuilder builder)
        {


            // Configure all entity types marked with the [MultiTenant] data attribute
            // TODO enable multitenant on the hosting context
            // builder.ConfigureMultiTenant();

            // tweak modelbuilder conventions due to reverse engineering issues with cascade.delete
            // as per https://www.red-gate.com/simple-talk/blogs/change-delete-behavior-and-more-on-ef-core/
            builder.AddRemoveOneToManyCascadeConvention();

            builder.ApplyConventions();


            // If necessary call the base class method.
            // Recommended to be called first.
            base.OnModelCreating(builder);

        }

    }
}
