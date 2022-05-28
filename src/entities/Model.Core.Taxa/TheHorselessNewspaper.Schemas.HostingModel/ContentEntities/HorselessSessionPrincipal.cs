using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    [Table("HorselessSessionPrincipal")]
    [Index("Owners_Id", Name = "IX_FK_HorselessSessionPrincipal_Principal")]
    public partial class HorselessSessionPrincipal
    {
        [Key]
        public Guid OwnedHorselessSessions_Id { get; set; }
        [Key]
        public Guid Owners_Id { get; set; }

        [ForeignKey("OwnedHorselessSessions_Id")]
        [InverseProperty("HorselessSessionPrincipals")]
        public virtual HorselessSession OwnedHorselessSessions { get; set; } = null!;
        [ForeignKey("Owners_Id")]
        [InverseProperty("HorselessSessionPrincipals")]
        public virtual Principal Owners { get; set; } = null!;
    }
}
