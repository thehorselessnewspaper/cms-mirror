using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.Context;
using TheHorselessNewspaper.Schemas.HostingModel.Entities;
using TheHorselessNewspaper.Schemas.HostingModel.Entities.Configurations;
namespace TheHorselessNewspaper.Schemas.HostingModel.Context.MSSQL
{
    internal partial class MSSQLHostingContext : THNLPHostingContext, IHostingModelContext
    {
        public virtual DbSet<FilesystemAssetLocation> FilesystemAssetLocations { get; set; }
        public virtual DbSet<Host> Hosts { get; set; }
        public virtual DbSet<KeyCloakConfiguration> KeyCloakConfigurations { get; set; }
        public virtual DbSet<NugetPackage> NugetPackages { get; set; }
        public virtual DbSet<RoutingDiscriminator> RoutingDiscriminators { get; set; }
        public virtual DbSet<Tenant> Tenants { get; set; }
        public virtual DbSet<TenantInfo> TenantInfos { get; set; }
        public virtual DbSet<UriPath> UriPaths { get; set; }
        public virtual DbSet<WebAPITenantInfo> WebAPITenantInfos { get; set; }
        public void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new FilesystemAssetLocationConfiguration());
            modelBuilder.ApplyConfiguration(new HostConfiguration());
            modelBuilder.ApplyConfiguration(new KeyCloakConfigurationConfiguration());
            modelBuilder.ApplyConfiguration(new NugetPackageConfiguration());
            modelBuilder.ApplyConfiguration(new RoutingDiscriminatorConfiguration());
            modelBuilder.ApplyConfiguration(new TenantConfiguration());
            modelBuilder.ApplyConfiguration(new TenantInfoConfiguration());
            modelBuilder.ApplyConfiguration(new UriPathConfiguration());
            modelBuilder.ApplyConfiguration(new WebAPITenantInfoConfiguration());

            OnModelCreatingPartial(modelBuilder);
        }


        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
