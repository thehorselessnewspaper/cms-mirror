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
    
    public partial class UriPath
    {
        public System.Guid Id { get; set; }
        public string AbsolutePath { get; set; }
        public string IsTenantDiscriminator { get; set; }
        public System.Guid RoutingDiscriminatorId { get; set; }
        public string ObjectId { get; set; }
        public string HostDisplayName { get; set; }
    
        public virtual RoutingDiscriminator RoutingDiscriminator { get; set; }
    }
}
