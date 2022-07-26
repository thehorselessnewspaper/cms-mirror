using Microsoft.AspNetCore.OData.Query;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.Extensions.Logging;
using System.Linq.Expressions;
using System.Reflection;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query.Extensions;
using TheHorselessNewspaper.HostingModel.Context;

namespace TheHorselessNewspaper.HostingModel.ContentEntities.Query.ContentCollections
{
    /// <summary>
    /// could it be that all content collection entities of interest
    /// are reachable by a generic specification of T
    /// that won't blow the whole leg away?
    /// </summary>
    /// <typeparam name="T"></typeparam>
    internal class ContentModelQueries<T> : IQueryableContentModelOperator<T> where T : class, IContentRowLevelSecured
    {
        private readonly ILogger<ContentModelQueries<T>> _logger;
        private readonly IContentModelContext _context;
        // private ITenantInfo _tenantInfo;
        public ContentModelQueries(IContentModelContext ctx, ILogger<ContentModelQueries<T>> logger)
        {
            this._context = ctx;
            this._logger = logger;
            // this._tenantInfo = tenantInfo;

            try
            {
                var providerName = ((DbContext)ctx).Database.ProviderName;
                _logger.LogTrace($"content collections context using provider named {providerName} on dbcontext instance {((IContentModelContext)ctx).DbContextInstanceId.ToString()}");
            }
            catch (Exception e)
            {
                string message = $"problem initializing ContentModelQueries {e.Message}";
                _logger.LogError(message);
                // throw new Exception(message, e);
            }
        }


        /// <summary>
        /// reset and delete database
        /// </summary>
        /// <returns></returns>
        public async Task ResetDb()
        {
            try
            {
                _logger.LogWarning($"{this.GetType().Name} is resetting content db");
                try
                {
                    var dbreset = await ((DbContext)_context).Database.EnsureDeletedAsync();
                    _logger.LogWarning($"{this.GetType().Name} has reset content db");

                }
                catch (Exception ex)
                {
                    _logger.LogError($"content collections reset exception: {ex.Message}");
                }

                _logger.LogWarning($"{this.GetType().Name} is resetting hosting db");

                var tryResetAgain = await ((DbContext)_context).Database.EnsureCreatedAsync();

                _logger.LogWarning($"{this.GetType().Name} has reset hosting db");

                await ((DbContext)_context).SaveChangesAsync();
            }
            catch (Exception e)
            {
                _logger.LogError($"exception resetting db {e.Message}");
            }
        }

        public async Task<T> Create(T entity)
        {
            // _logger.LogInformation($"handling Create request for tenant context {_tenantInfo.Identifier}");
            var resolvedTenant = await ((IContentModelContext)_context).ResolveTenant();

            try
            {
                var dbSet = ((DbContext)_context).Set<T>();
                var addResult = await dbSet.AddAsync(entity);

                var saveResult = await ((DbContext)_context).SaveChangesAsync();

                var savedQuery = await this.Read(w => w.Id == entity.Id);
                var savedEntity = await savedQuery.FirstOrDefaultAsync();
                return await Task.FromResult<T>(savedEntity);
            }
            catch (Exception ex)
            {
                _logger.LogError($"problem handling request {ex.Message}");

                throw new Exception($"entity creation exception {ex.Message}", ex);
            }

            return await Task.FromResult<T>(entity);
        }

        public async Task<IEnumerable<T>> Create(IEnumerable<T> entities)
        {

            var resolvedTenant = await ((IContentModelContext)_context).ResolveTenant();
            try
            {
                var dbSet = ((DbContext)_context).Set<T>();

                await dbSet.AddRangeAsync(entities);
                var saveResult = await ((DbContext)_context).SaveChangesAsync();

            }
            catch (Exception ex)
            {
                _logger.LogError($"problem handling request {ex.Message}");

                throw new Exception($"entity creation exception {ex.Message}", ex);
            }

            return entities;
        }


        public async Task<T> DeleteByEntityId(Guid entityId, bool isSoftDelete = true)
        {
            T? entity;

            var resolvedTenant = await ((IContentModelContext)_context).ResolveTenant();

            try
            {
                var dbSet = ((DbContext)_context).Set<T>();

                entity = await dbSet.FindAsync(entityId); //.Where(w => w.Id == entityId).FirstOrDefault<T>();
                var removeState = dbSet.Remove(entity);
                var updateResult = await ((DbContext)_context).SaveChangesAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError($"problem handling request {ex.Message}");

                throw new Exception($"entity delete exception {ex.Message}", ex);

            }

            return await Task.FromResult<T>(entity);
        }

