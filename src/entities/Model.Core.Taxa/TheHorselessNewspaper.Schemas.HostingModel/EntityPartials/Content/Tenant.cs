using TheHorselessNewspaper.HostingModel.Context;
using TheHorselessNewspaper.Schemas.HostingModel.Context;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{

    public enum TenantIdentifierStrategy 
    {

    }
    
    public partial class Tenant : IContentRowLevelSecured
    {
        public ICollection<AccessControlEntry> AccessControlList { get; set; } = new HashSet<AccessControlEntry>();
        public ICollection<Principal> Owners { get; set; } = new HashSet<Principal>();
    }
}
