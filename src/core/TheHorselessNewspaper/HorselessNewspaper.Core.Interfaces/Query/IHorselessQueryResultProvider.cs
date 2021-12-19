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
    /// <typeparam name="TData"></typeparam>
    public interface IHorselessQueryResultProvider<TData> 
        where TData : new()
    {

        public Task<IEnumerable<TData>> Filter(Expression<Func<IQueryable<TData>>> predicate, int offset, int pageSize, int pageCount);

        public Task<TData> Insert(TData data);

        public Task<IEnumerable<TData>> Delete(Expression<Func<IQueryable<TData>>> predicate,
            int offset, int pageSize, int pageCount);
    }
}
