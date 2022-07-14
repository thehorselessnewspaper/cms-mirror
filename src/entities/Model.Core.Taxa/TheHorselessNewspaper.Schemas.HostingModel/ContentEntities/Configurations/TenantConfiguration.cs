﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

#nullable disable

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Configurations
{
    public partial class TenantConfiguration : IEntityTypeConfiguration<Tenant>
    {
        public void Configure(EntityTypeBuilder<Tenant> entity)
        {
            entity.Property(e => e.Id).ValueGeneratedNever();

            entity.HasMany(d => d.AccessControlEntries)
                .WithMany(p => p.SubjectTenants)
                .UsingEntity<Dictionary<string, object>>(
                    "TenantAccessControlEntry",
                    l => l.HasOne<AccessControlEntry>().WithMany().HasForeignKey("AccessControlEntries_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_TenantAccessControlEntries_AccessControlEntry"),
                    r => r.HasOne<Tenant>().WithMany().HasForeignKey("SubjectTenants_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_TenantAccessControlEntries_SubjectTenant"),
                    j =>
                    {
                        j.HasKey("SubjectTenants_Id", "AccessControlEntries_Id");

                        j.ToTable("TenantAccessControlEntries");

                        j.HasIndex(new[] { "AccessControlEntries_Id" }, "IX_FK_TenantAccessControlEntries_AccessControlEntry");
                    });

            entity.HasMany(d => d.ContentCollections)
                .WithMany(p => p.Tenants)
                .UsingEntity<Dictionary<string, object>>(
                    "TenantContentCollection",
                    l => l.HasOne<ContentCollection>().WithMany().HasForeignKey("ContentCollections_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_TenantContentCollections_ContentCollection"),
                    r => r.HasOne<Tenant>().WithMany().HasForeignKey("Tenants_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_TenantContentCollections_Tenant"),
                    j =>
                    {
                        j.HasKey("Tenants_Id", "ContentCollections_Id");

                        j.ToTable("TenantContentCollections");

                        j.HasIndex(new[] { "ContentCollections_Id" }, "IX_FK_TenantContentCollections_ContentCollection");
                    });

            OnConfigurePartial(entity);
        }

        partial void OnConfigurePartial(EntityTypeBuilder<Tenant> entity);
    }
}
