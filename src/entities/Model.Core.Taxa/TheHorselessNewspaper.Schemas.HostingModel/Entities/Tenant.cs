﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace TheHorselessNewspaper.Schemas.HostingModel.Entities
{
    public partial class Tenant
    {
        public Tenant()
        {
            RoutingDiscriminators = new HashSet<RoutingDiscriminator>();
        }

        public Guid Id { get; set; }
        public string TenantId { get; set; }
        public string TenantDisplayName { get; set; }

        public virtual ICollection<RoutingDiscriminator> RoutingDiscriminators { get; set; }
    }
}