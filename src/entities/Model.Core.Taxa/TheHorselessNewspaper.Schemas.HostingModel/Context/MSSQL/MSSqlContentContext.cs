using Finbuckle.MultiTenant;
using Finbuckle.MultiTenant.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
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


        public MSSqlContentContext(DbContextOptions<MSSqlContentContext> options, IConfiguration config, Finbuckle.MultiTenant.TenantInfo tenant) : base(options, tenant)
        {
            this.TenantInfo = tenant;
            this._configuration = config;
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

   
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {



        }
    }

}
