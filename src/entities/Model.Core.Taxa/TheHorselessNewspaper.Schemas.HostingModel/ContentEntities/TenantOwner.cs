using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    [Index("Owners_Id", Name = "IX_FK_TenantOwners_Principal")]
    public partial class TenantOwner
    {
        [Key]
        public Guid OwnedTenants_Id { get; set; }
        [Key]
        public Guid Owners_Id { get; set; }

        [ForeignKey("OwnedTenants_Id")]
        [InverseProperty("TenantOwners")]
        public virtual Tenant OwnedTenants { get; set; } = null!;
        [ForeignKey("Owners_Id")]
        [InverseProperty("TenantOwners")]
        public virtual Principal Owners { get; set; } = null!;
    }
}
