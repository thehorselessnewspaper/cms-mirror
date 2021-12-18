﻿using System;
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
        where TCollection : ICollection<TData>
        where TData : new()
    {
        internal Task<TCollection> FilterByExpression(Expression<Func<TCollection, Task<bool>>> predicate, IHorselessQueryResultProvider<TCollection, TData> queryProvider);

        internal Task<bool> Insert(Expression<Func<TData, Task<bool>>> predicate, TData data, IHorselessQueryResultProvider<TCollection, TData>  queryProvider);

        internal Task<bool> Insert(Expression<Func<TCollection, Task<bool>>> predicate, TCollection data, IHorselessQueryResultProvider<TCollection, TData> queryProvider);
    }
}
