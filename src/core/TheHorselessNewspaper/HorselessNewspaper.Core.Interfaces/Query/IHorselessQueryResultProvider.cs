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
        where TCollection : ICollection<TData>
        where TData : new()
    {
        Task<TCollection> Execute(Expression<Func<TCollection, Task<bool>>> predicate);
        Task<TCollection> Execute(Expression<Func<TCollection, Task<bool>>> predicate, TData data);
        Task<TCollection> Execute(Expression<Func<TCollection, bool>> predicate, TCollection data);
    }
}
