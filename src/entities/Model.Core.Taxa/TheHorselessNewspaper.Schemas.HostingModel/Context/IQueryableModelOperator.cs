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
    /// <summary>
    /// queryable properties on a horseless content managed entity
    /// </summary>
    public interface IQueryableModelEntity
    {
        public Guid Id { get; set; }
        public string? ObjectId { get; set; }
        public DateTime? CreatedAt { get; set; }
        public string? DisplayName { get; set; }
        public bool? IsSoftDeleted { get; set; }
    }

    /// <summary>
    /// 
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public interface IQueryableModelOperator<T> where T : class
    {
        public Task<IQueryable<T>> Read();

        public Task<IQueryable<T>> Read(Expression<Func<T, bool>> query);


        public Task<T> Create(T entity);
        public Task<IEnumerable<T>> Create(IEnumerable<T> entity);


        public Task<T> Update(T entity);

        Task<IEnumerable<T>> Update(IEnumerable<T> entities);


        public Task<T> Delete(string objectId);
        Task<IEnumerable<T>> Delete(Expression<Func<T, bool>> query, bool softDelete = true, bool whatIf = true);


        Task ResetDb();

    }


}
