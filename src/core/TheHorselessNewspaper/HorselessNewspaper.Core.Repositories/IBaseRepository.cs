using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace HorselessNewspaper.Core.Repositories
{
    /// <summary>
    /// similar to https://codewithmukesh.com/blog/repository-pattern-in-aspnet-core/
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public interface IBaseRepository<T>
    {
        public Task<RepositoryResult<T>> GetById(Guid TenantId, Guid id);

        public Task<RepositoryResult<IEnumerable<T>>> GetAll(Guid TenantId, int offset, int pageSize, int pageCount);
        public Task<RepositoryResult<IEnumerable<T>>> Find(Guid TenantId, Expression<Func<T, bool>> expression, int offset, int pageSize, int pageCount);
        public Task<RepositoryResult<T>> Add(Guid TenantId, T entity);
        public Task<RepositoryResult<T>> Remove(Guid TenantId, T entity);
        public Task<RepositoryResult<IEnumerable<T>>> AddRange(Guid TenantId, IEnumerable<T> entities);
        public Task<RepositoryResult<IEnumerable<T>>> RemoveRange(Guid TenantId, IEnumerable<T> entities);


    }
}
