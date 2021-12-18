using HorselessNewspaper.Core.Interfaces.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace HorselessNewspaper.Web.Core.ScopedServices.Content
{
    ///// <summary>
    ///// we will spare no effort to defeat direct access to sql layers
    ///// </summary>
    //internal class HorselessEntityFrameworkQueryProvider<TCollection, TData> : IHorselessQueryResultProvider<TCollection, TData>
    //    where TCollection : ICollection<TData>
    //    where TData : new()
    //{
    //    internal HorselessEntityFrameworkQueryProvider()
    //    {

    //    }

    //    internal Task<TCollection> Execute(Expression<Func<TCollection, Task<bool>>> predicate)
    //    {
    //        throw new NotImplementedException();
    //    }

    //    internal Task<TData> Execute(Expression<Func<TData, Task<bool>>> predicate, TData data)
    //    {
    //        throw new NotImplementedException();
    //    }

    //    internal Task<TCollection> Execute(Expression<Func<TCollection, Task<bool>>> predicate, TCollection data)
    //    {
    //        throw new NotImplementedException();
    //    }
    //}
}