        public async Task<T> DeleteByObjectId(string entityId, bool isSoftDelete = true)
        {
            T? entity;

            var resolvedTenant = await ((IContentModelContext)_context).ResolveTenant();

            try
            {
                var dbSet = ((DbContext)_context).Set<T>();
                entity = await dbSet.Where(w => w.ObjectId == entityId).FirstAsync<T>();

                if (entity != null)
                {
                    var removeState = dbSet.Remove(entity);
                    var updateResult = await ((DbContext)_context).SaveChangesAsync();
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"problem handling request {ex.Message}");

                throw new Exception($"entity delete exception {ex.Message}", ex);

            }

            return await Task.FromResult<T>(entity);
        }
        public async Task<IEnumerable<T>> Delete(Expression<Func<T, bool>> query, bool softDelete = true, bool whatIf = true)
        {
            var ret = new List<T>();

            var resolvedTenant = await ((IContentModelContext)_context).ResolveTenant();


            if (whatIf == true)
            {
                return await this.Read(query);
            }
            else if (softDelete == true)
            {
                try
                {
                    ret = await ((DbContext)_context).Set<T>().Where(query).ToListAsync();
                    foreach (var e in ret)
                    {
                        e.IsSoftDeleted = true; // TODO softdelete has to depend on an interface on T
                    }
                    var updateResult = await ((DbContext)_context).SaveChangesAsync();
                }
                catch (Exception ex)
                {
                    _logger.LogError($"problem handling request {ex.Message}");

                    throw new Exception($"entity delete exception {ex.Message}", ex);

                }

            }
            else if (softDelete == false)
            {
                try
                {
                    ret = await ((DbContext)_context).Set<T>().Where(query).ToListAsync();
                    ((DbContext)_context).Set<T>().RemoveRange(ret);
                    var updateResult = await ((DbContext)_context).SaveChangesAsync();
                }
                catch (Exception ex)
                {
                    _logger.LogError($"problem handling request {ex.Message}");
                    throw new Exception($"entity delete exception {ex.Message}", ex);

                }
            }

            return ret;
        }


        public async Task<IQueryable<T>> Read(int pageSize = 10, int pageNumber = 1, int pageCount = 1)
        {
            IQueryable<T> result;


            try
            {
                var resolvedTenant = await ((IContentModelContext)_context).ResolveTenant();
                var dbSet = ((DbContext)_context).Set<T>()
                                        .OrderBy(o => o.CreatedAt)
                                        .Skip((pageNumber - 1) * pageSize)
                                        .Take(pageSize * pageCount); ;
                result = dbSet.AsQueryable<T>();

            }
            catch (Exception ex)
            {

                _logger.LogError($"problem handling request {ex.Message}");
                throw new Exception($"entity read exception {ex.Message}", ex);

            }

            return await Task.FromResult<IQueryable<T>>(result);
        }

        public async Task<IQueryable<X>> Read<O, X>(O queryOptions) where O : ODataQueryOptions<X> where X : class, IContentRowLevelSecured
        {
            try
            {
                // TODO
                // this needs to be injectable
                // and runtime reconfigurable
                ODataQuerySettings settings = new ODataQuerySettings()
                {
                    EnableConstantParameterization = true,
                    EnableCorrelatedSubqueryBuffering = true,
                    EnsureStableOrdering = true,
                    HandleNullPropagation = HandleNullPropagationOption.Default,
                    HandleReferenceNavigationPropertyExpandFilter = true,
                    PageSize = 1000,
                    TimeZone = TimeZoneInfo.Utc
                };

                AllowedQueryOptions opts = AllowedQueryOptions.All;

                var resolvedTenant = await _context.ResolveTenant();
                var dbSet = ((DbContext)_context).Set<X>();
                var queryResult = queryOptions.ApplyTo(dbSet, settings, opts) as IQueryable<X>;
                return queryResult;
            }
            catch (Exception e)
            {
                _logger.LogError($"exception executing read {e.Message}");
                throw new Exception($"exception executing read {e.Message}", e);
            }

        }

        public async Task<IQueryable<T>> Read(Expression<Func<T, bool>> query, List<string> includeClauses = null, int pageSize = 10, int pageNumber = 1, int pageCount = 1)
        {
            IQueryable<T> result;

            try
            {
                var dbSet = ((DbContext)_context).Set<T>().Where(query)
                                        .OrderBy(o => o.CreatedAt)
                                        .Skip((pageNumber - 1) * pageSize)
                                        .Take(pageSize * pageCount);

                if (includeClauses != null)
                {
                    foreach (var clause in includeClauses)
                    {
                        // avoid due to performance issues
                        //foreach(var item in dbSet)
                        //{
                        //    await ((DbContext)_context).Entry(item)
                        //        .Collection(clause)
                        //        .LoadAsync();
                        //}

                        dbSet.Include(clause);
                    }
                }

                //result = dbSet.OrderBy(o => o.CreatedAt)
                //                        .Skip((pageNumber - 1  ) * pageSize)
                //                        .Take(pageSize * pageCount)
                //                        .AsQueryable<T>();

                result = dbSet.AsQueryable<T>();
            }
            catch (Exception ex)
            {

                _logger.LogError($"problem handling request {ex.Message}");
                throw new Exception($"entity read exception {ex.Message}", ex);

            }

            return await Task.FromResult<IQueryable<T>>(result);
        }

