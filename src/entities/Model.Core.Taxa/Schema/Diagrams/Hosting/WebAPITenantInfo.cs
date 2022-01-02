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
    
    public partial class WebAPITenantInfo
    {
        public System.Guid Id { get; set; }
        public string DisplayName { get; set; }
        public string ObjectId { get; set; }
        public Nullable<bool> IsSoftDeleted { get; set; }
        public Nullable<System.DateTime> CreatedAt { get; set; }
        public string Identifier { get; set; }
        public string Name { get; set; }
        public string ConnectionString { get; set; }
        public string WebAPIBaseUrl { get; set; }
        public Nullable<System.Guid> TenantInfoId { get; set; }
    
        public virtual TenantInfo TenantInfo { get; set; }
    }
}
