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

            OnConfigurePartial(entity);
        }

        partial void OnConfigurePartial(EntityTypeBuilder<HorselessSession> entity);
    }
}
