﻿using System;
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
        public Task<TCollection> Execute(Expression<Func<TCollection, Task<bool>>> predicate);
        public Task<TData> Execute(Expression<Func<TData, Task<bool>>> predicate, TData data);
        public Task<TCollection> Execute(Expression<Func<TCollection, Task<bool>>> predicate, TCollection data);
    }
}
