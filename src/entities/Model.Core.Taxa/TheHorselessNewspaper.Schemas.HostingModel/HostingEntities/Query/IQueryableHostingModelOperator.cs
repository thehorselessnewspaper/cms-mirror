using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.Context;
using TheHorselessNewspaper.Schemas.HostingModel.Context;

namespace TheHorselessNewspaper.HostingModel.Entities.Query
{
    public interface IQueryableHostingModelOperator<T> : IQueryableModelOperator<T> where T : class, IHostingRowLevelSecured
    {
        Task<IEnumerable<T>> ReadAsEnumerable(Expression<Func<T, bool>> query, List<string> includeClauses = null, int pageSize = 10, int pageNumber = 1, int pageCount = 1);
    }
}
