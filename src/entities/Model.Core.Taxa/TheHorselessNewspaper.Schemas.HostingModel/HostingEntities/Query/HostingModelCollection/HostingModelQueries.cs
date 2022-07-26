using Microsoft.AspNetCore.OData.Query;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.Extensions.Logging;
using System.Linq.Expressions;
using System.Reflection;
using TheHorselessNewspaper.HostingModel.Context;
using TheHorselessNewspaper.HostingModel.HostingEntities.Query.Extensions;

namespace TheHorselessNewspaper.HostingModel.HostingEntities.Query.HostingModelCollection
{
    internal class HostingModelQueries<T> : IQueryableHostingModelOperator<T> where T : class, IHostingRowLevelSecured
    {
        public Guid DbContextInstanceId { get; set; } = Guid.NewGuid();

        private readonly ILogger<HostingModelQueries<T>> _logger;
        private readonly IHostingModelContext _context;

        public HostingModelQueries(IHostingModelContext ctx, ILogger<HostingModelQueries<T>> logger)
        {
            _context = ctx;
            _logger = logger;

            try
            {
                var providerName = ((DbContext)ctx).Database.ProviderName;
                var dbName = ((DbContext)ctx).Database.GetDbConnection().Database;
                _logger.LogTrace($"hosting collections context using provider named {providerName} on dbcontext instance {((IContentModelContext)ctx).DbContextInstanceId.ToString()}");

            }
            catch (Exception e) { }
        }

        public async Task ResetDb()
        {
            try
            {
                try
                {
                    var dbreset = await ((DbContext)_context).Database.EnsureDeletedAsync();

                }
                catch (Exception ex)
                {
                    _logger.LogError($"content collections reset exception: {ex.Message}");
                }

                var tryResetAgain = await ((DbContext)_context).Database.EnsureCreatedAsync();

                await ((DbContext)_context).SaveChangesAsync();
            }
            catch (Exception e)
            {
                _logger.LogError($"exception resetting db {e.Message}");
            }
        }


        public async Task<T> Create(T entity)
        {
            var resolvedTenant = await _context.ResolveTenant();

            _logger.LogDebug($"handling Create request");
            var dbSet = ((DbContext)_context).Set<T>();

            var addResult = await dbSet.AddAsync(entity);
            var saveResult = await ((DbContext)_context).SaveChangesAsync();

            return await Task.FromResult(entity);
        }

        public async Task<IEnumerable<T>> Create(IEnumerable<T> entities)
        {
            _logger.LogDebug($"handling Create request");
            var resolvedTenant = await ((IContentModelContext)_context).ResolveTenant();

            var dbSet = ((DbContext)_context).Set<T>();

            await dbSet.AddRangeAsync(entities);
            var saveResult = await ((DbContext)_context).SaveChangesAsync();

            return entities;
        }

        public async Task<T> DeleteByEntityId(Guid entityId, bool isSoftDelete = true)
        {
            T? entity;

            var resolvedTenant = await _context.ResolveTenant();

            _logger.LogDebug($"handling Delete request");
            var dbSet = ((DbContext)_context).Set<T>();
            entity = await dbSet.Where(w => w.Id == entityId).FirstOrDefaultAsync();
            var removeState = dbSet.Remove(entity);
            var updateResult = await ((DbContext)_context).SaveChangesAsync();

            return await Task.FromResult(entity);
        }

        public async Task<T> DeleteByObjectId(string objectId, bool isSoftDelete = true)
        {
            T? entity;

            var resolvedTenant = await _context.ResolveTenant();

            _logger.LogDebug($"handling Delete request");
            var dbSet = ((DbContext)_context).Set<T>();
            entity = await dbSet.Where(w => w.ObjectId == objectId).FirstOrDefaultAsync();
            var removeState = dbSet.Remove(entity);
            var updateResult = await ((DbContext)_context).SaveChangesAsync();

            return await Task.FromResult(entity);
        }

        public async Task<IEnumerable<T>> Delete(Expression<Func<T, bool>> query, bool softDelete = true, bool whatIf = true)
        {
            var ret = new List<T>();
            var resolvedTenant = await _context.ResolveTenant();

            if (whatIf == true)
            {
                return await Read(query);
            }
            else if (softDelete == true)
            {
                try
                {
                    ret = await ((DbContext)_context).Set<T>().Where(query).ToListAsync();
                    foreach (var e in ret)
                    {
                        // TODO softdelete has to depend on an interface on T
                    }
                    var updateResult = await ((DbContext)_context).SaveChangesAsync();
                }
                catch (Exception ex)
                {
                    _logger.LogError($"problem handling request {ex.Message}");

                    return await Task.FromException<IEnumerable<T>>(ex);
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

                    return await Task.FromException<IEnumerable<T>>(ex);
                }
            }

            return ret;
        }

        public async Task<IQueryable<T>> Read(int pageSize = 10, int pageNumber = 1, int pageCount = 1)
        {
            var resolvedTenant = await _context.ResolveTenant();

            try
            {
                _logger.LogDebug($"handling get request");
                var dbSet = ((DbContext)_context).Set<T>();

                return await Task.FromResult(dbSet
                                        .OrderBy(o => o.CreatedAt)
                                        .Skip((pageNumber - 1) * pageSize)
                                        .Take(pageSize * pageCount).AsQueryable());
            }
            catch (Exception e)
            {
                _logger.LogError($"exception executing read {e.Message}");
                throw new Exception($"exception executing read {e.Message}", e);
            }
        }


