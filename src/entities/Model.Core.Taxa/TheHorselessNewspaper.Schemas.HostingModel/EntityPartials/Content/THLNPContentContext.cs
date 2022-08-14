using Finbuckle.MultiTenant.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.Context;
using TheHorselessNewspaper.HostingModel.Context.Extensions;
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
        public Guid ContextInstanceId { get; set; } = Guid.NewGuid();
        public DbSet<TenantIdentifierStrategyContainer> TenantIdentifierStrategyContainers { get; set; }

        public DbSet<TenantIdentifierStrategy> TenantIdentifierStrategies { get; set; }

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


            // tweak modelbuilder conventions due to reverse engineering issues with cascade.delete
            // as per https://www.red-gate.com/simple-talk/blogs/change-delete-behavior-and-more-on-ef-core/
            //builder.AddRemoveOneToManyCascadeConvention();

            builder.Entity<Tenant>()
                .Navigation(n => n.Owners).AutoInclude();


            builder.Entity<Tenant>()
                .Navigation(n => n.Accounts).AutoInclude();
            builder.Entity<Tenant>()
                .Navigation(n => n.AccessControlEntries).AutoInclude();

            builder.Entity<TenantIdentifierStrategy>()
                .Navigation(n => n.StrategyContainers).AutoInclude();

            builder.Entity<Tenant>()
                .Navigation(n => n.ContentCollections).AutoInclude();

            //builder.Entity<Principal>()
            //    .Navigation(n => n.Tenants).AutoInclude();


            //builder.Entity<Principal>()
            //    .Navigation(n => n.OwnedTenants).AutoInclude();


            builder.Entity<Principal>()
                .Navigation(n => n.HorselessSessions).AutoInclude();

            //builder.Entity<ContentCollection>()
            //    .Navigation(n => n.HorselessViews).AutoInclude();


            builder.Entity<ContentCollection>()
                .Navigation(n => n.AccessControlEntries).AutoInclude();

            builder.Entity<ContentCollection>()
                .Navigation(n => n.Owners).AutoInclude();

            builder.Entity<ContentCollection>()
                .Navigation(n => n.HorselessViews).AutoInclude();

            builder.Entity<ContentCollection>()
                .Navigation(n => n.Publications).AutoInclude();


            builder.Entity<ContentCollection>()
                .Navigation(n => n.HorselessContents).AutoInclude();

            builder.Entity<ContentCollection>()
                .Navigation(n => n.Taxonomies).AutoInclude();

            builder.Entity<HorselessView>()
                .Navigation(n => n.AccessControlEntries).AutoInclude();

            //builder.Entity<HorselessView>()
            //     .Navigation(n => n.ContentCollections).AutoInclude();


            builder.Entity<HorselessView>()
                 .Navigation(n => n.Placeholders).AutoInclude();

            EnsureAutomaticPropertySetters(builder);

        }

        private static void EnsureAutomaticPropertySetters(ModelBuilder builder)
        {
            var entityTypes = builder.Model.GetEntityTypes();
            foreach (var entity in entityTypes)
            {
                var idProp = entity.FindProperty("Id");

                if (idProp != null)
                {
                    idProp.ValueGenerated = Microsoft.EntityFrameworkCore.Metadata.ValueGenerated.OnAdd;
                }

            }

            foreach (var entity in entityTypes)
            {

                var updatedProp = entity.FindProperty("UpdatedAt");


                if (updatedProp != null)
                {
                    updatedProp.ValueGenerated = Microsoft.EntityFrameworkCore.Metadata.ValueGenerated.OnAddOrUpdate;
                }
            }
        }
    }
}
