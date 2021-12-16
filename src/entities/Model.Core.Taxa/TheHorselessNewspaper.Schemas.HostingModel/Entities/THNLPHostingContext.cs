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

        public virtual DbSet<Host> Hosts { get; set; }
        public virtual DbSet<RoutingDiscriminator> RoutingDiscriminators { get; set; }
        public virtual DbSet<Tenant> Tenants { get; set; }
        public virtual DbSet<UriPath> UriPaths { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Host>(entity =>
            {
                entity.ToTable("Hosts", "HostingModel");

                entity.HasIndex(e => e.RoutingDiscriminatorId, "IX_FK_RoutingDiscriminatorHost");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.ObjectId).IsRequired();

                entity.Property(e => e.TCPHost).IsRequired();

                entity.HasOne(d => d.RoutingDiscriminator)
                    .WithMany(p => p.Hosts)
                    .HasForeignKey(d => d.RoutingDiscriminatorId)
                    .HasConstraintName("FK_RoutingDiscriminatorHost");
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

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.ObjectId).IsRequired();
            });

            modelBuilder.Entity<UriPath>(entity =>
            {
                entity.ToTable("UriPaths", "HostingModel");

                entity.HasIndex(e => e.RoutingDiscriminatorId, "IX_FK_RoutingDiscriminatorUriPath");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.ObjectId).IsRequired();

                entity.HasOne(d => d.RoutingDiscriminator)
                    .WithMany(p => p.UriPaths)
                    .HasForeignKey(d => d.RoutingDiscriminatorId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_RoutingDiscriminatorUriPath");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}