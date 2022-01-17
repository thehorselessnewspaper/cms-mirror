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
        //[HttpPost("Create")]
        Task<ActionResult<Entity>> Create([FromBody] Entity contentCollection);
        [EnableQuery, HttpGet("GetByObjectId")]
        Task<ActionResult<Entity>> GetByObjectId([FromRoute] string objectId);
        //[HttpPost("Update")]
        Task<ActionResult<Entity>> Update([FromRoute] string contentCollectionId, [FromBody] Entity contentCollection);
    }
}
