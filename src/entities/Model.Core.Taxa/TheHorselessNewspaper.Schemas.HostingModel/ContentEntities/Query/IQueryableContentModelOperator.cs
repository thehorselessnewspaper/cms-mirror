using Microsoft.AspNetCore.OData.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.Context;

namespace TheHorselessNewspaper.HostingModel.ContentEntities.Query
{


    /// <summary>
    /// support arbitrary linq query composition
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public interface IQueryableContentModelOperator<T> : IQueryableModelOperator<T> where T : class, IContentRowLevelSecured
    {
        /// <summary>
        /// extension to modeloperator to permit polymorphic conceptual entity references
        /// that is, the class is generic on T but this method can operate on T and U, and returns U
        /// where U aggregates new behaviour on T
        /// </summary>
        /// <typeparam name="U"></typeparam>
        /// <param name="query"></param>
        /// <param name="includeClauses"></param>
        /// <param name="pageSize"></param>
        /// <param name="pageNumber"></param>
        /// <param name="pageCount"></param>
        /// <returns></returns>
        public Task<IQueryable<U>> ReadFilterByMetaData<U>(Expression<Func<U, bool>> query, List<string> includeClauses = null, int pageSize = 10, int pageNumber = 1, int pageCount = 1) where U : class, IContentRowLevelSecured, IQueryableMetaDataModelEntity;

        public Task<IEnumerable<T>> ReadAsEnumerable(Expression<Func<T, bool>> query, List<string> includeClauses = null, int pageSize = 10, int pageNumber = 1, int pageCount = 1);
        public Task<IQueryable<V>> Read<O, V>(O queryOptions) where O : ODataQueryOptions<V> where V : class, IContentRowLevelSecured;
    }


}
