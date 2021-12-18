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

    //    public Expression<Func<TCollection, bool>> Predicate { get; set; }

    //    public Task<TCollection> FilterByExpression(Expression<Func<TCollection, bool>> predicate, IHorselessQueryResultProvider<TCollection, TData> queryResultProvider )
    //    {
    //        throw new NotImplementedException();
    //    }

    //    public Task<bool> Insert(Expression<Func<TCollection, bool>> predicate, TData data)
    //    {
    //        throw new NotImplementedException();
    //    }

    //    public Task<bool> Insert(Expression<Func<TCollection, bool>> predicate, TCollection data)
    //    {
    //        throw new NotImplementedException();
    //    }
    //}
}
