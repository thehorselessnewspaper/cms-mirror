using Finbuckle.MultiTenant;
using HorselessNewspaper.Web.Core.Services.Query.Entities;
using HorselessNewspaper.Web.Core.Interfaces.Hosting;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using TheHorselessNewspaper.HostingModel.Context;
using TheHorselessNewspaper.HostingModel.Entities.Query;

namespace HorselessNewspaper.Web.Core.Interfaces.Controller
{
    public partial interface IObsoleteRESTHostingController<Entity> where Entity : class, IHostingRowLevelSecured
    {

        IHostingCollectionService<IQueryableHostingModelOperator<Entity>, Entity> EntityCollectionService { get; set; }

        ITenantInfo CurrentTenant { get; set; }

        [HttpPost("Create")]
        [Consumes("application/json")]

        Task<ActionResult<Entity>> Create([FromBody] Entity entityCollectionId);

        [HttpGet("GetByObjectId/{objectId}")]

        Task<ActionResult<Entity>> GetByObjectId([FromRoute] string objectId);


        [Consumes("application/json")]
        [HttpPost("Update/{entityCollectionId}")]

        Task<ActionResult<Entity>> Update([FromRoute] string entityCollectionId, [FromBody] Entity entityCollection);

        Task<ActionResult<IEnumerable<Entity>>> GetByPageNumber(int pageSize = 10, int pageNumber = 1, int pageCount = 1);
    }
}
