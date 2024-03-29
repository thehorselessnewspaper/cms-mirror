﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
namespace TheHorselessNewspaper.HostingModel.MultiTenant
{
    /// <summary>
    /// multitenant composite entity
    /// </summary>
    public class HorselessTenantInfo : Finbuckle.MultiTenant.ITenantInfo
    {
        /// <summary>
        /// this is a DTO that accounts for 
        /// impedence mismatch between ITenantInfo.Id and HostingEntities.Id
        /// 
        /// you must consume this object after initializng a source payload
        /// </summary>
        public HorselessTenantInfo()
        {
            Payload = new TenantInfo();
        }

        /// <summary>
        /// you MUST supply a payload
        /// </summary>
        /// <param name="payload"></param>
        public HorselessTenantInfo(TenantInfo payload)
        {
            Payload = payload;
        }

        public TenantInfo Payload { get; set; }

        public string? Id
        {
            get => Payload.Id.ToString();
            set
            {
                if (value != null)
                {
                    Payload.Id = Guid.Parse(value);
                }
            }
        }

        public string? Identifier { get => Payload.Identifier; set { Payload.Identifier = value; } }

        public string? Name { get => Payload.Name; set { Payload.Name = value; } }

        public string? ConnectionString { get => Payload.ConnectionString; set { Payload.ConnectionString = value; } }
    }
}