        public async Task<IEnumerable<T>> ReadAsEnumerable(Expression<Func<T, bool>> query, List<string> includeClauses = null, int pageSize = 10, int pageNumber = 1, int pageCount = 1)
        {
            IEnumerable<T> result = new List<T>();

            try
            {
                var resolvedTenant = await ((IContentModelContext)_context).ResolveTenant();
                var dbSet = ((DbContext)_context).Set<T>().Where(query)
                                        .OrderBy(o => o.CreatedAt)
                                        .Skip((pageNumber - 1) * pageSize)
                                        .Take(pageSize * pageCount);
                if (includeClauses != null)
                {
                    foreach (var clause in includeClauses)
                    {
                        // avoid due to performance issues
                        //foreach(var item in dbSet)
                        //{
                        //    await ((DbContext)_context).Entry(item)
                        //        .Collection(clause)
                        //        .LoadAsync();
                        //}

                        dbSet.Include(clause);

                    }
                }
                result = await dbSet.ToListAsync<T>();

            }
            catch (Exception ex)
            {

                _logger.LogError($"problem handling request {ex.Message}");
                throw new Exception($"entity read exception {ex.Message}", ex);

            }

            return await Task.FromResult<IEnumerable<T>>(result);
        }

        /// <summary>
        /// your entity must return its concurrency token
        /// this method updates non-collection properties
        /// and fails silently for any target properties
        /// that are collections
        /// 
        /// related entity inserts are handled elsewhere
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        public async Task<T> Update(T entity, List<String> targetProperties = null)
        {


            try
            {
                entity.UpdatedAt = DateTime.UtcNow;
                var resolvedTenant = await ((IContentModelContext)_context).ResolveTenant();
                // _logger.LogInformation($"handling Update request for tenant context {_tenantInfo.Identifier}");

                if (targetProperties == null)
                {
                    // reject update attempts witout property lists
                    _logger.LogWarning($"update attempt without provided property list");
                    throw new Exception("update attempt without provided property list");
                }

                var dbSet = ((DbContext)_context).Set<T>();

                // get the existing entity
                var foundEntity = await dbSet.Where(w => w.Id == entity.Id).FirstAsync();

                if (foundEntity == null)
                {
                    _logger.LogWarning($"update attempt for nonexistent entity");
                    throw new Exception("attempt to update non-existent entity");
                }
                else
                {
                    // as per https://www.learnentityframeworkcore.com/dbcontext/modifying-data
                    var updatedEntity = await foundEntity.UpdateModifiedPropertiesAsync(entity, targetProperties);
                    // var entityEntry = ((DbContext)_context).Update(updatedEntity);
                    var entityEntry = ((DbContext)_context).Attach(updatedEntity);
                    var updateResult = await ((DbContext)_context).SaveChangesAsync();
                    _logger.LogTrace($"{this.GetType().Name} has completed update");


                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"problem updating entity {ex.Message}");
                    throw new Exception($"problem updating {ex.Message}", ex);
            }

            return await Task.FromResult<T>(entity);
        }

        public async Task<IEnumerable<T>> Update(IEnumerable<T> entities, List<String> targetProperties = null)
        {
            var ret = new List<T>();
            var resolvedTenant = await ((IContentModelContext)_context).ResolveTenant();

            try
            {
                foreach (var entity in entities)
                {
                    var updateResult = await this.Update(entity, targetProperties);
                    ret.Add(updateResult);
                }
            }
            catch (Exception ex)
            {
                throw new Exception($"entity update exception {ex.Message}", ex);
            }

            return ret;
        }

