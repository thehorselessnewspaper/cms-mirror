using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    [Table("AccessControlEntryHierarchy")]
    [Index("AccessControlEntries_Id", Name = "IX_FK_AccessControlEntryHierarchy_SubjectAccessControlEntry")]
    public partial class AccessControlEntryHierarchy
    {
        [Key]
        public Guid SubjectAccessControlEntries_Id { get; set; }
        [Key]
        public Guid AccessControlEntries_Id { get; set; }

        [ForeignKey("AccessControlEntries_Id")]
        [InverseProperty("AccessControlEntryHierarchyAccessControlEntries")]
        public virtual AccessControlEntry AccessControlEntries { get; set; } = null!;
        [ForeignKey("SubjectAccessControlEntries_Id")]
        [InverseProperty("AccessControlEntryHierarchySubjectAccessControlEntries")]
        public virtual AccessControlEntry SubjectAccessControlEntries { get; set; } = null!;
    }
}
