//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Schema.Diagrams.Hosting
{
    using System;
    using System.Collections.Generic;
    
    public partial class KeyCloakConfiguration
    {
        public System.Guid Id { get; set; }
        public string DisplayName { get; set; }
        public string Authority { get; set; }
        public string Realm { get; set; }
        public string ObjectId { get; set; }
        public Nullable<System.DateTime> CreatedAt { get; set; }
        public string Iss { get; set; }
        public string Aud { get; set; }
        public Nullable<System.Guid> TenantInfoId { get; set; }
    
        public virtual TenantInfo TenantInfo { get; set; }
    }
}
