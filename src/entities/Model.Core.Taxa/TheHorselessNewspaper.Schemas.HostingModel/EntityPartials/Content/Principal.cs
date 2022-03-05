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
        [Timestamp]
        public byte[] Timestamp { get; set; } = BitConverter.GetBytes(DateTime.UtcNow.Ticks);


        public ICollection<AccessControlEntry> AccessControlList { get; set; }


        public ICollection<Principal> Owners { get; set; }


    }
}
