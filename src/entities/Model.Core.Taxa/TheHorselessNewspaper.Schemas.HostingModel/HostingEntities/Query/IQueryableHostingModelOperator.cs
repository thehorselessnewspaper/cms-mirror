﻿using Microsoft.AspNetCore.OData.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.Context;

namespace TheHorselessNewspaper.HostingModel.HostingEntities.Query
{
    public interface IQueryableHostingModelOperator<T> : IQueryableModelOperator<T> where T : class, IHostingRowLevelSecured
    {
        public Task<IEnumerable<T>> ReadAsEnumerable(Expression<Func<T, bool>> query, List<string> includeClauses = null, int pageSize = 10, int pageNumber = 1, int pageCount = 1);

        public Task<IEnumerable<U>> InsertRelatedEntity<U>(Guid entityId, string propertyName, IEnumerable<U> relatedEntities, Expression<Func<T, bool>> parentItemFilter = null, Expression<Func<U, bool>> relatedItemFilter = null) where U : class, IHostingRowLevelSecured;

        public Task<IQueryable<X>> Read<O, X>(O queryOptions) where O : ODataQueryOptions<X> where X : class, IHostingRowLevelSecured; 
    }
}
