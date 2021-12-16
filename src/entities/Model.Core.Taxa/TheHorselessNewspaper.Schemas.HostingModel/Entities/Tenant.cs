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
            AvailableNugetPackages = new HashSet<NugetPackage>();
        }

        public Guid Id { get; set; }
        public string DisplayName { get; set; }
        public string ObjectId { get; set; }
        public bool? IsSoftDeleted { get; set; }
        public DateTime? CreatedAt { get; set; }
        public Guid? KeyCloakConfigurationId { get; set; }

        public virtual KeyCloakConfiguration KeyCloakConfiguration { get; set; }
        public virtual ICollection<RoutingDiscriminator> RoutingDiscriminators { get; set; }

        public virtual ICollection<NugetPackage> AvailableNugetPackages { get; set; }
    }
}