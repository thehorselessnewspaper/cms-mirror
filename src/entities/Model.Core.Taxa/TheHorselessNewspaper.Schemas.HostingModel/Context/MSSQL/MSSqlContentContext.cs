using Finbuckle.MultiTenant;
using Finbuckle.MultiTenant.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using TheHorselessNewspaper.HostingModel.MultiTenant;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;


namespace TheHorselessNewspaper.HostingModel.Context.MSSQL
{
    /// <summary>
    /// support polymorphic database interaction
    /// through a common dbcontext archetype
    /// </summary>
    internal partial class MSSqlContentContext : THLNPContentContext, IContentModelContext
    {
        private readonly IConfiguration _configuration;
        public DatabaseServerFamily SqlDialect { get; set; }

        public DbSet<TenantIdentifierStrategy> TenantIdentifierStrategies { get; set; }
        public Guid DbContextInstanceId { get; set; } = Guid.NewGuid();
        private IServiceProvider serviceProvider;
        private ILogger<MSSqlContentContext> logger;
        public DbSet<TenantIdentifierStrategyContainer> TenantIdentifierStrategyContainers { get; set; }
        public MSSqlContentContext(DbContextOptions<MSSqlContentContext> options, ILogger<MSSqlContentContext> logger, IServiceProvider serviceProvider, ITenantInfo tenant, IConfiguration config) : base(options)
        {
            TenantInfo = tenant;
            _configuration = config;
            this.serviceProvider = serviceProvider;
            this.logger = logger;
            SqlDialect = DatabaseServerFamily.IsSQLServer;

        }



        #region finbuckle IMultiTenantDbContext concerns 
        /// <summary>
        /// as per https://www.finbuckle.com/MultiTenant/Docs/v6.5.1/EFCore#adding-multitenant-functionality-to-an-existing-dbcontext
        /// </summary>
        public ITenantInfo TenantInfo { get; set; }
        public TenantMismatchMode TenantMismatchMode { get; set; }
        public TenantNotSetMode TenantNotSetMode { get; set; }


        public async Task<ITenantInfo> ResolveTenant()
        {

            if (TenantInfo == null)
            {
                logger.LogWarning($"{GetType().Name} is handling a null tenant context");

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
                            logger.LogInformation($"{GetType().Name} resolved a tenant with the multitenant strategy");

                            var allResult = await resolver.Stores.First().GetAllAsync();
                            var filtered = allResult.Where(w => w.Identifier.Equals(identifier)).First();
                            logger.LogInformation("resolved tenant");
                            TenantInfo = filtered as ITenantInfo;
                            return TenantInfo;
                        }
                        else
                        {
                            throw new Exception("unable to resolve tenant;");
                        }
                    }
                    catch (Exception e)
                    {
                        logger.LogWarning($"problem resolving tenant {e.Message}");
                    }
                }
            }
            else
            {
                logger.LogTrace($"{GetType().Name} is handling a previously initialized tenant context");
            }

            return TenantInfo;

        }

        public override int SaveChanges(bool acceptAllChangesOnSuccess)
        {

            TenantMismatchMode = TenantMismatchMode.Overwrite;
            TenantNotSetMode = TenantNotSetMode.Overwrite;
            this.EnforceMultiTenant();
            return base.SaveChanges(acceptAllChangesOnSuccess);
        }

        public override async Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess,
            CancellationToken cancellationToken = default)
        {

            await ResolveTenant();
            TenantMismatchMode = TenantMismatchMode.Overwrite;
            TenantNotSetMode = TenantNotSetMode.Overwrite;
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

            #region multitenant
            // Configure all entity types marked with the [MultiTenant] data attribute
            builder.ConfigureMultiTenant();


            #endregion multitenant


        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

        }
    }

}
