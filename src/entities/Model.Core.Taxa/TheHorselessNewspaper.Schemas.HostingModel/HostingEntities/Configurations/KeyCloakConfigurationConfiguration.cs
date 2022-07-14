﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;

#nullable disable

namespace TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.Configurations
{
    public partial class KeyCloakConfigurationConfiguration : IEntityTypeConfiguration<KeyCloakConfiguration>
    {
        public void Configure(EntityTypeBuilder<KeyCloakConfiguration> entity)
        {
            entity.Property(e => e.Id).ValueGeneratedNever();

            entity.HasOne(d => d.TenantInfo)
                .WithMany(p => p.KeyCloakConfigurations)
                .HasForeignKey(d => d.TenantInfoId)
                .HasConstraintName("FK_TenantInfoKeyCloakConfiguration");

            OnConfigurePartial(entity);
        }

        partial void OnConfigurePartial(EntityTypeBuilder<KeyCloakConfiguration> entity);
    }
}
