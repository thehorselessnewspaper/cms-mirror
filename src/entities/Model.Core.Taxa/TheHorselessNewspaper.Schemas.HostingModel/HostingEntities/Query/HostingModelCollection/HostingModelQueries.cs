using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.Extensions.Logging;
using System.Linq.Expressions;
using System.Reflection;
using TheHorselessNewspaper.HostingModel.Context;
using TheHorselessNewspaper.HostingModel.HostingEntities.Query.Extensions;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

namespace TheHorselessNewspaper.HostingModel.Entities.Query.HostingModelCollection
{
    internal class HostingModelQueries<T> : IQueryableHostingModelOperator<T> where T : class, IHostingRowLevelSecured
    {

        private readonly ILogger<HostingModelQueries<T>> _logger;
        private readonly IHostingModelContext _context;

        public HostingModelQueries(IHostingModelContext ctx, ILogger<HostingModelQueries<T>> logger)
        {
            this._context = ctx;
            this._logger = logger;

            try
            {
                var providerName = ((DbContext)ctx).Database.ProviderName;
                _logger.LogDebug($"hosting collections context using provider named {providerName}");
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
            }
            catch (Exception e)
            {
                _logger.LogError($"exception resetting db {e.Message}");
            }
        }


        public async Task<T> Create(T entity)
        {
            try
            {
                await EnsureDbExists();
            }
            catch (Exception e) { }


            _logger.LogDebug($"handling Create request");
            var dbSet = ((DbContext)_context).Set<T>();

            var addResult = await dbSet.AddAsync(entity);
            var saveResult = await ((DbContext)_context).SaveChangesAsync();

            return await Task.FromResult<T>(entity);
        }

        public async Task<IEnumerable<T>> Create(IEnumerable<T> entities)
        {
            _logger.LogDebug($"handling Create request");
            try
            {
                await EnsureDbExists();
            }
            catch (Exception e) { }


            var dbSet = ((DbContext)_context).Set<T>();

            await dbSet.AddRangeAsync(entities);
            var saveResult = await ((DbContext)_context).SaveChangesAsync();

            return entities;
        }

        public async Task<T> Delete(string entityId)
        {
            T? entity;

            try
            {
                await EnsureDbExists();
            }
            catch (Exception e) { }

            _logger.LogDebug($"handling Delete request");
            var dbSet = ((DbContext)_context).Set<T>();
            entity = await dbSet.Where(w => w.ObjectId == entityId).FirstOrDefaultAsync<T>();
            var removeState = dbSet.Remove(entity);
            var updateResult = await ((DbContext)_context).SaveChangesAsync();

            return await Task.FromResult<T>(entity);
        }

        public async Task<IEnumerable<T>> Delete(Expression<Func<T, bool>> query, bool softDelete = true, bool whatIf = true)
        {
            var ret = new List<T>();
            try
            {
                await EnsureDbExists();
            }
            catch (Exception e) { }

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

        public async Task<IQueryable<T>> Read()
        {
            try
            {
                await EnsureDbExists();
            }
            catch (Exception e) { }

            try
            {
                _logger.LogDebug($"handling get request");
                var dbSet = ((DbContext)_context).Set<T>();

                return await Task.FromResult<IQueryable<T>>(dbSet.AsQueryable<T>());
            }
            catch(Exception e)
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
        public async Task<IQueryable<T>> Read(Expression<Func<T, bool>> query, List<string> includeClauses = null)
        {
            try
            {
                await EnsureDbExists();
            }
            catch (Exception e) { }

            try
            {
                _logger.LogDebug($"handling Read request");
                var dbSet = ((DbContext)_context).Set<T>().Where(query);

                if (includeClauses != null)
                {
                    foreach (var clause in includeClauses)
                    {
                        dbSet.Include(clause).Load();
                    }
                }

                return await Task.FromResult<IQueryable<T>>(dbSet.AsQueryable<T>());
            }
            catch (Exception e)
            {
                _logger.LogError($"problem executing read {e.Message}");
                throw new Exception($"problem executing read {e.Message}", e);
            }
        }

        public async Task<IEnumerable<T>> ReadAsEnumerable(Expression<Func<T, bool>> query, List<string> includeClauses = null)
        {
            try
            {
                await EnsureDbExists();
            }
            catch (Exception e) { }

            try
            {
                IEnumerable<T> result = new List<T>();
                _logger.LogDebug($"handling Read request");
                var dbSet = ((DbContext)_context).Set<T>().Where(query);

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
        public async Task<T> Update(T entity, List<String> targetProperties = null)
        {
            try
            {
                await EnsureDbExists();
            }
            catch (Exception e) { }

            _logger.LogDebug($"handling Update request");

            if (targetProperties == null)
            {
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
                var updatedEntity = await foundEntity.UpdateModifiedPropertiesAsync(entity, targetProperties);
                ((DbContext)_context).Attach(updatedEntity);

                foreach (var propertyName in targetProperties)
                {
                    var hasTargetedMember = ((DbContext)_context).Entry(updatedEntity).Members.Where(w => w.Metadata.Name.Equals(propertyName)).Any();
                    var hasTargetedProperty = ((DbContext)_context).Entry(updatedEntity).Properties.Where(w => w.Metadata.Name.Equals(propertyName)).Any();

                    if (hasTargetedProperty)
                    {
                        var foundEntityValue = foundEntity.GetType().GetProperty(propertyName).GetValue(foundEntity);
                        var sourceProperty = entity.GetType().GetProperty(propertyName).GetValue(entity);
                        var target = foundEntity.GetType().GetProperty(propertyName);
                        target.SetValue(foundEntity, foundEntityValue);
                        ((DbContext)_context).Entry(updatedEntity).Members.Where(w => w.Metadata.Name.Equals(propertyName)).First().IsModified = true; ;
                    }
                    else
                    {
                        // todo validate fail silent
                    }

                }

                var updateResult = await ((DbContext)_context).SaveChangesAsync();


            }

            return await Task.FromResult<T>(entity);
        }

        public async Task<IEnumerable<T>> Update(IEnumerable<T> entities, List<String> targetProperties = null)
        {
            var ret = new List<T>();

            _logger.LogDebug($"handling Update request");
            try
            {
                await EnsureDbExists();
            }
            catch (Exception e) { }

            foreach(var entity in entities)
            {
                var updateResult = await this.Update(entity, targetProperties);
                ret.Add(updateResult);
            }

            //var dbSet = ((DbContext)_context).Set<T>();

            //dbSet.UpdateRange(entities);
            //var saveResult = await ((DbContext)_context).SaveChangesAsync();

            return ret;
        }

        public async Task<IEnumerable<U>> InsertRelatedEntity<U>(Guid entityId, string propertyName, IEnumerable<U> relatedEntities) where U : class
        {
            try
            {
                await EnsureDbExists();
            }
            catch (Exception e) { }

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
    }
}
