using Finbuckle.MultiTenant;
using Finbuckle.MultiTenant.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using TheHorselessNewspaper.HostingModel.Context;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;


namespace TheHorselessNewspaper.Schemas.HostingModel.Context.MSSQL
{
    /// <summary>
    /// support polymorphic database interaction
    /// through a common dbcontext archetype
    /// </summary>
    internal partial class MSSqlContentContext : THLNPContentContext, IContentModelContext
    {
        private readonly IConfiguration _configuration;
        public DatabaseServerFamily SqlDialect { get; set; }


        public MSSqlContentContext(DbContextOptions<MSSqlContentContext> options, Finbuckle.MultiTenant.ITenantInfo tenant, IConfiguration config, ILogger<MSSqlContentContext> logger = null) : base(options)
        {
            this.TenantInfo = tenant;
            this._configuration = config;
            this.SqlDialect = DatabaseServerFamily.IsSQLServer;
        }



        #region finbuckle IMultiTenantDbContext concerns 
        /// <summary>
        /// as per https://www.finbuckle.com/MultiTenant/Docs/v6.5.1/EFCore#adding-multitenant-functionality-to-an-existing-dbcontext
        /// </summary>
        public ITenantInfo TenantInfo { get; }
        public TenantMismatchMode TenantMismatchMode { get; }
        public TenantNotSetMode TenantNotSetMode { get; }

        public override int SaveChanges(bool acceptAllChangesOnSuccess)
        {
            this.EnforceMultiTenant();
            return base.SaveChanges(acceptAllChangesOnSuccess);
        }

        public override async Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            this.EnforceMultiTenant();
            return await base.SaveChangesAsync(acceptAllChangesOnSuccess, cancellationToken);
        }
        #endregion



        /// <summary>
        /// extensoin point for localized model building
        /// </summary>
        /// <param name="builder"></param>
        void OnModelCreatingPartial(ModelBuilder builder)
        {

            // If necessary call the base class method.
            // Recommended to be called first.
            base.OnModelCreating(builder);

            // Configure all entity types marked with the [MultiTenant] data attribute
            builder.ConfigureMultiTenant();

            builder.Entity<ContentCollection>()
                .HasKey(cc => new { cc.Id, cc.ObjectId });

            builder.Entity<FilesystemAsset>()
                .HasKey(cc => new { cc.Id, cc.ObjectId });

            builder.Entity<Holonym>()
                .HasKey(cc => new { cc.Id, cc.ObjectId });

            builder.Entity<HorselessContent>()
                .HasKey(cc => new { cc.Id, cc.ObjectId });

            builder.Entity<HorselessSession>()
                .HasKey(cc => new { cc.Id, cc.ObjectId });

            builder.Entity<JSONAsset>()
                .HasKey(cc => new { cc.Id, cc.ObjectId });

            builder.Entity<Meronym>()
                .HasKey(cc => new { cc.Id, cc.ObjectId });

            builder.Entity<MIMEType>()
                .HasKey(cc => new { cc.Id, cc.ObjectId });

            builder.Entity<NavigationMenu>()
                .HasKey(cc => new { cc.Id, cc.ObjectId });

            builder.Entity<NavigationMenuItem>()
                .HasKey(cc => new { cc.Id, cc.ObjectId });

            builder.Entity<NugetPackage>()
                .HasKey(cc => new { cc.Id, cc.ObjectId });

            builder.Entity<Principal>()
                .HasKey(cc => new { cc.Id, cc.ObjectId });

            builder.Entity<Placeholder>()
                .HasKey(cc => new { cc.Id, cc.ObjectId });

            builder.Entity<Publication>()
                .HasKey(cc => new { cc.Id, cc.ObjectId });

            builder.Entity<Taxon>()
                .HasKey(cc => new { cc.Id, cc.ObjectId });

            builder.Entity<Taxonomy>()
                .HasKey(cc => new { cc.Id, cc.ObjectId });

            builder.Entity<Tenant>()
                .HasKey(cc => new { cc.Id, cc.ObjectId });

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

        }
    }

}
