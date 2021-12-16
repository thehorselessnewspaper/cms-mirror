﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace TheHorselessNewspaper.Schemas.HostingModel.Entities
{
    public partial class THNLPHostingContext : DbContext
    {
        public THNLPHostingContext()
        {
        }

        public THNLPHostingContext(DbContextOptions<THNLPHostingContext> options)
            : base(options)
        {
        }

        public virtual DbSet<FilesystemAssetLocation> FilesystemAssetLocations { get; set; }
        public virtual DbSet<Host> Hosts { get; set; }
        public virtual DbSet<KeyCloakConfiguration> KeyCloakConfigurations { get; set; }
        public virtual DbSet<NugetPackage> NugetPackages { get; set; }
        public virtual DbSet<RoutingDiscriminator> RoutingDiscriminators { get; set; }
        public virtual DbSet<Tenant> Tenants { get; set; }
        public virtual DbSet<UriPath> UriPaths { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<FilesystemAssetLocation>(entity =>
            {
                entity.ToTable("FilesystemAssetLocations", "HostingModel");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            });

            modelBuilder.Entity<Host>(entity =>
            {
                entity.ToTable("Hosts", "HostingModel");

                entity.HasIndex(e => e.RoutingDiscriminatorId, "IX_FK_RoutingDiscriminatorHost");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.HasOne(d => d.RoutingDiscriminator)
                    .WithMany(p => p.Hosts)
                    .HasForeignKey(d => d.RoutingDiscriminatorId)
                    .HasConstraintName("FK_RoutingDiscriminatorHost");

                entity.HasMany(d => d.WWWRootAssetLocations)
                    .WithMany(p => p.HostWWWRootAssetLocations)
                    .UsingEntity<Dictionary<string, object>>(
                        "HostFilesystemAssetLocation",
                        l => l.HasOne<FilesystemAssetLocation>().WithMany().HasForeignKey("WWWRootAssetLocations_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_HostFilesystemAssetLocation_FilesystemAssetLocation"),
                        r => r.HasOne<Host>().WithMany().HasForeignKey("HostWWWRootAssetLocations_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_HostFilesystemAssetLocation_Host"),
                        j =>
                        {
                            j.HasKey("HostWWWRootAssetLocations_Id", "WWWRootAssetLocations_Id");

                            j.ToTable("HostFilesystemAssetLocation", "HostingModel");

                            j.HasIndex(new[] { "WWWRootAssetLocations_Id" }, "IX_FK_HostFilesystemAssetLocation_FilesystemAssetLocation");
                        });
            });

            modelBuilder.Entity<KeyCloakConfiguration>(entity =>
            {
                entity.ToTable("KeyCloakConfigurations", "HostingModel");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.DisplayName).IsRequired();
            });

            modelBuilder.Entity<NugetPackage>(entity =>
            {
                entity.ToTable("NugetPackages", "HostingModel");

                entity.HasIndex(e => e.FilesystemAssetLocation_Id, "IX_FK_NugetPackageFilesystemAssetLocation");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.HasOne(d => d.FilesystemAssetLocation)
                    .WithMany(p => p.NugetPackages)
                    .HasForeignKey(d => d.FilesystemAssetLocation_Id)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_NugetPackageFilesystemAssetLocation");
            });

            modelBuilder.Entity<RoutingDiscriminator>(entity =>
            {
                entity.ToTable("RoutingDiscriminators", "HostingModel");

                entity.HasIndex(e => e.TenantId, "IX_FK_TenantRoutingDiscriminator");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.ObjectId).IsRequired();

                entity.HasOne(d => d.Tenant)
                    .WithMany(p => p.RoutingDiscriminators)
                    .HasForeignKey(d => d.TenantId)
                    .HasConstraintName("FK_TenantRoutingDiscriminator");
            });

            modelBuilder.Entity<Tenant>(entity =>
            {
                entity.ToTable("Tenants", "HostingModel");

                entity.HasIndex(e => e.KeyCloakConfigurationId, "IX_FK_KeyCloakConfigurationTenant");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.ObjectId).IsRequired();

                entity.HasOne(d => d.KeyCloakConfiguration)
                    .WithMany(p => p.Tenants)
                    .HasForeignKey(d => d.KeyCloakConfigurationId)
                    .HasConstraintName("FK_KeyCloakConfigurationTenant");

                entity.HasMany(d => d.AvailableNugetPackages)
                    .WithMany(p => p.TenantDeployments)
                    .UsingEntity<Dictionary<string, object>>(
                        "TenantNugetPackage",
                        l => l.HasOne<NugetPackage>().WithMany().HasForeignKey("AvailableNugetPackages_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_TenantNugetPackage_NugetPackage"),
                        r => r.HasOne<Tenant>().WithMany().HasForeignKey("TenantDeployments_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_TenantNugetPackage_Tenant"),
                        j =>
                        {
                            j.HasKey("TenantDeployments_Id", "AvailableNugetPackages_Id");

                            j.ToTable("TenantNugetPackage", "HostingModel");

                            j.HasIndex(new[] { "AvailableNugetPackages_Id" }, "IX_FK_TenantNugetPackage_NugetPackage");
                        });
            });

            modelBuilder.Entity<UriPath>(entity =>
            {
                entity.ToTable("UriPaths", "HostingModel");

                entity.HasIndex(e => e.RoutingDiscriminatorId, "IX_FK_RoutingDiscriminatorUriPath");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.HasOne(d => d.RoutingDiscriminator)
                    .WithMany(p => p.UriPaths)
                    .HasForeignKey(d => d.RoutingDiscriminatorId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_RoutingDiscriminatorUriPath");

                entity.HasMany(d => d.WWWRootAssetLocations)
                    .WithMany(p => p.UriPathWWWRootAssetLocations)
                    .UsingEntity<Dictionary<string, object>>(
                        "UriPathFilesystemAssetLocation",
                        l => l.HasOne<FilesystemAssetLocation>().WithMany().HasForeignKey("WWWRootAssetLocations_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_UriPathFilesystemAssetLocation_FilesystemAssetLocation"),
                        r => r.HasOne<UriPath>().WithMany().HasForeignKey("UriPathWWWRootAssetLocations_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_UriPathFilesystemAssetLocation_UriPath"),
                        j =>
                        {
                            j.HasKey("UriPathWWWRootAssetLocations_Id", "WWWRootAssetLocations_Id");

                            j.ToTable("UriPathFilesystemAssetLocation", "HostingModel");

                            j.HasIndex(new[] { "WWWRootAssetLocations_Id" }, "IX_FK_UriPathFilesystemAssetLocation_FilesystemAssetLocation");
                        });
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}