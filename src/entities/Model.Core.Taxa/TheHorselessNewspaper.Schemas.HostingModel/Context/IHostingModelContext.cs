using Finbuckle.MultiTenant;
using Finbuckle.MultiTenant.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;

namespace TheHorselessNewspaper.HostingModel.Context
{
    internal partial interface IHostingModelContext : IMultiTenantDbContext
    {

        internal DatabaseServerFamily SqlDialect { get; set; }

        public DbSet<KeyCloakConfiguration> KeyCloakConfigurations { get; set; }
        public DbSet<NugetPackage> NugetPackages { get; set; }

        public DbSet<Tenant> Tenants { get; set; }
        public DbSet<TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.TenantInfo> TenantInfos { get; set; }

        public DbSet<WebAPITenantInfo> WebAPITenantInfos { get; set; }
        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
        public Task<Finbuckle.MultiTenant.ITenantInfo> ResolveTenant();
    }
}
