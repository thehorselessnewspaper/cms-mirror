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
    //internal class HorselessEntityFrameworkQueryProvider<TCollection, TData>:  IHorselessQueryResultProvider<TCollection, TData>
    //       where TCollection : IQueryable<TData>
    //    where TData : new()
    //{

    //    private THNLPContentContext Context { get; set; }
    //    internal HorselessEntityFrameworkQueryProvider(THNLPContentContext contentCtx)
    //    {
    //        this.Context = contentCtx;
    //    }

    //}
}
