using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using TheHorselessNewspaper.Schemas.HostingModel.Context;

namespace TheHorselessNewspaper.HostingModel.ContentEntities.Query.ContentCollections
{
    /// <summary>
    /// could it be that all content collection entities of interest
    /// are reachable by a generic specification of T
    /// that won't blow the whole leg away?
    /// </summary>
    /// <typeparam name="T"></typeparam>
    internal class ContentModelQueries<T> : IQueryableContentModelOperator<T> where T : class, IRowLevelSecured
    {
        private readonly ILogger<ContentModelQueries<T>> _logger;
        private readonly IContentModelContext _context;
        public  ContentModelQueries(IContentModelContext ctx, ILogger<ContentModelQueries<T>> logger)
        {
            this._context = ctx;    
            this._logger = logger;

            try
            {
                var providerName = ((DbContext)ctx).Database.ProviderName;
                _logger.LogDebug($"content collections context using provider named {providerName}");
            }
            catch (Exception e) { }
        }

        public async Task<T> Create(T entity)
        {
            _logger.LogDebug($"handling Update request");
            var dbSet = ((DbContext)_context).Set<T>();

            var addResult = await dbSet.AddAsync(entity);
            var saveResult = await((DbContext)_context).SaveChangesAsync();

            return await Task.FromResult<T>(entity);
        }

        public async Task<IEnumerable<T>> Create(IEnumerable<T> entities)
        {
            _logger.LogDebug($"handling Update request");
            var dbSet = ((DbContext)_context).Set<T>();

            await dbSet.AddRangeAsync(entities);
            var saveResult = await((DbContext)_context).SaveChangesAsync();

            return entities;
        }

        public async Task<T> Delete(T entity)
        {
            _logger.LogDebug($"handling Update request");
            var dbSet = ((DbContext)_context).Set<T>();

            var removeState = dbSet.Remove(entity);
            var updateResult = await((DbContext)_context).SaveChangesAsync();

            return await Task.FromResult<T>(entity);
        }

        public async Task<IQueryable<T>> Read()
        {
            _logger.LogDebug($"handling get request");
            var dbSet = ((DbContext)_context).Set<T>();

            return await Task.FromResult<IQueryable<T>>(dbSet.AsQueryable<T>());
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
            var saveResult = await((DbContext)_context).SaveChangesAsync();

            return entities;
        }

    }
}
