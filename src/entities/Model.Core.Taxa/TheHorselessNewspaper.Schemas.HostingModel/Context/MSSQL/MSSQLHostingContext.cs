using Finbuckle.MultiTenant;
using Finbuckle.MultiTenant.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using TheHorselessNewspaper.HostingModel.Context;
using TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;

namespace TheHorselessNewspaper.Schemas.HostingModel.Context.MSSQL
{
    internal partial class MSSQLHostingContext : THLNPHostingContext, IHostingModelContext
    {
        public DatabaseServerFamily SqlDialect { get; set; }

        public DbSet<TenantIdentifierStrategy> TenantIdentifierStrategies { get; set; }

        public DbSet<TenantIdentifierStrategyContainer> TenantIdentifierStrategyContainer { get; set; }


        #region finbuckle IMultiTenantDbContext concerns 
        /// <summary>
        /// as per https://www.finbuckle.com/MultiTenant/Docs/v6.5.1/EFCore#adding-multitenant-functionality-to-an-existing-dbcontext
        /// </summary>
        public ITenantInfo TenantInfo { get; }

        private IConfiguration _configuration;

        public TenantMismatchMode TenantMismatchMode { get; set; }
        public TenantNotSetMode TenantNotSetMode { get; set; }


        public override int SaveChanges(bool acceptAllChangesOnSuccess)
        {
            this.TenantMismatchMode = TenantMismatchMode.Overwrite;
            this.TenantNotSetMode = TenantNotSetMode.Overwrite;
            this.EnforceMultiTenant();
            return base.SaveChanges(acceptAllChangesOnSuccess);
        }

        public override async Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            this.TenantMismatchMode = TenantMismatchMode.Overwrite;
            this.TenantNotSetMode = TenantNotSetMode.Overwrite;
            this.EnforceMultiTenant();
            return await base.SaveChangesAsync(acceptAllChangesOnSuccess, cancellationToken);
        }
        #endregion

        public MSSQLHostingContext(DbContextOptions<MSSQLHostingContext> options, IConfiguration config, Finbuckle.MultiTenant.ITenantInfo tenant) : base(options, tenant)
        {
            this.TenantInfo = tenant;
            this._configuration = config;
            this.SqlDialect = DatabaseServerFamily.IsSQLServer;
        }

        void OnModelCreatingPartial(ModelBuilder builder)
        {
            // do mssql specific things here
            // If necessary call the base class method.
            // Recommended to be called first.
            base.OnModelCreating(builder);

            // Configure all entity types marked with the [MultiTenant] data attribute
            // TODO make multitenant work on the hosting context
            // builder.ConfigureMultiTenant();


            //builder.Entity<TenantIdentifierStrategy>()
            //    .HasMany(m => m.TenantIdentifierStrategyContainers)
            //    .WithOne(o => o.TenantIdentifierStrategy)
            //    .HasForeignKey(fk => fk.TenantIdentifierStrategyId);

            //builder.Entity<TenantIdentifierStrategyContainer>()
            //    .HasOne<TenantIdentifierStrategy>(o => o.TenantIdentifierStrategy)
            //    .WithMany(o => o.TenantIdentifierStrategyContainers)
            //    .HasForeignKey(fk => fk.TenantIdentifierStrategyId);

            builder.Entity<Tenant>()
                .Navigation(n => n.TenantInfos).AutoInclude();

            builder.Entity<Tenant>()
                .Navigation(n => n.Accounts).AutoInclude();

            builder.Entity<Tenant>()
                .Navigation(n => n.Owners).AutoInclude();

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

            base.OnConfiguring(optionsBuilder);

        }
    }

}