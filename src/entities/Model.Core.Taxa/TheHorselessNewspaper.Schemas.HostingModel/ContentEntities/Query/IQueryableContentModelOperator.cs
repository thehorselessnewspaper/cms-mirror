using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.HostingModel.Context;

namespace TheHorselessNewspaper.HostingModel.ContentEntities.Query
{
    public interface IQueryableModelOperator<T> where T : class, IRowLevelSecured
    {
        public Task<IQueryable<T>> Read();


        public Task<T> Create(T entity);
        public Task<IEnumerable<T>> Create(IEnumerable<T> entity);


        public Task<T> Update(T entity);
        public Task<IEnumerable<T>> Update(IEnumerable<T> entity);


        public Task<T> Delete(T entity);


    }

    /// <summary>
    /// support arbitrary linq query composition
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public interface IQueryableContentModelOperator<T> : IQueryableModelOperator<T> where T : class, IRowLevelSecured
    {
  
    }

    public interface IQueryableHostingModelOperator<T> : IQueryableModelOperator<T> where T : class, IRowLevelSecured
    {

    }
}
