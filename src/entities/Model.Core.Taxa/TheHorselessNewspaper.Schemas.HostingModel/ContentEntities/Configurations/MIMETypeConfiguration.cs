﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Configurations
{
    public partial class MIMETypeConfiguration : IEntityTypeConfiguration<MIMEType>
    {
        public void Configure(EntityTypeBuilder<MIMEType> entity)
        {
            entity.Property(e => e.Id).ValueGeneratedNever();

            entity.Property(e => e.CreatedAt).HasColumnType("datetime");

            entity.Property(e => e.MIMETypeName).IsRequired();

            entity.Property(e => e.ObjectId).IsRequired();

            OnConfigurePartial(entity);
        }

        partial void OnConfigurePartial(EntityTypeBuilder<MIMEType> entity);
    }
}