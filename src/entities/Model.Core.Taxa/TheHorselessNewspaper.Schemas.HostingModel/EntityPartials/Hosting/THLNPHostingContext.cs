using Finbuckle.MultiTenant.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.Context;
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


            builder.Entity<Tenant>()
                .Navigation(n => n.Owners).AutoInclude();


            builder.Entity<Tenant>()
                .Navigation(n => n.Accounts).AutoInclude();
            builder.Entity<Tenant>()
                .Navigation(n => n.AccessControlEntries).AutoInclude();

            builder.Entity<TenantIdentifierStrategy>()
                .Navigation(n => n.StrategyContainers).AutoInclude();

            builder.Entity<Tenant>()
                .Navigation(n => n.TenantIdentifierStrategy).AutoInclude();


            //builder.Entity<Principal>()
            //    .Navigation(n => n.Tenants).AutoInclude();


            //builder.Entity<Principal>()
            //    .Navigation(n => n.OwnedTenants).AutoInclude();

            var entityTypes = builder.Model.GetEntityTypes();
            foreach (var entity in entityTypes)
            {
                var idProp = entity.FindProperty(nameof(IHostingRowLevelSecured.Id));
                var updatedProp = entity.FindProperty(nameof(IHostingRowLevelSecured.UpdatedAt));
                if (idProp != null)
                {
                    idProp.ValueGenerated = Microsoft.EntityFrameworkCore.Metadata.ValueGenerated.OnAdd;
                }

                if (updatedProp != null)
                {
                    idProp.ValueGenerated = Microsoft.EntityFrameworkCore.Metadata.ValueGenerated.OnUpdate;
                }
            }
        }

    }
}
