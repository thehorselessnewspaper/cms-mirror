using Microsoft.EntityFrameworkCore;
using TheHorselessNewspaper.HostingModel.Context;
using TheHorselessNewspaper.Schemas.HostingModel.Context;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    [Owned]
    public partial class Placeholder : IQueryableModelEntity
    {
        public System.Guid Id { get; set; }
        public string? DisplayName { get; set; }
        public string? ObjectId { get; set; }
        public Nullable<bool> IsSoftDeleted { get; set; }
        public Nullable<System.DateTime> CreatedAt { get; set; }
        public Nullable<bool> IsPublished { get; set; }
        public string? Description { get; set; }
    }
}
