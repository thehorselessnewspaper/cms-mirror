using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Core.Interfaces.Query
{
    public interface IHorselessQueryResultProvider<TCollection, TData> 
        where TCollection : ICollection<TData>
        where TData : new()
    {
        Task<TCollection> Execute(Func< Expression<Func<TCollection, TCollection>>, Task<TCollection> > querySpecification);
    }
}
