using Finbuckle.MultiTenant;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using TheHorselessNewspaper.HostingModel.Context;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    [MultiTenant]
    public partial class Taxon : IContentRowLevelSecured
    {
        public ICollection<AccessControlEntry>? AccessControlEntries { get; set; } = new HashSet<AccessControlEntry>();
        public ICollection<Principal>? Owners { get; set; } = new HashSet<Principal>();
        [Timestamp]
        public byte[] Timestamp { get; set; } = BitConverter.GetBytes(DateTime.UtcNow.Ticks);
        public DateTime? UpdatedAt { get; set; }
        public string? DictionaryKey { get; set; }


        public Guid? TaxonomyId { get; set; }
        public Taxonomy? Taxonomy { get; set; }

        public ICollection<Holonym> Holonyms { get; set; } = new HashSet<Holonym>();
    }

    [MultiTenant]
    public partial class Taxonomy : IContentRowLevelSecured
    {
        public ICollection<AccessControlEntry>? AccessControlEntries { get; set; } = new HashSet<AccessControlEntry>();
        public ICollection<Principal>? Owners { get; set; } = new HashSet<Principal>();

        [Timestamp]
        public byte[] Timestamp { get; set; } = BitConverter.GetBytes(DateTime.UtcNow.Ticks);
        public DateTime? UpdatedAt { get; set; }
        public string? DictionaryKey { get; set; }

        public ICollection<Taxon> Taxons { get; set; } = new HashSet<Taxon>();

        [InverseProperty(nameof(ContentCollection.Taxonomies))]
        public ICollection<ContentCollection> ContentCollections { get; set; } = new HashSet<ContentCollection>();
    }
}
