using Microsoft.AspNetCore.OData.Query;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Text.Json.Nodes;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace TheHorselessNewspaper.HostingModel.Context
{

    public delegate Task<string> GetJsonMetaDataByKeyDelegate(string keyName, bool isUseNewtonSoft = false);

    public delegate Task<bool> HasJsonMetaDataKeyDelegate(string keyName);

    public delegate Task<bool> HasJsonMetaDataPropertyDelegate(string keyName, string jsonPropertyKName);

    public delegate Task<bool> QueryJsonMetaDataDelegate(string keyName, string jsonPropertyName, Func<JsonObject, bool> jsonObjectQuery);

    public interface IKeyValueModelEntity
    {
        public string? DictionaryKey { get; set; }
    }

    public interface IMetaDataModelEntity : IKeyValueModelEntity
    {
        public HashSet<JSONAsset> MetaData { get; set; }
    }


    /// <summary>
    /// queryable properties on a horseless content managed entity
    /// </summary>
    public interface IQueryableModelEntity :IKeyValueModelEntity
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
    /// a composition interface
    /// adds metadata query capability to IQueryableModelEntity
    /// </summary>
    public interface IQueryableMetaDataModelEntity : IQueryableModelEntity, IMetaDataModelEntity
    {

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

        public Task<T> DeleteByEntityId(Guid entityId, bool softDelete = true);
        public Task<T> DeleteByObjectId(string objectId, bool isSoftDelete = true);
        public Task<IEnumerable<T>> Delete(Expression<Func<T, bool>> query, bool softDelete = true, bool whatIf = true);

        Task ResetDb();

        Task EnsureDbExists();
        Task<IQueryable<T>> Read(ODataQueryOptions<T> queryOptions);
    }


}
