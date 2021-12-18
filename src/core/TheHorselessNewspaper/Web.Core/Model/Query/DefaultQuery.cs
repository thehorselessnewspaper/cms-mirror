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
    //internal class DefaultQuery<TCollection, TData> : IHorselessQuery<TCollection, TData>
    //    where TCollection : ICollection<TData>
    //    where TData : new()
    //{
    //    public async Task<TCollection> FilterByExpression(Expression<Func<TCollection, Task<bool>>> predicate, IHorselessQueryResultProvider<TCollection, TData> queryProvider)
    //    {
    //        return await queryProvider.Execute(predicate);
    //    }

    //    public async Task<bool> Insert(Expression<Func<TCollection, Task<bool>>> predicate, TData data, IHorselessQueryResultProvider<TCollection, TData> queryProvider)
    //    {
    //        var result = await queryProvider.Execute(predicate, data);
    //        return await Task.FromResult(true);
    //    }

    //    public Task<bool> Insert(Expression<Func<TCollection, Task<bool>>> predicate, TCollection data, IHorselessQueryResultProvider<TCollection, TData> queryProvider)
    //    {
    //        throw new NotImplementedException();
    //    }
    //}
}
