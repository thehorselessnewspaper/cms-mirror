using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query.ContentCollections;
using TheHorselessNewspaper.HostingModel.Context;
using TheHorselessNewspaper.Schemas.HostingModel.Context;

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

        public async Task<T> Delete(T entity)
        {
            _logger.LogDebug($"handling Delete request");
            var dbSet = ((DbContext)_context).Set<T>();

            var removeState = dbSet.Remove(entity);
            var updateResult = await ((DbContext)_context).SaveChangesAsync();

            return await Task.FromResult<T>(entity);
        }

        public async Task<IQueryable<T>> Read()
        {
            _logger.LogDebug($"handling get request");
            var dbSet = ((DbContext)_context).Set<T>();

            return await Task.FromResult<IQueryable<T>>(dbSet.AsQueryable<T>());
        }

        public Task<IEnumerable<T>> Read(Expression<Func<T, bool>> query)
        {
            throw new NotImplementedException();
        }

        public async Task<T> Update(T entity)
        {
            _logger.LogDebug($"handling Update request");
            var dbSet = ((DbContext)_context).Set<T>();

            dbSet.Update(entity);
            var updateResult = await ((DbContext)_context).SaveChangesAsync();

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
