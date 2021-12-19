﻿using HorselessNewspaper.Core.Interfaces.Query;
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
    /// test https://dynamic-linq.net/overview
    /// </summary>
    /// <typeparam name="TCollection"></typeparam>
    /// <typeparam name="TData"></typeparam>
    public class DefaultQuery<TData> : IHorselessQuery<TData>
         where TData : new()
    {
  

        public async Task<IEnumerable<TData>> FilterByExpression(Expression<Func<IQueryable<TData>>> predicate, IHorselessQueryResultProvider<TData> queryProvider, int offset, int pageSize, int pageCount)
        {
            var result = await queryProvider.Filter(predicate, offset, pageSize, pageCount);
            return result;
        }
    }
}
