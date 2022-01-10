﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace TheHorselessNewspaper.Schemas.HostingModel.HostingEntities
{
    public partial class Host
    {
        public Guid Id { get; set; }
        public string TCPHost { get; set; }
        public string IsTenanantDiscriminator { get; set; }
        public Guid? RoutingDiscriminatorId { get; set; }
        public string ObjectId { get; set; }
        public string DisplayName { get; set; }
        public string HtmlLayoutFilename { get; set; }
        public DateTime? CreatedAt { get; set; }
        public string HTTPPort { get; set; }

        public virtual RoutingDiscriminator RoutingDiscriminator { get; set; }
    }
}