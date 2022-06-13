using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Core.Interfaces.Persistence
{
    public interface IHorselessPersistenceProvider
    {
        public string ProviderName { get; set; }
        public string ProviderDisplayName { get; set; }
    }
}
