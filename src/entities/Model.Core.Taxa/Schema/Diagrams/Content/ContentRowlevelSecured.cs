using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Schema.Diagrams.Content;

namespace Schema.Diagrams.Content
{
    public class ContentRowlevelSecured
    {
        public ICollection<AccessControlEntry> AccessControlList { get; set; } = new HashSet<AccessControlEntry>();
        public ICollection<HorselessClaimsPrincipal> Owners { get; set; } = new HashSet<HorselessClaimsPrincipal>();
        public Guid Id { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public string? ObjectId { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public DateTime? CreatedAt { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public string? DisplayName { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
        public bool? IsSoftDeleted { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }

    }
}
