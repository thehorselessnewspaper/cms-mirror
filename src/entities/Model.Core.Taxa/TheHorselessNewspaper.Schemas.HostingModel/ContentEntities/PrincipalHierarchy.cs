using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    [Table("PrincipalHierarchy")]
    [Index("Owners_Id", Name = "IX_FK_PrincipalHierarchy_Owned")]
    public partial class PrincipalHierarchy
    {
        [Key]
        public Guid OwnedPrincipals_Id { get; set; }
        [Key]
        public Guid Owners_Id { get; set; }

        [ForeignKey("OwnedPrincipals_Id")]
        [InverseProperty("PrincipalHierarchyOwnedPrincipals")]
        public virtual Principal OwnedPrincipals { get; set; } = null!;
        [ForeignKey("Owners_Id")]
        [InverseProperty("PrincipalHierarchyOwners")]
        public virtual Principal Owners { get; set; } = null!;
    }
}
