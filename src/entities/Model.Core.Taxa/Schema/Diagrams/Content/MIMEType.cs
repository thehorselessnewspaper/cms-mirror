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
    
    public partial class MIMEType
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MIMEType()
        {
            this.MimeContents = new HashSet<HorselessContent>();
        }
    
        public System.Guid Id { get; set; }
        public string DisplayName { get; set; }
        public string ObjectId { get; set; }
        public Nullable<bool> IsSoftDeleted { get; set; }
        public Nullable<System.DateTime> CreatedAt { get; set; }
        public string MIMETypeName { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<HorselessContent> MimeContents { get; set; }
    }
}
