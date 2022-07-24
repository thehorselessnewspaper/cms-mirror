using Finbuckle.MultiTenant;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.Context;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{
    [MultiTenant]
    public partial class ContentCollection : IContentRowLevelSecured
    {

        // [ForeignKey("FK_AccessControlEntryManagedContentCollections")]
        // [InverseProperty(nameof(AccessControlEntry.ManagedContentCollections))]
        public virtual ICollection<AccessControlEntry> AccessControlEntries { get; set; } = new HashSet<AccessControlEntry>();


        // [ForeignKey("ParentContentCollectionsId")]
        // [InverseProperty(nameof(ContentCollection.ChildContentCollections))]
        public virtual ICollection<ContentCollection>? ParentContentCollections { get; set; } = new HashSet<ContentCollection>();

        [InverseProperty(nameof(ContentCollection.ParentContentCollections))]
        public virtual ICollection<ContentCollection>? ChildContentCollections { get; set; } = new HashSet<ContentCollection>();


        public virtual ICollection<Principal>? Owners { get; set; } =  new HashSet<Principal>();

        [Timestamp]
        public byte[] Timestamp {get; set;}  = BitConverter.GetBytes(DateTime.UtcNow.Ticks);
        public DateTime? UpdatedAt { get; set; }
        public string? DictionaryKey { get; set; }

        [InverseProperty(nameof(HorselessView.ContentCollections))]
        public virtual ICollection<HorselessView> HorselessViews { get; set; } = new HashSet<HorselessView>();

        [InverseProperty(nameof(Publication.ContentCollections))]
        public virtual ICollection<Publication> Publications { get; set; } = new HashSet<Publication>();

        [InverseProperty(nameof(Tenant.ContentCollections))]
        public virtual ICollection<Tenant> Tenants { get; set; } = new HashSet<Tenant>();

        [InverseProperty(nameof(Taxonomy.ContentCollections))]
        public ICollection<Taxonomy> Taxonomies { get; set; } = new HashSet<Taxonomy>();

        [InverseProperty(nameof(HorselessContent.ContentCollections))]
        public ICollection<HorselessContent> HorselessContents { get; set; } = new HashSet<HorselessContent>();
    }
}
