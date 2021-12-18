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
    public interface IHorselessQuery<TCollection, TData> 
        where TCollection : IQueryable<TData>
        where TData : new()
    {
        internal Task<TCollection> FilterByExpression(Expression<Func<TCollection>> predicate, IHorselessQueryResultProvider<TCollection, TData> queryProvider);

        internal Task<bool> Insert(Expression<Func<TCollection>> predicate, TData parameter, IHorselessQueryResultProvider<TCollection, TData>  queryProvider);

        internal Task<bool> Insert(Expression<Func<TCollection>> predicate, TCollection parameter, IHorselessQueryResultProvider<TCollection, TData> queryProvider);
    }
}
