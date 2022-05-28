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
    public partial class HorselessContentConfiguration : IEntityTypeConfiguration<HorselessContent>
    {
        public void Configure(EntityTypeBuilder<HorselessContent> entity)
        {
            entity.Property(e => e.Id).ValueGeneratedNever();

            entity.HasOne(d => d.FilesystemAsset)
                .WithMany(p => p.HorselessContents)
                .HasForeignKey(d => d.FilesystemAssetId)
                .HasConstraintName("FK_FilesystemAssetMimeContent");

            entity.HasOne(d => d.JSONAsset)
                .WithMany(p => p.HorselessContents)
                .HasForeignKey(d => d.JSONAssetId)
                .HasConstraintName("FK_MimeContentJSONAsset");

            entity.HasOne(d => d.MIMEType)
                .WithMany(p => p.HorselessContents)
                .HasForeignKey(d => d.MIMETypeId)
                .HasConstraintName("FK_MimeContentMIMEType");

            OnConfigurePartial(entity);
        }

        partial void OnConfigurePartial(EntityTypeBuilder<HorselessContent> entity);
    }
}
