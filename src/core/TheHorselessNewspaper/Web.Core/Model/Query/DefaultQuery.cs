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
    //internal class DefaultQuery<TCollection, TData> : IHorselessQuery<TCollection, TData>
    //    where TCollection : ICollection<TData> where TData : new()
    //{
    //    internal Task<TCollection> FilterByExpression(Expression<Func<TCollection, Task<bool>>> predicate, IHorselessQueryResultProvider<TCollection, TData> queryProvider);

    //    internal Task<bool> Insert(Expression<Func<TData, Task<bool>>> predicate, TData data, IHorselessQueryResultProvider<TCollection, TData> queryProvider);

    //    internal Task<bool> Insert(Expression<Func<TCollection, Task<bool>>> predicate, TCollection data, IHorselessQueryResultProvider<TCollection, TData> queryProvider);
    //}
}
