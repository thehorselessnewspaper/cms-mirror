using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.HostingModel.Context;

namespace TheHorselessNewspaper.HostingModel.Context
{
    public interface IQueryableModelOperator<T>
    {
        public Task<IQueryable<T>> Read();


        public Task<T> Create(T entity);
        public Task<IEnumerable<T>> Create(IEnumerable<T> entity);


        public Task<T> Update(T entity);
        public Task<IEnumerable<T>> Update(IEnumerable<T> entity);


        public Task<T> Delete(T entity);


    }


}
