using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    [Index("Accounts_Id", Name = "IX_FK_TenantAccounts_Principal")]
    public partial class TenantAccount
    {
        [Key]
        public Guid TenantAccounts_Id { get; set; }
        [Key]
        public Guid Accounts_Id { get; set; }

        [ForeignKey("Accounts_Id")]
        [InverseProperty("TenantAccounts")]
        public virtual Principal Accounts { get; set; } = null!;
        [ForeignKey("TenantAccounts_Id")]
        [InverseProperty("TenantAccounts")]
        public virtual Tenant TenantAccounts { get; set; } = null!;
    }
}
