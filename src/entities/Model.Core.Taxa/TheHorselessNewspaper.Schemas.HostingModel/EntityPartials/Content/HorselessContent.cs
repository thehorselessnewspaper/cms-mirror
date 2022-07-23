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
        [InverseProperty(nameof(AccessControlEntry.ManagedHorselessContents))]
        public ICollection<AccessControlEntry>? AccessControlEntries { get; set; } = new HashSet<AccessControlEntry>();
        public ICollection<Principal>? Owners { get; set; } = new HashSet<Principal>();
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