        public async Task<IEnumerable<U>> InsertRelatedEntity<U>(Guid entityId, string propertyName, IEnumerable<U> relatedEntities, Expression<Func<T, bool>> parentItemFilter = null, Expression<Func<U, bool>> relatedItemFilter = null) where U : class, IContentRowLevelSecured
        {

            try
            {

                var resolvedTenant = await ((IContentModelContext)_context).ResolveTenant();
                var hasEntity = ((DbContext)_context).Set<T>().Where(w => w.Id.Equals(entityId)).First();
                T trackedEntity = default;

                if (hasEntity != null)
                {
                    if (parentItemFilter == null)
                    {
                        // apply a default filter, a poor choice 
                        trackedEntity = ((DbContext)_context).Set<T>().Where(w => w.Id.Equals(entityId)).Include(propertyName).First();
                    }
                    else
                    {
                        // apply the user supplied filter
                        trackedEntity = ((DbContext)_context).Set<T>().Where(parentItemFilter).Include(propertyName).First();
                    }

                    foreach (var item in relatedEntities)
                    {

                        var relatedEntityExists = false;

                        if (relatedItemFilter == null)
                        {
                            relatedEntityExists = ((DbContext)_context).Set<U>().Where(w => w.Id.Equals(item.Id)).Any();
                        }
                        else
                        {
                            relatedEntityExists = ((DbContext)_context).Set<U>().Where(relatedItemFilter).Any();
                        }

                        if (relatedEntityExists)
                        {
                            U relatedEntity = default; // ((DbContext)_context).Set<U>().Where(w => w.Id.Equals(item.Id)).First();
                            if (relatedItemFilter == null)
                            {
                                relatedEntity = ((DbContext)_context).Set<U>().Where(w => w.Id.Equals(item.Id)).First();
                            }
                            else
                            {
                                relatedEntity = ((DbContext)_context).Set<U>().Where(relatedItemFilter).First();
                            }

                            ((ICollection<U>)trackedEntity.GetType().GetRuntimeProperty(propertyName).GetValue(trackedEntity)).Add(relatedEntity);

                        }
                        else
                        {
                            ((ICollection<U>)trackedEntity.GetType().GetRuntimeProperty(propertyName).GetValue(trackedEntity)).Add(item);

                        }
                    }


                    var saveResult = await ((DbContext)_context).SaveChangesAsync();
                }
                else
                {
                    throw new Exception($"update failed. entity does not exist");
                }

                // avoid doing the following
                // leaks different data than the user passed
                // var updatedEntity = ((DbContext)_context).Set<T>().Where(w => w.Id.Equals(entityId)).Include(propertyName).First();
                // var updatedCollection = ((ICollection<U>)updatedEntity.GetType().GetRuntimeProperty(propertyName).GetValue(updatedEntity));

                return relatedEntities;
            }
            catch (Exception ex)
            {
                throw new Exception($"entity insert exception {ex.Message}", ex);

            }
        }

        /// <summary>
        /// support db must exist patterns 
        /// as per https://www.ryadel.com/en/entity-framework-core-migrations-error-database-already-exists-fix-migrate-ef-dotnet/
        /// 
        /// note initializing db via entity framework core this way
        /// precludes subsequent use of dbContext.Database.Migrate()
        /// 
        /// cpmplexities as per 
        /// - https://github.com/dotnet/efcore/issues/2167
        /// - https://docs.microsoft.com/en-us/ef/ef6/modeling/code-first/migrations/existing-database?redirectedfrom=MSDN
        /// </summary>
        /// <returns></returns>
        public async Task EnsureDbExists()
        {
            try
            {

                if (!((DbContext)_context).Database.GetService<IRelationalDatabaseCreator>().Exists())
                {
                    _logger.LogInformation($"initializing database");
                    var dbSet = await ((DbContext)_context).Database.EnsureCreatedAsync();
                }
                else
                {
                    _logger.LogInformation($"database exists");
                }

            }
            catch (Exception ex)
            {
                _logger.LogDebug($"content collections reset exception: {ex.Message}");
            }
        }

        public async Task<IQueryable<U>> ReadFilterByMetaData<U>(Expression<Func<U, bool>> query, List<string> includeClauses = null, int pageSize = 10, int pageNumber = 1, int pageCount = 1) where U : class, IContentRowLevelSecured, IQueryableMetaDataModelEntity
        {
            IQueryable<U> result;

            try
            {
                var dbSet = ((DbContext)_context).Set<U>().Where(query)
                                        .OrderBy(o => o.CreatedAt)
                                        .Skip((pageNumber - 1) * pageSize)
                                        .Take(pageSize * pageCount);

                if (includeClauses != null)
                {
                    foreach (var clause in includeClauses)
                    {
                        // avoid due to performance issues
                        //foreach(var item in dbSet)
                        //{
                        //    await ((DbContext)_context).Entry(item)
                        //        .Collection(clause)
                        //        .LoadAsync();
                        //}

                        dbSet.Include(clause);
                    }
                }

                //result = dbSet.OrderBy(o => o.CreatedAt)
                //                        .Skip((pageNumber - 1  ) * pageSize)
                //                        .Take(pageSize * pageCount)
                //                        .AsQueryable<T>();

                result = dbSet.AsQueryable<U>();
            }
            catch (Exception ex)
            {

                _logger.LogError($"problem handling request {ex.Message}");
                throw new Exception($"entity read exception {ex.Message}", ex);

            }

            return await Task.FromResult<IQueryable<U>>(result);
        }
    }
}
