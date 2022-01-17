using Finbuckle.MultiTenant;
using HorselessNewspaper.Web.Core.Interfaces.Content;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.Schemas.HostingModel.Context;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace HorselessNewspaper.Web.Core.Interfaces.Controller
{
    public interface IContentQueryController<Entity> where Entity : class, IContentRowLevelSecured
    {

        [EnableQuery, HttpGet("Query")]
        Task<IActionResult> Query();

    }

    public interface IContentController<Entity> where Entity : class, IContentRowLevelSecured
    {
        IContentCollectionService<IQueryableContentModelOperator<Entity>, Entity> _contentCollectionService { get; set; }
        ITenantInfo _tenantInfo { get; set; }

        [HttpPost("Create")]
        [Consumes("application/json")]

        Task<ActionResult<Entity>> Create([FromBody] Entity contentCollection);

        [HttpGet("GetByObjectId")]

        Task<ActionResult<Entity>> GetByObjectId([FromRoute] string objectId);


        [Consumes("application/json")]
        [HttpPost("Update")]

        Task<ActionResult<Entity>> Update([FromRoute] string contentCollectionId, [FromBody] Entity contentCollection);
    }
}
