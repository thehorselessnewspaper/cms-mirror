using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using TheHorselessNewspaper.Schemas.HostingModel.Context;

namespace TheHorselessNewspaper.HostingModel.EntityPartials.Content.Strategy.Inheritance
{
    public class ContentRowLevelSecured : IContentRowLevelSecured
    {
        public ICollection<AccessControlEntry> AccessControlList { get; set; } = new HashSet<AccessControlEntry>();
        public ICollection<Principal> Owners { get; set; } = new HashSet<Principal>();
        public Guid Id { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public string? ObjectId { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public DateTime? CreatedAt { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public string? DisplayName { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public bool? IsSoftDeleted { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
     }
}
