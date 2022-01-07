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


        public DbSet<FilesystemAssetLocation> FilesystemAssetLocations { get; set; }
        public DbSet<HorselessClaimsPrincipal> HorselessClaimsPrincipals { get; set; }
        public DbSet<HorselessSession> HorselessSessions { get; set; }
        public DbSet<Host> Hosts { get; set; }
        public DbSet<KeyCloakConfiguration> KeyCloakConfigurations { get; set; }
        public DbSet<NugetPackage> NugetPackages { get; set; }
        public DbSet<RoutingDiscriminator> RoutingDiscriminators { get; set; }
        public DbSet<Tenant> Tenants { get; set; }
        public DbSet<TenantInfo> TenantInfos { get; set; }
        public DbSet<UriPath> UriPaths { get; set; }
        public DbSet<WebAPITenantInfo> WebAPITenantInfos { get; set; }
        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
