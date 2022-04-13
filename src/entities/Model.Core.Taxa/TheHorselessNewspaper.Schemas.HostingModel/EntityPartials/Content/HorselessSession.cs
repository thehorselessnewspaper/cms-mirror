using Finbuckle.MultiTenant;
using System.ComponentModel.DataAnnotations;
using TheHorselessNewspaper.HostingModel.Context;
using TheHorselessNewspaper.Schemas.HostingModel.Context;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    [MultiTenant]
    public partial class HorselessSession : IContentRowLevelSecured
    {
        //public ICollection<AccessControlEntry> AccessControlEntries { get; set; } = new HashSet<AccessControlEntry>();
        //public ICollection<Principal> Owners { get; set; } = new HashSet<Principal>();
        [Timestamp]
        public byte[] Timestamp { get; set; } = BitConverter.GetBytes(DateTime.UtcNow.Ticks);
    }
}
