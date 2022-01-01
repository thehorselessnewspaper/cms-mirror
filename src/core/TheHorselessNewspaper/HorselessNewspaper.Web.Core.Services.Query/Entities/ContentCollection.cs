using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.Services.Query.Entities
{
    public class ContentCollection
    {

        public ContentCollection(IHorselessContentContext ctx)
        {

        }

        public async Task<IEnumerable<ContentCollection>> Get(ClaimsIdentity principal)
        {
            return await Task.FromResult(new List<ContentCollection>());
        }
    }
}
