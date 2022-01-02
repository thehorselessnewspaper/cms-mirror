﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    internal partial class THLNPContentContext : DbContext
    {
        public THLNPContentContext()
        {
        }

        public THLNPContentContext(DbContextOptions<THLNPContentContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AccessControlEntry> AccessControlEntries { get; set; }
        public virtual DbSet<ContentCollection> ContentCollections { get; set; }
        public virtual DbSet<FilesystemAsset> FilesystemAssets { get; set; }
        public virtual DbSet<Holonym> Holonyms { get; set; }
        public virtual DbSet<HorselessContent> HorselessContents { get; set; }
        public virtual DbSet<HorselessSession> HorselessSessions { get; set; }
        public virtual DbSet<JSONAsset> JSONAssets { get; set; }
        public virtual DbSet<MIMEType> MIMETypes { get; set; }
        public virtual DbSet<Meronym> Meronyms { get; set; }
        public virtual DbSet<NavigationMenu> NavigationMenus { get; set; }
        public virtual DbSet<NavigationMenuItem> NavigationMenuItems { get; set; }
        public virtual DbSet<NugetPackage> NugetPackages { get; set; }
        public virtual DbSet<Placeholder> Placeholders { get; set; }
        public virtual DbSet<Principal> Principals { get; set; }
        public virtual DbSet<Publication> Publications { get; set; }
        public virtual DbSet<Taxon> Taxons { get; set; }
        public virtual DbSet<Tenant> Tenants { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AccessControlEntry>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.ObjectId).IsRequired();
            });

            modelBuilder.Entity<ContentCollection>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.ObjectId).IsRequired();

                entity.Property(e => e.URL).IsRequired();

                entity.HasMany(d => d.ChildContentCollections)
                    .WithMany(p => p.ParentContentCollections)
                    .UsingEntity<Dictionary<string, object>>(
                        "ContentCollectionContentCollection",
                        l => l.HasOne<ContentCollection>().WithMany().HasForeignKey("ChildContentCollections_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_ContentCollectionContentCollection_ContentCollection"),
                        r => r.HasOne<ContentCollection>().WithMany().HasForeignKey("ParentContentCollections_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_ContentCollectionContentCollection_ContentCollection1"),
                        j =>
                        {
                            j.HasKey("ChildContentCollections_Id", "ParentContentCollections_Id");

                            j.ToTable("ContentCollectionContentCollection");

                            j.HasIndex(new[] { "ParentContentCollections_Id" }, "IX_FK_ContentCollectionContentCollection_ContentCollection1");
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
                        "ContentCollectionContentCollection",
                        l => l.HasOne<ContentCollection>().WithMany().HasForeignKey("ParentContentCollections_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_ContentCollectionContentCollection_ContentCollection1"),
                        r => r.HasOne<ContentCollection>().WithMany().HasForeignKey("ChildContentCollections_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_ContentCollectionContentCollection_ContentCollection"),
                        j =>
                        {
                            j.HasKey("ChildContentCollections_Id", "ParentContentCollections_Id");

                            j.ToTable("ContentCollectionContentCollection");

                            j.HasIndex(new[] { "ParentContentCollections_Id" }, "IX_FK_ContentCollectionContentCollection_ContentCollection1");
                        });
            });

            modelBuilder.Entity<FilesystemAsset>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.Filename).IsRequired();

                entity.Property(e => e.ObjectId).IsRequired();
            });

            modelBuilder.Entity<Holonym>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.JsonContent).IsRequired();

                entity.Property(e => e.JsonSchema).IsRequired();
            });

            modelBuilder.Entity<HorselessContent>(entity =>
            {
                entity.HasIndex(e => e.FilesystemAssetId, "IX_FK_FilesystemAssetMimeContent");

                entity.HasIndex(e => e.JSONAssetId, "IX_FK_MimeContentJSONAsset");

                entity.HasIndex(e => e.MIMETypeId, "IX_FK_MimeContentMIMEType");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.ObjectId).IsRequired();

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
            });

            modelBuilder.Entity<HorselessSession>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.ObjectId).IsRequired();
            });

            modelBuilder.Entity<JSONAsset>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.ObjectId).IsRequired();
            });

            modelBuilder.Entity<MIMEType>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.ObjectId).IsRequired();
            });

            modelBuilder.Entity<Meronym>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.JsonContent).IsRequired();

                entity.Property(e => e.JsonSchema).IsRequired();
            });

            modelBuilder.Entity<NavigationMenu>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.PublishAt).HasColumnType("datetime");

                entity.Property(e => e.UnPublishAt).HasColumnType("datetime");

                entity.HasMany(d => d.Children)
                    .WithMany(p => p.Parents)
                    .UsingEntity<Dictionary<string, object>>(
                        "NavigationMenuNavigationMenu",
                        l => l.HasOne<NavigationMenu>().WithMany().HasForeignKey("Children_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_NavigationMenuNavigationMenu_NavigationMenu"),
                        r => r.HasOne<NavigationMenu>().WithMany().HasForeignKey("Parents_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_NavigationMenuNavigationMenu_NavigationMenu1"),
                        j =>
                        {
                            j.HasKey("Children_Id", "Parents_Id");

                            j.ToTable("NavigationMenuNavigationMenu");

                            j.HasIndex(new[] { "Parents_Id" }, "IX_FK_NavigationMenuNavigationMenu_NavigationMenu1");
                        });

                entity.HasMany(d => d.Parents)
                    .WithMany(p => p.Children)
                    .UsingEntity<Dictionary<string, object>>(
                        "NavigationMenuNavigationMenu",
                        l => l.HasOne<NavigationMenu>().WithMany().HasForeignKey("Parents_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_NavigationMenuNavigationMenu_NavigationMenu1"),
                        r => r.HasOne<NavigationMenu>().WithMany().HasForeignKey("Children_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_NavigationMenuNavigationMenu_NavigationMenu"),
                        j =>
                        {
                            j.HasKey("Children_Id", "Parents_Id");

                            j.ToTable("NavigationMenuNavigationMenu");

                            j.HasIndex(new[] { "Parents_Id" }, "IX_FK_NavigationMenuNavigationMenu_NavigationMenu1");
                        });
            });

            modelBuilder.Entity<NavigationMenuItem>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.PublishAt).HasColumnType("datetime");

                entity.Property(e => e.UnPublishAt).HasColumnType("datetime");

                entity.HasMany(d => d.ChildNavigationItems)
                    .WithMany(p => p.ParentNavigationItems)
                    .UsingEntity<Dictionary<string, object>>(
                        "NavigationMenuItemNavigationMenuItem",
                        l => l.HasOne<NavigationMenuItem>().WithMany().HasForeignKey("ChildNavigationItems_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_NavigationMenuItemNavigationMenuItem_NavigationMenuItem"),
                        r => r.HasOne<NavigationMenuItem>().WithMany().HasForeignKey("ParentNavigationItems_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_NavigationMenuItemNavigationMenuItem_NavigationMenuItem1"),
                        j =>
                        {
                            j.HasKey("ChildNavigationItems_Id", "ParentNavigationItems_Id");

                            j.ToTable("NavigationMenuItemNavigationMenuItem");

                            j.HasIndex(new[] { "ParentNavigationItems_Id" }, "IX_FK_NavigationMenuItemNavigationMenuItem_NavigationMenuItem1");
                        });

                entity.HasMany(d => d.ParentNavigationItems)
                    .WithMany(p => p.ChildNavigationItems)
                    .UsingEntity<Dictionary<string, object>>(
                        "NavigationMenuItemNavigationMenuItem",
                        l => l.HasOne<NavigationMenuItem>().WithMany().HasForeignKey("ParentNavigationItems_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_NavigationMenuItemNavigationMenuItem_NavigationMenuItem1"),
                        r => r.HasOne<NavigationMenuItem>().WithMany().HasForeignKey("ChildNavigationItems_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_NavigationMenuItemNavigationMenuItem_NavigationMenuItem"),
                        j =>
                        {
                            j.HasKey("ChildNavigationItems_Id", "ParentNavigationItems_Id");

                            j.ToTable("NavigationMenuItemNavigationMenuItem");

                            j.HasIndex(new[] { "ParentNavigationItems_Id" }, "IX_FK_NavigationMenuItemNavigationMenuItem_NavigationMenuItem1");
                        });

                entity.HasMany(d => d.ParentNavigationMenus)
                    .WithMany(p => p.ChildNavigationMenuItems)
                    .UsingEntity<Dictionary<string, object>>(
                        "NavigationMenuItemNavigationMenu",
                        l => l.HasOne<NavigationMenu>().WithMany().HasForeignKey("ParentNavigationMenus_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_NavigationMenuItemNavigationMenu_NavigationMenu"),
                        r => r.HasOne<NavigationMenuItem>().WithMany().HasForeignKey("ChildNavigationMenuItems_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_NavigationMenuItemNavigationMenu_NavigationMenuItem"),
                        j =>
                        {
                            j.HasKey("ChildNavigationMenuItems_Id", "ParentNavigationMenus_Id");

                            j.ToTable("NavigationMenuItemNavigationMenu");

                            j.HasIndex(new[] { "ParentNavigationMenus_Id" }, "IX_FK_NavigationMenuItemNavigationMenu_NavigationMenu");
                        });
            });

            modelBuilder.Entity<NugetPackage>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.PublishAt).HasColumnType("datetime");

                entity.Property(e => e.UnPublishAt).HasColumnType("datetime");
            });

            modelBuilder.Entity<Placeholder>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.ObjectId).IsRequired();
            });

            modelBuilder.Entity<Principal>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.ObjectId).IsRequired();

                entity.HasMany(d => d.Tenants)
                    .WithMany(p => p.Principals)
                    .UsingEntity<Dictionary<string, object>>(
                        "PrincipalTenant",
                        l => l.HasOne<Tenant>().WithMany().HasForeignKey("Tenants_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_PrincipalTenant_Tenant"),
                        r => r.HasOne<Principal>().WithMany().HasForeignKey("Principals_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_PrincipalTenant_Principal"),
                        j =>
                        {
                            j.HasKey("Principals_Id", "Tenants_Id");

                            j.ToTable("PrincipalTenant");

                            j.HasIndex(new[] { "Tenants_Id" }, "IX_FK_PrincipalTenant_Tenant");
                        });
            });

            modelBuilder.Entity<Publication>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.PublishAt).HasColumnType("datetime");

                entity.Property(e => e.UnPublishAt).HasColumnType("datetime");

                entity.HasMany(d => d.ContentCollections)
                    .WithMany(p => p.Publications)
                    .UsingEntity<Dictionary<string, object>>(
                        "PublicationContentCollection",
                        l => l.HasOne<ContentCollection>().WithMany().HasForeignKey("ContentCollections_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_PublicationContentCollection_ContentCollection"),
                        r => r.HasOne<Publication>().WithMany().HasForeignKey("Publications_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_PublicationContentCollection_Publication"),
                        j =>
                        {
                            j.HasKey("Publications_Id", "ContentCollections_Id");

                            j.ToTable("PublicationContentCollection");

                            j.HasIndex(new[] { "ContentCollections_Id" }, "IX_FK_PublicationContentCollection_ContentCollection");
                        });

                entity.HasMany(d => d.PublicationParents)
                    .WithMany(p => p.PublicationsChildren)
                    .UsingEntity<Dictionary<string, object>>(
                        "PublicationPublication",
                        l => l.HasOne<Publication>().WithMany().HasForeignKey("PublicationParents_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_PublicationPublication_Publication1"),
                        r => r.HasOne<Publication>().WithMany().HasForeignKey("PublicationsChildren_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_PublicationPublication_Publication"),
                        j =>
                        {
                            j.HasKey("PublicationsChildren_Id", "PublicationParents_Id");

                            j.ToTable("PublicationPublication");

                            j.HasIndex(new[] { "PublicationParents_Id" }, "IX_FK_PublicationPublication_Publication1");
                        });

                entity.HasMany(d => d.PublicationsChildren)
                    .WithMany(p => p.PublicationParents)
                    .UsingEntity<Dictionary<string, object>>(
                        "PublicationPublication",
                        l => l.HasOne<Publication>().WithMany().HasForeignKey("PublicationsChildren_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_PublicationPublication_Publication"),
                        r => r.HasOne<Publication>().WithMany().HasForeignKey("PublicationParents_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_PublicationPublication_Publication1"),
                        j =>
                        {
                            j.HasKey("PublicationsChildren_Id", "PublicationParents_Id");

                            j.ToTable("PublicationPublication");

                            j.HasIndex(new[] { "PublicationParents_Id" }, "IX_FK_PublicationPublication_Publication1");
                        });
            });

            modelBuilder.Entity<Taxon>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.JsonContent).IsRequired();

                entity.Property(e => e.JsonSchema).IsRequired();
            });

            modelBuilder.Entity<Tenant>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.ObjectId).IsRequired();

                entity.HasMany(d => d.ContentCollections)
                    .WithMany(p => p.Tenants)
                    .UsingEntity<Dictionary<string, object>>(
                        "TenantContentCollection",
                        l => l.HasOne<ContentCollection>().WithMany().HasForeignKey("ContentCollections_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_TenantContentCollection_ContentCollection"),
                        r => r.HasOne<Tenant>().WithMany().HasForeignKey("Tenants_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_TenantContentCollection_Tenant"),
                        j =>
                        {
                            j.HasKey("Tenants_Id", "ContentCollections_Id");

                            j.ToTable("TenantContentCollection");

                            j.HasIndex(new[] { "ContentCollections_Id" }, "IX_FK_TenantContentCollection_ContentCollection");
                        });
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}