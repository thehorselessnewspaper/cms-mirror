using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;

namespace HorselessNewspaper.Web.Core.Interfaces.Controller
{
    public interface IContentController<Entity>
    {
        [HttpPost("Create")]
        Task<IActionResult> Create([FromBody] Entity contentCollection);
        [EnableQuery, HttpGet("GetByObjectId")]
        Task<IActionResult> GetByObjectId(string objectId);
        [EnableQuery, HttpGet("Query")]
        Task<IActionResult> Query();
        [HttpPost("Update")]
        Task<IActionResult> Update([FromBody] Entity contentCollection);
    }
}
