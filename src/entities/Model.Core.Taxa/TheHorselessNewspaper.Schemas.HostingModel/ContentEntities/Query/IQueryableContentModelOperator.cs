using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.HostingModel.Context;

namespace TheHorselessNewspaper.HostingModel.ContentEntities.Query
{
    /// <summary>
    /// support arbitrary linq query composition
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public interface IQueryableContentModelOperator<T> where T : IRowLevelSecured
    {
        public Task<IQueryable<T>> Get();
    }
}
