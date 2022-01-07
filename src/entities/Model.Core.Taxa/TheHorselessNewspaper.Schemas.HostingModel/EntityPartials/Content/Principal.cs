using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using TheHorselessNewspaper.Schemas.HostingModel.Context;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{

    public partial class HorselessPrincipal
    {

    }

    [Owned]
    // [Table("Principals")]
    public partial class Principal
    {
        [Key]
        public Guid Id { get; set; }
        public string DisplayName { get; set; }
        [Required]
        public string ObjectId { get; set; }
        public bool? IsSoftDeleted { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? CreatedAt { get; set; }
        public string Iss { get; set; }
        public string Aud { get; set; }
        public string Sub { get; set; }
    }
}
