﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using TheHorselessNewspaper.Schemas.HostingModel.Entities;

namespace TheHorselessNewspaper.Schemas.HostingModel.Entities.Configurations
{
    public partial class UriPathConfiguration : IEntityTypeConfiguration<UriPath>
    {
        public void Configure(EntityTypeBuilder<UriPath> entity)
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

            OnConfigurePartial(entity);
        }

        partial void OnConfigurePartial(EntityTypeBuilder<UriPath> entity);
    }
}
