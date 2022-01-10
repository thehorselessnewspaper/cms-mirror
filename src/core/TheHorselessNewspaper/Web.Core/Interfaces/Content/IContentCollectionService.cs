﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.HostingModel.Context;
using TheHorselessNewspaper.Schemas.HostingModel.Context;

namespace HorselessNewspaper.Web.Core.Interfaces.Content
{
    /// <summary>
    /// web wrapper for entity framework query services
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <typeparam name="Entity"></typeparam>
    public interface IContentCollectionService<T, Entity>
        where T : class, IQueryableContentModelOperator<Entity>, IQueryableModelOperator<Entity>
        where Entity : class, IContentRowLevelSecured
    {

        public Task<ActionResult<Entity>> Create([FromBody] Entity entity);

        public Task<ActionResult<Entity>> GetByObjectId(string objectId);

        public Task<ActionResult<IQueryable<Entity>>> Query();

        public Task<ActionResult<Entity>> Update([FromBody] Entity contentCollection);
    }
}