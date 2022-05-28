using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    [Index("ContentCollections_Id", Name = "IX_FK_TenantContentCollections_ContentCollection")]
    public partial class TenantContentCollection
    {
        [Key]
        public Guid Tenants_Id { get; set; }
        [Key]
        public Guid ContentCollections_Id { get; set; }

        [ForeignKey("ContentCollections_Id")]
        [InverseProperty("TenantContentCollections")]
        public virtual ContentCollection ContentCollections { get; set; } = null!;
        [ForeignKey("Tenants_Id")]
        [InverseProperty("TenantContentCollections")]
        public virtual Tenant Tenants { get; set; } = null!;
    }
}
