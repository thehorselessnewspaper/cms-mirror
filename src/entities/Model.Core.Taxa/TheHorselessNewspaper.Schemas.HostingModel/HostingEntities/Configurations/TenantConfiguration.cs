﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;

namespace TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.Configurations
{
    public partial class TenantConfiguration : IEntityTypeConfiguration<Tenant>
    {
        public void Configure(EntityTypeBuilder<Tenant> entity)
        {
            entity.Property(e => e.Id).ValueGeneratedNever();

            entity.HasMany(d => d.Accounts)
                .WithMany(p => p.TenantAccounts)
                .UsingEntity<Dictionary<string, object>>(
                    "TenantAccount",
                    l => l.HasOne<Principal>().WithMany().HasForeignKey("Accounts_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_TenantPrincipal_Principal"),
                    r => r.HasOne<Tenant>().WithMany().HasForeignKey("TenantAccounts_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_TenantPrincipal_Tenant"),
                    j =>
                    {
                        j.HasKey("TenantAccounts_Id", "Accounts_Id");

                        j.ToTable("TenantAccount");

                        j.HasIndex(new[] { "Accounts_Id" }, "IX_FK_TenantPrincipal_Principal");
                    });

            entity.HasMany(d => d.Owners)
                .WithMany(p => p.OwnedTenants)
                .UsingEntity<Dictionary<string, object>>(
                    "TenantOwner",
                    l => l.HasOne<Principal>().WithMany().HasForeignKey("Owners_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_TenantPrincipal1_Principal"),
                    r => r.HasOne<Tenant>().WithMany().HasForeignKey("OwnedTenants_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_TenantPrincipal1_Tenant"),
                    j =>
                    {
                        j.HasKey("OwnedTenants_Id", "Owners_Id");

                        j.ToTable("TenantOwner");

                        j.HasIndex(new[] { "Owners_Id" }, "IX_FK_TenantPrincipal1_Principal");
                    });

            OnConfigurePartial(entity);
        }

        partial void OnConfigurePartial(EntityTypeBuilder<Tenant> entity);
    }
}