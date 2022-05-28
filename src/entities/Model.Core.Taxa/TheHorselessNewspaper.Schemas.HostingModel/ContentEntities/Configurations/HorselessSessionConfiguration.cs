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
    public partial class HorselessSessionConfiguration : IEntityTypeConfiguration<HorselessSession>
    {
        public void Configure(EntityTypeBuilder<HorselessSession> entity)
        {
            entity.Property(e => e.Id).ValueGeneratedNever();

            entity.HasOne(d => d.HorselessSessionPrincipal)
                .WithMany(p => p.HorselessSessions)
                .HasForeignKey(d => d.HorselessSessionPrincipalId)
                .HasConstraintName("FK_PrincipalHorselessSession");

            entity.HasMany(d => d.AccessControlEntries)
                .WithMany(p => p.SubjectHorselessSessions)
                .UsingEntity<Dictionary<string, object>>(
                    "HorselessSessionAccessControlEntry",
                    l => l.HasOne<AccessControlEntry>().WithMany().HasForeignKey("AccessControlEntries_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_HorselessSessionAccessControlEntry_AccessControlledHorselessSession"),
                    r => r.HasOne<HorselessSession>().WithMany().HasForeignKey("SubjectHorselessSessions_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_HorselessSessionAccessControlEntry_SubjectHorselessSession"),
                    j =>
                    {
                        j.HasKey("SubjectHorselessSessions_Id", "AccessControlEntries_Id");

                        j.ToTable("HorselessSessionAccessControlEntry");

                        j.HasIndex(new[] { "AccessControlEntries_Id" }, "IX_FK_HorselessSessionAccessControlEntry_AccessControlledHorselessSession");
                    });

            entity.HasMany(d => d.Owners)
                .WithMany(p => p.OwnedHorselessSessions)
                .UsingEntity<Dictionary<string, object>>(
                    "HorselessSessionPrincipal",
                    l => l.HasOne<Principal>().WithMany().HasForeignKey("Owners_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_HorselessSessionPrincipal_Principal"),
                    r => r.HasOne<HorselessSession>().WithMany().HasForeignKey("OwnedHorselessSessions_Id").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_HorselessSessionPrincipal_HorselessSession"),
                    j =>
                    {
                        j.HasKey("OwnedHorselessSessions_Id", "Owners_Id");

                        j.ToTable("HorselessSessionPrincipal");

                        j.HasIndex(new[] { "Owners_Id" }, "IX_FK_HorselessSessionPrincipal_Principal");
                    });

            OnConfigurePartial(entity);
        }

        partial void OnConfigurePartial(EntityTypeBuilder<HorselessSession> entity);
    }
}
