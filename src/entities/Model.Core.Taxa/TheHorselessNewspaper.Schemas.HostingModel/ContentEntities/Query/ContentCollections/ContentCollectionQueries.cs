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
    public class ContentCollectionQueries : IQueryableContentModelOperator<ContentCollection>
    {
        private readonly ILogger<ContentCollectionQueries> _logger;
        private readonly IContentModelContext _context;
        internal ContentCollectionQueries(IContentModelContext ctx, ILogger<ContentCollectionQueries> logger)
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

        public async Task<IQueryable<ContentCollection>> Get()
        {
            _logger.LogDebug($"handling get request");
            return await Task.FromResult<IQueryable<ContentCollection>>(_context.ContentCollections.AsQueryable<ContentCollection>());
        }
    }
}
