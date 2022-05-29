using Finbuckle.MultiTenant;
using HorselessNewspaper.Web.Core.Services.Query.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.Schemas.HostingModel.Context;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace HorselessNewspaper.Web.Core.Interfaces.Controller
{
    /// <summary>
    /// specify an ODATA controller friendly query interface
    /// </summary>
    /// <typeparam name="Entity"></typeparam>
    public interface IContentQueryController<Entity> where Entity : class, IContentRowLevelSecured
    {

        [EnableQuery, HttpGet()]
        Task<ActionResult<IEnumerable<Entity>>> Get();

    }

    /// <summary>
    /// specify a REST controller CRUD operation friendly interface
    /// </summary>
    /// <typeparam name="Entity"></typeparam>
    public interface IRESTContentController<Entity> where Entity : class, IContentRowLevelSecured
    {
        IContentCollectionService<IQueryableContentModelOperator<Entity>, Entity> _contentCollectionService { get; set; }
        ITenantInfo CurrentTenant { get; set; }

        [HttpPost("Create")]
        [Consumes("application/json")]

        Task<ActionResult<Entity>> Create([FromBody] Entity contentCollection);

        [HttpGet("GetByObjectId")]

        Task<ActionResult<Entity>> GetByObjectId([FromRoute] string objectId);


        [Consumes("application/json")]
        [HttpPost("Update/{contentCollectionId}")]

        Task<ActionResult<Entity>> Update([FromRoute] string contentCollectionId, [FromBody] Entity contentCollection);

        Task<ActionResult<IEnumerable<Entity>>> GetByPageNumber(int pageSize = 10, int pageNumber = 1, int pageCount = 1);
    }
}
