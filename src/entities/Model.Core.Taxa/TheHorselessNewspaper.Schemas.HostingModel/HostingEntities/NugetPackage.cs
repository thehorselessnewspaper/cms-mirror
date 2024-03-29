﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace TheHorselessNewspaper.Schemas.HostingModel.HostingEntities
{
    public partial class NugetPackage
    {
        [Key]
        public Guid Id { get; set; }
        public string ObjectId { get; set; }
        public string PackageName { get; set; }
        public string PackageId { get; set; }
        public string Publisher { get; set; }
        public string Version { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreatedAt { get; set; }
        public string DisplayName { get; set; }
    }
}