using HorselessNewspaper.Core.Interfaces.Query;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace HorselessNewspaper.Web.Core.ScopedServices.Content
{
    /// <summary>
    /// we will spare no effort to defeat direct access to sql layers
    /// </summary>
    public class HorselessEntityFrameworkQueryProvider<TData> : IHorselessQueryResultProvider<TData>

        where TData : new()
    {

        private THNLPContentContext Context { get; set; }

        public HorselessEntityFrameworkQueryProvider()
        {
            int i = 0;
        }

        public HorselessEntityFrameworkQueryProvider(THNLPContentContext contentCtx)
        {
            this.Context = contentCtx;
        }

        public async Task<IEnumerable<TData>> Filter(Expression<Func<IQueryable<TData>>> predicate,
             int offset, int pageSize, int pageCount)
        {
            var queryResult = this.Context.FromExpression<TData>(predicate).ToList<TData>();
            var result = await Task.FromResult(queryResult);
            return result;
        }

        public async Task<TData> Insert(TData data)
        {
            var entity = this.Context.Entry(data);
            entity.State = Microsoft.EntityFrameworkCore.EntityState.Added;
            var operationResult = this.Context.SaveChanges();

            var result = await Task.FromResult(data);
            return result;
        }

        public async Task<IEnumerable<TData>> Delete(Expression<Func<IQueryable<TData>>> predicate, int offset, int pageSize, int pageCount)
        {
            var queryResult = this.Context.FromExpression<TData>(predicate).ToList<TData>();
            var result = await Task.FromResult(queryResult);
            return result;
        }
    }
}
