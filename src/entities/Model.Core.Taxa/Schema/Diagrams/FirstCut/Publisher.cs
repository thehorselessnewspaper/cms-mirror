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
    
    public partial class Publisher : Taxon
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Publisher()
        {
            this.PublishedArtifacts = new HashSet<Artifact>();
            this.CodeDeployments = new HashSet<CodeDeployment>();
            this.Creaatives = new HashSet<Creative>();
            this.DeployedArtifacts = new HashSet<ArtifactDeployment>();
            this.AuthenticatedPrincipals = new HashSet<AuthenticatedPrincipal>();
        }
    
        public string PublisherName { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Artifact> PublishedArtifacts { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CodeDeployment> CodeDeployments { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Creative> Creaatives { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ArtifactDeployment> DeployedArtifacts { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<AuthenticatedPrincipal> AuthenticatedPrincipals { get; set; }
    }
}
