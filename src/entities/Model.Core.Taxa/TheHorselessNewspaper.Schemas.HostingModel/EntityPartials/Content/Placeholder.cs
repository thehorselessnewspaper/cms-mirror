using Finbuckle.MultiTenant;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using TheHorselessNewspaper.HostingModel.Context;
using TheHorselessNewspaper.Schemas.HostingModel.Context;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{

    [MultiTenant]
    public partial class Placeholder : IQueryableModelEntity
    {
        [Key]
        public System.Guid Id { get; set; }
        public string? DisplayName { get; set; }

        public string? ObjectId { get; set; }
        public Nullable<bool> IsSoftDeleted { get; set; }
        public Nullable<System.DateTime> CreatedAt { get; set; }
        public Nullable<bool> IsPublished { get; set; }
        public string? Description { get; set; }
    }
}
