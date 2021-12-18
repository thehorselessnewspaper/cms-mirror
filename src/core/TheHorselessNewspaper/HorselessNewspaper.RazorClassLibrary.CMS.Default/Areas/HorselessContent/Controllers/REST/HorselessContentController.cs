using HorselessNewspaper.Core.Interfaces.Query;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net.Mime;
using TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.Areas.HorselessContent.Controllers.REST
{
    [ApiController]
    [Route("/content/[controller]")]
    [Produces(MediaTypeNames.Application.Json)]
    public class HorselessContentController : ControllerBase
    {
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<IHorselessQueryResult<List<ContentCollection>>>> GetTenantCollections()
        {


            return await Task.FromResult(new JsonResult(new List<ContentCollection>()));
        }
    }
}
