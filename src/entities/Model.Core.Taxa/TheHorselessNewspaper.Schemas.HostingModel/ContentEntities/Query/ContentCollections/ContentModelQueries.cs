using Finbuckle.MultiTenant;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.Extensions.Logging;
using System.Collections;
using System.Linq.Expressions;
using System.Reflection;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query.Extensions;
using TheHorselessNewspaper.HostingModel.MultiTenant;
using TheHorselessNewspaper.Schemas.HostingModel.Context;

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
                _logger.LogInformation($"content collections context using provider named {providerName}");
            }
            catch (Exception e)
            {
                string message = $"problem initializing ContentModelQueries {e.Message}";
                _logger.LogError(message);
                throw new Exception(message, e);
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
                var dbreset = await ((DbContext)_context).Database.EnsureDeletedAsync();
                var dbSet = await ((DbContext)_context).Database.EnsureCreatedAsync();
            }
            catch (Exception ex)
            {
                _logger.LogDebug($"content collections reset exception: {ex.Message}");
            }
        }

        public async Task<T> Create(T entity)
        {
            // _logger.LogInformation($"handling Create request for tenant context {_tenantInfo.Identifier}");



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

        public async Task<T> Delete(string entityId)
        {
            T? entity;

   

            try
            {
                var dbSet = ((DbContext)_context).Set<T>();
                entity = dbSet.Where(w => w.ObjectId == entityId).FirstOrDefault<T>();
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
        public async Task<IEnumerable<T>> Delete(Expression<Func<T, bool>> query, bool softDelete = true, bool whatIf = true)
        {
            var ret = new List<T>();

 


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
                        // TODO softdelete has to depend on an interface on T
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


        public async Task<IQueryable<T>> Read()
        {
            IQueryable<T> result;

            try
            {
                await EnsureDbExists();
            }
            catch (Exception e) { }

            try
            {
                var dbSet = ((DbContext)_context).Set<T>();
                result = dbSet.AsQueryable<T>();

            }
            catch (Exception ex)
            {

                _logger.LogError($"problem handling request {ex.Message}");
                throw new Exception($"entity read exception {ex.Message}", ex);

            }

            return await Task.FromResult<IQueryable<T>>(result);
        }

        public async Task<IQueryable<T>> Read(Expression<Func<T, bool>> query, List<string> includeClauses = null)
        {
            IQueryable<T> result;

            try
            {
                var dbSet = ((DbContext)_context).Set<T>().Where(query);
                if (includeClauses != null)
                {
                    foreach (var clause in includeClauses)
                    {
                        dbSet.Include(clause);
                    }
                }

                result = dbSet.AsQueryable<T>();

            }
            catch (Exception ex)
            {

                _logger.LogError($"problem handling request {ex.Message}");
                throw new Exception($"entity read exception {ex.Message}", ex);

            }

            return await Task.FromResult<IQueryable<T>>(result);
        }

        public async Task<IEnumerable<T>> ReadAsEnumerable(Expression<Func<T, bool>> query, List<string> includeClauses = null)
        {
            IEnumerable<T> result = new List<T>();
   
            try
            {
                var dbSet = ((DbContext)_context).Set<T>().Where(query);
                if (includeClauses != null)
                {
                    foreach (var clause in includeClauses)
                    {
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
                    ((DbContext)_context).Attach(updatedEntity);

                    foreach (var propertyName in targetProperties)
                    {
                        var hasTargetedMember = ((DbContext)_context).Entry(updatedEntity).Members.Where(w => w.Metadata.Name.Equals(propertyName)).Any();
                        if (hasTargetedMember)
                        {
                            var hasTargetedCollection = ((DbContext)_context).Entry(updatedEntity).Collections.Where(w => w.Metadata.Name.Equals(propertyName)).Any();
                            var hasTargetedProperty = ((DbContext)_context).Entry(updatedEntity).Properties.Where(w => w.Metadata.Name.Equals(propertyName)).Any();

                            if (hasTargetedProperty)
                            {
                                var foundEntityValue = foundEntity.GetType().GetProperty(propertyName).GetValue(foundEntity);
                                var sourceProperty = entity.GetType().GetProperty(propertyName).GetValue(entity);
                                var target = foundEntity.GetType().GetProperty(propertyName);
                                target.SetValue(foundEntity, foundEntityValue);
                            }

                             ((DbContext)_context).Entry(updatedEntity).Members.Where(w => w.Metadata.Name.Equals(propertyName)).First().IsModified = true; ;
                        }
                        else
                        {
                            // todo validate fail silent
                        }

                    }
                    var updateResult = await ((DbContext)_context).SaveChangesAsync();


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

            try
            {
                await EnsureDbExists();
            }
            catch (Exception e) { }

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

        public async Task<IEnumerable<U>> InsertRelatedEntity<U>(Guid entityId, string propertyName, IEnumerable<U> relatedEntities) where U : class
        {



            try
            {
                var hasEntity = ((DbContext)_context).Set<T>().Where(w => w.Id.Equals(entityId)).First();

                T trackedEntity = default(T);

                if (hasEntity != null)
                {

                    trackedEntity = ((DbContext)_context).Set<T>().Where(w => w.Id.Equals(entityId)).Include(propertyName).First();
                    foreach (var item in relatedEntities)
                    {
                        ((DbContext)_context).Entry<U>(item);
                        ((ICollection<U>)trackedEntity.GetType().GetRuntimeProperty(propertyName).GetValue(trackedEntity)).Add(item);
                    }

                    var saveResult = await ((DbContext)_context).SaveChangesAsync();
                    _logger.LogInformation($"inserted related entity");
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
    }
}
