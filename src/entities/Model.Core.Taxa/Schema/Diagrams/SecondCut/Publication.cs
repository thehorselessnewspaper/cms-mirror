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
    
    public partial class Publication
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Publication()
        {
            this.AccessControlEntries = new HashSet<AccessControlEntry>();
            this.Principals = new HashSet<Principal1>();
            this.ContentCollections = new HashSet<ContentCollection>();
            this.Publications1 = new HashSet<Publication>();
            this.Publications = new HashSet<Publication>();
        }
    
        public System.Guid Id { get; set; }
        public string DisplayName { get; set; }
        public string ObjectId { get; set; }
        public Nullable<bool> IsSoftDeleted { get; set; }
        public Nullable<System.DateTime> CreatedAt { get; set; }
        public Nullable<System.DateTime> PublishAt { get; set; }
        public Nullable<System.DateTime> UnPublishAt { get; set; }
        public Nullable<bool> IsPublished { get; set; }
        public string PublishedURL { get; set; }
        public string PreviewURL { get; set; }
        public byte[] Timestamp { get; set; }
        public Nullable<System.DateTime> UpdatedAt { get; set; }
        public string TenantId { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<AccessControlEntry> AccessControlEntries { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Principal1> Principals { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ContentCollection> ContentCollections { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Publication> Publications1 { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Publication> Publications { get; set; }
    }
}
