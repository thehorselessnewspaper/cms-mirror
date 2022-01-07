using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.HostingModel.Context;

namespace TheHorselessNewspaper.HostingModel.Context
{
    public interface IQueryableModelOperator<T> where T : class
    {
        public Task<IQueryable<T>> Read();

        public Task<IEnumerable<T>> Read(Expression<Func<T, bool>> query);

        public Task<T> Create(T entity);
        public Task<IEnumerable<T>> Create(IEnumerable<T> entity);


        public Task<T> Update(T entity);
        public Task<IEnumerable<T>> Update(IEnumerable<T> entity);


        public Task<T> Delete(T entity);
        Task ResetDb();
    }


}
