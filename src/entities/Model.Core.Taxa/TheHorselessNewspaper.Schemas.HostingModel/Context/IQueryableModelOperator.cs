using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
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
        [Required]
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public string? DisplayName { get; set; }
        public bool? IsSoftDeleted { get; set; }

        /// <summary>
        /// rowversion exception causing concurrency token as per
        /// https://docs.microsoft.com/en-us/ef/core/modeling/concurrency?tabs=data-annotations
        /// </summary>
        [Timestamp]
        public byte[] Timestamp { get; set; }
    }

    /// <summary>
    /// 
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public interface IQueryableModelOperator<T> where T : class
    {
        public Task<IQueryable<T>> Read(int pageSize = 10, int pageNumber = 1, int pageCount = 1);

        public Task<IQueryable<T>> Read(Expression<Func<T, bool>> query, List<string> includeClauses = null, int pageSize = 10, int pageNumber = 1, int pageCount = 1);

        public Task<T> Create(T entity);
        public Task<IEnumerable<T>> Create(IEnumerable<T> entity);


        public Task<T> Update(T entity, List<String> targetProperties = null);

        Task<IEnumerable<T>> Update(IEnumerable<T> entities, List<String> targetProperties = null);

        Task<IEnumerable<U>> InsertRelatedEntity<U>(Guid entityId,  string propertyName,IEnumerable<U> relatedEntities) where U : class;

        public Task<T> Delete(string objectId);
        public Task<IEnumerable<T>> Delete(Expression<Func<T, bool>> query, bool softDelete = true, bool whatIf = true);


        Task ResetDb();

        Task EnsureDbExists();

    }


}
