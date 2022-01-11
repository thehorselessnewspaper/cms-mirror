using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.HostingModel.Context;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;
using TheHorselessNewspaper.Schemas.HostingModel.Context;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.OData
{
    /// <summary>
    /// generalize operations used in odata content controllers
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <typeparam name="Entity"></typeparam>
    internal interface IContentCollectionController<T, Entity>
        where T : class, IQueryableContentModelOperator<Entity>, IQueryableModelOperator<Entity>
        where Entity : class, IContentRowLevelSecured
    {
        //[HttpPost("Create")]
        Task<IActionResult> Create([FromBody] Entity entity);
        [EnableQuery, HttpGet("GetByObjectId")]
        Task<IActionResult> GetByObjectId(string objectId);
        [EnableQuery, HttpGet("Query")]
        Task<IActionResult> Query();
        //[HttpPost("Update")]
        Task<IActionResult> Update([FromBody] Entity contentCollection);
    }
}
