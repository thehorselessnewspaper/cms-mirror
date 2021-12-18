using HorselessNewspaper.Core.Interfaces.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace HorselessNewspaper.Web.Core.Model.Query
{
    /// <summary>
    /// generic query specification attempt
    /// open problem - serializable linq
    /// test https://github.com/esskar/Serialize.Linq
    /// </summary>
    /// <typeparam name="TCollection"></typeparam>
    /// <typeparam name="TData"></typeparam>
    public class DefaultQuery<TCollection, TData> : IHorselessQuery<TCollection, TData>
        where TCollection : ICollection<TData>
        where TData : new()
    {
        public async Task<TCollection> FilterByExpression(Expression<Func<TCollection, Task<bool>>> predicate, IHorselessQueryResultProvider<TCollection, TData> queryProvider)
        {
            var results = await queryProvider.Execute(predicate);
            return results;
        }

        public async Task<bool> Insert(Expression<Func<TData, Task<bool>>> predicate, TData data, IHorselessQueryResultProvider<TCollection, TData> queryProvider)
        {
            var result = await queryProvider.Execute(predicate, data);

            var retVal = await Task.FromResult(true);
            return retVal;
        }

        public async Task<bool> Insert(Expression<Func<TCollection, Task<bool>>> predicate, TCollection data, IHorselessQueryResultProvider<TCollection, TData> queryProvider)
        {
            var result = await queryProvider.Execute(predicate, data);

            var retVal = await Task.FromResult(true);
            return retVal;
        }
    }
}
