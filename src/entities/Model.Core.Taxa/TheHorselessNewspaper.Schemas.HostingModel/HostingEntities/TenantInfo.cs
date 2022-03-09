﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheHorselessNewspaper.Schemas.HostingModel.HostingEntities
{
    public partial class TenantInfo
    {
        public TenantInfo()
        {
            KeyCloakConfigurations = new HashSet<KeyCloakConfiguration>();
            WebAPITenantInfos = new HashSet<WebAPITenantInfo>();
        }

        public Guid Id { get; set; }
        public string DisplayName { get; set; }
        public string ObjectId { get; set; }
        public bool? IsSoftDeleted { get; set; }
        public DateTime? CreatedAt { get; set; }
        public string Identifier { get; set; }
        public string Name { get; set; }
        public string ConnectionString { get; set; }
        public string TenantBaseUrl { get; set; }
        public Guid? Tenant_Id { get; set; }

        [ForeignKey("TenantId")]
        public virtual Tenant Tenant { get; set; }
        public virtual ICollection<KeyCloakConfiguration> KeyCloakConfigurations { get; set; }
        public virtual ICollection<WebAPITenantInfo> WebAPITenantInfos { get; set; }
    }
}