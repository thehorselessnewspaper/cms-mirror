using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.HostingModel.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Claims;

namespace HorselessNewspaper.Web.Core.Services.Query.Entities
{
    public class ContentCollectionQuery
    {
        private IContentModelContext dbContext;
        private IAuthorizationService authorizationService;
        public ContentCollectionQuery(IContentModelContext dbContext, IAuthorizationService authorizationService)
        {
            this.dbContext = dbContext;
            this.authorizationService = authorizationService;
        }

        public async Task<IEnumerable<ContentCollectionQuery>> Get(IClaimsPrincipal principal)
        {
            //var results = await dbContext.ContentCollections
            //    .Where(async w => w.AccessControlList
            //                .Where(ww => ww.IsActive && ww.IsPermitted<IClaimsPrincipal>(principal,
            //                    authorizationService,(authorizationService, principal) =>
            //                    {
            //                        return await Task.FromResult(true);
            //                    }))
            //    .ToListAsync();
            return await Task.FromResult(new List<ContentCollectionQuery>());
        }
    }
}
