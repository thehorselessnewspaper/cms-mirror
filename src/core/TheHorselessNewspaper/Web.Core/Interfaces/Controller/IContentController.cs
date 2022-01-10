using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace HorselessNewspaper.Web.Core.Interfaces.Controller
{
    public interface IContentController<Entity>
    {
        [HttpPost("Create")]
        Task<ActionResult<Entity>> Create([FromBody] Entity contentCollection);
        [EnableQuery, HttpGet("GetByObjectId")]
        Task<ActionResult<Entity>> GetByObjectId(string objectId);
        [EnableQuery, HttpGet("Query")]
        Task<ActionResult<IQueryable<Entity>>> Query();
        [HttpPost("Update")]
        Task<ActionResult<Entity>> Update([FromBody] Entity contentCollection);
    }
}
