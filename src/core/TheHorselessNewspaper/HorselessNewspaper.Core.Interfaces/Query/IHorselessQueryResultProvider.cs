using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Core.Interfaces.Query
{
    /// <summary>
    /// support pluggable query result providers
    /// </summary>
    /// <typeparam name="TCollection"></typeparam>
    /// <typeparam name="TData"></typeparam>
    public interface IHorselessQueryResultProvider<TCollection, TData> 
        where TCollection : IQueryable<TData>
        where TData : new()
    {
        public Task<TCollection> Filter(Expression<Func<TCollection>> predicate);
        public Task<bool> Insert(Expression<Func<TCollection>> predicate, TData parameter);

        public Task<bool> Insert(Expression<Func<TCollection>> predicate, TCollection parameter);
    }
}
