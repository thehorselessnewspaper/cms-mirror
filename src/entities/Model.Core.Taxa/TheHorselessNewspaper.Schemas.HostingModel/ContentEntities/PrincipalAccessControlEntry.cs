using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    [Table("PrincipalAccessControlEntry")]
    [Index("AccessControlEntries_Id", Name = "IX_FK_PrincipalAccessControlEntry_AccessControlEntry")]
    public partial class PrincipalAccessControlEntry
    {
        [Key]
        public Guid SubjectPrincipals_Id { get; set; }
        [Key]
        public Guid AccessControlEntries_Id { get; set; }

        [ForeignKey("AccessControlEntries_Id")]
        [InverseProperty("PrincipalAccessControlEntries")]
        public virtual AccessControlEntry AccessControlEntries { get; set; } = null!;
        [ForeignKey("SubjectPrincipals_Id")]
        [InverseProperty("PrincipalAccessControlEntries")]
        public virtual Principal SubjectPrincipals { get; set; } = null!;
    }
}
