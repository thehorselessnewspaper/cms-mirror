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
    public partial class ContentCollectionConfiguration : IEntityTypeConfiguration<ContentCollection>
    {
        public void Configure(EntityTypeBuilder<ContentCollection> entity)
        {
            entity.Property(e => e.Id).ValueGeneratedNever();

            entity.HasMany(d => d.ChildContentCollections)
                .WithMany(p => p.ParentContentCollections)
                .UsingEntity<Dictionary<string, object>>(
                    "ContentCollectionHierarchy",
                    l => l.HasOne<ContentCollection>().WithMany().HasForeignKey("ChildContentCollections_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_ContentCollectionHierarchy_ContentCollection"),
                    r => r.HasOne<ContentCollection>().WithMany().HasForeignKey("ParentContentCollections_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_ContentCollectionHierarchy_ChildContentCollections"),
                    j =>
                    {
                        j.HasKey("ChildContentCollections_Id", "ParentContentCollections_Id");

                        j.ToTable("ContentCollectionHierarchy");

                        j.HasIndex(new[] { "ParentContentCollections_Id" }, "IX_FK_ContentCollectionHierarchy_ChildContentCollections");
                    });

            entity.HasMany(d => d.MimeContents)
                .WithMany(p => p.ContentCollections)
                .UsingEntity<Dictionary<string, object>>(
                    "ContentCollectionMimeContent",
                    l => l.HasOne<HorselessContent>().WithMany().HasForeignKey("MimeContents_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_ContentCollectionMimeContent_MimeContent"),
                    r => r.HasOne<ContentCollection>().WithMany().HasForeignKey("ContentCollections_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_ContentCollectionMimeContent_ContentCollection"),
                    j =>
                    {
                        j.HasKey("ContentCollections_Id", "MimeContents_Id");

                        j.ToTable("ContentCollectionMimeContent");

                        j.HasIndex(new[] { "MimeContents_Id" }, "IX_FK_ContentCollectionMimeContent_MimeContent");
                    });

            entity.HasMany(d => d.ParentContentCollections)
                .WithMany(p => p.ChildContentCollections)
                .UsingEntity<Dictionary<string, object>>(
                    "ContentCollectionHierarchy",
                    l => l.HasOne<ContentCollection>().WithMany().HasForeignKey("ParentContentCollections_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_ContentCollectionHierarchy_ChildContentCollections"),
                    r => r.HasOne<ContentCollection>().WithMany().HasForeignKey("ChildContentCollections_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_ContentCollectionHierarchy_ContentCollection"),
                    j =>
                    {
                        j.HasKey("ChildContentCollections_Id", "ParentContentCollections_Id");

                        j.ToTable("ContentCollectionHierarchy");

                        j.HasIndex(new[] { "ParentContentCollections_Id" }, "IX_FK_ContentCollectionHierarchy_ChildContentCollections");
                    });

            OnConfigurePartial(entity);
        }

        partial void OnConfigurePartial(EntityTypeBuilder<ContentCollection> entity);
    }
}