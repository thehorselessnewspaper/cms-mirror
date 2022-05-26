//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Schema.Diagrams.SecondCut
{
    using System;
    using System.Collections.Generic;
    
    public partial class KeyCloakConfiguration
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public KeyCloakConfiguration()
        {
            this.AccessControlEntries = new HashSet<AccessControlEntry1>();
            this.Principals = new HashSet<Principal>();
        }
    
        public System.Guid Id { get; set; }
        public Nullable<bool> IsSoftDeleted { get; set; }
        public byte[] Timestamp { get; set; }
        public Nullable<System.DateTime> UpdatedAt { get; set; }
        public string DisplayName { get; set; }
        public string Authority { get; set; }
        public string Realm { get; set; }
        public string ObjectId { get; set; }
        public Nullable<System.DateTime> CreatedAt { get; set; }
        public string Iss { get; set; }
        public string Aud { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<AccessControlEntry1> AccessControlEntries { get; set; }
        public virtual TenantInfo TenantInfo { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Principal> Principals { get; set; }
    }
}
