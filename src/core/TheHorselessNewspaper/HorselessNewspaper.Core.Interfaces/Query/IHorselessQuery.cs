using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Core.Interfaces.Query
{
    /// <summary>
    /// specify a suitably context agnostic query and insert mechanism
    /// </summary>
    /// <typeparam name="TCollection"></typeparam>
    /// <typeparam name="TData"></typeparam>
    public interface IHorselessQuery<TData> 

        where TData : new()
    {
        public Task<IEnumerable<TData>> FilterByExpression(Expression<Func<IQueryable<TData>>> predicate, IHorselessQueryResultProvider<TData> queryProvider,
            int offset, int pageSize, int pageCount);

        //internal Task<bool> Insert(Expression<Func<TCollection>> predicate, TData parameter, IHorselessQueryResultProvider<TData>  queryProvider);

        //internal Task<bool> Insert(Expression<Func<TCollection>> predicate, TCollection parameter, IHorselessQueryResultProvider<TData> queryProvider);
    }
}
