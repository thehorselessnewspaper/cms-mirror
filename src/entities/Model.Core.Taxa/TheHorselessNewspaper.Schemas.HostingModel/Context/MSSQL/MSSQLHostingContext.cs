using Finbuckle.MultiTenant;
using Finbuckle.MultiTenant.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System;
using TheHorselessNewspaper.HostingModel.Context;
using TheHorselessNewspaper.HostingModel.MultiTenant;
using TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;

namespace TheHorselessNewspaper.Schemas.HostingModel.Context.MSSQL
{
    internal partial class MSSQLHostingContext : THLNPHostingContext, IHostingModelContext
    {
        public Guid DbContextInstanceId { get; set; } = Guid.NewGuid();

        public DatabaseServerFamily SqlDialect { get; set; }

        private ILogger<MSSqlContentContext> logger;
        private IServiceProvider serviceProvider;

        public DbSet<TenantIdentifierStrategy> TenantIdentifierStrategies { get; set; }

        public DbSet<TenantIdentifierStrategyContainer> TenantIdentifierStrategyContainer { get; set; }


        #region finbuckle IMultiTenantDbContext concerns 
        /// <summary>
        /// as per https://www.finbuckle.com/MultiTenant/Docs/v6.5.1/EFCore#adding-multitenant-functionality-to-an-existing-dbcontext
        /// </summary>
        public ITenantInfo TenantInfo { get; set; }

        private IConfiguration _configuration;

        public TenantMismatchMode TenantMismatchMode { get; set; }
        public TenantNotSetMode TenantNotSetMode { get; set; }
 
        public async Task<ITenantInfo> ResolveTenant()
        {

            if (this.TenantInfo == null)
            {
                this.logger.LogTrace($"{this.GetType().Name} is handling a null tenant context");
                var tenant = new HorselessTenantInfo();
                // here TTenatInfo is the type of your custom tenant info object
                var resolver = serviceProvider.GetRequiredService<ITenantResolver<HorselessTenantInfo>>();
                // here context is whatever your strategy needs passed to it
                // in ASP.Net Core it's usually HttpContext, but it can be anything
                // you can then use this multitenant context as needed in your service
                foreach (var s in resolver.Strategies)
                {

                    try
                    {
                        var identifier = await s.GetIdentifierAsync("randomtextstrategymatcher");
                        if (identifier != null)
                        {
                            logger.LogTrace($"{this.GetType().Name} resolved a tenant with the multitenant strategy");

                            var allResult = await resolver.Stores.First().GetAllAsync();
                            var filtered = allResult.Where(w => w.Identifier.Equals(identifier)).First();
                            logger.LogTrace("resolved tenant");
                            this.TenantInfo = filtered as ITenantInfo;
                            return this.TenantInfo;
                        }
                        else
                        {
                            throw new Exception($"{this.GetType().Name} unable to resolve tenant;");
                        }
                    }
                    catch (Exception e)
                    {
                        logger.LogTrace($"{this.GetType().Name} problem resolving tenant {e.Message}");
                    }
                }
            }
            else
            {
                this.logger.LogTrace($"{this.GetType().Name} is handling a previously initialized tenant context");
                return this.TenantInfo;
            }

            /// TODO make sure this is always valid
            return this.TenantInfo;
        }
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
            await this.ResolveTenant();
            this.TenantMismatchMode = TenantMismatchMode.Overwrite;
            this.TenantNotSetMode = TenantNotSetMode.Overwrite;
            this.EnforceMultiTenant();
            return await base.SaveChangesAsync(acceptAllChangesOnSuccess, cancellationToken);
        }
        #endregion

        public MSSQLHostingContext(DbContextOptions<MSSQLHostingContext> options, ILogger<MSSqlContentContext> logger, IServiceProvider serviceProvider, IConfiguration config, Finbuckle.MultiTenant.ITenantInfo tenant) : base(options, tenant)
        {
            this.TenantInfo = tenant;
            this._configuration = config;
            this.SqlDialect = DatabaseServerFamily.IsSQLServer;
            this.logger = logger;
            this.serviceProvider = serviceProvider;

        }

        void OnModelCreatingPartial(ModelBuilder builder)
        {

            builder.HasDefaultSchema("HorselessHosting");
            // do mssql specific things here
            // If necessary call the base class method.
            // Recommended to be called first.
            base.OnModelCreating(builder);

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

            base.OnConfiguring(optionsBuilder);

        }
    }

}