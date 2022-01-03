using Microsoft.EntityFrameworkCore;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using TheHorselessNewspaper.Schemas.HostingModel.Entities;

namespace TheHorselessNewspaper.Schemas.HostingModel.Context.MSSQL
{
    /// <summary>
    /// support polymorphic database interaction
    /// through a common dbcontext archetype
    /// </summary>
    internal partial class MSSqlContentContext : THLNPContentContext, IContentModelContext
    {

        public MSSqlContentContext(DbContextOptions<MSSqlContentContext> options, Finbuckle.MultiTenant.TenantInfo tenant) : base(options, tenant)
        {

        }

        public MSSqlContentContext(DbContextOptions<THLNPContentContext> options, Finbuckle.MultiTenant.TenantInfo tenant) : base(options, tenant)
        {

        }

        public MSSqlContentContext(DbContextOptions options, Finbuckle.MultiTenant.TenantInfo tenant): base(options, tenant)
        {
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
