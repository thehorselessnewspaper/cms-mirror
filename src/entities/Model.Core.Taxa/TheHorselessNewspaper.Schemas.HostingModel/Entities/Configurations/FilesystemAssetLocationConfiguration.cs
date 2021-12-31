﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using TheHorselessNewspaper.Schemas.HostingModel.Entities;

namespace TheHorselessNewspaper.Schemas.HostingModel.Entities.Configurations
{
    public partial class FilesystemAssetLocationConfiguration : IEntityTypeConfiguration<FilesystemAssetLocation>
    {
        public void Configure(EntityTypeBuilder<FilesystemAssetLocation> entity)
        {
            entity.ToTable("FilesystemAssetLocations", "HostingModel");

            entity.HasIndex(e => e.TenantInfoId, "IX_FK_TenantInfoFilesystemAssetLocation");

            entity.Property(e => e.Id).ValueGeneratedNever();

            entity.Property(e => e.CreatedAt).HasColumnType("datetime");

            entity.HasOne(d => d.TenantInfo)
                .WithMany(p => p.FilesystemAssetLocations)
                .HasForeignKey(d => d.TenantInfoId)
                .HasConstraintName("FK_TenantInfoFilesystemAssetLocation");

            OnConfigurePartial(entity);
        }

        partial void OnConfigurePartial(EntityTypeBuilder<FilesystemAssetLocation> entity);
    }
}
