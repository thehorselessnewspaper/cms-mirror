using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    [Index("Owners_Id", Name = "IX_FK_AccessControlEntryOwners_Owner")]
    public partial class AccessControlEntryOwner
    {
        [Key]
        public Guid OwnedAccessControlEntries_Id { get; set; }
        [Key]
        public Guid Owners_Id { get; set; }

        [ForeignKey("OwnedAccessControlEntries_Id")]
        [InverseProperty("AccessControlEntryOwners")]
        public virtual AccessControlEntry OwnedAccessControlEntries { get; set; } = null!;
        [ForeignKey("Owners_Id")]
        [InverseProperty("AccessControlEntryOwners")]
        public virtual Principal Owners { get; set; } = null!;
    }
}
