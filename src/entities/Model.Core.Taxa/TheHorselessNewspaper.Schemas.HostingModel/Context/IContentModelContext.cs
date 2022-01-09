using Finbuckle.MultiTenant.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using TheHorselessNewspaper.HostingModel.Context;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace TheHorselessNewspaper.Schemas.HostingModel.Context
{
    /// <summary>
    /// support Implementation specific context
    /// 
    /// as per 
    ///     - https://www.finbuckle.com/MultiTenant/Docs/v6.5.1/EFCore#adding-multitenant-functionality-to-an-existing-dbcontext
    /// </summary>
    internal partial interface IContentModelContext : IMultiTenantDbContext 
    {
        // db provider discriminator
        internal DatabaseServerFamily SqlDialect { get; set; }

        /// an owned type without a dbset
        /// internal DbSet<AccessControlEntry> AccessControlEntries { get; set; }
        internal DbSet<ContentCollection> ContentCollections { get; set; }
        internal DbSet<FilesystemAsset> FilesystemAssets { get; set; }
        internal DbSet<Holonym> Holonyms { get; set; }
        internal DbSet<HorselessContent> HorselessContents { get; set; }
        internal DbSet<HorselessSession> HorselessSessions { get; set; }
        internal DbSet<JSONAsset> JSONAssets { get; set; }
        internal DbSet<MIMEType> MIMETypes { get; set; }
        internal DbSet<Meronym> Meronyms { get; set; }
        internal DbSet<NavigationMenu> NavigationMenus { get; set; }
        internal DbSet<NavigationMenuItem> NavigationMenuItems { get; set; }
        internal DbSet<NugetPackage> NugetPackages { get; set; }
        /// an owned type without a dbset
        /// internal DbSet<Placeholder> Placeholders { get; set; }
        /// an owned type without a dbset
        ///internal DbSet<Principal> Principals { get; set; }
        internal DbSet<Publication> Publications { get; set; }
        internal DbSet<Taxon> Taxons { get; set; }
        internal DbSet<Tenant> Tenants { get; set; }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
