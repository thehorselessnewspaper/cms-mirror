//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Horseless.Newspaper.Core.Model.Taxa
{
    using System;
    using System.Collections.Generic;
    
    public partial class AuthenticationSource : Taxon
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public AuthenticationSource()
        {
            this.AuthenticatedPrincipals = new HashSet<AuthenticatedPrincipal>();
        }
    
        public string SecurityTokenServiceURI { get; set; }
        public string STSUserId { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<AuthenticatedPrincipal> AuthenticatedPrincipals { get; set; }
    }
}
