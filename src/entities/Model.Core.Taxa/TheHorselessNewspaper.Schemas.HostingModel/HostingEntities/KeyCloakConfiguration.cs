﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace TheHorselessNewspaper.Schemas.HostingModel.HostingEntities
{
    public partial class KeyCloakConfiguration
    {
        public Guid Id { get; set; }
        public string DisplayName { get; set; }
        public string Authority { get; set; }
        public string Realm { get; set; }
        public string ObjectId { get; set; }
        public DateTime? CreatedAt { get; set; }
        public string Iss { get; set; }
        public string Aud { get; set; }
        public Guid? TenantInfoId { get; set; }

        public virtual TenantInfo TenantInfo { get; set; }
    }
}