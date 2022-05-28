using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    [Table("HorselessSessionAccessControlEntry")]
    [Index("AccessControlEntries_Id", Name = "IX_FK_HorselessSessionAccessControlEntry_AccessControlledHorselessSession")]
    public partial class HorselessSessionAccessControlEntry
    {
        [Key]
        public Guid SubjectHorselessSessions_Id { get; set; }
        [Key]
        public Guid AccessControlEntries_Id { get; set; }

        [ForeignKey("AccessControlEntries_Id")]
        [InverseProperty("HorselessSessionAccessControlEntries")]
        public virtual AccessControlEntry AccessControlEntries { get; set; } = null!;
        [ForeignKey("SubjectHorselessSessions_Id")]
        [InverseProperty("HorselessSessionAccessControlEntries")]
        public virtual HorselessSession SubjectHorselessSessions { get; set; } = null!;
    }
}
