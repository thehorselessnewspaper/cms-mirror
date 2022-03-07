using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System.Linq.Expressions;
using TheHorselessNewspaper.HostingModel.Context;
using TheHorselessNewspaper.HostingModel.HostingEntities.Query.Extensions;
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
            _logger.LogDebug($"handling Create request");
            var dbSet = ((DbContext)_context).Set<T>();

            var addResult = await dbSet.AddAsync(entity);
            var saveResult = await ((DbContext)_context).SaveChangesAsync();

            return await Task.FromResult<T>(entity);
        }

        public async Task<IEnumerable<T>> Create(IEnumerable<T> entities)
        {
            _logger.LogDebug($"handling Create request");
            var dbSet = ((DbContext)_context).Set<T>();

            await dbSet.AddRangeAsync(entities);
            var saveResult = await ((DbContext)_context).SaveChangesAsync();

            return entities;
        }

        public async Task<T> Delete(string entityId)
        {
            T? entity;
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
            _logger.LogDebug($"handling get request");
            var dbSet = ((DbContext)_context).Set<T>();

            return await Task.FromResult<IQueryable<T>>(dbSet.AsQueryable<T>());
        }

        public async Task<IQueryable<T>> Read(Expression<Func<T, bool>> query)
        {
            _logger.LogDebug($"handling Read request");
            var dbSet = ((DbContext)_context).Set<T>().Where(query);

            return await Task.FromResult<IQueryable<T>>(dbSet.AsQueryable<T>());
        }

        /// <summary>
        /// your entity must return its concurrency token
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        public async Task<T> Update(T entity, List<String> targetProperties = null)
        {
            _logger.LogDebug($"handling Update request");

            if(targetProperties == null)
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
                var updatedEntity = await foundEntity.UpdateModifiedPropertiesAsync(entity, targetProperties);
                dbSet.Update(updatedEntity);
                var updateResult = await ((DbContext)_context).SaveChangesAsync();

            }

            return await Task.FromResult<T>(entity);
        }

        public async Task<IEnumerable<T>> Update(IEnumerable<T> entities)
        {
            _logger.LogDebug($"handling Update request");
            var dbSet = ((DbContext)_context).Set<T>();

            dbSet.UpdateRange(entities);
            var saveResult = await ((DbContext)_context).SaveChangesAsync();

            return entities;
        }
    }
}
