using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using TheHorselessNewspaper.Schemas.HostingModel.DTO;

namespace TheHorselessNewspaper.Schemas.HostingModel.Context.MSSQL
{
    /// <summary>
    /// support polymorphic database interaction
    /// through a common dbcontext archetype
    /// </summary>
    public partial class MSSqlContentContext : THNLPContentContext, IContentModelContext
    {
        public MSSqlContentContext(DbContextOptions<THNLPContentContext> options, TenantInfoDTO tenant) : base(options, tenant)
        {
            
        }

        public new virtual DbSet<AccessControlEntry> AccessControlEntries { get; set; }
        public new virtual DbSet<ContentCollection> ContentCollections { get; set; }
        public new virtual  DbSet<FilesystemAsset> FilesystemAssets { get; set; }
        public new virtual  DbSet<Holonym> Holonyms { get; set; }
        public new virtual  DbSet<JSONAsset> JSONAssets { get; set; }
        public new virtual  DbSet<MIMEType> MIMETypes { get; set; }
        public new virtual  DbSet<Meronym> Meronyms { get; set; }
        public new virtual  DbSet<MimeContent> MimeContents { get; set; }
        public new virtual  DbSet<NugetPackage> NugetPackages { get; set; }
        public new virtual  DbSet<Placeholder> Placeholders { get; set; }
        public new virtual  DbSet<Principal> Principals { get; set; }
        public new virtual  DbSet<Publication> Publications { get; set; }
        public new virtual  DbSet<Taxon> Taxons { get; set; }
        public new virtual  DbSet<Tenant> Tenants { get; set; }

        public void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

        /// <summary>
        /// extensoin point for localized model building
        /// </summary>
        /// <param name="builder"></param>
        void OnModelCreatingPartial(ModelBuilder builder)
        {

        }
    }
}
