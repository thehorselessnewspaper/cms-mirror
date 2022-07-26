using Finbuckle.MultiTenant;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using TheHorselessNewspaper.HostingModel.Context;

namespace TheHorselessNewspaper.Schemas.ContentModel.ContentEntities
{

    public enum HorselessContentType
    {
        IsFilesystemAsset,
        IsJSONAsset,
        IsUnset
    }

    [MultiTenant]
    public partial class HorselessContent : IContentRowLevelSecured
    {
        // [ForeignKey("FK_AccessControlEntryManagedHorselessContents")]
        [InverseProperty(nameof(AccessControlEntry.HorselessContents))]
        public ICollection<AccessControlEntry> AccessControlEntries { get; set; } = new HashSet<AccessControlEntry>();

        [InverseProperty(nameof(Principal.HorselessContents))]
        public ICollection<Principal> Owners { get; set; } = new HashSet<Principal>();

        [InverseProperty(nameof(ContentCollection.HorselessContents))]
        public ICollection<ContentCollection> ContentCollections { get; set; } = new HashSet<ContentCollection>();
        [Timestamp]
        public byte[] Timestamp { get; set; } = BitConverter.GetBytes(DateTime.UtcNow.Ticks);
        public DateTime? UpdatedAt { get; set; }
        public string? DictionaryKey { get; set; }

        public HorselessContentType HorselesContentType { 
            get
            {
                if (this.FilesystemAsset != null)
                    return HorselessContentType.IsFilesystemAsset;

                if(this.JSONAsset != null)
                {
                    return HorselessContentType.IsJSONAsset;
                }

                return HorselessContentType.IsUnset;
            } 
        }
    }
}
