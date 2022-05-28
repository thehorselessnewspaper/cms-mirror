using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    [Index("AccessControlEntries_Id", Name = "IX_FK_TenantAccessControlEntries_AccessControlEntry")]
    public partial class TenantAccessControlEntry
    {
        [Key]
        public Guid SubjectTenants_Id { get; set; }
        [Key]
        public Guid AccessControlEntries_Id { get; set; }

        [ForeignKey("AccessControlEntries_Id")]
        [InverseProperty("TenantAccessControlEntries")]
        public virtual AccessControlEntry AccessControlEntries { get; set; } = null!;
        [ForeignKey("SubjectTenants_Id")]
        [InverseProperty("TenantAccessControlEntries")]
        public virtual Tenant SubjectTenants { get; set; } = null!;
    }
}
