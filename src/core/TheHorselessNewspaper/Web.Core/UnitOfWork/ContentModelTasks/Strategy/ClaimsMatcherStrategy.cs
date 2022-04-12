using HorselessNewspaper.Web.Core.UnitOfWork.Strategy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.UnitOfWork.ContentModelTasks.Strategy
{
    internal class ClaimsMatcherStrategy : IBooleanResultStrategy<IEnumerable<Claim>>
    {
        public Task<bool> ApplyStrategy(IEnumerable<Claim> payload)
        {
            throw new NotImplementedException();
        }
    }
}
