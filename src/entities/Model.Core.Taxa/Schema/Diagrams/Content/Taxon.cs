//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Schema.Diagrams.Content
{
    using System;
    using System.Collections.Generic;
    
    public partial class Taxon
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Taxon()
        {
            this.Holonyms = new HashSet<Holonym>();
            this.ContentCollections = new HashSet<ContentCollection>();
            this.Placeholders = new HashSet<Placeholder>();
        }
    
        public string Id { get; set; }
        public string DisplayName { get; set; }
        public string ObjectId { get; set; }
        public Nullable<bool> IsSoftDeleted { get; set; }
        public System.DateTime CreatedAt { get; set; }
        public string JsonContent { get; set; }
        public string JsonSchema { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Holonym> Holonyms { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ContentCollection> ContentCollections { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Placeholder> Placeholders { get; set; }
    }
}
