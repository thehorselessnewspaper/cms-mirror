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
    
    public partial class Creative : Taxon
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Creative()
        {
            this.PublishedArtifacts = new HashSet<Artifact>();
            this.AuthoredContent = new HashSet<Content>();
            this.Publishers = new HashSet<Publisher>();
            this.DeployedArtifacts = new HashSet<ArtifactDeployment>();
            this.AuthenticatedPrincipals = new HashSet<AuthenticatedPrincipal>();
        }
    
        public string CreativeName { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Artifact> PublishedArtifacts { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Content> AuthoredContent { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Publisher> Publishers { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ArtifactDeployment> DeployedArtifacts { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<AuthenticatedPrincipal> AuthenticatedPrincipals { get; set; }
    }
}
