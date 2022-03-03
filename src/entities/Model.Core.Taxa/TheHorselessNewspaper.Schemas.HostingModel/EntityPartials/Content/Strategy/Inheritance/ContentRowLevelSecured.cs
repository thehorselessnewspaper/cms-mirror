using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using TheHorselessNewspaper.Schemas.HostingModel.Context;

namespace TheHorselessNewspaper.HostingModel.EntityPartials.Content.Strategy.Inheritance
{
    public abstract class ContentRowLevelSecured : IContentRowLevelSecured
    {
        public ICollection<AccessControlEntry> AccessControlList { get; set; } = new HashSet<AccessControlEntry>();
        public ICollection<Principal> Owners { get; set; } = new HashSet<Principal>();
        public Guid Id { get; set; }
        public string? ObjectId { get; set; }
        public DateTime? CreatedAt { get; set; }
        public string? DisplayName { get; set; }
        public bool? IsSoftDeleted { get; set; }
     }
}
