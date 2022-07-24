﻿using Finbuckle.MultiTenant;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using TheHorselessNewspaper.HostingModel.Context;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    [MultiTenant]
    public partial class HorselessSession : IContentRowLevelSecured
    {

        [Timestamp]
        public byte[] Timestamp { get; set; } = BitConverter.GetBytes(DateTime.UtcNow.Ticks);
        public DateTime? UpdatedAt { get; set; }
        public string? DictionaryKey { get; set; }


        public ICollection<AccessControlEntry>? AccessControlEntries { get; set; }


        // [ForeignKey("FK_HorselessSessionOwners")]
        [InverseProperty(nameof(ContentEntities.Principal.OwnedHorselessSessions))]
        public ICollection<Principal> Owners { get; set; } = new HashSet<Principal>();


        public Guid? PrincipalId { get; set; }

        // [ForeignKey("FK_HorselessSessionPrincipal")]
        [InverseProperty(nameof(ContentEntities.Principal.HorselessSessions))]
        public Principal? Principal { get; set; }
    }
}
