using Finbuckle.MultiTenant;
using HorselessNewspaper.Web.Core.Interfaces.Content;
using HorselessNewspaper.Web.Core.Interfaces.Controller;
using Microsoft.AspNetCore.OData.Routing;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Formatter;
using Microsoft.AspNetCore.OData.Routing.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheHorselessNewspaper.HostingModel.ContentEntities.Query;
using ContentModel = TheHorselessNewspaper.Schemas.ContentModel.ContentEntities;

namespace HorselessNewspaper.RazorClassLibrary.CMS.Default.HorselessControllers.OData.Content
{
    //[Route("HorselessContent/MIMEType")]
    [Produces("application/json")]
    public class MimeTypeController :
        ODataController, IContentQueryController<ContentModel.MIMEType>
    {
        private readonly IContentCollectionService<IQueryableContentModelOperator<ContentModel.MIMEType>, ContentModel.MIMEType> _contentCollectionService;
        private readonly ITenantInfo _tenantInfo;


        public MimeTypeController(IContentCollectionService<IQueryableContentModelOperator<ContentModel.MIMEType>, ContentModel.MIMEType> contentCollectionService, Finbuckle.MultiTenant.ITenantInfo tenantInfo)
        {
            this._contentCollectionService = contentCollectionService;
            this._tenantInfo = tenantInfo;
        }


        [Microsoft.AspNetCore.OData.Query.EnableQuery]
        [HttpGet("Query")]
        public async Task<ActionResult<IEnumerable<ContentModel.MIMEType>>> Query()
        {
            var result = await _contentCollectionService.Query();
            return Ok(result);
        }

    }
}
