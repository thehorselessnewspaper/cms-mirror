using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.HostingModel.HostingEntities;
namespace TheHorselessNewspaper.HostingModel.Context
{
    public interface IHostingRowLevelSecured
    {
        public ICollection<AccessControlEntry> AccessControlList { get; set; }
        public ICollection<Principal> Owners { get; set; }
    }
}
