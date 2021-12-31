﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace TheHorselessNewspaper.Schemas.HostingModel.Entities
{
    public partial class RoutingDiscriminator
    {
        public RoutingDiscriminator()
        {
            Hosts = new HashSet<Host>();
            UriPaths = new HashSet<UriPath>();
        }

        public Guid Id { get; set; }
        public bool? IsActive { get; set; }
        public Guid? TenantId { get; set; }
        public string ObjectId { get; set; }
        public string DisplayName { get; set; }
        public DateTime? CreatedAt { get; set; }

        public virtual Tenant Tenant { get; set; }
        public virtual ICollection<Host> Hosts { get; set; }
        public virtual ICollection<UriPath> UriPaths { get; set; }
    }
}