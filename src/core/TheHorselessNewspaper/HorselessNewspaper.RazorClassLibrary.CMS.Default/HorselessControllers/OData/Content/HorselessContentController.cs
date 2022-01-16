﻿using Finbuckle.MultiTenant;
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
    [Route("HorselessContent/HorselessContent")]
    public class HorselessContentController :
        ODataController, IContentController<ContentModel.HorselessContent>

    {

        private readonly IContentCollectionService<IQueryableContentModelOperator<ContentModel.HorselessContent>, ContentModel.HorselessContent> _contentCollectionService;
        private readonly ITenantInfo _tenantInfo;


        public HorselessContentController(IContentCollectionService<IQueryableContentModelOperator<ContentModel.HorselessContent>, ContentModel.HorselessContent> contentCollectionService, Finbuckle.MultiTenant.ITenantInfo tenantInfo)
        {
            this._contentCollectionService = contentCollectionService;
            this._tenantInfo = tenantInfo;
        }

        [Microsoft.AspNetCore.OData.Query.EnableQuery]
        [HttpGet("Query")]
        // breaks openapi [HttpGet("HorselessContent/ContentCollection/$count")]
        public async Task<IActionResult> Query()
        {
            var result = await _contentCollectionService.Query();
            return Ok(result);
        }

        [Microsoft.AspNetCore.OData.Query.EnableQuery]
        [HttpGet("GetByObjectId")]
        public async Task<IActionResult> GetByObjectId([FromODataUri] string objectId)
        {

            IActionResult result;
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            try
            {
                var testFind = await _contentCollectionService.GetByObjectId(objectId);

                if (testFind == null)
                {
                    return NotFound();
                }
                else if (testFind == null)
                {
                    return NotFound();
                }
                else
                {
                    result = Ok(testFind);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

            return Ok(result);
        }

        [HttpPost("Create")]
        [Consumes("application/json")]
        public async Task<IActionResult> Create([FromBody] ContentModel.HorselessContent contentCollection)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            try
            {
                var createResult = await _contentCollectionService.Create(contentCollection);
                return Ok(createResult);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [HttpPost("Update")]
        [Consumes("application/json")]
        public async Task<IActionResult> Update([FromRoute] string horselessContentId, [FromBody] ContentModel.HorselessContent contentCollection)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            try
            {
                var updateResult = await _contentCollectionService.Update(contentCollection);
                return Ok(updateResult);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
    }
}