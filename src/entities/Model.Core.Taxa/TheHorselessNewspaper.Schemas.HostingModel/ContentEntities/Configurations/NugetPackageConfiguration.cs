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
    public partial class NugetPackageConfiguration : IEntityTypeConfiguration<NugetPackage>
    {
        public void Configure(EntityTypeBuilder<NugetPackage> entity)
        {
            entity.Property(e => e.Id).ValueGeneratedNever();

            OnConfigurePartial(entity);
        }

        partial void OnConfigurePartial(EntityTypeBuilder<NugetPackage> entity);
    }
}