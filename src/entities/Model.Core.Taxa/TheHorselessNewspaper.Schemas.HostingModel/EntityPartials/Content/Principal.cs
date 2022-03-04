using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using TheHorselessNewspaper.Schemas.HostingModel.Context;
using TheHorselessNewspaper.HostingModel.Context;
using Finbuckle.MultiTenant;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{

    // [MultiTenant]
    public partial class Principal : IQueryableModelEntity, IContentRowLevelSecured
    {
        public byte[] Timestamp {get; set;}

        [NotMapped]
        public ICollection<AccessControlEntry> AccessControlList { get; set; }

        [NotMapped]
        public ICollection<Principal> Owners { get; set; }


    }
}
