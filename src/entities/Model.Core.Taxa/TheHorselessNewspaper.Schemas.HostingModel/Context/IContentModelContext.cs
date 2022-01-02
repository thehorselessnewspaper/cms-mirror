using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace TheHorselessNewspaper.Schemas.HostingModel.Context
{
    /// <summary>
    /// support Implementation specific context
    /// </summary>
    internal partial interface IContentModelContext
    {
        public DbSet<AccessControlEntry> AccessControlEntries { get; set; }
        public DbSet<ContentCollection> ContentCollections { get; set; }
        public DbSet<FilesystemAsset> FilesystemAssets { get; set; }
        public DbSet<Holonym> Holonyms { get; set; }
        public DbSet<HorselessContent> HorselessContents { get; set; }
        public DbSet<HorselessSession> HorselessSessions { get; set; }
        public DbSet<JSONAsset> JSONAssets { get; set; }
        public DbSet<MIMEType> MIMETypes { get; set; }
        public DbSet<Meronym> Meronyms { get; set; }
        public DbSet<NavigationMenu> NavigationMenus { get; set; }
        public DbSet<NavigationMenuItem> NavigationMenuItems { get; set; }
        public DbSet<NugetPackage> NugetPackages { get; set; }
        public DbSet<Placeholder> Placeholders { get; set; }
        public DbSet<Principal> Principals { get; set; }
        public DbSet<Publication> Publications { get; set; }
        public DbSet<Taxon> Taxons { get; set; }
        public DbSet<Tenant> Tenants { get; set; }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
