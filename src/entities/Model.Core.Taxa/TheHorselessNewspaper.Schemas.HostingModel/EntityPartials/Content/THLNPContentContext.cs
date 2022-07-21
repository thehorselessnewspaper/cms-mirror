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



            //var key = builder.Entity<AccessControlEntry>().Metadata.GetKeys().First();
            //// builder.Entity<AccessControlEntry>().IsMultiTenant().AdjustKey(key, builder);
            //builder.Entity<AccessControlEntry>().IsMultiTenant().AdjustUniqueIndexes();

            //key = builder.Entity<ContentCollection>().Metadata.GetKeys().First();
            //// builder.Entity<ContentCollection>().IsMultiTenant().AdjustKey(key, builder);
            //builder.Entity<ContentCollection>().IsMultiTenant().AdjustUniqueIndexes();

            //key = builder.Entity<FilesystemAsset>().Metadata.GetKeys().First();
            ////builder.Entity<FilesystemAsset>().IsMultiTenant().AdjustKey(key, builder);
            //builder.Entity<FilesystemAsset>().IsMultiTenant().AdjustUniqueIndexes();

            //key = builder.Entity<Holonym>().Metadata.GetKeys().First();
            ////builder.Entity<Holonym>().IsMultiTenant().AdjustKey(key, builder);
            //builder.Entity<Holonym>().IsMultiTenant().AdjustUniqueIndexes();

            //key = builder.Entity<HorselessContent>().Metadata.GetKeys().First();
            ////builder.Entity<HorselessContent>().IsMultiTenant().AdjustKey(key, builder);
            //builder.Entity<HorselessContent>().IsMultiTenant().AdjustUniqueIndexes();

            //key = builder.Entity<HorselessView>().Metadata.GetKeys().First();
            ////builder.Entity<HorselessView>().IsMultiTenant().AdjustKey(key, builder);
            //builder.Entity<HorselessView>().IsMultiTenant().AdjustUniqueIndexes();

            //key = builder.Entity<JSONAsset>().Metadata.GetKeys().First();
            ////builder.Entity<JSONAsset>().IsMultiTenant().AdjustKey(key, builder);
            //builder.Entity<JSONAsset>().IsMultiTenant().AdjustUniqueIndexes();



            //key = builder.Entity<Meronym>().Metadata.GetKeys().First();
            ////builder.Entity<Meronym>().IsMultiTenant().AdjustKey(key, builder);
            //builder.Entity<Meronym>().IsMultiTenant().AdjustUniqueIndexes();

            //key = builder.Entity<MIMEType>().Metadata.GetKeys().First();
            ////builder.Entity<MIMEType>().IsMultiTenant().AdjustKey(key, builder);
            //builder.Entity<MIMEType>().IsMultiTenant().AdjustUniqueIndexes();

            //key = builder.Entity<NavigationMenu>().Metadata.GetKeys().First();
            ////builder.Entity<NavigationMenu>().IsMultiTenant().AdjustKey(key, builder);
            //builder.Entity<NavigationMenu>().IsMultiTenant().AdjustUniqueIndexes();

            //key = builder.Entity<NavigationMenuItem>().Metadata.GetKeys().First();
            ////builder.Entity<NavigationMenuItem>().IsMultiTenant().AdjustKey(key, builder);
            //builder.Entity<NavigationMenuItem>().IsMultiTenant().AdjustUniqueIndexes();

            //key = builder.Entity<NugetPackage>().Metadata.GetKeys().First();
            ////builder.Entity<NugetPackage>().IsMultiTenant().AdjustKey(key, builder);
            //builder.Entity<NugetPackage>().IsMultiTenant().AdjustUniqueIndexes();

            //key = builder.Entity<Placeholder>().Metadata.GetKeys().First();
            ////builder.Entity<Placeholder>().IsMultiTenant().AdjustKey(key, builder);
            //builder.Entity<Placeholder>().IsMultiTenant().AdjustUniqueIndexes();


            //key = builder.Entity<Principal>().Metadata.GetKeys().First();
            ////builder.Entity<Principal>().IsMultiTenant().AdjustKey(key, builder);
            //builder.Entity<Principal>().IsMultiTenant().AdjustUniqueIndexes();

            //key = builder.Entity<Publication>().Metadata.GetKeys().First();
            ////builder.Entity<Publication>().IsMultiTenant().AdjustKey(key, builder);
            //builder.Entity<Publication>().IsMultiTenant().AdjustUniqueIndexes();

            //key = builder.Entity<Taxon>().Metadata.GetKeys().First();
            ////builder.Entity<Taxon>().IsMultiTenant().AdjustKey(key, builder);
            //builder.Entity<Taxon>().IsMultiTenant().AdjustUniqueIndexes();

            //key = builder.Entity<Tenant>().Metadata.GetKeys().First();
            ////builder.Entity<Tenant>().IsMultiTenant().AdjustKey(key, builder);
            //builder.Entity<Tenant>().IsMultiTenant().AdjustUniqueIndexes();

            //key = builder.Entity<TenantIdentifierStrategyContainer>().Metadata.GetKeys().First();
            ////builder.Entity<TenantIdentifierStrategyContainer>().IsMultiTenant().AdjustKey(key, builder);
            //builder.Entity<TenantIdentifierStrategyContainer>().IsMultiTenant().AdjustUniqueIndexes();

            //key = builder.Entity<TenantIdentifierStrategy>().Metadata.GetKeys().First();
            //builder.Entity<TenantIdentifierStrategy>().IsMultiTenant().AdjustUniqueIndexes();
            // builder.Entity<TenantIdentifierStrategy>().IsMultiTenant().AdjustUniqueIndexes();

            //// Configure an entity type to be multitenant.
            //// todo -- support not hardcoding this here
            //builder.Entity<HorselessTenantInfo>().IsMultiTenant();

            builder.Entity<Tenant>()
                .Navigation(n => n.Accounts).AutoInclude();

            builder.Entity<Tenant>()
                .Navigation(n => n.Owners).AutoInclude();

            builder.Entity<Tenant>()
                .Navigation(n => n.AccessControlEntries).AutoInclude();

            builder.Entity<TenantIdentifierStrategy>()
                .Navigation(n => n.StrategyContainers).AutoInclude();

            builder.Entity<Tenant>()
                .Navigation(n => n.TenantIdentifierStrategy).AutoInclude();


            builder.Entity<ContentCollection>()
                .Navigation(n => n.ChildContentCollections).AutoInclude();

            builder.Entity<ContentCollection>()
                .Navigation(n => n.HorselessViews).AutoInclude();

            builder.Entity<ContentCollection>()
                .Navigation(n => n.Owners).AutoInclude();

            builder.Entity<Principal>()
            .Navigation(n => n.HorselessSessions).AutoInclude();

            builder.Entity<Principal>()
                .Navigation(n => n.Accounts).AutoInclude();



        }

    }
}
