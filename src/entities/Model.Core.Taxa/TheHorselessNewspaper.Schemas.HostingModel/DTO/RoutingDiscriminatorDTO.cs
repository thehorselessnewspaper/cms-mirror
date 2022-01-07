namespace TheHorselessNewspaper.Schemas.HostingModel.DTO
{
    public partial class RoutingDiscriminatorDTO
    {
        public RoutingDiscriminatorDTO()
        {
            Hosts = new HashSet<HostDTO>();
            UriPaths = new HashSet<UriPathDTO>();
        }

        public Guid Id { get; set; }
        public bool? IsActive { get; set; }
        public Guid? TenantId { get; set; }
        public string ObjectId { get; set; }
        public string DisplayName { get; set; }
        public DateTime? CreatedAt { get; set; }

        public virtual TenantDTO Tenant { get; set; }
        public virtual ICollection<HostDTO> Hosts { get; set; }
        public virtual ICollection<UriPathDTO> UriPaths { get; set; }
    }
}
