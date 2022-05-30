namespace TheHorselessNewspaper.HostingModel.DTO
{
    public partial class UriPathDTO
    {
        public UriPathDTO()
        {
            WWWRootAssetLocations = new HashSet<FilesystemAssetLocationDTO>();
        }

        public Guid Id { get; set; }
        public string AbsoluteURL { get; set; }
        public string IsTenantDiscriminator { get; set; }
        public Guid RoutingDiscriminatorId { get; set; }
        public string ObjectId { get; set; }
        public string DisplayName { get; set; }
        public string HtmlLayoutFilename { get; set; }
        public DateTime? CreatedAt { get; set; }
        public string HTTPPort { get; set; }
        public string HTTPScheme { get; set; }
        public string TCPHost { get; set; }

        public virtual RoutingDiscriminatorDTO RoutingDiscriminator { get; set; }

        public virtual ICollection<FilesystemAssetLocationDTO> WWWRootAssetLocations { get; set; }
    }
}
