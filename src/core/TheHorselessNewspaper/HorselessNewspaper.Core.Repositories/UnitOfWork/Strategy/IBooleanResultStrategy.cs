using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Web.Core.UnitOfWork.Strategy
{
    internal interface IBooleanResultStrategy<T>
    {
        Task<bool> ApplyStrategy(T payload);
    }
}
