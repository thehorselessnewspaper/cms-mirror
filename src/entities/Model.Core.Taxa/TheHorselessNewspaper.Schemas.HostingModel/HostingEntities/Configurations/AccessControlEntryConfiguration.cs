﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;

namespace TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.Configurations
{
    public partial class AccessControlEntryConfiguration : IEntityTypeConfiguration<AccessControlEntry>
    {
        public void Configure(EntityTypeBuilder<AccessControlEntry> entity)
        {
            entity.Property(e => e.Id).ValueGeneratedNever();

            OnConfigurePartial(entity);
        }

        partial void OnConfigurePartial(EntityTypeBuilder<AccessControlEntry> entity);
    }
}
