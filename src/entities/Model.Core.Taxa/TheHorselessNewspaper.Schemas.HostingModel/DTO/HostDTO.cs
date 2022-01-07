namespace TheHorselessNewspaper.Schemas.HostingModel.DTO
{
    public partial class HostDTO
    {

        public HostDTO()
        {
            WWWRootAssetLocations = new HashSet<FilesystemAssetLocationDTO>();
        }

        public Guid Id { get; set; }
        public string TCPHost { get; set; }
        public string IsTenanantDiscriminator { get; set; }
        public Guid RoutingDiscriminatorId { get; set; }
        public string ObjectId { get; set; }
        public string DisplayName { get; set; }
        public string HtmlLayoutFilename { get; set; }
        public DateTime CreatedAt { get; set; }
        public string HTTPPort { get; set; }

        public virtual RoutingDiscriminatorDTO RoutingDiscriminator { get; set; }

        public virtual ICollection<FilesystemAssetLocationDTO> WWWRootAssetLocations { get; set; }
    }
}
