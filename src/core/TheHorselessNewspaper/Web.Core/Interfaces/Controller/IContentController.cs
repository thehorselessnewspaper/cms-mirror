using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;

namespace HorselessNewspaper.Web.Core.Interfaces.Controller
{
    public interface IContentQueryController<Entity>
    {

        [EnableQuery, HttpGet("Query")]
        Task<IActionResult> Query();

    }

    public interface IContentController<Entity>
    {
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
