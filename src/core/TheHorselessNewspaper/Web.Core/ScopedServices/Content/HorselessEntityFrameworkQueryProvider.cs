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
    ///// <summary>
    ///// we will spare no effort to defeat direct access to sql layers
    ///// </summary>
    //internal class HorselessEntityFrameworkQueryProvider<TCollection, TData> :  IHorselessQueryResultProvider<TCollection, TData>
    //    where TCollection : IQueryable<TData>
    //    where TData : new()
    //{

    //    private THNLPContentContext Context { get; set; }
    //    internal HorselessEntityFrameworkQueryProvider(THNLPContentContext contentCtx)
    //    {
    //        this.Context = contentCtx;
    //    }

    //    public async Task<TCollection> Execute(Expression<Func<TCollection, Task<bool>>> predicate)
    //    {
    //        var collection = predicate.Body;
    //        var query = Context.FromExpression<TCollection>((Expression<Func<IQueryable<TCollection>>>)collection);
    //        var enumerable = query.ToList<TCollection>();
    //        return await Task.FromResult<TCollection>(enumerable);
    //    }

    //    public Task<TData> Execute(Expression<Func<TData, Task<bool>>> predicate, TData data)
    //    {
    //        throw new NotImplementedException();
    //    }

    //    public Task<TCollection> Execute(Expression<Func<TCollection, Task<bool>>> predicate, TCollection data)
    //    {
    //        throw new NotImplementedException();
    //    }
    //}
}
