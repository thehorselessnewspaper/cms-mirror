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
        #region finbuckle IMultiTenantDbContext concerns 
        /// <summary>
        /// as per https://www.finbuckle.com/MultiTenant/Docs/v6.5.1/EFCore#adding-multitenant-functionality-to-an-existing-dbcontext
        /// </summary>
        public ITenantInfo TenantInfo { get; }

        private IConfiguration _configuration;

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

        public MSSQLHostingContext(DbContextOptions<MSSQLHostingContext> options, IConfiguration config, Finbuckle.MultiTenant.TenantInfo tenant) : base(options, tenant)
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
            builder.ConfigureMultiTenant();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

            base.OnConfiguring(optionsBuilder);

        }
    }

}