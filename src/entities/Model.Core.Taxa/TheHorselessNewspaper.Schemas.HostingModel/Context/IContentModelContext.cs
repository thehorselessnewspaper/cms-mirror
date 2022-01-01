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
    public partial interface IContentModelContext
    {
        public DbSet<AccessControlEntry> AccessControlEntries { get; set; }
        public DbSet<ContentCollection> ContentCollections { get; set; }
        public DbSet<FilesystemAsset> FilesystemAssets { get; set; }
        public DbSet<Holonym> Holonyms { get; set; }
        public DbSet<JSONAsset> JSONAssets { get; set; }
        public DbSet<MIMEType> MIMETypes { get; set; }
        public DbSet<Meronym> Meronyms { get; set; }
        public DbSet<MimeContent> MimeContents { get; set; }
        public DbSet<NugetPackage> NugetPackages { get; set; }
        public DbSet<Placeholder> Placeholders { get; set; }
        public DbSet<Principal> Principals { get; set; }
        public DbSet<Publication> Publications { get; set; }
        public DbSet<Taxon> Taxons { get; set; }
        public DbSet<Tenant> Tenants { get; set; }

        //protected void OnModelCreating(ModelBuilder modelBuilder);
        protected void OnModelCreating(ModelBuilder modelBuilder);

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
