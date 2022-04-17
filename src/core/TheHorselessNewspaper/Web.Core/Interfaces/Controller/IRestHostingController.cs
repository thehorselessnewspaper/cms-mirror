using Finbuckle.MultiTenant;
using HorselessNewspaper.Web.Core.Interfaces.Content;
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
    public partial interface IRESTHostingController<Entity> where Entity : class, IHostingRowLevelSecured
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
    }
}