        /// <summary>
        /// 
        /// </summary>
        /// <param name="query"></param>
        /// <param name="includeClauses"></param>
        /// <returns></returns>
        public async Task<IQueryable<T>> Read(Expression<Func<T, bool>> query, List<string> includeClauses = null, int pageSize = 10, int pageNumber = 1, int pageCount = 1)
        {
            var resolvedTenant = await _context.ResolveTenant();

            try
            {
                _logger.LogDebug($"handling Read request");
                var dbSet = ((DbContext)_context).Set<T>().Where(query)
                                        .OrderBy(o => o.CreatedAt)
                                        .Skip((pageNumber - 1) * pageSize)
                                        .Take(pageSize * pageCount);

                if (includeClauses != null)
                {
                    foreach (var clause in includeClauses)
                    {
                        dbSet.Include(clause).Load();
                    }
                }

                return await Task.FromResult(dbSet.AsQueryable());
            }
            catch (Exception e)
            {
                _logger.LogError($"problem executing read {e.Message}");
                throw new Exception($"problem executing read {e.Message}", e);
            }
        }

        public async Task<IEnumerable<T>> ReadAsEnumerable(Expression<Func<T, bool>> query, List<string> includeClauses = null,
                                                            int pageSize = 10, int pageNumber = 1, int pageCount = 1)
        {
            var resolvedTenant = await _context.ResolveTenant();

            try
            {
                IEnumerable<T> result = new List<T>();
                _logger.LogDebug($"handling Read request");
                var dbSet = ((DbContext)_context).Set<T>().Where(query)
                                        .OrderBy(o => o.CreatedAt)
                                        .Skip((pageNumber - 1) * pageSize)
                                        .Take(pageSize * pageCount);

                if (includeClauses != null)
                {
                    foreach (var clause in includeClauses)
                    {
                        dbSet.Include(clause).Load();
                    }
                }

                result = await dbSet.ToListAsync();
                return result;
            }
            catch (Exception e)
            {
                _logger.LogError($"problem executing read {e.Message}");
                throw new Exception($"problem executing read {e.Message}", e);
            }
        }

        /// <summary>
        /// your entity must return its concurrency token
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        public async Task<T> Update(T entity, List<string> targetProperties = null)
        {

            _logger.LogDebug($"handling Update request");

            if (targetProperties == null)
            {
                entity.UpdatedAt = DateTime.UtcNow;
                // reject update attempts witout property lists
                _logger.LogWarning($"update attempt without provided property list");
                return await Task.FromException<T>(new Exception("update attempt without provided property list"));
            }

            var dbSet = ((DbContext)_context).Set<T>();

            // get the existing entity
            var foundEntity = await dbSet.Where(w => w.Id == entity.Id).FirstAsync();

            if (foundEntity == null)
            {
                _logger.LogWarning($"update attempt for nonexistent entity");
                return await Task.FromException<T>(new Exception("attempt to update non-existent entity"));
            }
            else
            {
                // as per https://www.learnentityframeworkcore.com/dbcontext/modifying-data
                entity.UpdatedAt = DateTime.UtcNow;
                var updatedEntity = await foundEntity.UpdateModifiedPropertiesAsync(entity, targetProperties);
                var entityEntry = ((DbContext)_context).Update(updatedEntity);
                // var entityEntry = ((DbContext)_context).Attach(updatedEntity);

                var updateResult = await ((DbContext)_context).SaveChangesAsync();
            _logger.LogTrace($"{this.GetType().Name} has completed update");

            }

            return await Task.FromResult(entity);

        }

        public async Task<IEnumerable<T>> Update(IEnumerable<T> entities, List<string> targetProperties = null)
        {
            var ret = new List<T>();

            _logger.LogDebug($"handling Update request");
            var resolvedTenant = await _context.ResolveTenant();

            foreach (var entity in entities)
            {
                var updateResult = await Update(entity, targetProperties);
                ret.Add(updateResult);
            }

            //var dbSet = ((DbContext)_context).Set<T>();

            //dbSet.UpdateRange(entities);
            //var saveResult = await ((DbContext)_context).SaveChangesAsync();

            return ret;
        }

        public async Task<IEnumerable<U>> InsertRelatedEntity<U>(Guid entityId, string propertyName, IEnumerable<U> relatedEntities, Expression<Func<T, bool>> parentItemFilter = null, Expression<Func<U, bool>> relatedItemFilter = null) where U : class, IHostingRowLevelSecured
        {

            try
            {
                var resolvedTenant = await _context.ResolveTenant();

                // will throw exception if not exists
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


        /// <summary>
        /// support odata query specification execution
        /// </summary>
        /// <param name="query"></param>
        /// <returns></returns>
        public async Task<IQueryable<X>> Read<O, X>(O queryOptions) where O : ODataQueryOptions<X> where X : class, IHostingRowLevelSecured
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
    }
}
