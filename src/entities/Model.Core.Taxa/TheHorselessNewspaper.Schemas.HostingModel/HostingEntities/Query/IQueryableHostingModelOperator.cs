using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.Context;
using TheHorselessNewspaper.Schemas.HostingModel.Context;

namespace TheHorselessNewspaper.HostingModel.Entities.Query
{
    public interface IQueryableHostingModelOperator<T> : IQueryableModelOperator<T> where T : class, IHostingRowLevelSecured
    {

    }
}
