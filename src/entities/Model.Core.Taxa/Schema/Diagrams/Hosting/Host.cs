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
    
    public partial class Host
    {
        public System.Guid Id { get; set; }
        public string TCPHost { get; set; }
        public string IsTenanantDiscriminator { get; set; }
        public Nullable<System.Guid> RoutingDiscriminatorId { get; set; }
        public string ObjectId { get; set; }
        public string RouteDisplayName { get; set; }
        public string HtmlLayoutFilename { get; set; }
        public Nullable<System.DateTime> CreatedAt { get; set; }
        public string HTTPPort { get; set; }
    
        public virtual RoutingDiscriminator RoutingDiscriminator { get; set; }
    }
}
