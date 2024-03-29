﻿namespace TheHorselessNewspaper.Schemas.HostingModel.DTO
{
    public class KeyCloakConfigurationDTO 
    {
        public KeyCloakConfigurationDTO()
        {
            Tenants = new HashSet<TenantDTO>();
        }

        public Guid Id { get; set; }
        public string DisplayName { get; set; }
        public string Authority { get; set; }
        public string Realm { get; set; }
        public string ObjectId { get; set; }
        public DateTime? CreatedAt { get; set; }

        public virtual ICollection<TenantDTO> Tenants { get; set; }
    }
}
