using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System.Linq.Expressions;
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
        public ContentModelQueries(IContentModelContext ctx, ILogger<ContentModelQueries<T>> logger)
        {
            this._context = ctx;
            this._logger = logger;

            try
            {
                var providerName = ((DbContext)ctx).Database.ProviderName;
                _logger.LogDebug($"content collections context using provider named {providerName}");
            }
            catch (Exception e)
            {
                string message = $"problem initializing ContentModelQueries {e.Message}";
                _logger.LogError(message);
                throw new Exception(message, e);
            }
        }

        public async Task ResetDb()
        {
            var dbreset = await ((DbContext)_context).Database.EnsureDeletedAsync();
            var dbSet = await ((DbContext)_context).Database.EnsureCreatedAsync();
        }

        public async Task<T> Create(T entity)
        {
            _logger.LogDebug($"handling Create request");


            try
            {
                var dbSet = ((DbContext)_context).Set<T>();
                var addResult = await dbSet.AddAsync(entity);
                var saveResult = await ((DbContext)_context).SaveChangesAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError($"problem handling request {ex.Message}");

                return await Task.FromException<T>(ex);
            }

            return await Task.FromResult<T>(entity);
        }

        public async Task<IEnumerable<T>> Create(IEnumerable<T> entities)
        {
            _logger.LogDebug($"handling Create request");
            try
            {
                var dbSet = ((DbContext)_context).Set<T>();

                await dbSet.AddRangeAsync(entities);
                var saveResult = await ((DbContext)_context).SaveChangesAsync();

            }
            catch (Exception ex)
            {
                _logger.LogError($"problem handling request {ex.Message}");

                return await Task.FromException<IEnumerable<T>>(ex);
            }

            return entities;
        }

        public async Task<T> Delete(T entity)
        {
            _logger.LogDebug($"handling Delete request");
            try
            {
                var dbSet = ((DbContext)_context).Set<T>();

                var removeState = dbSet.Remove(entity);
                var updateResult = await ((DbContext)_context).SaveChangesAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError($"problem handling request {ex.Message}");

                return await Task.FromException<T>(ex);
            }

            return await Task.FromResult<T>(entity);
        }

        public async Task<IEnumerable<T>> Delete(Expression<Func<T, bool>> query, bool softDelete = true, bool whatIf = true)
        {
            var ret = new List<T>();

            if(whatIf == true)
            {
                return await this.Read(query);
            }
            else if(softDelete == true)
            {
                try
                {
                    ret = await ((DbContext)_context).Set<T>().Where(query).ToListAsync();
                    foreach(var e in ret)
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
            else if(softDelete == false)
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
            IQueryable<T> result;
            try
            {
                var dbSet = ((DbContext)_context).Set<T>();
                result = dbSet.AsQueryable<T>();

            }
            catch (Exception ex)
            {

                _logger.LogError($"problem handling request {ex.Message}");

                return await Task.FromException<IQueryable<T>>(ex);
            }

            return await Task.FromResult<IQueryable<T>>(result);
        }

        public async Task<IEnumerable<T>> Read(Expression<Func<T, bool>> query)
        {
            _logger.LogDebug($"handling get request");
            IQueryable<T> result;
            try
            {
                var dbSet = ((DbContext)_context).Set<T>().Where(query);
                result = dbSet.AsQueryable<T>();

            }
            catch (Exception ex)
            {

                _logger.LogError($"problem handling request {ex.Message}");

                return await Task.FromException<IQueryable<T>>(ex);
            }

            return await Task.FromResult<IQueryable<T>>(result);
        }

        public async Task<T> Update(T entity)
        {
            _logger.LogDebug($"handling Update request");
            try
            {
                var dbSet = ((DbContext)_context).Set<T>();

                dbSet.Update(entity);
                var updateResult = await ((DbContext)_context).SaveChangesAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError($"problem handling request {ex.Message}");

                return await Task.FromException<T>(ex);
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
