﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Schema.Diagrams.Hosting
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class HostingModelContainer : DbContext
    {
        public HostingModelContainer()
            : base("name=HostingModelContainer")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Tenant> Tenants { get; set; }
        public virtual DbSet<RoutingDiscriminator> RoutingDiscriminators { get; set; }
        public virtual DbSet<Host> Hosts { get; set; }
        public virtual DbSet<UriPath> UriPaths { get; set; }
    }
}