﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using TheHorselessNewspaper.HostingModel.Context;

namespace TheHorselessNewspaper.Schemas.HostingModel.HostingEntities
{

    public partial class HorselessPrincipal
    {

    }

    [Owned]
    // [Table("Principals")]
    public partial class Principal: IQueryableModelEntity
    {
        [Key]
        public Guid Id { get; set; }
        public string DisplayName { get; set; }
        [Required]
        public string ObjectId { get; set; }
        public bool? IsSoftDeleted { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreatedAt { get; set; }
        public string Iss { get; set; }
        public string Aud { get; set; }
        public string Sub { get; set; }

        //public HostingEntities.HorselessClaimsPrincipal? HorselessClaimsPrincipal { get; set; }
    }
}