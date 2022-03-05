﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Schema.Diagrams.Content
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class HorselessContentModelContainer : DbContext
    {
        public HorselessContentModelContainer()
            : base("name=HorselessContentModelContainer")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<HorselessContent> HorselessContents { get; set; }
        public virtual DbSet<Tenant> Tenants { get; set; }
        public virtual DbSet<MIMEType> MIMETypes { get; set; }
        public virtual DbSet<FilesystemAsset> FilesystemAssets { get; set; }
        public virtual DbSet<JSONAsset> JSONAssets { get; set; }
        public virtual DbSet<ContentCollection> ContentCollections { get; set; }
        public virtual DbSet<Publication> Publications { get; set; }
        public virtual DbSet<Placeholder> Placeholders { get; set; }
        public virtual DbSet<Taxon> Taxons { get; set; }
        public virtual DbSet<Holonym> Holonyms { get; set; }
        public virtual DbSet<Meronym> Meronyms { get; set; }
        public virtual DbSet<Principal> Principals { get; set; }
        public virtual DbSet<NugetPackage> NugetPackages { get; set; }
        public virtual DbSet<AccessControlEntry> AccessControlEntries { get; set; }
        public virtual DbSet<HorselessSession> HorselessSessions { get; set; }
        public virtual DbSet<NavigationMenu> NavigationMenus { get; set; }
        public virtual DbSet<NavigationMenuItem> NavigationMenuItems { get; set; }
        public virtual DbSet<Taxonomy> Taxonomies { get; set; }
    }
}